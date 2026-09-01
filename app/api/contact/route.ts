import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5; // 5 requests per minute per IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const requests = rateLimit.get(ip) || [];

  // Filter out old requests
  const recentRequests = requests.filter((time: number) => now - time < RATE_LIMIT_WINDOW);

  if (recentRequests.length >= RATE_LIMIT_MAX) {
    return false;
  }

  recentRequests.push(now);
  rateLimit.set(ip, recentRequests);
  return true;
}

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { fullName, email, phone, school, accountStatus, primaryGoal, message, agreement, honeypot } = body;

    // Honeypot check - if filled, it's a bot
    if (honeypot) {
      return NextResponse.json(
        { error: 'Invalid request' },
        { status: 400 }
      );
    }

    // Server-side validation
    if (!fullName || !email || !phone || !school || !accountStatus || !primaryGoal || !message || !agreement) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Sanitize and escape inputs
    const sanitizedData = {
      fullName: escapeHtml(fullName.trim()).slice(0, 100),
      email: escapeHtml(email.trim().toLowerCase()).slice(0, 255),
      phone: escapeHtml(phone.trim()).slice(0, 50),
      school: escapeHtml(school.trim()).slice(0, 200),
      accountStatus: escapeHtml(accountStatus.trim()).slice(0, 50),
      primaryGoal: escapeHtml(primaryGoal.trim()).slice(0, 200),
      message: escapeHtml(message.trim()).slice(0, 2000),
    };

    const contactEmail = process.env.CONTACT_EMAIL || 'smartassignmentsolver@gmail.com';
    const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';

    // Send email to business owner
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      replyTo: sanitizedData.email,
      subject: `New Client Application — ${sanitizedData.fullName}`,
      html: `
        <h2>NEW CLIENT APPLICATION</h2>
        <p><strong>Full Name:</strong> ${sanitizedData.fullName}</p>
        <p><strong>Email:</strong> ${sanitizedData.email}</p>
        <p><strong>Phone / WhatsApp:</strong> ${sanitizedData.phone}</p>
        <p><strong>School / University:</strong> ${sanitizedData.school}</p>
        <p><strong>Handshake Account Status:</strong> ${sanitizedData.accountStatus}</p>
        <p><strong>Primary Goal:</strong> ${sanitizedData.primaryGoal}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedData.message.replace(/\n/g, '<br>')}</p>
        <p><strong>Agreement Accepted:</strong> Yes</p>
        <hr>
        <p><small>Submission Date: ${new Date().toLocaleString()}</small></p>
        <hr>
        <p><small>This application was submitted through the Handshake Account Support website.</small></p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send confirmation email to applicant
    const firstName = sanitizedData.fullName.split(' ')[0];
    await resend.emails.send({
      from: fromEmail,
      to: sanitizedData.email,
      subject: 'Your Application Was Received',
      html: `
        <h2>Hi ${firstName},</h2>
        <p>Thank you for contacting Handshake Account Support.</p>
        <p>Your application has been received successfully. I will review the information you provided and contact you using the contact details you submitted.</p>
        <p>Please remember that this is an independent support service and is not affiliated with or endorsed by Handshake.</p>
        <p>For your security, never send passwords, authentication codes, MFA codes, or other sensitive account credentials through this website or email.</p>
        <hr>
        <p>Regards,<br>Handshake Account Support</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

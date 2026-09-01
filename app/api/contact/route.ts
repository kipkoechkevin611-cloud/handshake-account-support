import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { fullName, email, phone, school, accountStatus, primaryGoal, message } = body;

    // Server-side validation
    if (!fullName || !email || !phone || !school || !accountStatus || !primaryGoal || !message) {
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

    // Sanitize inputs (basic)
    const sanitizedData = {
      fullName: fullName.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 255),
      phone: phone.trim().slice(0, 50),
      school: school.trim().slice(0, 200),
      accountStatus: accountStatus.trim().slice(0, 50),
      primaryGoal: primaryGoal.trim().slice(0, 200),
      message: message.trim().slice(0, 2000),
    };

    const contactEmail = process.env.CONTACT_EMAIL || 'contact@handshake-account-support.com';
    const fromEmail = process.env.FROM_EMAIL || 'noreply@handshake-account-support.com';

    // Send email to business owner
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      subject: `New Handshake Support Client Application — ${sanitizedData.fullName}`,
      html: `
        <h2>New Client Application</h2>
        <p><strong>Full Name:</strong> ${sanitizedData.fullName}</p>
        <p><strong>Email:</strong> ${sanitizedData.email}</p>
        <p><strong>Phone / WhatsApp:</strong> ${sanitizedData.phone}</p>
        <p><strong>School / University:</strong> ${sanitizedData.school}</p>
        <p><strong>Handshake Account:</strong> ${sanitizedData.accountStatus}</p>
        <p><strong>Primary Goal:</strong> ${sanitizedData.primaryGoal}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedData.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Submitted: ${new Date().toLocaleString()}</small></p>
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
      subject: 'We Received Your Application',
      html: `
        <h2>Hi ${firstName},</h2>
        <p>Thank you for contacting Handshake Account Support.</p>
        <p>Your application has been received successfully. I will review the information you provided and contact you using your preferred contact details.</p>
        <p>Please remember that this is an independent support service and is not affiliated with or endorsed by Handshake.</p>
        <p><strong>For security, never send passwords or authentication codes through email or the website.</strong></p>
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

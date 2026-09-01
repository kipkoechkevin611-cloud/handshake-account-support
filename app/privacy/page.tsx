import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Handshake Account Support',
  description: 'Privacy policy for Handshake Account Support - an independent professional service for Handshake account optimization and opportunity assistance.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0B1220] mb-8">Privacy Policy</h1>
        <p className="text-sm text-[#64748B] mb-12">Last updated: September 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-[#0B1220] mb-4">Introduction</h2>
            <p className="text-[#64748B] leading-relaxed">
              Handshake Account Support is an independent professional service that helps clients optimize their Handshake presence, organize opportunities, and prepare applications. This Privacy Policy explains how I collect, use, and protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0B1220] mb-4">Information I Collect</h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              Through the client application form, I collect:
            </p>
            <ul className="list-disc pl-6 text-[#64748B] space-y-2">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number / WhatsApp</li>
              <li>School or university</li>
              <li>Current Handshake account status</li>
              <li>Primary goals and type of support needed</li>
              <li>Short message describing your situation</li>
            </ul>
            <p className="text-[#64748B] leading-relaxed mt-4">
              I do NOT collect passwords, authentication codes, MFA codes, banking passwords, or other sensitive login credentials through this website. Never submit such information through this website or email.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0B1220] mb-4">How I Use Your Information</h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              I use the information you provide to:
            </p>
            <ul className="list-disc pl-6 text-[#64748B] space-y-2">
              <li>Review your application for potential service engagement</li>
              <li>Contact you using the details you provided</li>
              <li>Discuss whether the service is a good fit for your needs</li>
              <li>Communicate about the scope of support and partnership terms</li>
              <li>Provide updates on agreed support activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0B1220] mb-4">Communication</h2>
            <p className="text-[#64748B] leading-relaxed">
              I communicate with clients primarily through email and WhatsApp where appropriate. By submitting your application, you consent to receive communications from me regarding your application and potential service engagement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0B1220] mb-4">Information Security</h2>
            <p className="text-[#64748B] leading-relaxed">
              I take reasonable measures to protect your information. However, no method of transmission over the internet is completely secure. I cannot guarantee absolute security. For your protection, never share sensitive passwords, authentication codes, or security credentials through email or the website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0B1220] mb-4">Third-Party Services</h2>
            <p className="text-[#64748B] leading-relaxed">
              I use third-party services for email delivery (Resend) and website hosting (Vercel). These services have access to the information necessary to perform their functions. I do not sell your information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0B1220] mb-4">Data Retention</h2>
            <p className="text-[#64748B] leading-relaxed">
              I retain your application information for as long as necessary to provide services, communicate with you, and comply with legal obligations. You may request deletion of your information by contacting me.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0B1220] mb-4">Your Rights</h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-[#64748B] space-y-2">
              <li>Access the information I have about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of further communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0B1220] mb-4">Independent Service Disclaimer</h2>
            <p className="text-[#64748B] leading-relaxed">
              Handshake Account Support is an independent service and is not affiliated with, sponsored by, operated by, or endorsed by Handshake. I do not claim ownership of client accounts or personal data. Clients remain responsible for complying with Handshake's Terms of Service and applicable university or employer requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0B1220] mb-4">Contact Information</h2>
            <p className="text-[#64748B] leading-relaxed">
              If you have questions about this Privacy Policy or your information, please contact me at: contact@handshake-account-support.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0B1220] mb-4">Changes to This Policy</h2>
            <p className="text-[#64748B] leading-relaxed">
              I may update this Privacy Policy from time to time. I will notify clients of significant changes by email. Your continued use of the service after such changes constitutes acceptance of the updated policy.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-[#e5e7eb]">
          <a href="/" className="text-[#2563EB] hover:text-[#1d4ed8] transition-colors">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

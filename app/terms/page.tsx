import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Handshake Account Support',
  description: 'Terms of Service for Handshake Account Support - an independent professional service for Handshake account optimization and opportunity assistance.',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0B1220] mb-8">Terms of Service</h1>
        <p className="text-sm text-[#64748B] mb-12">Last updated: September 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-[#0B1220] mb-4">Service Description</h2>
            <p className="text-[#64748B] leading-relaxed">
              Handshake Account Support is an independent professional service that helps students, graduates, and professionals optimize their Handshake presence, organize opportunities, prepare applications, and manage their career workflow. The service is provided by an individual support partner.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0B1220] mb-4">Independent Service Status</h2>
            <p className="text-[#64748B] leading-relaxed">
              This service is NOT affiliated with, sponsored by, operated by, or endorsed by Handshake. I do not represent Handshake, and I do not claim any official relationship with the Handshake platform. This is an independent support service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0B1220] mb-4">Client Account Ownership</h2>
            <p className="text-[#64748B] leading-relaxed">
              Clients always own their own Handshake accounts. The service does not claim ownership of client accounts, personal data, or career decisions. Clients retain full control and responsibility for their accounts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0B1220] mb-4">Client Responsibilities</h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              Clients are responsible for:
            </p>
            <ul className="list-disc pl-6 text-[#64748B] space-y-2">
              <li>Complying with Handshake's Terms of Service</li>
              <li>Complying with applicable university or employer requirements</li>
              <li>Providing accurate information through their account</li>
              <li>Maintaining the security of their login credentials</li>
              <li>Not sharing passwords, authentication codes, or MFA codes through this website or email</li>
              <li>Reviewing and approving any applications or account changes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0B1220] mb-4">Prohibited Credential Sharing</h2>
            <p className="text-[#64748B] leading-relaxed">
              Clients should NEVER submit passwords, authentication codes, MFA codes, banking passwords, or other sensitive login credentials through the public website or email. I do not need these credentials to provide support. All support must respect applicable platform security requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0B1220] mb-4">Compensation / 50-50 Arrangement</h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              For opportunities specifically covered by a written agreement between the client and the support partner:
            </p>
            <ul className="list-disc pl-6 text-[#64748B] space-y-2">
              <li>Eligible earnings are shared equally: 50% to the client and 50% to the support partner</li>
              <li>The exact scope, qualifying earnings, payment process, responsibilities, and duration of the arrangement are agreed upon before services begin</li>
              <li>Not all future salary or earnings are automatically subject to the partnership</li>
              <li>Only earnings specifically covered by the written agreement are divided</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0B1220] mb-4">No Guarantee of Opportunities or Earnings</h2>
            <p className="text-[#64748B] leading-relaxed">
              No jobs, interviews, opportunities, contracts, or earnings are guaranteed. Opportunities, interviews, offers, and earnings depend on many factors including client qualifications, market conditions, employer decisions, and successful application outcomes. The service does not promise or guarantee any specific results.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0B1220] mb-4">Termination</h2>
            <p className="text-[#64748B] leading-relaxed">
              Either the client or the support partner may terminate the service arrangement subject to the terms of the written agreement. Upon termination, the client retains full ownership and control of their Handshake account and all related data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0B1220] mb-4">Communication</h2>
            <p className="text-[#64748B] leading-relaxed">
              Communication occurs primarily through email and WhatsApp where agreed. Clients should respond to communications in a timely manner to ensure effective service delivery.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0B1220] mb-4">Limitation of Service Scope</h2>
            <p className="text-[#64748B] leading-relaxed">
              The service provides guidance, organization, optimization, and support. The service does not guarantee employment, does not submit applications without client approval, and does not take actions that violate platform terms or client interests.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0B1220] mb-4">Changes to Terms</h2>
            <p className="text-[#64748B] leading-relaxed">
              I may update these Terms of Service from time to time. Significant changes will be communicated to clients by email. Continued use of the service after changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0B1220] mb-4">Contact</h2>
            <p className="text-[#64748B] leading-relaxed">
              For questions about these Terms of Service, please contact me at: contact@handshake-account-support.com
            </p>
          </section>

          <section className="bg-[#FEF3C7] border border-[#FCD34D] rounded-lg p-6">
            <h2 className="text-xl font-semibold text-[#92400E] mb-4">Disclaimer</h2>
            <p className="text-[#92400E] leading-relaxed text-sm">
              This document is for informational purposes and does not constitute formal legal advice. For specific legal concerns, please consult with a qualified attorney.
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

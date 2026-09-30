import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | ABC Neon - Business Registration & Compliance Services",
  description:
    "Learn how ABC Neon collects, protects, and handles your business documentation and personal information in compliance with statutory regulations and ISO 27001 standards.",
  alternates: {
    canonical: "https://abcneon.in/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | ABC Neon",
    description:
      "Enterprise data protection, statutory compliance handling, and strict confidentiality protocols at ABC Neon.",
    url: "https://abcneon.in/privacy-policy",
    siteName: "ABC Neon",
    locale: "en_IN",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 30, 2026";
  const siteUrl = "https://abcneon.in";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: `${siteUrl}/privacy-policy`,
    description:
      "ABC Neon Privacy Policy detailing personal information handling, statutory filing security, and data protection compliance.",
    publisher: {
      "@type": "Organization",
      name: "ABC Neon",
      url: siteUrl,
      logo: `${siteUrl}/logo.jpg`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+971-2-642-7667",
        contactType: "Customer Support & Grievance Officer",
        email: "abctyping26@gmail.com",
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] text-neutral-900 flex flex-col justify-between selection:bg-blue-100 selection:text-blue-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1 w-full">
        {/* ================= HERO HEADER ================= */}
        <section className="relative overflow-hidden bg-white border-b border-neutral-200/80 pt-8 sm:pt-12 pb-12 sm:pb-16">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-1/4 w-[450px] h-[300px] bg-blue-50/70 rounded-full blur-3xl opacity-80" />
            <div className="absolute bottom-0 left-10 w-[350px] h-[250px] bg-emerald-50/50 rounded-full blur-3xl opacity-60" />
          </div>

          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6 font-medium">
              <Link href="/" className="hover:text-[#2563eb] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-neutral-800 font-semibold">Privacy Policy</span>
            </nav>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border border-blue-200/70 bg-blue-50 text-blue-800">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span>Legal &amp; Compliance Transparency</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight leading-[1.15]">
                Privacy Policy &amp; Data Protection
              </h1>

              <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed">
                ABC Neon (&ldquo;ABC Neon&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to
                safeguarding the privacy, confidentiality, and integrity of the personal and corporate data entrusted to us
                by our clients, prospective partners, and visitors.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-neutral-500">
                <span>Effective Date: <strong>{lastUpdated}</strong></span>
                <span>•</span>
                <span>Standard: <strong>ISO 27001 Aligned Security</strong></span>
                <span>•</span>
                <span>Scope: <strong>Kerala &amp; Pan-India Statutory Portals</strong></span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= POLICY BODY ================= */}
        <section className="py-12 sm:py-16">
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-10 lg:p-12 space-y-12">
              
              {/* Section 1: Introduction & Scope */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-black text-sm">
                    01
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
                    Scope &amp; Applicability
                  </h2>
                </div>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  This Privacy Policy applies to all services offered by ABC Neon, including business incorporation (Private Limited, LLP, OPC, Section 8), statutory tax registrations (GST, PAN, TAN, Professional Tax), licensing (FSSAI, Trade License, MSME/Udyam), Ministry of Corporate Affairs (MCA) compliance, ROC Kerala statutory filings, trademark filings, and consultation inquiries submitted via our official portal or direct messaging channels.
                </p>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  By engaging our professional services or submitting an inquiry via our contact and lead capture forms, you consent to the collection, processing, and transmission of data strictly as outlined in this agreement.
                </p>
              </div>

              <hr className="border-neutral-200" />

              {/* Section 2: Information We Collect */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-black text-sm">
                    02
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
                    Information We Collect
                  </h2>
                </div>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  To execute corporate and statutory filings with government bodies on your behalf, we collect only strictly relevant information:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2">
                    <h3 className="font-bold text-neutral-900 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      Identity &amp; KYC Documentation
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Director/partner KYC details, Aadhaar cards, PAN cards, passport copies, voter ID, passport photos, and Digital Signature Certificate (DSC) application parameters.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2">
                    <h3 className="font-bold text-neutral-900 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      Corporate &amp; Property Documentation
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Registered office utility bills, property tax receipts, lease agreements, landlord NOCs, Articles of Association (AOA), and Memorandum of Association (MOA).
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2">
                    <h3 className="font-bold text-neutral-900 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      Lead &amp; Communication Details
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Name, mobile/WhatsApp telephone number, email address, designated service inquiry, and business specifications entered during inquiry submissions.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2">
                    <h3 className="font-bold text-neutral-900 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      Statutory Transaction Details
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Statutory government challans, SRN tracking IDs, portal submission logs, and official ministry receipts generated during file processing.
                    </p>
                  </div>
                </div>
              </div>

              <hr className="border-neutral-200" />

              {/* Section 3: Purpose of Processing */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-black text-sm">
                    03
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
                    Purpose &amp; Legal Basis for Processing
                  </h2>
                </div>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  We process personal and corporate information exclusively for legitimate statutory purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-neutral-600">
                  <li>
                    <strong>Statutory Authority Filings:</strong> Transmitting authenticated documentation to the Ministry of Corporate Affairs (MCA), Goods and Services Tax Network (GSTN), Income Tax Department, K-SWIFT Kerala single-window clearance, and Directorate General of Foreign Trade (DGFT).
                  </li>
                  <li>
                    <strong>Client Verification:</strong> Fulfilling anti-money laundering (AML) and mandatory Know-Your-Customer (KYC) compliance as stipulated under the Companies Act 2013 and Prevention of Money Laundering Act (PMLA).
                  </li>
                  <li>
                    <strong>Operational Communication:</strong> Contacting you via WhatsApp, email, or telephone with respect to document verification requests, government approvals, registration certificates, and statutory renewal deadlines.
                  </li>
                  <li>
                    <strong>Billing &amp; Bookkeeping:</strong> Generating statutory tax invoices, payment receipts, and preserving accounting records as mandated by fiscal law.
                  </li>
                </ul>
              </div>

              <hr className="border-neutral-200" />

              {/* Section 4: Data Security & Storage */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-black text-sm">
                    04
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
                    Data Security &amp; ISO 27001 Standards
                  </h2>
                </div>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  ABC Neon implements defense-in-depth security architectures aligned with ISO 27001 information security principles:
                </p>
                <div className="space-y-3 pt-1">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50/50 border border-blue-100 text-sm">
                    <span className="font-bold text-blue-800 shrink-0">Encryption:</span>
                    <span className="text-neutral-700">All data in transit is encrypted using industry-standard TLS 1.3. Stored records and sensitive identification files are encrypted using AES-256 standards.</span>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50/50 border border-blue-100 text-sm">
                    <span className="font-bold text-blue-800 shrink-0">Access Governance:</span>
                    <span className="text-neutral-700">Restricted role-based access control (RBAC). Only assigned Chartered Accountants, Company Secretaries, and authorized case managers handle your sensitive client dossiers.</span>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50/50 border border-blue-100 text-sm">
                    <span className="font-bold text-blue-800 shrink-0">Zero Data Brokerage:</span>
                    <span className="text-neutral-700">We never sell, rent, monetize, or disclose your client data or contact lists to marketing networks or unauthorized third parties.</span>
                  </div>
                </div>
              </div>

              <hr className="border-neutral-200" />

              {/* Section 5: Data Retention */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-black text-sm">
                    05
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
                    Data Retention &amp; Record Archival
                  </h2>
                </div>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  We retain statutory filing records, government acknowledgments, and related supporting documents for the statutory period mandated by applicable corporate and taxation legislation (typically 8 years under the Companies Act 2013 and Income Tax Act). Upon expiration of mandatory archival windows, records are securely expunged in accordance with our data destruction policies.
                </p>
              </div>

              <hr className="border-neutral-200" />

              {/* Section 6: Client Rights & Inquiries */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-black text-sm">
                    06
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
                    Your Rights &amp; Access Controls
                  </h2>
                </div>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  You possess the following rights regarding your data processed by ABC Neon:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-sm text-neutral-600">
                  <li><strong>Right to Inspect:</strong> Request a summary of all personal information and documents held in your dossier.</li>
                  <li><strong>Right to Rectification:</strong> Request correction of outdated or inaccurate personal or corporate records.</li>
                  <li><strong>Right to Withdraw Consent:</strong> Withdraw voluntary marketing consent at any time without affecting the lawfulness of statutory processing.</li>
                </ul>
              </div>

              <hr className="border-neutral-200" />

              {/* Section 7: Grievance & Contact Desk */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-black text-sm">
                    07
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
                    Grievance Officer &amp; Compliance Desk
                  </h2>
                </div>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  If you have inquiries, concerns, or requests regarding this Privacy Policy or your data protection rights, please contact our compliance desk:
                </p>

                <div className="mt-4 p-5 rounded-2xl bg-neutral-900 text-white space-y-3">
                  <h3 className="font-bold text-base text-white">ABC Neon Compliance &amp; Grievance Office</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-neutral-300">
                    <div>
                      <span className="block text-neutral-400 font-medium mb-1">Official Email:</span>
                      <a href="mailto:abctyping26@gmail.com" className="text-blue-400 hover:underline font-semibold">
                        abctyping26@gmail.com
                      </a>
                    </div>
                    <div>
                      <span className="block text-neutral-400 font-medium mb-1">Direct Telephone:</span>
                      <a href="tel:+97126427667" className="text-blue-400 hover:underline font-semibold">
                        +971 2 642 7667
                      </a>
                    </div>
                    <div>
                      <span className="block text-neutral-400 font-medium mb-1">Direct WhatsApp:</span>
                      <a href="https://wa.me/971543078430" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-semibold">
                        +971 54 307 8430
                      </a>
                    </div>
                  </div>
                  <div className="text-[11px] text-neutral-400 pt-2 border-t border-neutral-800">
                    Operating Hours: Monday – Saturday, 8:30 AM – 7:30 PM (IST / GST). All queries are acknowledged within 24 business hours.
                  </div>
                </div>
              </div>

            </div>

            {/* Back to Home CTA */}
            <div className="mt-8 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 text-white font-bold text-sm hover:bg-neutral-800 transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Return to ABC Neon Home
              </Link>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

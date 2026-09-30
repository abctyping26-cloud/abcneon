import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | ABC Neon - Professional Compliance & Corporate Services",
  description:
    "Review the standard terms and conditions governing corporate registration, statutory filings, and professional facilitation services provided by ABC Neon.",
  alternates: {
    canonical: "https://abcneon.in/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | ABC Neon",
    description:
      "Statutory facilitation agreements, transparent pricing policies, and service guidelines for ABC Neon clients.",
    url: "https://abcneon.in/terms-of-service",
    siteName: "ABC Neon",
    locale: "en_IN",
    type: "website",
  },
};

export default function TermsOfServicePage() {
  const lastUpdated = "September 30, 2026";
  const siteUrl = "https://abcneon.in";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Service",
    url: `${siteUrl}/terms-of-service`,
    description:
      "Terms of Service establishing rights, statutory obligations, and facilitation agreements between ABC Neon and clients.",
    publisher: {
      "@type": "Organization",
      name: "ABC Neon",
      url: siteUrl,
      logo: `${siteUrl}/logo.jpg`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+971-2-642-7667",
        contactType: "Customer Support & Legal Desk",
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
              <span className="text-neutral-800 font-semibold">Terms of Service</span>
            </nav>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border border-blue-200/70 bg-blue-50 text-blue-800">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>Client Service Agreement</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight leading-[1.15]">
                Terms of Service &amp; Conditions
              </h1>

              <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed">
                These Terms of Service govern your engagement with ABC Neon (&ldquo;ABC Neon&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;)
                for business formation, licensing, statutory tax registrations, ROC filings, and continuous compliance advisory.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-neutral-500">
                <span>Last Updated: <strong>{lastUpdated}</strong></span>
                <span>•</span>
                <span>Jurisdiction: <strong>Kerala &amp; India</strong></span>
                <span>•</span>
                <span>Version: <strong>2026.3</strong></span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TERMS BODY ================= */}
        <section className="py-12 sm:py-16">
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-10 lg:p-12 space-y-12">
              
              {/* Section 1: Agreement to Terms */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-black text-sm">
                    01
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
                    Agreement &amp; Engagement Scope
                  </h2>
                </div>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  By accessing our website, commissioning an order, submitting an enquiry form, or executing a corporate compliance mandate with ABC Neon, you agree to be bound by these Terms of Service. If you are entering into this agreement on behalf of a company, LLP, partnership firm, or other legal entity, you represent that you possess the lawful statutory authority to bind that entity.
                </p>
              </div>

              <hr className="border-neutral-200" />

              {/* Section 2: Nature of Professional Services */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-black text-sm">
                    02
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
                    Nature of Services &amp; Government Role
                  </h2>
                </div>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  ABC Neon acts as a professional corporate advisory and facilitation consultancy. Our network comprises certified Chartered Accountants, Company Secretaries, legal drafters, and statutory consultants:
                </p>
                <div className="space-y-3 pt-1">
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-sm space-y-1.5">
                    <div className="font-bold text-neutral-900">Professional Facilitation:</div>
                    <div className="text-neutral-600 leading-relaxed text-xs sm:text-sm">
                      We prepare, structure, verify, and transmit corporate documentation in conformity with the Companies Act 2013, GST Act, and state municipal regulations.
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-sm space-y-1.5">
                    <div className="font-bold text-neutral-900">Statutory Authority Discretion:</div>
                    <div className="text-neutral-600 leading-relaxed text-xs sm:text-sm">
                      Final approval, granting of certificates (Certificate of Incorporation, GSTIN, Trade License, FSSAI), and rejection or resubmission notices (SRN queries) remain at the sole discretion of the relevant government ministries and statutory registries (MCA, Central Board of Indirect Taxes, ROC Kerala, Local Self Government Bodies). While we pursue maximum filing fidelity, ABC Neon does not guarantee government approval when non-compliances or name rejections occur due to third-party conflicts.
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-neutral-200" />

              {/* Section 3: Client Obligations & Document Authenticity */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-black text-sm">
                    03
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
                    Client Obligations &amp; Authenticity Warranties
                  </h2>
                </div>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  To ensure lawful, unhindered processing, you warrant and agree that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-neutral-600">
                  <li>
                    All KYC documents, identity proofs, financial declarations, and premises ownership documents provided to ABC Neon are genuine, unadulterated, and lawful.
                  </li>
                  <li>
                    The intended business objectives of the incorporated entity or registered enterprise conform to Indian law and do not engage in prohibited activities.
                  </li>
                  <li>
                    You will provide required One-Time Passwords (OTPs) generated by government portals (Aadhaar, MCA, Income Tax, GSTN) in a prompt manner during authorized submission windows.
                  </li>
                  <li>
                    You are solely responsible for notifying ABC Neon of any changes to directors, partners, capital structures, or principal place of business that occur during the pendency of applications.
                  </li>
                </ul>
              </div>

              <hr className="border-neutral-200" />

              {/* Section 4: Fees, Government Challans & Refunds */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-black text-sm">
                    04
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
                    Fees, Statutory Challans &amp; Refund Policy
                  </h2>
                </div>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  Our transparent pricing structure clearly separates statutory fees from professional consultancy charges:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2">
                    <h3 className="font-bold text-neutral-900 text-sm">Government Statutory Fees</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Statutory fees (e.g. MCA name reservation fees, stamp duty, ROC challans, trademark class fees) are paid directly to government treasuries. Once disbursed to government portals or challans are generated, government fees are completely non-refundable.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2">
                    <h3 className="font-bold text-neutral-900 text-sm">Professional Consultancy Fees</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Professional service fees cover document structuring, affidavit drafting, and compliance representation. If a cancellation is requested before drafting commences, professional fees are refundable less administrative costs. Once drafting and verification are underway, professional fees are earned and non-refundable.
                    </p>
                  </div>
                </div>
              </div>

              <hr className="border-neutral-200" />

              {/* Section 5: Turnaround Times & External Delays */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-black text-sm">
                    05
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
                    Timelines &amp; External Registry Delays
                  </h2>
                </div>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  Turnaround times quoted on our portal (e.g. 5-7 business days for Private Limited, 3-5 days for GST) reflect standard processing benchmarks achieved under normal portal operating conditions. ABC Neon cannot be held liable for statutory delays caused by government server outages (MCA V3 system downtime, GSTN maintenance), statutory holidays, or backlog at the Registrar of Companies.
                </p>
              </div>

              <hr className="border-neutral-200" />

              {/* Section 6: Limitation of Liability */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-black text-sm">
                    06
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
                    Limitation of Liability
                  </h2>
                </div>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  To the maximum extent permitted by applicable law, ABC Neon&rsquo;s aggregate liability for any direct claims arising out of or related to our facilitation services shall be strictly capped at the amount of professional fees actually received by ABC Neon for that specific service engagement. In no event shall ABC Neon be liable for indirect, incidental, punitive, or consequential business damages or lost profits.
                </p>
              </div>

              <hr className="border-neutral-200" />

              {/* Section 7: Governing Law & Jurisdiction */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-black text-sm">
                    07
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
                    Governing Law &amp; Dispute Resolution
                  </h2>
                </div>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  These Terms of Service shall be governed by and construed in accordance with the substantive laws of India. Any disputes, claims, or controversies arising out of or in connection with these Terms shall first be attempted to be resolved amicably through good-faith mediation; failing which, disputes shall be subject to the exclusive jurisdiction of the competent courts in Kerala, India.
                </p>
              </div>

              <hr className="border-neutral-200" />

              {/* Section 8: Legal Inquiries & Contact */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-black text-sm">
                    08
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
                    Official Contact &amp; Notices
                  </h2>
                </div>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  Formal legal notices and questions regarding these Terms of Service should be directed to our corporate legal desk:
                </p>

                <div className="mt-4 p-5 rounded-2xl bg-neutral-900 text-white space-y-3">
                  <h3 className="font-bold text-base text-white">ABC Neon Legal &amp; Corporate Desk</h3>
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
                    Registered Support Desk: Monday – Saturday, 8:30 AM – 7:30 PM (IST / GST).
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

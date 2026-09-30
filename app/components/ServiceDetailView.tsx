"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import ContactModal from "./ContactModal";
import { ServiceEntry } from "../data/catalogData";
import { getWhatsAppUrl } from "../utils/whatsapp";

interface ServiceDetailViewProps {
  service: ServiceEntry;
  relatedServices: ServiceEntry[];
}

export default function ServiceDetailView({
  service,
  relatedServices,
}: ServiceDetailViewProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    const handleOpenModal = () => setIsContactModalOpen(true);
    window.addEventListener("abc:open-contact-modal", handleOpenModal);
    return () => {
      window.removeEventListener("abc:open-contact-modal", handleOpenModal);
    };
  }, []);

  const whatsappMessage = `Hello ABC Neon, I would like to inquire about ${service.name} (${service.category.title}). Please guide me on process, turnaround, and pricing.`;
  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  // Curated FAQ Items
  const faqItems = [
    {
      q: `What is the expected turnaround time for ${service.name}?`,
      a: `The standard processing turnaround is ${service.detail.turnaround}. Our corporate compliance desk initiates document drafting, digital signatures, and portal submissions within 24 hours of receiving your required KYC to avoid unnecessary statutory delays.`,
    },
    {
      q: "What prerequisites and documents do I need to prepare?",
      a: `The primary prerequisites include: ${service.detail.prerequisites}. If you do not have all documents ready or require drafting assistance, our dedicated compliance advisors will guide you through acquiring or preparing valid alternatives.`,
    },
    {
      q: "What official deliverables and certificates will I receive?",
      a: `Upon successful execution, you will receive: ${service.detail.deliverables.join(
        ", "
      )}. All filings and certificates are government-authorized, digitally verified, and delivered directly to your email and client portal.`,
    },
    {
      q: "Is physical presence required in Kerala or at government departments?",
      a: `No, the entire process for ${service.name} is handled 100% digitally through official government channels (MCA, GST, K-SWIFT, ROC Kerala). Our verified specialists represent your application so you never need to queue or visit municipal or tax offices in person.`,
    },
    {
      q: "Does ABC Neon handle continuous annual compliance and renewals?",
      a: `Yes, ABC Neon provides end-to-end lifecycle support. Once ${service.name} is completed, our team can manage periodic ROC filings, GST returns, annual trade license renewals, and statutory bookkeeping to keep your business in good standing.`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafbfc] text-neutral-900 flex flex-col justify-between selection:bg-blue-100 selection:text-blue-900">
      {/* Shared Global Sticky Header */}
      <Header />

      <main className="flex-1 w-full">
        {/* ================= HERO SECTION ================= */}
        <section className="relative overflow-hidden bg-white border-b border-neutral-200/80 pt-6 sm:pt-10 pb-12 sm:pb-16 lg:pb-20">
          {/* Subtle Ambient Radial Glows */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-blue-50/70 rounded-full blur-3xl opacity-80" />
            <div className="absolute bottom-0 left-10 w-[400px] h-[300px] bg-emerald-50/60 rounded-full blur-3xl opacity-60" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6 sm:mb-8 font-medium">
              <Link href="/" className="hover:text-[#2563eb] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/#directory" className="hover:text-[#2563eb] transition-colors">
                Services
              </Link>
              <span>/</span>
              <span className="text-neutral-700 font-semibold">{service.category.title}</span>
              <span>/</span>
              <span className="text-[#2563eb] font-bold truncate max-w-[200px] sm:max-w-xs">
                {service.name}
              </span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Value Prop, Headline & CTAs */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                {/* Category Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border border-neutral-200 shadow-2xs bg-white">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: service.category.accentColor }}
                  />
                  <span className="text-neutral-800">
                    Category {service.category.number} • {service.category.title}
                  </span>
                </div>

                {/* H1 Main Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight leading-[1.12]">
                  {service.name}
                  <span className="block text-neutral-400 font-medium text-2xl sm:text-3xl mt-1">
                    in Kerala &amp; Pan-India
                  </span>
                </h1>

                {/* Tagline */}
                <p className="text-base sm:text-lg font-semibold text-[#2563eb] leading-snug">
                  {service.detail.tagline}
                </p>

                {/* Overview Text */}
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl">
                  {service.detail.overview}
                </p>

                {/* Metric Quick Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                  <div className="p-3 rounded-[6px] bg-neutral-50 border border-neutral-200/90 text-left">
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">
                      Turnaround
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-neutral-900 block mt-0.5">
                      {service.detail.turnaround}
                    </span>
                  </div>
                  <div className="p-3 rounded-[6px] bg-neutral-50 border border-neutral-200/90 text-left">
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">
                      Filing Mode
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-600 block mt-0.5">
                      100% Online
                    </span>
                  </div>
                  <div className="p-3 rounded-[6px] bg-neutral-50 border border-neutral-200/90 text-left col-span-2 sm:col-span-1">
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">
                      Assistance
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-blue-600 block mt-0.5">
                      CA / CS Verified
                    </span>
                  </div>
                </div>

                {/* Dual Action CTA Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <button
                    type="button"
                    onClick={() => setIsContactModalOpen(true)}
                    className="px-7 py-3.5 rounded-[6px] bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm sm:text-base font-bold transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer inline-flex items-center justify-center gap-2 group"
                  >
                    <span>Apply for {service.name}</span>
                    <svg
                      className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-[6px] bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 hover:border-neutral-400 text-sm sm:text-base font-semibold transition-all duration-200 shadow-2xs active:scale-[0.99] cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4 fill-emerald-500" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.073.377-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
                    </svg>
                    <span>Talk to Specialist</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Execution Card Summary */}
              <div className="lg:col-span-5 w-full">
                <div className="bg-gradient-to-b from-neutral-900 to-slate-950 text-white rounded-[12px] p-6 sm:p-7 shadow-xl border border-neutral-800 space-y-5">
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                      Execution Summary
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Active Advisory
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-xs sm:text-sm">
                        <span className="font-semibold text-white block">Dedicated CA / CS Representation</span>
                        <span className="text-neutral-400 text-xs">Direct oversight of drafting &amp; filings</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-xs sm:text-sm">
                        <span className="font-semibold text-white block">Zero Physical Branch Visits</span>
                        <span className="text-neutral-400 text-xs">100% cloud-based document exchange</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-xs sm:text-sm">
                        <span className="font-semibold text-white block">Kerala &amp; Pan-India Coverage</span>
                        <span className="text-neutral-400 text-xs">ROC Ernakulam &amp; MCA central portal</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-800 text-center">
                    <button
                      type="button"
                      onClick={() => setIsContactModalOpen(true)}
                      className="w-full py-3 rounded-[6px] bg-white text-slate-950 hover:bg-neutral-100 font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-sm"
                    >
                      Request Quotation &amp; Timeline
                    </button>
                    <span className="text-[11px] text-neutral-400 mt-2 block">
                      Free initial assessment • No obligation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: DELIVERABLES & PREREQUISITES ================= */}
        <section className="py-12 sm:py-16 bg-[#fafbfc] border-b border-neutral-200/80">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Deliverables Column */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2563eb]">
                    Included in Scope
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight mt-1">
                    Official Deliverables
                  </h2>
                  <p className="text-sm text-neutral-500 mt-1.5 leading-relaxed">
                    Certified documents, statutory registrations, and official credentials issued upon completion.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.detail.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-[6px] bg-white border border-neutral-200/90 shadow-2xs hover:border-[#2563eb]/40 hover:shadow-xs transition-all flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-blue-50 text-[#2563eb] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-neutral-800 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prerequisites Column */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                    Client Checklist
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight mt-1">
                    Prerequisites &amp; KYC
                  </h2>
                  <p className="text-sm text-neutral-500 mt-1.5 leading-relaxed">
                    Documents required from promoters and founders to initiate statutory filings.
                  </p>
                </div>

                <div className="p-5 sm:p-6 rounded-[8px] bg-amber-50/60 border border-amber-200/80 shadow-2xs space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800">
                        Required Documents
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-amber-950 mt-1 leading-relaxed">
                        {service.detail.prerequisites}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-amber-200/60 text-xs text-amber-900/80 leading-relaxed">
                    <span className="font-bold">Missing any document?</span> Don&apos;t worry. Our legal associates assist in drafting rent deeds, board resolutions, and promoter affidavits.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: 4-STEP WORKFLOW ================= */}
        <section className="py-12 sm:py-16 bg-white border-b border-neutral-200/80">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563eb]">
              Transparent Execution
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 tracking-tight mt-1">
              How We Execute {service.name}
            </h2>
            <p className="text-sm text-neutral-500 mt-2 max-w-xl mx-auto leading-relaxed">
              From inquiry to certified delivery in 4 clear, verifiable steps.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 sm:mt-10 text-left">
              {[
                {
                  step: "01",
                  title: "Digital Submission",
                  desc: "Share your business details and basic identity proof through our secure encrypted portal.",
                },
                {
                  step: "02",
                  title: "Specialist Review",
                  desc: "A practicing CA / CS verifies documentation and drafts corporate resolutions.",
                },
                {
                  step: "03",
                  title: "Government Filing",
                  desc: "Fast-tracked application lodged directly with the official authority (MCA, GST, K-SWIFT, ROC).",
                },
                {
                  step: "04",
                  title: "Certificate Handover",
                  desc: "Approved certificates and registrations issued with lifelong compliance guidelines.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="p-5 rounded-[6px] bg-[#fafbfc] border border-neutral-200/90 shadow-2xs hover:shadow-sm transition-all"
                >
                  <span className="text-xs font-black font-mono text-[#2563eb] bg-blue-50 px-2 py-0.5 rounded-[4px]">
                    {item.step}
                  </span>
                  <h3 className="text-sm font-bold text-neutral-900 mt-3">{item.title}</h3>
                  <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: FREQUENTLY ASKED QUESTIONS ================= */}
        <section className="py-12 sm:py-16 bg-[#fafbfc] border-b border-neutral-200/80">
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563eb]">
                Answers &amp; Clarity
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight mt-1">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-neutral-500 mt-1.5">
                Common questions about {service.name} for entrepreneurs and companies in Kerala.
              </p>
            </div>

            <div className="space-y-3">
              {faqItems.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-[6px] bg-white border border-neutral-200/90 overflow-hidden shadow-2xs transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full px-5 py-4 text-left font-bold text-xs sm:text-sm text-neutral-900 flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <span className="text-neutral-400 font-mono text-base flex-shrink-0">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: RELATED SERVICES ================= */}
        {relatedServices.length > 0 && (
          <section className="py-12 sm:py-16 bg-white border-b border-neutral-200/80">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2563eb]">
                    Complementary Services
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight mt-1">
                    Related to {service.category.title}
                  </h2>
                </div>
                <Link
                  href="/#directory"
                  className="text-xs sm:text-sm font-bold text-[#2563eb] hover:text-[#1d4ed8] inline-flex items-center gap-1 group"
                >
                  <span>Explore all 95 services</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/services/${rel.slug}`}
                    className="p-4 sm:p-5 rounded-[6px] bg-[#fafbfc] hover:bg-white border border-neutral-200/90 hover:border-[#2563eb]/50 shadow-2xs hover:shadow-md transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                        {rel.category.title}
                      </span>
                      <h3 className="text-sm font-bold text-neutral-900 group-hover:text-[#2563eb] transition-colors leading-snug">
                        {rel.name}
                      </h3>
                      <p className="text-xs text-neutral-500 line-clamp-2 mt-1.5 leading-relaxed">
                        {rel.detail.overview}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-neutral-200/60 flex items-center justify-between text-xs font-semibold text-[#2563eb]">
                      <span>View Service</span>
                      <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ================= SECTION 6: HIGH CONVERSION CLOSING BANNER ================= */}
        <section className="py-12 sm:py-16 bg-[#2563eb] text-white">
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Ready to execute {service.name}?
            </h2>
            <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto leading-relaxed">
              Connect directly with our Kerala compliance desk. Fast-track your documentation, statutory clearances, and business growth today.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <button
                type="button"
                onClick={() => setIsContactModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-[6px] bg-white text-[#2563eb] hover:bg-neutral-100 font-bold text-sm sm:text-base transition-all duration-200 shadow-xl hover:shadow-2xl cursor-pointer"
              >
                Get Started Now
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-[6px] bg-white/15 hover:bg-white/25 text-white border border-white/20 font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Shared Global Footer */}
      <Footer />

      {/* Global Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}

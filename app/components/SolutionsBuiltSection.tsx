"use client";

import React, { useEffect, useRef, useState } from "react";

// ================= 4 TAILORED SOLUTION TRACKS =================
interface SolutionTrack {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  priceNote?: string;
  timeline: string;
  deliverables: string[];
  ctaText: string;
  accentBg: string;
}

const solutionTracks: SolutionTrack[] = [
  {
    id: "track-launchpad",
    badge: "STAGE 0 → 1",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/90",
    title: "Launchpad Suite",
    subtitle: "Turn ambition into a legally incorporated, operationally ready entity in days.",
    timeline: "5–7 Days Allotment",
    deliverables: [
      "Pvt Ltd / LLP Incorporation Certificate (COI)",
      "Instant GSTIN, PAN, TAN & MSME Registration",
      "Zero-Balance Corporate Bank Current Account",
      "Standard Founders Agreement & Cap Table Draft",
      "1st Year ROC Filing & Compliance Checklist",
    ],
    ctaText: "Deploy Launchpad",
    accentBg: "hover:border-emerald-300",
  },
  {
    id: "track-venture",
    badge: "GROWTH & VC",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200/90",
    title: "Venture Scale Suite",
    subtitle: "Structured for high-growth tech startups raising angel or institutional venture capital.",
    timeline: "10–14 Days Execution",
    deliverables: [
      "DPIIT Recognition & 3-Year Section 80-IAC Tax Exemption",
      "Investor-Grade Pitch Deck & DCF Financial Valuation",
      "Trademark (IP) Application & Brand Registration",
      "ESOP Policy Structuring & Share Purchase Agreement (SPA)",
      "Startup India Seed Fund Grant Assistance (up to ₹50L)",
    ],
    ctaText: "Explore Venture Track",
    accentBg: "hover:border-purple-300",
  },
  {
    id: "track-enterprise",
    badge: "OPERATIONS & COMPLIANCE",
    badgeColor: "bg-blue-50 text-[#2563eb] border-blue-200/90",
    title: "Enterprise Core",
    subtitle: "Complete compliance, finance, and human resources operating on autopilot.",
    timeline: "Dedicated Monthly Team",
    deliverables: [
      "Virtual CFO Advisory & Monthly Board MIS Reports",
      "Cloud Bookkeeping & Daily Tally / Zoho Reconciliations",
      "Automated Payroll, PF/ESI & TDS Return Filings",
      "Annual ROC Statutory Audit & MCA Compliance",
      "Pre-Approved Working Capital & Credit Line Support",
    ],
    ctaText: "Configure Enterprise",
    accentBg: "hover:border-blue-300",
  },
  {
    id: "track-global",
    badge: "CROSS-BORDER GCC",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200/90",
    title: "Global Gateway (UAE)",
    subtitle: "Seamless dual-entity architecture spanning India, Dubai, and the broader GCC.",
    timeline: "7–10 Days Dual Setup",
    deliverables: [
      "Dubai Mainland / IFZA Freezone Commercial Licence",
      "10-Year UAE Golden Visa & Executive Residency Support",
      "WIO / Emirates NBD Corporate Banking Assistance",
      "MOFA & Cross-Border Embassy Legal Attestations",
      "DGFT Import Export Code (IEC) & Custom Duty Advisory",
    ],
    ctaText: "Launch UAE Entity",
    accentBg: "hover:border-amber-300",
  },
];

export default function SolutionsBuiltSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start expanding when the box enters around 85% of viewport, fully expanded by 30%
      const startY = windowHeight * 0.88;
      const endY = windowHeight * 0.28;

      const currentProgress = (startY - rect.top) / (startY - endY);
      const clamped = Math.max(0, Math.min(1, currentProgress));
      setScrollProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute interpolated morphing styles
  // When scrollProgress = 0: compact box (~360px wide, ~52px tall)
  // When scrollProgress = 1: big container box (100% max-w-7xl, full section height)
  const isCompact = scrollProgress < 0.08;
  const showContent = scrollProgress > 0.12;

  return (
    <section
      id="solutions-built-section"
      className="relative z-10 w-full bg-white pt-4 sm:pt-6 pb-24 sm:pb-32 lg:pb-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        {/* ================= THE MORPHING CUSTOM BOX ================= */}
        <div
          ref={containerRef}
          style={{
            width: isCompact ? "auto" : `min(100%, ${380 + scrollProgress * 900}px)`,
            minWidth: isCompact ? "320px" : "auto",
            borderRadius: `${Math.round(24 + scrollProgress * 16)}px`,
          }}
          className={`transition-[width,border-radius,box-shadow,background-color] duration-300 ease-out border-2 ${
            isCompact
              ? "border-neutral-300/90 bg-neutral-50/90 py-3.5 px-6 shadow-sm hover:border-neutral-400 hover:shadow-md cursor-pointer"
              : "border-neutral-200/90 bg-white p-6 sm:p-10 lg:p-14 shadow-xl sm:shadow-2xl shadow-neutral-200/50"
          }`}
          onClick={() => {
            if (isCompact && containerRef.current) {
              containerRef.current.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          {/* ================= COMPACT BOX FACE (UNDER MAIN TITLE) ================= */}
          {isCompact && (
            <div className="flex items-center justify-center gap-3 select-none text-neutral-800">
              <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
              <span className="text-xs sm:text-sm font-bold tracking-wide uppercase text-neutral-800">
                ✦ Solutions Built Around Your Business ✦
              </span>
              <svg
                className="w-4 h-4 text-neutral-400 stroke-[2.5]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          )}

          {/* ================= EXPANDED BIG CONTAINER BOX CONTENT ================= */}
          {showContent && (
            <div
              style={{
                opacity: Math.min(1, (scrollProgress - 0.12) / 0.5),
                transform: `translateY(${(1 - scrollProgress) * 24}px)`,
              }}
              className="transition-[opacity,transform] duration-200 ease-out"
            >
              {/* Section Header Inside Container Box */}
              <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100/90 border border-neutral-200/80 text-xs sm:text-[13px] font-semibold text-neutral-700 shadow-2xs mb-4 sm:mb-5">
                  <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
                  <span>BESPOKE ARCHITECTURE FOR EVERY STAGE</span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 leading-[1.12]">
                  Solutions Built
                  <span className="block text-[#2563eb] mt-1">Around Your Business.</span>
                </h3>

                <p className="mt-4 text-sm sm:text-base lg:text-lg text-neutral-600 leading-relaxed font-normal">
                  Whether you&apos;re incorporating day one, raising venture funding, or managing multi-entity compliance
                  across India and the GCC — deploy solutions engineered for your exact scale.
                </p>
              </div>

              {/* 4 Solution Track Cards (2x2 Grid) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-stretch">
                {solutionTracks.map((track) => (
                  <div
                    key={track.id}
                    className={`group rounded-2xl bg-neutral-50/60 hover:bg-neutral-50 border border-neutral-200/80 ${track.accentBg} p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer`}
                  >
                    <div>
                      {/* Top Meta: Stage Badge + Turnaround */}
                      <div className="flex items-center justify-between gap-3 mb-3.5">
                        <span
                          className={`text-[10px] sm:text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full border tracking-wider ${track.badgeColor}`}
                        >
                          {track.badge}
                        </span>
                        <span className="text-xs font-semibold text-neutral-500 flex items-center gap-1.5">
                          <span>⏱</span>
                          <span>{track.timeline}</span>
                        </span>
                      </div>

                      {/* Track Title & Subtitle */}
                      <h4 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight group-hover:text-[#2563eb] transition-colors">
                        {track.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-600 mt-1.5 leading-relaxed font-medium">
                        {track.subtitle}
                      </p>

                      {/* Deliverables Checklist */}
                      <div className="mt-5 pt-4 border-t border-neutral-200/60 space-y-2.5">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                          Included Deliverables:
                        </div>
                        {track.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                            <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                              ✓
                            </span>
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Button */}
                    <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center justify-between">
                      <span className="text-xs font-semibold text-neutral-500">
                        100% Dedicated Launch Manager
                      </span>
                      <button
                        type="button"
                        className="px-5 py-2.5 rounded-xl bg-neutral-900 group-hover:bg-[#2563eb] text-white text-xs sm:text-sm font-bold transition-all duration-200 shadow-2xs inline-flex items-center gap-2 cursor-pointer"
                      >
                        <span>{track.ctaText}</span>
                        <svg
                          className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-0.5 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Quick Help Card */}
              <div className="mt-8 sm:mt-10 rounded-2xl bg-neutral-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                    Need a custom cross-functional enterprise blueprint?
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
                    Speak directly with our senior corporate attorney and principal tech architect to build a custom solution tailored to your company.
                  </p>
                </div>
                <button
                  type="button"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-98 whitespace-nowrap cursor-pointer flex-shrink-0"
                >
                  Schedule Partner Consultation
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

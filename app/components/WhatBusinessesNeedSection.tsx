"use client";

import React, { useEffect, useRef } from "react";

// ================= TYPES FOR SHOWCASE ITEMS =================
type ItemType = "button" | "capsule" | "quadrilateral";

interface ShowcaseItem {
  id: string;
  type: ItemType;
  title: string;
  subtitle?: string;
  tag?: string;
  tagColor?: "red" | "emerald" | "blue" | "purple" | "amber" | "indigo";
  icon?: string;
}

// ================= ROW 1 ITEMS (MOVES RIGHT) =================
const row1Items: ShowcaseItem[] = [
  {
    id: "r1-1",
    type: "capsule",
    title: "Company Registration (Pvt Ltd)",
    tag: "🔥 HOT DEMAND",
    tagColor: "red",
    icon: "🏢",
  },
  {
    id: "r1-2",
    type: "button",
    title: "Book Free Consultation",
  },
  {
    id: "r1-3",
    type: "quadrilateral",
    title: "GST Registration & Filing",
    subtitle: "Fast 3-Day Allotment • Input Tax Credit",
    tag: "⚡ MOST DEMANDED",
    tagColor: "emerald",
    icon: "📜",
  },
  {
    id: "r1-4",
    type: "capsule",
    title: "Trademark (IP) Protection",
    tag: "🛡️ HIGH DEMAND",
    tagColor: "blue",
    icon: "®️",
  },
  {
    id: "r1-5",
    type: "button",
    title: "Talk to Corporate Advisor",
  },
  {
    id: "r1-6",
    type: "quadrilateral",
    title: "Startup India (DPIIT)",
    subtitle: "Section 80-IAC 3-Year 100% Tax Exemption",
    tag: "🚀 SEED FUND READY",
    tagColor: "purple",
    icon: "🚀",
  },
  {
    id: "r1-7",
    type: "capsule",
    title: "Import Export Code (IEC)",
    tag: "🌐 GLOBAL TRADE",
    tagColor: "indigo",
    icon: "🚢",
  },
  {
    id: "r1-8",
    type: "button",
    title: "Check Eligibility Free",
  },
  {
    id: "r1-9",
    type: "quadrilateral",
    title: "LLP / Partnership Setup",
    subtitle: "Limited Liability Deed • Minimal ROC Burden",
    tag: "💎 TOP PICK",
    tagColor: "amber",
    icon: "🤝",
  },
];

// ================= ROW 2 ITEMS (MOVES LEFT) =================
const row2Items: ShowcaseItem[] = [
  {
    id: "r2-1",
    type: "quadrilateral",
    title: "Accounting & Bookkeeping",
    subtitle: "Monthly MIS • Cloud Tally, Zoho & QBO",
    tag: "📊 ESSENTIAL",
    tagColor: "emerald",
    icon: "📈",
  },
  {
    id: "r2-2",
    type: "button",
    title: "Free Tax Consultation",
  },
  {
    id: "r2-3",
    type: "capsule",
    title: "MSME / Udyam Certification",
    tag: "⚡ 24H APPROVAL",
    tagColor: "amber",
    icon: "🏅",
  },
  {
    id: "r2-4",
    type: "quadrilateral",
    title: "Custom Web & App Dev",
    subtitle: "Next.js, iOS/Android & Enterprise Software",
    tag: "💻 HIGH DEMAND",
    tagColor: "blue",
    icon: "⚡",
  },
  {
    id: "r2-5",
    type: "button",
    title: "Instant GST Verification",
  },
  {
    id: "r2-6",
    type: "capsule",
    title: "Income Tax Return (ITR)",
    tag: "🔥 PEAK DEMAND",
    tagColor: "red",
    icon: "💰",
  },
  {
    id: "r2-7",
    type: "quadrilateral",
    title: "Pitch Deck & Valuation",
    subtitle: "DCF Financial Model & Angel Investor Ready",
    tag: "🦄 INVESTOR READY",
    tagColor: "purple",
    icon: "📊",
  },
  {
    id: "r2-8",
    type: "capsule",
    title: "Virtual CFO Advisory",
    tag: "💎 TRENDING",
    tagColor: "indigo",
    icon: "💼",
  },
  {
    id: "r2-9",
    type: "button",
    title: "Book Valuation Call",
  },
];

// ================= ROW 3 ITEMS (MOVES RIGHT) =================
const row3Items: ShowcaseItem[] = [
  {
    id: "r3-1",
    type: "capsule",
    title: "Payroll & PF / ESI Compliance",
    tag: "👥 HOT DEMAND",
    tagColor: "red",
    icon: "👥",
  },
  {
    id: "r3-2",
    type: "button",
    title: "Claim Free Assessment",
  },
  {
    id: "r3-3",
    type: "quadrilateral",
    title: "Business Loan & Working Capital",
    subtitle: "₹10L to ₹5Cr • Direct Bank Tie-ups",
    tag: "💰 ZERO COLLATERAL",
    tagColor: "emerald",
    icon: "🏦",
  },
  {
    id: "r3-4",
    type: "capsule",
    title: "ISO 9001:2015 Quality",
    tag: "⭐ VERIFIED",
    tagColor: "blue",
    icon: "🎖️",
  },
  {
    id: "r3-5",
    type: "button",
    title: "Talk to Legal Specialist",
  },
  {
    id: "r3-6",
    type: "quadrilateral",
    title: "Performance Marketing (Ads)",
    subtitle: "High-ROAS Meta & Google Lead Generation",
    tag: "📈 HIGH ROI",
    tagColor: "purple",
    icon: "🎯",
  },
  {
    id: "r3-7",
    type: "capsule",
    title: "FSSAI Food Licence",
    tag: "⚡ RAPID APPROVAL",
    tagColor: "amber",
    icon: "🍽️",
  },
  {
    id: "r3-8",
    type: "quadrilateral",
    title: "Founders Agreement & NDA",
    subtitle: "Vesting Schedules, Equity & IP Protection",
    tag: "⚖️ TOP LEGAL",
    tagColor: "indigo",
    icon: "📑",
  },
  {
    id: "r3-9",
    type: "button",
    title: "Instant Compliance Audit",
  },
];

// ================= TAG COLOR HELPER =================
function getTagStyles(color?: string) {
  switch (color) {
    case "red":
      return "bg-rose-50 text-rose-700 border-rose-200/90";
    case "emerald":
      return "bg-emerald-50 text-emerald-700 border-emerald-200/90";
    case "blue":
      return "bg-blue-50 text-[#2563eb] border-blue-200/90";
    case "purple":
      return "bg-purple-50 text-purple-700 border-purple-200/90";
    case "amber":
      return "bg-amber-50 text-amber-800 border-amber-200/90";
    case "indigo":
      return "bg-indigo-50 text-indigo-700 border-indigo-200/90";
    default:
      return "bg-neutral-100 text-neutral-800 border-neutral-200";
  }
}

// ================= SHAPE RENDERERS =================

// 1. BUTTON SHAPE (Exact match to user's uploaded screenshot)
function ButtonItem({ item }: { item: ShowcaseItem }) {
  return (
    <button
      type="button"
      className="group relative bg-white hover:bg-neutral-50/90 text-neutral-900 border border-neutral-200/90 hover:border-neutral-400 rounded-xl px-6 sm:px-7 py-3.5 sm:py-4 shadow-sm hover:shadow-md active:scale-95 transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-2.5 flex-shrink-0"
    >
      <span className="text-sm sm:text-base font-bold tracking-tight text-neutral-900 group-hover:text-black">
        {item.title}
      </span>
      <svg
        className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 transition-all duration-200 stroke-[2.5]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}

// 2. CAPSULE SHAPE (Pill with icon, title, and demand tag)
function CapsuleItem({ item }: { item: ShowcaseItem }) {
  return (
    <div className="group relative bg-white hover:bg-neutral-50/80 rounded-full border border-neutral-200/90 hover:border-neutral-350 px-4 sm:px-5 py-2.5 sm:py-3 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-3 flex-shrink-0">
      {item.icon && (
        <span className="w-8 h-8 rounded-full bg-neutral-100 group-hover:bg-white flex items-center justify-center text-sm shadow-2xs border border-black/5 flex-shrink-0">
          {item.icon}
        </span>
      )}
      <span className="text-sm sm:text-base font-bold text-neutral-900 tracking-tight">
        {item.title}
      </span>
      {item.tag && (
        <span
          className={`text-[10px] sm:text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border tracking-wide ${getTagStyles(
            item.tagColor
          )}`}
        >
          {item.tag}
        </span>
      )}
    </div>
  );
}

// 3. QUADRILATERAL SHAPE (Boxy card with metadata and geometric silhouette)
function QuadrilateralItem({ item }: { item: ShowcaseItem }) {
  return (
    <div className="group relative bg-white hover:bg-neutral-50/80 rounded-2xl border border-neutral-200/90 hover:border-neutral-350 px-5 sm:px-6 py-3 sm:py-3.5 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer whitespace-nowrap flex flex-col justify-center flex-shrink-0 min-w-[240px] sm:min-w-[270px]">
      <div className="flex items-center justify-between gap-3 mb-0.5">
        <div className="flex items-center gap-2">
          {item.icon && <span className="text-sm">{item.icon}</span>}
          <h4 className="text-sm sm:text-[15px] font-bold text-neutral-900 tracking-tight">
            {item.title}
          </h4>
        </div>
        {item.tag && (
          <span
            className={`text-[9px] sm:text-[10px] font-black uppercase px-2 py-0.5 rounded-md border tracking-wider ${getTagStyles(
              item.tagColor
            )}`}
          >
            {item.tag}
          </span>
        )}
      </div>
      {item.subtitle && (
        <p className="text-[11px] sm:text-xs text-neutral-500 font-medium truncate">
          {item.subtitle}
        </p>
      )}
    </div>
  );
}

// Helper to render any item based on type
function RenderShowcaseItem({ item }: { item: ShowcaseItem }) {
  switch (item.type) {
    case "button":
      return <ButtonItem item={item} />;
    case "capsule":
      return <CapsuleItem item={item} />;
    case "quadrilateral":
      return <QuadrilateralItem item={item} />;
    default:
      return null;
  }
}

// ================= MAIN COMPONENT =================
export default function WhatBusinessesNeedSection() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;

    const updateMorph = () => {
      if (!ctaRef.current || !boxRef.current) return;
      const ctaRect = ctaRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      // Starts from the bottom the instant the CTA buttons cross into view
      const startThreshold = windowHeight;
      const scrolled = startThreshold - ctaRect.bottom;

      if (scrolled <= 0) {
        // At rest before crossing: sleek 3px blue border line under CTA
        const box = boxRef.current;
        box.style.width = "240px";
        box.style.height = "3px";
        box.style.borderRadius = "6px";
        box.style.backgroundColor = "#2563eb";
        box.style.borderColor = "#2563eb";
        box.style.boxShadow = "none";
        return;
      }

      // Fast expansion over 280px of scroll as it rises from the bottom
      const expansionRange = 280;
      const expansionProgress = Math.min(1, scrolled / expansionRange);
      const eased = Math.pow(expansionProgress, 0.7);

      const targetWidth = Math.min(windowWidth - (windowWidth < 640 ? 32 : 64), 1280);
      const startWidth = Math.min(240, targetWidth);
      const currentWidth = Math.round(startWidth + (targetWidth - startWidth) * eased);

      const targetHeight = Math.min(620, Math.max(460, windowHeight * 0.65));
      const startHeight = 3;
      const currentHeight = Math.round(startHeight + (targetHeight - startHeight) * eased);

      const isExpanded = eased > 0.05;

      const box = boxRef.current;
      box.style.width = `${currentWidth}px`;
      box.style.height = `${currentHeight}px`;
      box.style.borderRadius = "6px";
      box.style.backgroundColor = "#2563eb";
      box.style.borderColor = "#2563eb";
      box.style.boxShadow = isExpanded
        ? `0 25px 60px -15px rgba(37, 99, 235, ${0.35 * eased})`
        : "none";
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateMorph);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateMorph();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="businesses-need-most"
      className="relative z-10 w-full bg-white pt-4 sm:pt-6 lg:pt-8 pb-20 sm:pb-28 lg:pb-32 overflow-hidden"
    >
      {/* ================= 3 ALTERNATING ZIG-ZAG MARQUEE ROWS ================= */}
      <div className="space-y-4 sm:space-y-5 lg:space-y-6">
        {/* ROW 1: Moves RIGHT */}
        <div className="marquee-row overflow-hidden w-full flex">
          <div className="animate-marquee-right flex items-center gap-4 sm:gap-5 flex-shrink-0 [animation-duration:36s]">
            {row1Items.map((item) => (
              <RenderShowcaseItem key={`r1-a-${item.id}`} item={item} />
            ))}
          </div>
          <div
            aria-hidden="true"
            className="animate-marquee-right flex items-center gap-4 sm:gap-5 flex-shrink-0 [animation-duration:36s]"
          >
            {row1Items.map((item) => (
              <RenderShowcaseItem key={`r1-b-${item.id}`} item={item} />
            ))}
          </div>
        </div>

        {/* ROW 2: Moves LEFT */}
        <div className="marquee-row overflow-hidden w-full flex">
          <div className="animate-marquee-left flex items-center gap-4 sm:gap-5 flex-shrink-0 [animation-duration:30s]">
            {row2Items.map((item) => (
              <RenderShowcaseItem key={`r2-a-${item.id}`} item={item} />
            ))}
          </div>
          <div
            aria-hidden="true"
            className="animate-marquee-left flex items-center gap-4 sm:gap-5 flex-shrink-0 [animation-duration:30s]"
          >
            {row2Items.map((item) => (
              <RenderShowcaseItem key={`r2-b-${item.id}`} item={item} />
            ))}
          </div>
        </div>

        {/* ROW 3: Moves RIGHT */}
        <div className="marquee-row overflow-hidden w-full flex">
          <div className="animate-marquee-right flex items-center gap-4 sm:gap-5 flex-shrink-0 [animation-duration:40s]">
            {row3Items.map((item) => (
              <RenderShowcaseItem key={`r3-a-${item.id}`} item={item} />
            ))}
          </div>
          <div
            aria-hidden="true"
            className="animate-marquee-right flex items-center gap-4 sm:gap-5 flex-shrink-0 [animation-duration:40s]"
          >
            {row3Items.map((item) => (
              <RenderShowcaseItem key={`r3-b-${item.id}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* ================= BOTTOM MASSIVE TITLE (COVERS ~30% OF SPACE) ================= */}
      <div className="mt-10 sm:mt-14 lg:mt-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[104px] xl:text-[124px] 2xl:text-[142px] font-black tracking-tighter text-neutral-950 leading-[0.92] select-none">
          What Businesses
          <span className="block text-[#2563eb]">Need Most.</span>
        </h2>

        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-neutral-500 font-medium max-w-3xl mx-auto leading-relaxed">
          From legal incorporation and GST filing to enterprise tech, custom branding, and working capital —
          everything ambitious founders build with, unified in one platform.
        </p>

        {/* Bottom CTA Action Bar */}
        <div
          ref={ctaRef}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
        >
          <button
            type="button"
            onClick={() => {
              const directorySection = document.getElementById("directory");
              if (directorySection) {
                directorySection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg active:scale-98 cursor-pointer inline-flex items-center justify-center gap-2.5"
          >
            <span>Explore All 69 Services</span>
            <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          <button
            type="button"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 hover:border-neutral-400 font-bold text-sm sm:text-base transition-all duration-200 shadow-2xs active:scale-98 cursor-pointer text-center"
          >
            Book Free Strategy Call
          </button>
        </div>
      </div>

      {/* ================= MORPHING BORDER (TRANSFORMS FROM BORDER INTO CONTAINER AS IT CROSSES FROM BOTTOM) ================= */}
      <div className="mt-8 sm:mt-12 w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <div
          ref={boxRef}
          style={{
            width: "240px",
            height: "3px",
            borderRadius: "6px",
            backgroundColor: "#2563eb",
            borderColor: "#2563eb",
          }}
          className="border-2 overflow-hidden flex-shrink-0 transition-[background-color,border-color] duration-150"
        >
          {/* CONTAINER WITHOUT NOTHING - COMPLETELY EMPTY */}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";

interface TimelineStep {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  colorName: string;
  bgClass: string;
  borderClass: string;
  hoverBorderClass: string;
  badgeBgClass: string;
  badgeTextClass: string;
  accentTextClass: string;
  lineColor: string;
  iconBgClass: string;
  icon: React.ReactNode;
  row: number;
  col: "left" | "right";
}

const stepsData: TimelineStep[] = [
  {
    id: "01-idea",
    step: "01",
    title: "Idea",
    subtitle: "Business structure & activity",
    colorName: "Amber Glow",
    bgClass: "bg-[#fffdf2]",
    borderClass: "border-[#fde047]",
    hoverBorderClass: "hover:border-[#eab308]",
    badgeBgClass: "bg-[#fef08a]",
    badgeTextClass: "text-[#854d0e]",
    accentTextClass: "text-[#a16207]",
    lineColor: "#f59e0b",
    iconBgClass: "bg-[#fef9c3] text-[#ca8a04]",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    row: 1,
    col: "left",
  },
  {
    id: "02-register",
    step: "02",
    title: "Register",
    subtitle: "Company + GST + MSME",
    colorName: "Emerald Mint",
    bgClass: "bg-[#f0fdf4]",
    borderClass: "border-[#86efac]",
    hoverBorderClass: "hover:border-[#22c55e]",
    badgeBgClass: "bg-[#bbf7d0]",
    badgeTextClass: "text-[#166534]",
    accentTextClass: "text-[#15803d]",
    lineColor: "#10b981",
    iconBgClass: "bg-[#dcfce7] text-[#16a34a]",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    row: 2,
    col: "right",
  },
  {
    id: "03-setup",
    step: "03",
    title: "Setup",
    subtitle: "Bank + licence + office",
    colorName: "Sky Azure",
    bgClass: "bg-[#f0f9ff]",
    borderClass: "border-[#7dd3fc]",
    hoverBorderClass: "hover:border-[#0284c7]",
    badgeBgClass: "bg-[#bae6fd]",
    badgeTextClass: "text-[#075985]",
    accentTextClass: "text-[#0369a1]",
    lineColor: "#0ea5e9",
    iconBgClass: "bg-[#e0f2fe] text-[#0284c7]",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    row: 3,
    col: "left",
  },
  {
    id: "04-build",
    step: "04",
    title: "Build",
    subtitle: "Brand + website + software",
    colorName: "Indigo Royal",
    bgClass: "bg-[#eef2ff]",
    borderClass: "border-[#a5b4fc]",
    hoverBorderClass: "hover:border-[#6366f1]",
    badgeBgClass: "bg-[#c7d2fe]",
    badgeTextClass: "text-[#3730a3]",
    accentTextClass: "text-[#4f46e5]",
    lineColor: "#6366f1",
    iconBgClass: "bg-[#e0e7ff] text-[#4f46e5]",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    row: 4,
    col: "right",
  },
  {
    id: "05-hire",
    step: "05",
    title: "Hire",
    subtitle: "Employees + payroll + HR",
    colorName: "Purple Violet",
    bgClass: "bg-[#faf5ff]",
    borderClass: "border-[#d8b4fe]",
    hoverBorderClass: "hover:border-[#a855f7]",
    badgeBgClass: "bg-[#e9d5ff]",
    badgeTextClass: "text-[#6b21a8]",
    accentTextClass: "text-[#9333ea]",
    lineColor: "#a855f7",
    iconBgClass: "bg-[#f3e8ff] text-[#9333ea]",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    row: 5,
    col: "left",
  },
  {
    id: "06-grow",
    step: "06",
    title: "Grow",
    subtitle: "Marketing + funding + automation",
    colorName: "Rose Coral",
    bgClass: "bg-[#fff1f2]",
    borderClass: "border-[#fda4af]",
    hoverBorderClass: "hover:border-[#f43f5e]",
    badgeBgClass: "bg-[#fecdd3]",
    badgeTextClass: "text-[#9f1239]",
    accentTextClass: "text-[#e11d48]",
    lineColor: "#f43f5e",
    iconBgClass: "bg-[#ffe4e6] text-[#e11d48]",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    row: 6,
    col: "right",
  },
];

export default function IdeaToLaunchSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [paths, setPaths] = useState<{
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5: string;
  }>({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
    p5: "",
  });

  const updatePaths = useCallback(() => {
    if (!containerRef.current) return;
    const cRect = containerRef.current.getBoundingClientRect();

    const rects = cardRefs.current.map((el) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return {
        left: r.left - cRect.left,
        right: r.right - cRect.left,
        top: r.top - cRect.top,
        bottom: r.bottom - cRect.top,
        width: r.width,
        height: r.height,
      };
    });

    const r0 = rects[0];
    const r1 = rects[1];
    const r2 = rects[2];
    const r3 = rects[3];
    const r4 = rects[4];
    const r5 = rects[5];

    if (!r0 || !r1 || !r2 || !r3 || !r4 || !r5) return;

    const cornerRadius = 14;
    const landingOffset = 42;

    // 1 -> 2: Start right side of Capsule 1, go to right top of Capsule 2 (No arrow)
    const x1_start = r0.right;
    const y1_start = r0.top + r0.height / 2;
    const x1_end = r1.right - landingOffset;
    const y1_end = r1.top;

    let path1 = "";
    if (x1_end > x1_start && y1_end > y1_start) {
      path1 = `M ${x1_start} ${y1_start} L ${x1_end - cornerRadius} ${y1_start} Q ${x1_end} ${y1_start} ${x1_end} ${y1_start + cornerRadius} L ${x1_end} ${y1_end}`;
    }

    // 2 -> 3: Start left side of Capsule 2, go to left top of Capsule 3 (No arrow)
    const x2_start = r1.left;
    const y2_start = r1.top + r1.height / 2;
    const x2_end = r2.left + landingOffset;
    const y2_end = r2.top;

    let path2 = "";
    if (x2_start > x2_end && y2_end > y2_start) {
      path2 = `M ${x2_start} ${y2_start} L ${x2_end + cornerRadius} ${y2_start} Q ${x2_end} ${y2_start} ${x2_end} ${y2_start + cornerRadius} L ${x2_end} ${y2_end}`;
    }

    // 3 -> 4: Start right side of Capsule 3, go to right top of Capsule 4 (No arrow)
    const x3_start = r2.right;
    const y3_start = r2.top + r2.height / 2;
    const x3_end = r3.right - landingOffset;
    const y3_end = r3.top;

    let path3 = "";
    if (x3_end > x3_start && y3_end > y3_start) {
      path3 = `M ${x3_start} ${y3_start} L ${x3_end - cornerRadius} ${y3_start} Q ${x3_end} ${y3_start} ${x3_end} ${y3_start + cornerRadius} L ${x3_end} ${y3_end}`;
    }

    // 4 -> 5: Start left side of Capsule 4, go to left top of Capsule 5 (No arrow)
    const x4_start = r3.left;
    const y4_start = r3.top + r3.height / 2;
    const x4_end = r4.left + landingOffset;
    const y4_end = r4.top;

    let path4 = "";
    if (x4_start > x4_end && y4_end > y4_start) {
      path4 = `M ${x4_start} ${y4_start} L ${x4_end + cornerRadius} ${y4_start} Q ${x4_end} ${y4_start} ${x4_end} ${y4_start + cornerRadius} L ${x4_end} ${y4_end}`;
    }

    // 5 -> 6: Start right side of Capsule 5, go to right top of Capsule 6 (No arrow)
    const x5_start = r4.right;
    const y5_start = r4.top + r4.height / 2;
    const x5_end = r5.right - landingOffset;
    const y5_end = r5.top;

    let path5 = "";
    if (x5_end > x5_start && y5_end > y5_start) {
      path5 = `M ${x5_start} ${y5_start} L ${x5_end - cornerRadius} ${y5_start} Q ${x5_end} ${y5_start} ${x5_end} ${y5_start + cornerRadius} L ${x5_end} ${y5_end}`;
    }

    setPaths({
      p1: path1,
      p2: path2,
      p3: path3,
      p4: path4,
      p5: path5,
    });
  }, []);

  useEffect(() => {
    updatePaths();

    const handleResize = () => {
      updatePaths();
    };

    window.addEventListener("resize", handleResize);

    const observer = new ResizeObserver(() => {
      updatePaths();
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, [updatePaths]);

  return (
    <section
      id="launch-timeline"
      className="relative z-0 w-full bg-white pt-4 sm:pt-6 pb-2 sm:pb-3 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Split: Left = Zig-zag Timeline (6 rows, 6 capsules), Right = Hook */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ================= LEFT COLUMN: 6-ROW ZIG-ZAG TIMELINE ================= */}
          <div className="order-2 lg:order-1 lg:col-span-7 xl:col-span-7">
            <div ref={containerRef} className="relative flex flex-col gap-[10px]">
              {/* Dynamic SVG Connecting Lines Overlay (Clean elbow model without end arrows) */}
              <svg
                className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none z-0"
                fill="none"
              >
                {paths.p1 && (
                  <path
                    d={paths.p1}
                    stroke="#86efac"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
                {paths.p2 && (
                  <path
                    d={paths.p2}
                    stroke="#7dd3fc"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
                {paths.p3 && (
                  <path
                    d={paths.p3}
                    stroke="#a5b4fc"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
                {paths.p4 && (
                  <path
                    d={paths.p4}
                    stroke="#d8b4fe"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
                {paths.p5 && (
                  <path
                    d={paths.p5}
                    stroke="#fda4af"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>

              {/* ---------- ROW 1: 01 Idea (Left) ---------- */}
              <div className="flex justify-start relative z-10">
                <div
                  ref={(el) => {
                    cardRefs.current[0] = el;
                  }}
                  className="w-full sm:w-[75%]"
                >
                  <LargeCapsuleCard item={stepsData[0]} />
                </div>
              </div>

              {/* ---------- ROW 2: 02 Register (Right) ---------- */}
              <div className="flex justify-end relative z-10">
                <div
                  ref={(el) => {
                    cardRefs.current[1] = el;
                  }}
                  className="w-full sm:w-[75%]"
                >
                  <LargeCapsuleCard item={stepsData[1]} />
                </div>
              </div>

              {/* ---------- ROW 3: 03 Setup (Left) ---------- */}
              <div className="flex justify-start relative z-10">
                <div
                  ref={(el) => {
                    cardRefs.current[2] = el;
                  }}
                  className="w-full sm:w-[75%]"
                >
                  <LargeCapsuleCard item={stepsData[2]} />
                </div>
              </div>

              {/* ---------- ROW 4: 04 Build (Right) ---------- */}
              <div className="flex justify-end relative z-10">
                <div
                  ref={(el) => {
                    cardRefs.current[3] = el;
                  }}
                  className="w-full sm:w-[75%]"
                >
                  <LargeCapsuleCard item={stepsData[3]} />
                </div>
              </div>

              {/* ---------- ROW 5: 05 Hire (Left) ---------- */}
              <div className="flex justify-start relative z-10">
                <div
                  ref={(el) => {
                    cardRefs.current[4] = el;
                  }}
                  className="w-full sm:w-[75%]"
                >
                  <LargeCapsuleCard item={stepsData[4]} />
                </div>
              </div>

              {/* ---------- ROW 6: 06 Grow (Right) ---------- */}
              <div className="flex justify-end relative z-10">
                <div
                  ref={(el) => {
                    cardRefs.current[5] = el;
                  }}
                  className="w-full sm:w-[75%]"
                >
                  <LargeCapsuleCard item={stepsData[5]} />
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: THE HOOK ================= */}
          <div className="order-1 lg:order-2 lg:col-span-5 xl:col-span-5">
            <div className="space-y-4 sm:space-y-5 bg-white pt-1 sm:pt-2">
              {/* The Hook Headline */}
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-neutral-900 tracking-tight leading-[1.14]">
                  Starting a Business?
                  <span className="block text-[#2563eb] mt-1 font-extrabold">
                    We&apos;ll Take You From Idea to Launch.
                  </span>
                </h2>
                <p className="text-xs sm:text-sm md:text-[14px] text-neutral-600 mt-2 leading-relaxed font-normal">
                  Turn your ambition into a fully incorporated, legally compliant, and operational business enterprise.
                  Our corporate advisors, legal team, and tech architects streamline all 6 phases under one roof.
                </p>
              </div>

              {/* Value Pillars List */}
              <div className="space-y-2 pt-0.5">
                <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-neutral-50/80 border border-neutral-100/90">
                  <div className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                      100% Digital & Paperless
                    </h4>
                    <p className="text-[11px] sm:text-xs text-neutral-500 mt-0.5 leading-snug">
                      Fast MCA approvals, PAN/TAN, and bank account setup without visiting government offices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-neutral-50/80 border border-neutral-100/90">
                  <div className="w-6 h-6 rounded-md bg-blue-100 text-[#2563eb] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                      Complete Ecosystem Coverage
                    </h4>
                    <p className="text-[11px] sm:text-xs text-neutral-500 mt-0.5 leading-snug">
                      From company formation to websites, payroll automation, GST compliance, and growth funding.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-neutral-50/80 border border-neutral-100/90">
                  <div className="w-6 h-6 rounded-md bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                      Dedicated Launch Specialist
                    </h4>
                    <p className="text-[11px] sm:text-xs text-neutral-500 mt-0.5 leading-snug">
                      A single accountable point of contact coordinating all documentations and submissions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-0.5">
                <button
                  type="button"
                  className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 py-3 text-xs sm:text-sm font-semibold rounded-[6px] transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.99] cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <span>Launch My Business</span>
                  <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 hover:border-neutral-400 px-5 py-3 text-xs sm:text-sm font-semibold rounded-[6px] transition-all duration-200 shadow-2xs active:scale-[0.99] cursor-pointer text-center"
                >
                  Book Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{/* ================= 2X LARGER CAPSULE CARD ================= */}
interface LargeCapsuleCardProps {
  item: TimelineStep;
}

function LargeCapsuleCard({ item }: LargeCapsuleCardProps) {
  return (
    <div
      className={`group relative w-full rounded-full ${item.bgClass} border-2 ${item.borderClass} ${item.hoverBorderClass} py-2.5 px-4 sm:py-3 sm:px-5 md:py-3.5 md:px-5 transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md hover:scale-[1.01]`}
    >
      <div className="flex items-center justify-between gap-3 sm:gap-3.5">
        {/* Left Section: Big Number Badge + Title & Subtitle */}
        <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
          {/* Step Number Badge */}
          <div
            className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full ${item.badgeBgClass} ${item.badgeTextClass} font-mono font-black text-sm sm:text-base md:text-lg flex items-center justify-center flex-shrink-0 shadow-2xs border border-black/5`}
          >
            {item.step}
          </div>

          {/* Title & Subtitle */}
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg md:text-xl font-black text-neutral-900 tracking-tight leading-tight truncate">
              {item.title}
            </h3>
            <p className={`text-xs sm:text-[13px] md:text-sm font-semibold ${item.accentTextClass} truncate mt-0.5 leading-snug`}>
              {item.subtitle}
            </p>
          </div>
        </div>

        {/* Right Section: Smooth Icon to Arrow Transition */}
        <div
          className={`relative w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full ${item.iconBgClass} flex items-center justify-center flex-shrink-0 shadow-2xs overflow-hidden transition-transform duration-300 group-hover:scale-110`}
        >
          {/* Default Category Icon (Smoothly fades out and slides left on hover) */}
          <div className="flex items-center justify-center transition-all duration-300 ease-out transform group-hover:opacity-0 group-hover:scale-75 group-hover:-translate-x-2 [&>svg]:w-4.5 [&>svg]:h-4.5 sm:[&>svg]:w-5 sm:[&>svg]:h-5">
            {item.icon}
          </div>

          {/* Hover Arrow Icon (Smoothly fades in and slides into center on hover) */}
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out transform opacity-0 scale-75 translate-x-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 stroke-[2.5]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

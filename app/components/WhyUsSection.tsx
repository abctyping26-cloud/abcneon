"use client";

import React from "react";

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="relative z-10 w-full overflow-hidden pt-4 sm:pt-8 lg:pt-10 pb-16 sm:pb-24 lg:pb-28 bg-gradient-to-b from-white via-[#e2eefa] to-[#eaf2fc]"
    >
      {/* ================= FLOWING GLOWING AMBIENT LIGHT STREAKS ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft Radial Ambient Studio Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[500px] sm:h-[650px] bg-[radial-gradient(ellipse_at_center,rgba(191,219,254,0.85),rgba(219,234,254,0.4)_50%,transparent_75%)] blur-2xl opacity-90" />
        <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(147,197,253,0.5),transparent_70%)] blur-3xl opacity-70" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(191,219,254,0.6),transparent_70%)] blur-3xl opacity-80" />

        {/* SVG Flowing Curved Glowing Lines (Sweeping Orbital Trails) */}
        <svg
          className="absolute inset-0 w-full h-full min-w-[1200px] left-1/2 -translate-x-1/2"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Primary Glowing Gradient */}
            <linearGradient id="glow-grad-1" x1="0%" y1="20%" x2="100%" y2="80%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
              <stop offset="30%" stopColor="#93c5fd" stopOpacity="0.85" />
              <stop offset="55%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="80%" stopColor="#60a5fa" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
            </linearGradient>

            {/* Secondary Soft Cyan Gradient */}
            <linearGradient id="glow-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
              <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.6" />
              <stop offset="70%" stopColor="#93c5fd" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
            </linearGradient>

            {/* Gaussian Blur Filters for Neon Bloom */}
            <filter id="glow-blur-sm" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="glow-blur-lg" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="16" />
            </filter>
          </defs>

          {/* Sweeping Arc 1: Deep wide aura blur */}
          <path
            d="M -120 280 C 180 500, 520 720, 940 640 C 1220 585, 1420 420, 1560 260"
            stroke="url(#glow-grad-1)"
            strokeWidth="28"
            strokeLinecap="round"
            filter="url(#glow-blur-lg)"
            opacity="0.45"
          />

          {/* Sweeping Arc 1: Core Crisp Neon Line */}
          <path
            d="M -120 280 C 180 500, 520 720, 940 640 C 1220 585, 1420 420, 1560 260"
            stroke="url(#glow-grad-1)"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="url(#glow-blur-sm)"
            opacity="0.85"
          />

          {/* Sweeping Arc 2: Counter-orbital light ribbon */}
          <path
            d="M -60 620 C 260 420, 680 260, 1140 340 C 1360 380, 1520 540, 1580 680"
            stroke="url(#glow-grad-2)"
            strokeWidth="22"
            strokeLinecap="round"
            filter="url(#glow-blur-lg)"
            opacity="0.35"
          />
          <path
            d="M -60 620 C 260 420, 680 260, 1140 340 C 1360 380, 1520 540, 1580 680"
            stroke="url(#glow-grad-2)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#glow-blur-sm)"
            opacity="0.75"
          />

          {/* Accent Upper Light Trail */}
          <path
            d="M 120 80 C 440 180, 880 120, 1340 40"
            stroke="url(#glow-grad-1)"
            strokeWidth="2"
            strokeLinecap="round"
            filter="url(#glow-blur-sm)"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* ================= TABLET CONTAINER ================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Tablet Outer Hardware Frame (Compact & Sleek) */}
        <div className="relative w-full max-w-3xl lg:max-w-[840px] rounded-[24px] sm:rounded-[32px] md:rounded-[38px] bg-slate-950 p-2 sm:p-2.5 md:p-3 shadow-[0_25px_70px_-15px_rgba(37,99,235,0.28),0_15px_35px_-10px_rgba(15,23,42,0.2)] ring-1 ring-slate-800/80">
          {/* Outer Bezel Rim Reflection */}
          <div className="pointer-events-none absolute inset-0 rounded-[24px] sm:rounded-[32px] md:rounded-[38px] ring-1 ring-white/15" />

          {/* Top Camera Punch-hole on Bezel */}
          <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
            <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-700/80 shadow-inner flex items-center justify-center">
              <div className="w-0.5 h-0.5 rounded-full bg-blue-950" />
            </div>
          </div>

          {/* Screen Inner Bezel & Display */}
          <div className="relative w-full rounded-[18px] sm:rounded-[24px] md:rounded-[30px] overflow-hidden bg-gradient-to-b from-[#fbfdff] via-[#f4f8fe] to-[#edf4fd] border border-white/80 shadow-inner">
            {/* Screen Glass Light Reflection / Sheen Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/5 opacity-80 z-20" />
            <div className="pointer-events-none absolute -top-1/3 -left-1/4 w-[150%] h-[120%] bg-gradient-to-b from-white/25 via-transparent to-transparent rotate-12 transform z-20" />

            {/* Screen Content Wrapper */}
            <div className="relative z-10 px-4 sm:px-8 md:px-10 py-6 sm:py-8 md:py-9 text-center flex flex-col items-center">
              {/* Big Title: Why Us (Capsule removed) */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 tracking-tight leading-tight">
                Why Us
              </h2>

              <p className="mt-1 sm:mt-1.5 text-base sm:text-lg md:text-xl font-extrabold text-neutral-800 tracking-tight">
                One Platform. Multiple Experts.
              </p>

              {/* Subtitle */}
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-[13px] text-neutral-500 font-medium max-w-lg mx-auto leading-relaxed">
                We combine innovative technology with industry best practices to deliver a secure,
                transparent, and seamless experience for every founder.
              </p>

              {/* Horizontal Divider with 3D Faceted Diamond Emblem */}
              <div className="relative w-full max-w-lg my-4 sm:my-5 flex items-center justify-center">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
                <div className="absolute px-2.5 bg-[#f6f9fe]">
                  {/* 3D Faceted Crystal Emblem */}
                  <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center">
                    {/* Ambient Glow behind Crystal */}
                    <div className="absolute inset-0 rounded-full bg-blue-400/35 blur-sm" />
                    <svg
                      className="w-7 h-7 sm:w-8 sm:h-8 relative drop-shadow-sm"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Top Left Facet (Light Cyan) */}
                      <polygon points="20,4 8,18 20,22" fill="#38bdf8" />
                      {/* Top Right Facet (Bright Sky Blue) */}
                      <polygon points="20,4 32,18 20,22" fill="#60a5fa" />
                      {/* Bottom Left Facet (Royal Blue) */}
                      <polygon points="20,22 8,18 20,36" fill="#2563eb" />
                      {/* Bottom Right Facet (Deep Navy Blue) */}
                      <polygon points="20,22 32,18 20,36" fill="#1d4ed8" />
                      {/* Top Specular Glint Highlight */}
                      <polygon points="20,4 16,14 20,17 24,14" fill="#ffffff" fillOpacity="0.75" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 3 Frosted Feature Cards */}
              <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-3.5 lg:gap-4 mt-1">
                {/* Card 1: Expertise At Every Step */}
                <div className="group rounded-xl bg-white/85 backdrop-blur-md p-3.5 sm:p-4 text-left border border-white/90 shadow-[0_6px_20px_-6px_rgba(0,0,0,0.05)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <div className="w-8 h-8 rounded-lg bg-[#2563eb] text-white flex items-center justify-center shadow-2xs mb-2.5 group-hover:scale-105 transition-transform duration-200">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-neutral-900 tracking-tight">
                    Expertise At Every Step
                  </h4>
                  <p className="mt-1 text-[11px] sm:text-xs text-neutral-500 font-medium leading-relaxed">
                    Get professional insights and personalized guidance. Every stage is overseen by
                    verified corporate advisors.
                  </p>
                </div>

                {/* Card 2: Industries Best Practices */}
                <div className="group rounded-xl bg-white/85 backdrop-blur-md p-3.5 sm:p-4 text-left border border-white/90 shadow-[0_6px_20px_-6px_rgba(0,0,0,0.05)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <div className="w-8 h-8 rounded-lg bg-[#2563eb] text-white flex items-center justify-center shadow-2xs mb-2.5 group-hover:scale-105 transition-transform duration-200">
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-neutral-900 tracking-tight">
                    Industries Best Practices
                  </h4>
                  <p className="mt-1 text-[11px] sm:text-xs text-neutral-500 font-medium leading-relaxed">
                    We follow the highest industry standards to ensure safety and growth. 100% transparent
                    operations with real-time audits.
                  </p>
                </div>

                {/* Card 3: Protected By Assurance */}
                <div className="group rounded-xl bg-white/85 backdrop-blur-md p-3.5 sm:p-4 text-left border border-white/90 shadow-[0_6px_20px_-6px_rgba(0,0,0,0.05)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <div className="w-8 h-8 rounded-lg bg-[#2563eb] text-white flex items-center justify-center shadow-2xs mb-2.5 group-hover:scale-105 transition-transform duration-200">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-neutral-900 tracking-tight">
                    Protected By Assurance
                  </h4>
                  <p className="mt-1 text-[11px] sm:text-xs text-neutral-500 font-medium leading-relaxed">
                    Your data and filings are protected by leading compliance standards and verified
                    SLAs for complete peace of mind.
                  </p>
                </div>
              </div>

              {/* Bottom CTA Button: Request a Demo */}
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  onClick={() => {
                    const directorySection = document.getElementById("directory");
                    if (directorySection) {
                      directorySection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-[0_8px_20px_-4px_rgba(37,99,235,0.4)] hover:shadow-[0_12px_24px_-4px_rgba(37,99,235,0.5)] active:scale-98 cursor-pointer"
                >
                  Request a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

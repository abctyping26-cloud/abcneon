"use client";

import React from "react";

interface StepItem {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const steps: StepItem[] = [
  {
    number: "01",
    title: "Tell us what you need",
    subtitle: "Share your business requirement in 60s",
    icon: (
      <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "We identify the right service",
    subtitle: "Tailored match for your exact scope",
    icon: (
      <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Expert handles your case",
    subtitle: "Verified specialist assigned immediately",
    icon: (
      <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Track progress online",
    subtitle: "Live status updates & timeline view",
    icon: (
      <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Get your documents/result",
    subtitle: "Certified, compliant & ready to deploy",
    icon: (
      <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function RequirementToResolutionSection() {
  return (
    <section
      id="requirement-to-resolution"
      className="relative z-10 w-full overflow-hidden pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-28 lg:pb-36 bg-gradient-to-b from-[#eaf2fc] via-white to-white"
    >
      {/* Background Soft Lighting / Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.035]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
            From Requirement to Resolution
          </h2>

          <p className="mt-3 text-sm sm:text-base text-neutral-500 font-medium max-w-xl mx-auto leading-relaxed">
            A seamless, transparent 5-step journey connecting your business needs to certified execution.
          </p>
        </div>

        {/* ================= DESKTOP HORIZONTAL TIMELINE (2X ZIG-ZAG CAPSULES) ================= */}
        <div className="hidden lg:block mt-6 sm:mt-8 lg:mt-10 mb-12 relative w-full">
          {/* Continuous Center Horizontal Line */}
          <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#2563eb]/40 to-transparent z-0" />

          {/* 5 Timeline Nodes Grid */}
          <div className="grid grid-cols-5 relative z-10">
            {steps.map((step, index) => {
              const isTop = index % 2 === 0; // Steps 0, 2, 4 are Top; Steps 1, 3 are Bottom

              return (
                <div
                  key={step.number}
                  className="flex flex-col items-center relative min-h-[340px] xl:min-h-[370px] justify-center"
                >
                  {/* TOP CAPSULE (Zig: Steps 1, 3, 5) - 2X SIZE */}
                  {isTop && (
                    <div className="absolute bottom-[calc(50%+14px)] flex flex-col items-center group">
                      {/* 2X Capsule Element (No 'Step X' label) */}
                      <div className="rounded-full px-6 py-4 xl:px-7 xl:py-5 bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#2563eb] transition-all duration-200 flex items-center gap-3.5 w-max max-w-[270px] xl:max-w-[310px] cursor-pointer">
                        <div className="w-11 h-11 xl:w-12 xl:h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563eb] transition-colors duration-200 group-hover:[&>svg]:text-white">
                          {step.icon}
                        </div>
                        <div className="text-left overflow-hidden">
                          <div className="text-sm sm:text-base font-extrabold text-neutral-900 leading-snug">
                            {step.title}
                          </div>
                          <div className="text-[11px] text-neutral-500 font-medium leading-tight mt-0.5 line-clamp-1">
                            {step.subtitle}
                          </div>
                        </div>
                      </div>

                      {/* Vertical Connector Stem: Capsule to Dot */}
                      <div className="w-[2.5px] h-8 xl:h-10 bg-gradient-to-t from-[#2563eb] to-blue-200 mt-1.5" />
                    </div>
                  )}

                  {/* CENTER NUMBERED DOT ON THE HORIZONTAL LINE */}
                  <div className="relative flex items-center justify-center z-20 group cursor-pointer">
                    {/* Pulsing ring aura on hover */}
                    <div className="absolute w-10 h-10 rounded-full bg-blue-400/25 scale-0 group-hover:scale-100 transition-transform duration-200" />
                    {/* Milestone Numbered Dot */}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#2563eb] bg-white text-[#2563eb] ring-4 ring-blue-50 shadow-xs flex items-center justify-center font-black text-xs sm:text-sm group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-200">
                      {index + 1}
                    </div>
                  </div>

                  {/* BOTTOM CAPSULE (Zag: Steps 2, 4) - 2X SIZE */}
                  {!isTop && (
                    <div className="absolute top-[calc(50%+14px)] flex flex-col items-center group">
                      {/* Vertical Connector Stem: Dot to Capsule */}
                      <div className="w-[2.5px] h-8 xl:h-10 bg-gradient-to-b from-[#2563eb] to-blue-200 mb-1.5" />

                      {/* 2X Capsule Element (No 'Step X' label) */}
                      <div className="rounded-full px-6 py-4 xl:px-7 xl:py-5 bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#2563eb] transition-all duration-200 flex items-center gap-3.5 w-max max-w-[270px] xl:max-w-[310px] cursor-pointer">
                        <div className="w-11 h-11 xl:w-12 xl:h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563eb] transition-colors duration-200 group-hover:[&>svg]:text-white">
                          {step.icon}
                        </div>
                        <div className="text-left overflow-hidden">
                          <div className="text-sm sm:text-base font-extrabold text-neutral-900 leading-snug">
                            {step.title}
                          </div>
                          <div className="text-[11px] text-neutral-500 font-medium leading-tight mt-0.5 line-clamp-1">
                            {step.subtitle}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= MOBILE & TABLET VERTICAL ZIG-ZAG TIMELINE (2X SIZE) ================= */}
        <div className="block lg:hidden mt-12 relative max-w-lg mx-auto">
          {/* Central Vertical Timeline Line */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#2563eb]/40 via-blue-200 to-slate-200" />

          <div className="space-y-8 sm:space-y-10 relative">
            {steps.map((step, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={step.number}
                  className="relative flex items-center sm:justify-center"
                >
                  {/* Numbered Dot on Vertical Axis */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full border-2 border-[#2563eb] bg-white text-[#2563eb] ring-4 ring-blue-50 shadow-xs flex items-center justify-center font-black text-xs z-20">
                    {idx + 1}
                  </div>

                  {/* Responsive 2X Capsule Container */}
                  <div
                    className={`w-full pl-14 sm:pl-0 sm:w-1/2 flex ${
                      isLeft ? "sm:pr-8 sm:justify-end" : "sm:pl-8 sm:ml-auto sm:justify-start"
                    }`}
                  >
                    <div className="rounded-full px-6 py-4.5 sm:px-7 sm:py-5 bg-white border border-slate-200/90 shadow-sm flex items-center gap-4 hover:border-[#2563eb] transition-colors w-full sm:w-auto">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                        {step.icon}
                      </div>
                      <div className="text-left">
                        <div className="text-sm sm:text-base font-extrabold text-neutral-900 leading-snug">
                          {step.title}
                        </div>
                        <div className="text-xs text-neutral-500 font-medium mt-0.5">
                          {step.subtitle}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

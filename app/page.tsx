"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Lenis from "lenis";
import { catalogCategories } from "./data/catalogData";

export default function Home() {
  const [selectedCatIndex, setSelectedCatIndex] = useState(0);
  const [selectedSubIndex, setSelectedSubIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-loop through categories (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setSelectedCatIndex((prev) => (prev + 1) % catalogCategories.length);
      setSelectedSubIndex(0);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeCategory = catalogCategories[selectedCatIndex] || catalogCategories[0];
  const activeSubItem = activeCategory.items[selectedSubIndex] || activeCategory.items[0];

  const handleSelectCategory = (index: number) => {
    setSelectedCatIndex(index);
    setSelectedSubIndex(0);
    setIsPaused(true);
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-neutral-900 select-none">
      {/* ================= STICKY HERO CONTAINER ================= */}
      <div className="sticky top-0 z-0 min-h-screen flex flex-col justify-between bg-white">
        {/* Header Bar: Clean bar without content as requested */}
        <header className="w-full h-16 sm:h-20 bg-white border-b border-neutral-100 flex-shrink-0" />

        {/* Main Hero Section */}
        <main className="relative flex-1 flex items-center justify-center overflow-hidden py-8 sm:py-12 lg:py-14 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* ================= LEFT COLUMN ================= */}
            <div className="lg:col-span-6 xl:col-span-5 space-y-6">
              {/* Category Capsule */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-50 border border-neutral-200/90 text-xs sm:text-[13px] font-semibold text-neutral-800 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
                <span>Business Setup • Compliance • Finance • Technology • Growth</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-neutral-900 leading-[1.12]">
                Everything Your Business Needs.
                <span className="block text-neutral-400 font-medium mt-1">
                  Under One Roof.
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl">
                From registration and compliance to finance, documentation,
                technology and growth — get the services you need to start and run
                your business.
              </p>

              {/* CTA Buttons - smoothed sharp rectangle edges */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-7 py-3.5 text-base font-semibold rounded-[6px] transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.99] cursor-pointer inline-flex items-center gap-2"
                >
                  Explore Services
                  <svg
                    className="w-4 h-4 stroke-[2.5]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 hover:border-neutral-400 px-7 py-3.5 text-base font-semibold rounded-[6px] transition-all duration-200 shadow-xs active:scale-[0.99] cursor-pointer"
                >
                  Talk to an Expert
                </button>
              </div>
            </div>

            {/* ================= RIGHT COLUMN (IMAGE SPACE + 6 FLOATING BOXES) ================= */}
            <div className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[480px] sm:max-w-[540px] flex items-center justify-center py-10 px-4">
                {/* 1. CENTRAL PERSON IMAGE CONTAINER */}
                <div className="w-[300px] sm:w-[380px] lg:w-[410px] h-[460px] sm:h-[530px] rounded-[36px] sm:rounded-[40px] overflow-hidden relative shadow-2xl shadow-neutral-300/60 border border-neutral-100 bg-neutral-100 flex-shrink-0">
                  <Image
                    src="/lucid-origin_a_image_of_a_girl_looking_at_laptop_smiling_doing_something_while_siting_in_a_ca-0.jpg"
                    alt="Professional working on laptop smiling"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 300px, (max-width: 1024px) 380px, 410px"
                  />
                </div>

                {/* 2. FLOATING BOX 1: Top-Right Pill (Manage Compliance) */}
                <div className="absolute -top-1 sm:top-2 right-2 sm:-right-4 z-20 animate-float-slow">
                  <div className="bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full border border-neutral-200/90 shadow-lg shadow-black/5 flex items-center gap-2.5 hover:shadow-xl transition-all cursor-pointer">
                    <span className="w-5 h-5 rounded-full bg-[#2563eb] text-white flex items-center justify-center text-[10px] font-bold">
                      ✓
                    </span>
                    <span className="text-xs sm:text-[13px] font-bold text-neutral-900">
                      Manage Compliance
                    </span>
                    <span className="text-[11px] text-neutral-400 hidden sm:inline">
                      • Tax, GST, ROC
                    </span>
                  </div>
                </div>

                {/* 3. FLOATING BOX 2: Mid-Right Pill (Get Funding) */}
                <div className="absolute top-14 sm:top-18 -right-2 sm:-right-8 z-20 animate-float-medium">
                  <div className="bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full border border-neutral-200/90 shadow-lg shadow-black/5 flex items-center gap-2.5 hover:shadow-xl transition-all cursor-pointer">
                    <span className="w-5 h-5 rounded-full bg-[#2563eb] text-white flex items-center justify-center text-[10px] font-bold">
                      ✓
                    </span>
                    <span className="text-xs sm:text-[13px] font-bold text-neutral-900">
                      Get Funding
                    </span>
                    <span className="text-[11px] text-neutral-400 hidden sm:inline">
                      • Loans & Subsidies
                    </span>
                  </div>
                </div>

                {/* 4. FLOATING BOX 3: Top-Left Card (Start a Business) */}
                <div className="absolute top-6 sm:top-10 -left-2 sm:-left-12 z-20 animate-float-delayed">
                  <div className="bg-[#2563eb] text-white p-4 sm:p-4.5 rounded-2xl shadow-xl shadow-blue-500/25 max-w-[190px] sm:max-w-[210px] hover:scale-105 transition-all cursor-pointer">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center text-xs">
                        🚀
                      </span>
                      <h3 className="font-bold text-sm sm:text-base leading-tight">
                        Start a Business
                      </h3>
                    </div>
                    <p className="text-[11px] sm:text-xs text-blue-100 leading-snug">
                      Registration, GST, licences & MSME support
                    </p>
                  </div>
                </div>

                {/* 5. FLOATING BOX 4: Mid-Left Card (Hire & Manage People) */}
                <div className="absolute top-[44%] -left-4 sm:-left-16 z-20 animate-float-slow">
                  <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-neutral-200/90 shadow-xl shadow-black/5 flex items-start gap-3 max-w-[200px] sm:max-w-[220px] hover:shadow-2xl transition-all cursor-pointer">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563eb] flex-shrink-0">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-xs sm:text-sm text-neutral-900 leading-tight">
                        Hire & Manage People
                      </h3>
                      <p className="text-[11px] text-neutral-500 mt-1 leading-snug">
                        Payroll, HR, labour compliance
                      </p>
                    </div>
                  </div>
                </div>

                {/* 6. FLOATING BOX 5: Bottom-Left Card (Build Your Digital Presence with Skill Pills) */}
                <div className="absolute -bottom-3 sm:bottom-4 -left-2 sm:-left-12 z-20 animate-float-medium">
                  <div className="bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-neutral-200/90 shadow-xl shadow-black/8 hover:shadow-2xl transition-all cursor-pointer">
                    <h3 className="font-bold text-xs sm:text-sm text-neutral-900 mb-2.5">
                      Build Your Digital Presence
                    </h3>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-semibold text-[#2563eb]">
                        + Website
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-semibold text-[#2563eb]">
                        + Branding
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-semibold text-[#2563eb]">
                        + Software
                      </span>
                    </div>
                  </div>
                </div>

                {/* 7. FLOATING BOX 6: Bottom-Right Card (Grow Your Business) */}
                <div className="absolute -bottom-5 sm:-bottom-3 -right-2 sm:-right-8 z-20 animate-float-delayed">
                  <div className="bg-[#2563eb] text-white p-4 sm:p-5 rounded-2xl shadow-xl shadow-blue-500/25 max-w-[190px] sm:max-w-[210px] hover:scale-105 transition-all cursor-pointer">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
                        📈
                      </span>
                      <h3 className="font-bold text-sm sm:text-base leading-tight">
                        Grow Your Business
                      </h3>
                    </div>
                    <p className="text-[11px] text-blue-100 leading-snug">
                      Marketing, SEO, automation & scale
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    {/* ================= WHAT DO YOU NEED HELP WITH? SECTION (OVERLAPPING SHEET) ================= */}
    <section
      id="services"
      className="relative z-10 w-full min-h-screen bg-white pt-16 sm:pt-24 pb-8 sm:pb-12 shadow-[0_-20px_50px_rgba(0,0,0,0.06)] flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Bento & Title Grid: Seamless Box Silhouette */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
            {/* 1. START A BUSINESS (Row 1 Left - Pastel Mint) */}
            <div className="group order-2 lg:order-1 sm:col-span-1 lg:col-span-4 rounded-[6px] bg-[#eaf7ee] p-7 sm:p-8 flex flex-col justify-center min-h-[160px] sm:min-h-[175px] transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                Start a Business
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 mt-2 font-normal leading-relaxed">
                Registration, GST, licences, MSME
              </p>
              <div className="mt-3.5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-900 opacity-0 group-hover:opacity-100 transition-all duration-200">
                <span>See more</span>
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>

            {/* 2. SECTION TITLE (Row 1 Center) */}
            <div className="order-1 lg:order-2 col-span-full sm:col-span-2 lg:col-span-4 flex flex-col items-center justify-center text-center p-6 sm:p-8 min-h-[130px] sm:min-h-[175px]">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-neutral-900 tracking-tight leading-[1.18]">
                What do you<br className="hidden sm:inline" /> need help with?
              </h2>
            </div>

            {/* 3. MANAGE COMPLIANCE (Row 1 Right - Pastel Sky Blue) */}
            <div className="group order-3 lg:order-3 sm:col-span-1 lg:col-span-4 rounded-[6px] bg-[#edf5ff] p-7 sm:p-8 flex flex-col justify-center min-h-[160px] sm:min-h-[175px] transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                Manage Compliance
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 mt-2 font-normal leading-relaxed">
                GST, tax, labour, ROC
              </p>
              <div className="mt-3.5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-900 opacity-0 group-hover:opacity-100 transition-all duration-200">
                <span>See more</span>
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>

            {/* 4. GET FUNDING (Row 2 Col 1 - Pastel Warm Amber/Cream) */}
            <div className="group order-4 sm:col-span-1 lg:col-span-3 rounded-[6px] bg-[#fef8ea] p-6 sm:p-7 flex flex-col justify-center min-h-[160px] sm:min-h-[175px] transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer">
              <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                Get Funding
              </h3>
              <p className="text-sm text-neutral-600 mt-2 font-normal leading-relaxed">
                Loans, subsidies, project reports
              </p>
              <div className="mt-3.5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-900 opacity-0 group-hover:opacity-100 transition-all duration-200">
                <span>See more</span>
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>

            {/* 5. HIRE & MANAGE PEOPLE (Row 2 Col 2 - Pastel Lavender) */}
            <div className="group order-5 sm:col-span-1 lg:col-span-3 rounded-[6px] bg-[#f4f0fd] p-6 sm:p-7 flex flex-col justify-center min-h-[160px] sm:min-h-[175px] transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer">
              <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                Hire & Manage People
              </h3>
              <p className="text-sm text-neutral-600 mt-2 font-normal leading-relaxed">
                Payroll, HR, labour compliance
              </p>
              <div className="mt-3.5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-900 opacity-0 group-hover:opacity-100 transition-all duration-200">
                <span>See more</span>
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>

            {/* 6. BUILD YOUR DIGITAL PRESENCE (Row 2 Col 3 - Pastel Aqua/Teal) */}
            <div className="group order-6 sm:col-span-1 lg:col-span-3 rounded-[6px] bg-[#eaf8f8] p-6 sm:p-7 flex flex-col justify-center min-h-[160px] sm:min-h-[175px] transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer">
              <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                Build Your Digital Presence
              </h3>
              <p className="text-sm text-neutral-600 mt-2 font-normal leading-relaxed">
                Website, branding, software
              </p>
              <div className="mt-3.5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-900 opacity-0 group-hover:opacity-100 transition-all duration-200">
                <span>See more</span>
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>

            {/* 7. GROW YOUR BUSINESS (Row 2 Col 4 - Pastel Peach/Blush) */}
            <div className="group order-7 sm:col-span-1 lg:col-span-3 rounded-[6px] bg-[#fff0eb] p-6 sm:p-7 flex flex-col justify-center min-h-[160px] sm:min-h-[175px] transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer">
              <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                Grow Your Business
              </h3>
              <p className="text-sm text-neutral-600 mt-2 font-normal leading-relaxed">
                Marketing, SEO, automation
              </p>
              <div className="mt-3.5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-900 opacity-0 group-hover:opacity-100 transition-all duration-200">
                <span>See more</span>
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* ================= BOTTOM CONSULTATION LONG BAR ================= */}
          <div className="mt-8 sm:mt-10 w-full rounded-[6px] bg-neutral-900 text-white p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border-0">
            {/* Ambient background glow accent */}
            <div className="absolute -right-20 -top-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-2 text-center md:text-left relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-blue-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Complimentary 15-Minute Consultation
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Need guidance choosing the right business services?
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base max-w-xl leading-relaxed">
                Connect with our corporate consultants to outline the optimal compliance,
                finance, and growth roadmap for your venture.
              </p>
            </div>

            {/* Start Capsule Button */}
            <div className="relative z-10 flex-shrink-0">
              <button
                type="button"
                className="px-8 py-3.5 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 active:scale-95 cursor-pointer inline-flex items-center gap-2.5"
              >
                <span>Consult an Expert</span>
                <svg
                  className="w-4 h-4 stroke-[2.5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: EVERYTHING YOUR BUSINESS NEEDS (50:50 BENTO DIRECTORY) ================= */}
      <section id="directory" className="relative z-10 w-full bg-white pt-10 sm:pt-14 pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Title in Top Left */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-neutral-900 tracking-tight leading-[1.12] max-w-3xl">
              Everything Your Business Needs,
              <span className="block text-neutral-400 font-medium mt-1">From Start to Scale</span>
            </h2>
          </div>

          {/* 50:50 Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            {/* ================= LEFT BENTO: MAIN MENU (50%) ================= */}
            <div
              className="lg:col-span-6 rounded-[6px] bg-[#f8f9fb] p-6 sm:p-8 flex flex-col justify-between border-0 shadow-2xs"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div>
                {/* Header */}
                <div className="pb-4 mb-5 border-b border-neutral-200/60">
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900">
                    Service Directory
                  </h3>
                </div>

                {/* 8 Category Menu List */}
                <div className="space-y-1.5">
                  {catalogCategories.map((cat, idx) => {
                    const isSelected = selectedCatIndex === idx;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => handleSelectCategory(idx)}
                        className={`w-full text-left p-3.5 sm:p-4 rounded-[6px] transition-all duration-200 cursor-pointer flex items-center justify-between border-0 ${
                          isSelected
                            ? "shadow-xs font-bold"
                            : "hover:bg-white/80 text-neutral-600 hover:text-neutral-900"
                        }`}
                        style={{
                          backgroundColor: isSelected ? cat.bgColor : undefined,
                        }}
                      >
                        <div className="flex items-center gap-3.5">
                          <span
                            className={`text-xs font-mono font-bold px-2 py-0.5 rounded-[4px] ${
                              isSelected
                                ? "bg-white/80 text-neutral-900"
                                : "bg-neutral-200/60 text-neutral-500"
                            }`}
                          >
                            {cat.number}
                          </span>
                          <span
                            className={`text-sm sm:text-base tracking-tight ${
                              isSelected ? "text-neutral-900 font-bold" : "font-medium"
                            }`}
                          >
                            {cat.title}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-xs text-neutral-400 font-medium">
                            {cat.items.length} services
                          </span>
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isSelected ? "text-neutral-900 translate-x-0.5" : "text-neutral-300"
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Loop hint footer */}
              <div className="pt-6 mt-6 border-t border-neutral-200/60 flex items-center justify-between text-xs text-neutral-500">
                <span>Select any domain or let the menu loop</span>
                <span className="font-mono font-semibold text-neutral-700">
                  {selectedCatIndex + 1} / {catalogCategories.length}
                </span>
              </div>
            </div>

            {/* ================= RIGHT BENTO: SUB-ITEMS & AI SERVICE DETAILS (50%) ================= */}
            <div
              className="lg:col-span-6 rounded-[6px] p-6 sm:p-8 flex flex-col justify-between border-0 shadow-2xs transition-colors duration-300"
              style={{ backgroundColor: activeCategory.bgColor }}
            >
              <div>
                {/* Active Category Header */}
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                    {activeCategory.title}
                  </h3>

                  {(activeCategory.hook || activeCategory.note) && (
                    <p className="text-sm sm:text-base text-neutral-600 mt-2 font-medium leading-relaxed">
                      {activeCategory.hook || activeCategory.note}
                    </p>
                  )}
                </div>

                {/* Sub-Items Chips List (Interactive) */}
                <div className="mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2.5">
                    Click Any Service To Inspect Details:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeCategory.items.map((sub, sIdx) => {
                      const isSubSelected = selectedSubIndex === sIdx;
                      return (
                        <button
                          key={sub.name}
                          type="button"
                          onClick={() => setSelectedSubIndex(sIdx)}
                          className={`px-3 py-1.5 rounded-[6px] text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border-0 ${
                            isSubSelected
                              ? "bg-neutral-900 text-white shadow-xs scale-[1.02]"
                              : "bg-white/80 hover:bg-white text-neutral-800 shadow-2xs"
                          }`}
                        >
                          {sub.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Details Card for the Clicked Sub-Item */}
                <div className="rounded-[6px] bg-white p-5 sm:p-6 shadow-sm border-0">
                  <h4 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
                    {activeSubItem.name}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-[#2563eb] mt-0.5">
                    {activeSubItem.detail.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-600 mt-2.5 leading-relaxed">
                    {activeSubItem.detail.overview}
                  </p>

                  {/* Key Deliverables */}
                  <div className="mt-4 pt-3 border-t border-neutral-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      Included Deliverables
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {activeSubItem.detail.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs text-neutral-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] flex-shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Prerequisites */}
                  {activeSubItem.detail.prerequisites && (
                    <div className="mt-3 text-[11px] text-neutral-400">
                      <span className="font-semibold text-neutral-500">Prerequisites:</span> {activeSubItem.detail.prerequisites}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button: Category CTA */}
              <div className="pt-6 mt-6 flex items-center justify-end">
                <button
                  type="button"
                  className="w-full sm:w-auto px-7 py-3 rounded-[6px] bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 cursor-pointer inline-flex items-center justify-center gap-2 border-0"
                >
                  <span>{activeCategory.ctaText}</span>
                  <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



"use client";

import React from "react";

// ================= DVD DISK COMPONENT =================
function DvdDisk({ label, trackColor = "#38bdf8" }: { label: string; trackColor?: string }) {
  return (
    <div className="relative aspect-square w-[210px] sm:w-[300px] md:w-[360px] lg:w-[410px] xl:w-[430px] rounded-full flex-shrink-0 select-none overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18),0_0_0_1px_rgba(255,255,255,0.8)_inset] transition-transform duration-500 hover:scale-[1.02] cursor-pointer group">
      {/* 1. Base Polycarbonate Metallic Finish */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-slate-200 via-slate-100 to-slate-300" />

      {/* 2. Realistic Optical Disc Iridescent Holographic Sheen (Conic Gradient) */}
      <div
        className="absolute inset-0 rounded-full opacity-70 group-hover:opacity-90 transition-opacity duration-500"
        style={{
          background: `conic-gradient(
            from 30deg at 50% 50%,
            #cbd5e1 0deg,
            #94a3b8 35deg,
            #e2e8f0 70deg,
            #bae6fd 105deg,
            #c7d2fe 140deg,
            #fbcfe8 175deg,
            #fef08a 210deg,
            #a7f3d0 245deg,
            #bae6fd 280deg,
            #e2e8f0 315deg,
            #cbd5e1 360deg
          )`,
        }}
      />

      {/* 3. Dual Specular Light Reflection Cones (Diagonal Optical Flare) */}
      <div
        className="absolute inset-0 rounded-full opacity-60 mix-blend-overlay group-hover:rotate-45 transition-transform duration-700 ease-out"
        style={{
          background: `conic-gradient(
            from -45deg at 50% 50%,
            rgba(255,255,255,0.95) 0deg,
            transparent 30deg,
            transparent 150deg,
            rgba(255,255,255,0.95) 180deg,
            transparent 210deg,
            transparent 330deg,
            rgba(255,255,255,0.95) 360deg
          )`,
        }}
      />

      {/* 4. Fine Concentric Micro-Groove Circles */}
      <div className="absolute inset-4 sm:inset-6 md:inset-8 rounded-full border border-slate-400/30 pointer-events-none" />
      <div className="absolute inset-8 sm:inset-12 md:inset-16 rounded-full border border-slate-400/25 pointer-events-none" />
      <div className="absolute inset-12 sm:inset-18 md:inset-24 rounded-full border border-slate-400/20 pointer-events-none" />
      <div className="absolute inset-16 sm:inset-24 md:inset-32 rounded-full border border-slate-400/25 pointer-events-none" />

      {/* 5. Disc Outer Data Edge Bevel Ring */}
      <div className="absolute inset-0 rounded-full border-[3px] border-white/60 shadow-[inset_0_0_12px_rgba(0,0,0,0.12)] pointer-events-none" />

      {/* 6. Spindle Center Assembly (Real DVD Clamp Ring & Hub) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Outer Clear Plastic Mirror Band */}
        <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full border border-slate-400/40 bg-white/40 backdrop-blur-[2px] shadow-sm flex items-center justify-center">
          {/* Middle Stacking Ring */}
          <div className="w-20 h-20 sm:w-26 sm:h-26 md:w-32 md:h-32 rounded-full border border-slate-400/50 bg-white/70 shadow-inner flex items-center justify-center">
            {/* Center Spindle Hole */}
            <div className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white border-2 border-slate-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)] flex items-center justify-center">
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-slate-200 bg-slate-50" />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Disc Label / Serial stamp along curve */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-[9px] sm:text-[11px] font-bold uppercase tracking-widest text-slate-500/70 select-none">
        {label}
      </div>

      {/* Subtle Laser Reflection Highlight Dot */}
      <div
        className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full blur-[1px] opacity-75"
        style={{ backgroundColor: trackColor }}
      />
    </div>
  );
}

// ================= MAIN CTA SECTION =================
export default function CtaDisksSection() {
  return (
    <section
      id="cta-disks"
      className="relative z-10 w-full overflow-hidden pt-4 sm:pt-6 lg:pt-8 pb-16 sm:pb-24 lg:pb-32 bg-gradient-to-b from-white via-[#f4f8fe] to-white"
    >
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08),transparent_70%)] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        {/* ================= 3 BIG CIRCLE DISKS WITH EXACT 10PX GAP & PASSING HEADLINE ================= */}
        <div className="relative w-full flex flex-col items-center justify-center">
          {/* Row of 3 Large DVD Disks */}
          <div className="w-full flex items-center justify-center gap-[10px] overflow-visible">
            <DvdDisk label="DISC 01 • STRATEGY" trackColor="#38bdf8" />
            <DvdDisk label="DISC 02 • EXECUTION" trackColor="#2563eb" />
            <DvdDisk label="DISC 03 • COMPLIANCE" trackColor="#818cf8" />
          </div>

          {/* Central Headline Passing Directly Through the Center of the Disks */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-4 z-20 pointer-events-none">
            <div className="mx-auto rounded-3xl bg-white/75 backdrop-blur-md border border-white/70 py-6 sm:py-8 lg:py-10 px-6 sm:px-10 lg:px-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] text-center">
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-neutral-950 tracking-tight leading-[1.08]">
                Tell us about your business.
                <span className="block text-[#2563eb] mt-1 sm:mt-2">
                  We&apos;ll help you figure out what needs to be done.
                </span>
              </h2>

              <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-neutral-600 font-medium max-w-xl mx-auto">
                Connect directly with our corporate advisors. Get clear legal direction, technical
                roadmaps, and transparent pricing in minutes.
              </p>
            </div>
          </div>
        </div>

        {/* ================= 3 ACTION BUTTONS ================= */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 relative z-20">
          {/* Button 1: Chat Us in WhatsApp */}
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-xl active:scale-98 transition-all cursor-pointer"
          >
            {/* WhatsApp Icon */}
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
            </svg>
            <span>Chat Us in WhatsApp</span>
          </a>

          {/* Button 2: Login for Message */}
          <button
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-xl active:scale-98 transition-all cursor-pointer"
          >
            {/* Message / Inbox Icon */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span>Login for Message</span>
          </button>

          {/* Button 3: Call Us */}
          <a
            href="tel:+91"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 hover:border-neutral-400 font-bold text-sm sm:text-base shadow-2xs hover:shadow-sm active:scale-98 transition-all cursor-pointer"
          >
            {/* Phone Icon */}
            <svg className="w-5 h-5 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>Call Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}

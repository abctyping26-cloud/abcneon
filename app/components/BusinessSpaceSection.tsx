"use client";

import React, { useState } from "react";
import Image from "next/image";
import { getWhatsAppUrl } from "../utils/whatsapp";

interface SpaceType {
  id: string;
  name: string;
  badge: string;
  badgeColor: string;
  tagline: string;
  description: string;
  highlights: string[];
  icon: React.ReactNode;
}

const spaceTypes: SpaceType[] = [
  {
    id: "office",
    name: "Offices & Tech Park Spaces",
    badge: "Most Requested",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-400/30",
    tagline: "Infopark, Technopark, Cyberpark & prime city CBDs",
    description:
      "Furnished plug-and-play offices, managed team suites, and grade-A commercial buildings across Kochi (Kakkanad, MG Road), Trivandrum (Kazhakkoottam), and Calicut.",
    highlights: [
      "Registered lease deed & Kerala SGST premises compliance",
      "ROC Kerala (Ernakulam) registered office address verification",
      "Infopark, Technopark, SmartCity & KINFRA IT zones",
      "Flexible lock-ins, 24/7 power backup & high-speed connectivity",
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    id: "retail",
    name: "Shops & Commercial Outlets",
    badge: "High Footfall",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-400/30",
    tagline: "High-street shops, prime mall units & commercial showrooms",
    description:
      "High-visibility commercial storefronts and retail spaces along MG Road Kochi, Edappally, Panampilly Nagar, Mavoor Road Calicut, Trivandrum & regional business centers.",
    highlights: [
      "Prime road frontage & high-footfall Kerala market locations",
      "Kerala Shops & Commercial Establishments Act registration",
      "Local body (Corporation / Municipality / Panchayat) D&O trade license",
      "Customer parking, frontage display & signage approval support",
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
  },
  {
    id: "warehouse",
    name: "Warehouses & Logistics Parks",
    badge: "Supply Chain Ready",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
    tagline: "KINFRA parks, logistics hubs & industrial godowns",
    description:
      "Industrial godowns and logistics hubs across Kalamassery, Aluva, Eloor, Vallarpadam Port corridor, and KINFRA industrial parks across Kerala.",
    highlights: [
      "Kerala Fire & Rescue Services NOC & PCB clearances",
      "KSEB commercial 3-phase high-tension / low-tension power",
      "Heavy container trailer access, loading bays & godown height",
      "Strategic proximity to NH 66, NH 544 & Cochin Port corridor",
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
  {
    id: "setup",
    name: "End-to-End Office Setup",
    badge: "Turnkey Solution",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-400/30",
    tagline: "From bare-shell handover to day-one operational readiness",
    description:
      "Complete operational deployment with zero bureaucratic hassle. We handle registered rent deeds, stamp duty, K-SWIFT single-window clearances, KSEB connections, and turnkey interiors.",
    highlights: [
      "Registered lease deed with Kerala Sub-Registrar stamp duty",
      "K-SWIFT & Local Self Government (LSGD) trade license clearances",
      "KSEB commercial power load sanction & KWA water connection",
      "Turnkey interior fitout, networking, air-conditioning & access control",
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

export default function BusinessSpaceSection() {
  const [activeTab, setActiveTab] = useState<string>("office");

  const currentSpace = spaceTypes.find((s) => s.id === activeTab) || spaceTypes[0];

  const handleOpenContactModal = () => {
    window.dispatchEvent(new CustomEvent("abc:open-contact-modal"));
  };

  const whatsappUrl = getWhatsAppUrl(
    `Hello ABC Neon, I would like to inquire about commercial business space (${currentSpace.name}) in Kerala. Please guide me on available properties and setup requirements.`
  );

  return (
    <section
      id="business-spaces"
      className="relative z-10 w-full bg-white py-10 sm:py-16 lg:py-20 overflow-hidden"
    >
      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
        {/* Main Panoramic Card Frame */}
        <div className="relative w-full max-w-[1280px] rounded-[6px] overflow-hidden border border-slate-200/80 shadow-[0_30px_90px_-20px_rgba(15,23,42,0.25)] bg-slate-950 text-white">
          {/* ================= BACKGROUND SKYLINE IMAGE ================= */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/lucid-origin_camera_angle_from_long_distance_top_of_building_in_a_a_professionla_building_som-0(2).jpg"
              alt="City skyline view for commercial property and business spaces in Kerala"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center transform scale-[1.02] hover:scale-100 transition-transform duration-1000 ease-out"
            />

            {/* Layered cinematic gradient overlays for 100% text readability */}
            {/* Horizontal gradient: denser on left content area, fading out towards city towers on right */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/45 sm:to-slate-950/30" />

            {/* Vertical vignette for balanced contrast top to bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40" />

            {/* Subtle blue accent glow reflecting brand neon */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* ================= CARD CONTENT WRAPPER ================= */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-14 xl:p-16 flex flex-col justify-between min-h-[540px]">
            {/* Header Section */}
            <div className="max-w-3xl space-y-4 sm:space-y-6">
              {/* Eyebrow Capsule */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-semibold tracking-wide text-neutral-100 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Commercial Real Estate & Setup Solutions</span>
              </div>

              {/* Main Hook Line */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-white tracking-tight leading-[1.08]">
                Find the Right Space for Your Business.
              </h2>

              {/* Subtext */}
              <p className="text-base sm:text-lg lg:text-xl text-neutral-200/90 font-normal leading-relaxed max-w-2xl">
                From finding a commercial property to setting up your office, shop or warehouse — we help you find a space that fits your business and requirements.
              </p>
            </div>

            {/* ================= INTERACTIVE SPACE SELECTOR & DETAILS ================= */}
            <div className="mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 border-t border-white/15">
              {/* Space Type Selector Tabs */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pb-6">
                {spaceTypes.map((space) => {
                  const isActive = activeTab === space.id;
                  return (
                    <button
                      key={space.id}
                      type="button"
                      onClick={() => setActiveTab(space.id)}
                      className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-[6px] text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-white text-slate-950 shadow-lg scale-[1.02]"
                          : "bg-white/10 hover:bg-white/20 text-neutral-200 border border-white/10 hover:border-white/20 backdrop-blur-md"
                      }`}
                    >
                      <span className={isActive ? "text-[#2563eb]" : "text-neutral-300"}>
                        {space.icon}
                      </span>
                      <span>{space.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Space Detail Panel (Glassmorphic Card) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center bg-white/10 backdrop-blur-xl border border-white/15 rounded-[6px] p-5 sm:p-7 shadow-2xl">
                {/* Left: Detail & Highlights */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-bold border ${currentSpace.badgeColor}`}
                    >
                      {currentSpace.badge}
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white">
                      {currentSpace.tagline}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-neutral-200/90 leading-relaxed">
                    {currentSpace.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {currentSpace.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-100">
                        <svg
                          className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5 stroke-[2.5]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Fast Inquiry & CTAs */}
                <div className="lg:col-span-5 flex flex-col justify-center h-full space-y-4 lg:pl-6 lg:border-l lg:border-white/15">
                  <div className="bg-slate-900/50 rounded-[6px] p-3.5 border border-white/10 text-left space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-200">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>Dedicated Kerala Commercial Property Desk</span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Assistance with physical site visits across Kochi, Trivandrum & Calicut, developer negotiations, registered rent agreements, and Kerala GST compliance verification.
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full">
                    <button
                      type="button"
                      onClick={handleOpenContactModal}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[6px] bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.99] cursor-pointer group"
                    >
                      <span>Find Commercial Space</span>
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
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[6px] bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm sm:text-base transition-all duration-200 backdrop-blur-md active:scale-[0.99] cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-emerald-400" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.073.377-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
                      </svg>
                      <span>Talk to Space Advisor</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Trust Badges */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs text-neutral-300">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  100% Verified Kerala Commercial Landlords
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  Kerala GST & ROC Ernakulam Compliant
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  K-SWIFT & Local Body License Ready
                </span>
              </div>
              <span className="text-neutral-400 text-[11px]">
                Kochi (Kakkanad, MG Road) • Trivandrum (Technopark) • Calicut (Cyberpark) • Thrissur • Across Kerala
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

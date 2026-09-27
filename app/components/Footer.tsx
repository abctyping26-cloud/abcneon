"use client";

import React from "react";
import Image from "next/image";
import { catalogCategories } from "../data/catalogData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToDirectory = () => {
    const directorySection = document.getElementById("directory");
    if (directorySection) {
      directorySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="site-footer"
      className="relative z-10 w-full min-h-[100vh] bg-[#2563eb] text-white flex flex-col justify-between pt-16 sm:pt-20 lg:pt-24 pb-8 overflow-hidden select-none"
    >
      {/* Subtle Background Radial Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between">
        {/* ================= TOP BRAND & CONTACT BAR ================= */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-white/20">
          <div className="flex items-start sm:items-center gap-4 sm:gap-5">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden bg-white border border-white/30 shadow-md flex-shrink-0 flex items-center justify-center p-1.5">
              <Image
                src="/logo.jpg"
                alt="ABC Neon Logo"
                width={64}
                height={64}
                className="object-contain w-full h-full"
              />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-white whitespace-nowrap">
                  ABC NEON
                </span>
                <span className="hidden lg:inline-flex px-2.5 py-0.5 rounded-full bg-white/15 border border-white/20 text-[10px] sm:text-xs font-semibold tracking-wide text-white">
                  Unified Business Platform
                </span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-blue-100 max-w-md">
                From legal incorporation and compliance to tech engineering, branding, and capital — 69
                services unified in one ecosystem.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full md:w-auto">
            <button
              type="button"
              onClick={scrollToDirectory}
              className="px-5 py-2.5 rounded-xl bg-white text-[#2563eb] hover:bg-neutral-100 font-bold text-xs sm:text-sm transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer active:scale-98"
            >
              Explore 69 Services
            </button>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all duration-200 cursor-pointer"
            >
              WhatsApp Us
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-200 cursor-pointer"
              title="Scroll to Top"
              aria-label="Scroll to Top"
            >
              <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>

        {/* ================= ALL 69 SERVICES DIRECTORY (8 FULL CATEGORIES) ================= */}
        <div className="pt-8 sm:pt-10 pb-10 sm:pb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-5 sm:gap-6 lg:gap-4">
            {catalogCategories.map((category) => (
              <div key={category.id} className="space-y-3">
                <h4 className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-white pb-1.5 border-b border-white/20 flex items-center justify-between">
                  <span className="truncate">{category.title}</span>
                  <span className="text-[10px] text-blue-200 font-semibold ml-1">
                    {category.items.length}
                  </span>
                </h4>
                <ul className="space-y-1.5">
                  {category.items.map((item) => (
                    <li key={item.name}>
                      <button
                        type="button"
                        onClick={scrollToDirectory}
                        className="text-left text-[11px] text-blue-100/75 hover:text-white hover:underline transition-colors duration-150 leading-snug line-clamp-1 cursor-pointer block w-full"
                        title={item.name}
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ================= MONUMENTAL "ABC NEON" IN BIG AT THE BOTTOM ================= */}
        <div className="w-full text-center overflow-hidden py-4 sm:py-6 select-none pointer-events-none">
          <span className="text-[14vw] sm:text-[15vw] font-black tracking-tighter leading-none text-white/20 block transform translate-y-1 hover:text-white/30 transition-colors">
            ABC NEON
          </span>
        </div>

        {/* ================= BOTTOM COPYRIGHT & LEGAL BAR ================= */}
        <div className="pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-100/80 text-center sm:text-left">
          <div className="w-full sm:w-auto text-center sm:text-left">
            © {new Date().getFullYear()} ABC Neon Technologies. All rights reserved.
          </div>

          <div className="w-full sm:w-auto flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 sm:gap-6">
            <button
              type="button"
              onClick={scrollToDirectory}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Services Directory
            </button>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              ISO 27001 Certified
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Security & Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { catalogCategories, CatalogCategory } from "../data/catalogData";

interface HeaderProps {
  onSelectService?: (categoryIndex: number, subIndex: number) => void;
}

export default function Header({ onSelectService }: HeaderProps) {
  // Services Dropdown State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuCatIndex, setActiveMenuCatIndex] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  // Search State
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Auth Modal State
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [authFullName, setAuthFullName] = useState("");

  // Mobile Drawer State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileCatIndex, setExpandedMobileCatIndex] = useState<number | null>(null);

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard shortcut (⌘K or Ctrl+K) to focus search
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        const searchInput = document.getElementById("header-search-input");
        searchInput?.focus();
        setIsSearchFocused(true);
      }
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setIsSearchFocused(false);
        setIsAuthOpen(false);
        setIsMobileMenuOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Search results filtering
  const searchResults = searchQuery.trim()
    ? catalogCategories.flatMap((category, catIdx) =>
        category.items
          .filter(
            (item) =>
              item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.detail.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
              category.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((item, itemIdx) => {
            const originalSubIdx = category.items.findIndex((orig) => orig.name === item.name);
            return {
              categoryTitle: category.title,
              categoryNumber: category.number,
              categoryBgColor: category.bgColor,
              categoryIndex: catIdx,
              subIndex: originalSubIdx >= 0 ? originalSubIdx : itemIdx,
              name: item.name,
              tagline: item.detail.tagline,
            };
          })
      )
    : [];

  const handleServiceClick = (catIndex: number, subIndex: number = 0) => {
    setIsMenuOpen(false);
    setIsSearchFocused(false);
    setIsMobileMenuOpen(false);
    setSearchQuery("");

    if (onSelectService) {
      onSelectService(catIndex, subIndex);
    } else {
      const el = document.getElementById("directory");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeCategory: CatalogCategory =
    catalogCategories[activeMenuCatIndex] || catalogCategories[0];

  return (
    <>
      <header className="sticky top-0 z-40 w-full h-[72px] sm:h-[80px] bg-white/95 backdrop-blur-md border-b border-neutral-100 transition-all flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* ================= LEFT SIDE: OFFICIAL LOGO ================= */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-hidden"
              aria-label="ABC Typing & Corporate Services"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-[6px] overflow-hidden bg-white border border-neutral-200/80 shadow-2xs group-hover:border-neutral-300 transition-all flex-shrink-0 flex items-center justify-center p-0.5">
                <Image
                  src="/logo.jpg"
                  alt="ABC Typing Logo"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-neutral-900 group-hover:text-neutral-700 transition-colors leading-none">
                    abc
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] ml-0.5" />
                </div>
                <span className="text-[9.5px] uppercase font-bold tracking-wider text-neutral-400 leading-none mt-0.5 hidden xs:block">
                  Corporate Services
                </span>
              </div>
            </Link>
          </div>

          {/* ================= CENTER: SEARCH BAR ================= */}
          <div ref={searchRef} className="relative flex-1 max-w-xs sm:max-w-sm md:max-w-md hidden md:block">
            <div className="relative flex items-center">
              <span className="absolute left-3 text-neutral-400 pointer-events-none">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <input
                id="header-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                placeholder="Search services, licences, compliance..."
                className="w-full pl-9 pr-14 py-2 text-xs sm:text-sm bg-neutral-50/80 hover:bg-neutral-50 focus:bg-white text-neutral-900 placeholder-neutral-400 rounded-[6px] border border-neutral-200/90 focus:border-neutral-400 focus:outline-hidden transition-all shadow-2xs"
              />
              {searchQuery ? (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 text-neutral-400 hover:text-neutral-600 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              ) : (
                <div className="absolute right-2.5 hidden lg:flex items-center gap-0.5">
                  <kbd className="text-[10px] font-mono text-neutral-400 bg-white px-1.5 py-0.5 rounded border border-neutral-200 shadow-2xs">
                    ⌘K
                  </kbd>
                </div>
              )}
            </div>

            {/* Live Search Autocomplete Popover */}
            {isSearchFocused && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-[6px] border border-neutral-200 shadow-xl overflow-hidden z-50 max-h-[380px] flex flex-col animate-in fade-in slide-in-from-top-1 duration-150">
                {searchQuery.trim() ? (
                  searchResults.length > 0 ? (
                    <div className="p-2 overflow-y-auto space-y-1">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 px-3 py-1.5">
                        Matching Services ({searchResults.length})
                      </div>
                      {searchResults.slice(0, 8).map((result, idx) => (
                        <button
                          key={`${result.categoryIndex}-${result.subIndex}-${idx}`}
                          type="button"
                          onClick={() => handleServiceClick(result.categoryIndex, result.subIndex)}
                          className="w-full text-left p-2.5 rounded-[6px] hover:bg-neutral-50 flex items-start justify-between gap-3 transition-colors cursor-pointer group"
                        >
                          <div>
                            <div className="text-sm font-semibold text-neutral-900 group-hover:text-[#2563eb] transition-colors">
                              {result.name}
                            </div>
                            <div className="text-xs text-neutral-500 line-clamp-1 mt-0.5">
                              {result.tagline}
                            </div>
                          </div>
                          <span
                            className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-[4px] text-neutral-700 flex-shrink-0 mt-0.5"
                            style={{ backgroundColor: result.categoryBgColor }}
                          >
                            {result.categoryNumber}
                          </span>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="p-6 text-center text-xs text-neutral-500">
                      No services found for &ldquo;<span className="font-semibold text-neutral-700">{searchQuery}</span>&rdquo;.
                      Try searching for &ldquo;registration&rdquo;, &ldquo;tax&rdquo;, or &ldquo;licence&rdquo;.
                    </div>
                  )
                ) : (
                  <div className="p-4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2.5">
                      Popular Searches
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { label: "Company Registration", cat: 0, sub: 0 },
                        { label: "GST Filing", cat: 1, sub: 1 },
                        { label: "Trade Licence", cat: 0, sub: 6 },
                        { label: "Startup India", cat: 0, sub: 5 },
                        { label: "Payroll", cat: 4, sub: 0 },
                        { label: "Business Bank Account", cat: 0, sub: 9 },
                      ].map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => handleServiceClick(item.cat, item.sub)}
                          className="px-2.5 py-1 text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-[6px] transition-colors cursor-pointer"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ================= RIGHT SIDE: NAV ACTIONS ================= */}
          <div className="flex items-center gap-2 sm:gap-3.5">
            {/* 1. SERVICES 2-PANEL DROPDOWN */}
            <div ref={menuRef} className="relative">
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                onMouseEnter={() => setIsMenuOpen(true)}
                className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold rounded-[6px] transition-all cursor-pointer ${
                  isMenuOpen
                    ? "bg-neutral-100 text-neutral-900"
                    : "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50"
                }`}
                aria-expanded={isMenuOpen}
              >
                <span>Services</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isMenuOpen ? "rotate-180 text-[#2563eb]" : "text-neutral-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* 2-Panel Mega Dropdown Menu */}
              {isMenuOpen && (
                <div
                  className="absolute top-full right-0 mt-2 w-[92vw] sm:w-[680px] lg:w-[820px] bg-white rounded-[6px] border border-neutral-200/90 shadow-2xl overflow-hidden z-50 flex flex-col animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseLeave={() => setIsMenuOpen(false)}
                >
                  {/* Two Columns Grid */}
                  <div className="grid grid-cols-12 min-h-[380px] max-h-[520px]">
                    {/* LEFT PANEL: MAIN MENU (8 Categories) */}
                    <div className="col-span-5 bg-[#fafbfc] border-r border-neutral-200/70 p-3 overflow-y-auto">
                      <div className="space-y-1">
                        {catalogCategories.map((category, idx) => {
                          const isActive = activeMenuCatIndex === idx;
                          return (
                            <button
                              key={category.id}
                              type="button"
                              onMouseEnter={() => setActiveMenuCatIndex(idx)}
                              onClick={() => setActiveMenuCatIndex(idx)}
                              className={`w-full text-left px-3 py-2.5 rounded-[6px] transition-all cursor-pointer flex items-center justify-between text-xs sm:text-sm border-0 ${
                                isActive
                                  ? "font-bold text-neutral-900 shadow-2xs"
                                  : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/70 font-medium"
                              }`}
                              style={{
                                backgroundColor: isActive ? category.bgColor : undefined,
                              }}
                            >
                              <div className="flex items-center gap-2 truncate">
                                <span
                                  className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-[3px] ${
                                    isActive
                                      ? "bg-white/80 text-neutral-900"
                                      : "bg-neutral-200/70 text-neutral-600"
                                  }`}
                                >
                                  {category.number}
                                </span>
                                <span className="truncate">{category.title}</span>
                              </div>
                              <svg
                                className={`w-3.5 h-3.5 transition-transform flex-shrink-0 ${
                                  isActive ? "text-neutral-900 translate-x-0.5" : "text-neutral-300"
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* RIGHT PANEL: SIDE BOX MENU (Sub-Menu Items) */}
                    <div
                      className="col-span-7 p-5 sm:p-6 flex flex-col justify-between overflow-y-auto transition-colors duration-200"
                      style={{ backgroundColor: activeCategory.bgColor }}
                    >
                      <div>
                        {/* Active Category Header */}
                        <div className="mb-4">
                          <h4 className="text-lg sm:text-xl font-extrabold text-neutral-900 tracking-tight">
                            {activeCategory.title}
                          </h4>
                          {(activeCategory.hook || activeCategory.note) && (
                            <p className="text-xs text-neutral-600 mt-1 line-clamp-2 leading-relaxed">
                              {activeCategory.hook || activeCategory.note}
                            </p>
                          )}
                        </div>

                        {/* Sub Menu Items List */}
                        <div className="space-y-1.5 mb-4">
                          <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                            Sub-Menu Specializations:
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-[220px] overflow-y-auto pr-1">
                            {activeCategory.items.map((sub, sIdx) => (
                              <button
                                key={sub.name}
                                type="button"
                                onClick={() => handleServiceClick(activeMenuCatIndex, sIdx)}
                                className="text-left px-2.5 py-1.5 rounded-[6px] bg-white/85 hover:bg-white text-neutral-800 hover:text-[#2563eb] text-xs font-semibold shadow-2xs hover:shadow-xs transition-all cursor-pointer flex items-center justify-between group"
                              >
                                <span className="truncate">{sub.name}</span>
                                <span className="text-neutral-400 group-hover:text-[#2563eb] text-[11px] ml-1">
                                  &rarr;
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Side Box Menu CTA Bar */}
                      <div className="pt-3 border-t border-neutral-900/10 flex items-center justify-between">
                        <span className="text-xs text-neutral-500 hidden sm:inline">
                          Direct consultation available
                        </span>
                        <button
                          type="button"
                          onClick={() => handleServiceClick(activeMenuCatIndex, 0)}
                          className="px-4 py-2 rounded-[6px] bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold transition-all inline-flex items-center gap-1.5 shadow-xs cursor-pointer ml-auto"
                        >
                          <span>{activeCategory.ctaText}</span>
                          <svg className="w-3.5 h-3.5 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. CONTACT US NUMBER (from abctyping: +971 2 642 7667) */}
            <a
              href="tel:+97126427667"
              className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-2 text-xs sm:text-sm font-semibold text-neutral-700 hover:text-[#2563eb] rounded-[6px] hover:bg-neutral-50 transition-colors"
              title="Call our Abu Dhabi office directly"
            >
              <div className="w-7 h-7 rounded-full bg-blue-50 text-[#2563eb] flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                  />
                </svg>
              </div>
              <div className="hidden lg:flex flex-col text-left">
                <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-400 leading-none">
                  Call Us
                </span>
                <span className="text-xs font-bold text-neutral-800 leading-none mt-0.5 whitespace-nowrap">
                  +971 2 642 7667
                </span>
              </div>
              <span className="text-xs font-bold text-neutral-800 lg:hidden hidden sm:inline whitespace-nowrap">
                +971 2 642 7667
              </span>
            </a>

            {/* 3. LOGIN OR SIGNUP BUTTON */}
            <button
              type="button"
              onClick={() => setIsAuthOpen(true)}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-[6px] bg-neutral-900 hover:bg-neutral-800 text-white transition-all duration-200 shadow-xs active:scale-[0.98] cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>Login / Sign Up</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 rounded-[6px] hover:bg-neutral-100 cursor-pointer"
              aria-label="Open Mobile Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE NAVIGATION DRAWER ================= */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-neutral-900/40 backdrop-blur-xs flex justify-end animate-in fade-in duration-150">
          <div className="w-full max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto p-5 animate-in slide-in-from-right duration-200">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 rounded-[6px] overflow-hidden bg-white border border-neutral-200 p-0.5">
                    <Image src="/logo.jpg" alt="Logo" width={32} height={32} className="object-contain" />
                  </div>
                  <span className="font-black text-xl text-neutral-900">
                    abc<span className="text-[#2563eb]">.</span>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-[6px] hover:bg-neutral-100 cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile Search Bar */}
              <div className="mt-4">
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-neutral-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search services..."
                    className="w-full pl-9 pr-4 py-2 text-sm bg-neutral-50 rounded-[6px] border border-neutral-200 text-neutral-900 placeholder-neutral-400"
                  />
                </div>
                {searchQuery.trim() && (
                  <div className="mt-2 bg-neutral-50 p-2 rounded-[6px] max-h-48 overflow-y-auto space-y-1">
                    {searchResults.slice(0, 5).map((r, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleServiceClick(r.categoryIndex, r.subIndex)}
                        className="w-full text-left p-2 rounded bg-white text-xs font-medium text-neutral-800 flex justify-between"
                      >
                        <span>{r.name}</span>
                        <span className="text-[10px] text-neutral-400">{r.categoryNumber}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Categories Accordion */}
              <div className="mt-5 space-y-1.5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 px-1 mb-2">
                  All Services & Categories
                </div>
                {catalogCategories.map((cat, cIdx) => {
                  const isExpanded = expandedMobileCatIndex === cIdx;
                  return (
                    <div key={cat.id} className="rounded-[6px] overflow-hidden border border-neutral-100">
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedMobileCatIndex(isExpanded ? null : cIdx)
                        }
                        className="w-full px-3 py-2.5 bg-neutral-50 flex items-center justify-between text-xs font-semibold text-neutral-800"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-neutral-500 font-bold">{cat.number}</span>
                          <span>{cat.title}</span>
                        </div>
                        <svg
                          className={`w-3.5 h-3.5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isExpanded && (
                        <div className="p-2 space-y-1 bg-white border-t border-neutral-100">
                          {cat.items.map((sub, sIdx) => (
                            <button
                              key={sub.name}
                              type="button"
                              onClick={() => handleServiceClick(cIdx, sIdx)}
                              className="w-full text-left px-2 py-1.5 text-xs text-neutral-700 hover:text-[#2563eb] rounded hover:bg-neutral-50 flex justify-between"
                            >
                              <span>{sub.name}</span>
                              <span className="text-neutral-400">&rarr;</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-4 border-t border-neutral-100 space-y-2.5">
              <a
                href="tel:+97126427667"
                className="w-full py-2.5 px-4 rounded-[6px] bg-blue-50 text-[#2563eb] text-xs font-bold flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                  />
                </svg>
                <span>Call Us: +971 2 642 7667</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsAuthOpen(true);
                }}
                className="w-full py-2.5 px-4 rounded-[6px] bg-neutral-900 text-white text-xs font-bold text-center"
              >
                Login / Sign Up
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= INTERACTIVE AUTH MODAL (LOGIN / SIGN UP) ================= */}
      {isAuthOpen && (
        <div className="fixed inset-0 z-50 bg-neutral-900/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="w-full max-w-md bg-white rounded-[6px] shadow-2xl border border-neutral-100 overflow-hidden animate-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="p-6 pb-4 flex items-center justify-between border-b border-neutral-100">
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-[6px] overflow-hidden bg-white border border-neutral-200 p-0.5">
                  <Image src="/logo.jpg" alt="Logo" width={32} height={32} className="object-contain" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-neutral-900 leading-tight">
                    {authMode === "signin" ? "Welcome Back" : "Create Account"}
                  </h3>
                  <p className="text-xs text-neutral-500">
                    ABC Typing & Corporate Services Portal
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsAuthOpen(false)}
                className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-[6px] hover:bg-neutral-100 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Tab Switcher */}
            <div className="px-6 pt-4 flex gap-2">
              <button
                type="button"
                onClick={() => setAuthMode("signin")}
                className={`flex-1 py-2 text-xs font-bold rounded-[6px] transition-all cursor-pointer ${
                  authMode === "signin"
                    ? "bg-neutral-900 text-white shadow-2xs"
                    : "bg-neutral-100 text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setAuthMode("signup")}
                className={`flex-1 py-2 text-xs font-bold rounded-[6px] transition-all cursor-pointer ${
                  authMode === "signup"
                    ? "bg-neutral-900 text-white shadow-2xs"
                    : "bg-neutral-100 text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  `${authMode === "signin" ? "Signing in" : "Creating account for"}: ${authEmail}`
                );
                setIsAuthOpen(false);
              }}
              className="p-6 space-y-3.5"
            >
              {authMode === "signup" && (
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Full Name / Company Name
                  </label>
                  <input
                    type="text"
                    required
                    value={authFullName}
                    onChange={(e) => setAuthFullName(e.target.value)}
                    placeholder="e.g. John Doe / Apex Corp LLC"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 focus:bg-white border border-neutral-200 rounded-[6px] focus:border-neutral-400 focus:outline-hidden"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Email or UAE Mobile Number
                </label>
                <input
                  type="text"
                  required
                  value={authEmail}
                  onChange={(e) => setAuthEmail(e.target.value)}
                  placeholder="name@company.com or +971 50 000 0000"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 focus:bg-white border border-neutral-200 rounded-[6px] focus:border-neutral-400 focus:outline-hidden"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-neutral-700">
                    Password
                  </label>
                  {authMode === "signin" && (
                    <a href="#forgot" className="text-[11px] text-[#2563eb] hover:underline">
                      Forgot?
                    </a>
                  )}
                </div>
                <input
                  type="password"
                  required
                  value={authPassword}
                  onChange={(e) => setAuthPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 focus:bg-white border border-neutral-200 rounded-[6px] focus:border-neutral-400 focus:outline-hidden"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-[6px] bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer"
                >
                  {authMode === "signin" ? "Sign In to Dashboard" : "Create Business Account"}
                </button>
              </div>

              <div className="text-center text-[11px] text-neutral-500 pt-1">
                Direct phone support:{" "}
                <a href="tel:+97126427667" className="font-semibold text-neutral-800 hover:text-[#2563eb]">
                  +971 2 642 7667
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

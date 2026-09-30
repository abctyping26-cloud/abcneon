"use client";

import React, { useState } from "react";
import { getWhatsAppUrl, WHATSAPP_MESSAGES, DEFAULT_CONTACT_PHONE, DEFAULT_CONTACT_EMAIL } from "../utils/whatsapp";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const SERVICE_OPTIONS: { id: string; label: string }[] = [
  { id: "business-setup", label: "Business Setup & Company Registration" },
  { id: "tax-gst", label: "GST Registration, Filing & Tax Compliance" },
  { id: "commercial-space", label: "Commercial Space, Office & Warehouse Setup" },
  { id: "trade-license", label: "Trade License & Municipal Clearances" },
  { id: "trademark-ip", label: "Trademark & Intellectual Property (IP)" },
  { id: "labour-hr", label: "Labour, HR & Payroll Management" },
  { id: "tech-website", label: "Website, App & Custom Software Development" },
  { id: "finance-loans", label: "Working Capital, MSME & Business Loans" },
  { id: "other", label: "Other (Specify)" },
];

export default function EnquirySection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [otherService, setOtherService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionTime, setSubmissionTime] = useState<string>("");
  const [submittedService, setSubmittedService] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanPhone = phone.trim();

    if (!cleanName || !cleanEmail || !cleanPhone || !service) {
      return;
    }
    if (service === "other" && !otherService.trim()) {
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const cleanOther = otherService.trim();
    const matchedOption = SERVICE_OPTIONS.find((s) => s.id === service);
    const resolvedServiceName =
      service === "other"
        ? cleanOther
          ? `Other: ${cleanOther}`
          : "Custom Service"
        : matchedOption?.label || service;

    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    const formattedTime = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    const fullTimeString = `${formattedDate} at ${formattedTime}`;

    const enquiryPayload = {
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      service: resolvedServiceName,
      otherService: cleanOther || undefined,
      submittedAt: now.toISOString(),
    };

    try {
      // 1. Send to Backend API
      try {
        await fetch(`${API_BASE_URL}/api/v1/client/enquiry`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(enquiryPayload),
        });
      } catch (networkErr) {
        console.warn("Backend offline or unreachable, mirroring locally:", networkErr);
      }

      // 2. Mirror to LocalStorage abc_enquiries for instant local dev & cross-port parity
      try {
        const stored = localStorage.getItem("abc_enquiries");
        const list = stored ? JSON.parse(stored) : [];
        const localItem = {
          _id: "enq_" + Date.now(),
          name: cleanName,
          email: cleanEmail,
          phone: cleanPhone,
          service: resolvedServiceName,
          otherService: cleanOther || undefined,
          status: "pending",
          submittedAt: now.toISOString(),
          createdAt: now.toISOString(),
        };
        const updated = [localItem, ...list];
        localStorage.setItem("abc_enquiries", JSON.stringify(updated));
        window.dispatchEvent(new Event("abc_enquiries_updated"));
      } catch {
        // Ignore storage errors
      }

      setSubmissionTime(fullTimeString);
      setSubmittedService(resolvedServiceName);
      setSubmitted(true);
    } catch {
      setError("Unable to submit enquiry. Please try again or reach us via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setService("");
    setOtherService("");
    setSubmitted(false);
    setSubmissionTime("");
    setSubmittedService("");
    setError(null);
  };

  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.enquiry);

  return (
    <section className="relative z-10 w-full bg-white py-16 sm:py-20 lg:py-24 border-t border-neutral-200/80" id="enquiry">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* ================= LEFT COLUMN: TITLE & ENQUIRY FORM ================= */}
          <div className="lg:col-span-7 max-w-xl">
            <div className="mb-6 sm:mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563eb] block mb-2">
                Fast-Track Consultation
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-neutral-950 tracking-tight leading-tight">
                Enquiry
              </h2>
              <p className="mt-2 text-sm sm:text-base text-neutral-500 font-normal leading-relaxed">
                Tell us about your business requirement. Our specialists will review your scope and get in touch with an actionable roadmap.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-[12px] bg-emerald-50/70 border border-emerald-200/90 p-6 sm:p-8 space-y-4 shadow-sm animate-in fade-in duration-200">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
                  <svg className="w-6 h-6 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-emerald-950 tracking-tight">
                    Enquiry Received
                  </h3>

                  {submissionTime && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mt-2">
                      <svg className="w-3.5 h-3.5 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span>Submitted on {submissionTime}</span>
                    </div>
                  )}
                </div>

                <p className="text-sm text-emerald-900/90 leading-relaxed">
                  Thank you, <strong>{name}</strong>! We have dispatched your request for{" "}
                  <strong>{submittedService}</strong>. Our specialists will reach out to you at{" "}
                  <strong>{phone}</strong> or <strong>{email}</strong> shortly.
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-[6px] bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer active:scale-98"
                  >
                    Send another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {error && (
                  <div className="p-3 rounded-[6px] bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                    {error}
                  </div>
                )}

                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="enquiry-name" className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Full Name
                  </label>
                  <input
                    id="enquiry-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full h-12 px-4 rounded-[6px] border border-neutral-200 bg-[#f8fafc] text-sm text-neutral-900 placeholder-neutral-400 focus:bg-white focus:border-neutral-900 focus:outline-hidden transition-all shadow-2xs"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label htmlFor="enquiry-email" className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Email Address
                  </label>
                  <input
                    id="enquiry-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full h-12 px-4 rounded-[6px] border border-neutral-200 bg-[#f8fafc] text-sm text-neutral-900 placeholder-neutral-400 focus:bg-white focus:border-neutral-900 focus:outline-hidden transition-all shadow-2xs"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label htmlFor="enquiry-phone" className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Phone Number
                  </label>
                  <input
                    id="enquiry-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+971 50 000 0000 or +91 98765 43210"
                    className="w-full h-12 px-4 rounded-[6px] border border-neutral-200 bg-[#f8fafc] text-sm text-neutral-900 placeholder-neutral-400 focus:bg-white focus:border-neutral-900 focus:outline-hidden transition-all shadow-2xs"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Service Selection */}
                <div className="space-y-1.5">
                  <label htmlFor="enquiry-service" className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Service Required
                  </label>
                  <div className="relative">
                    <select
                      id="enquiry-service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full h-12 px-4 pr-10 rounded-[6px] border border-neutral-200 bg-[#f8fafc] text-sm text-neutral-900 focus:bg-white focus:border-neutral-900 focus:outline-hidden transition-all shadow-2xs appearance-none cursor-pointer"
                      required
                      disabled={isSubmitting}
                    >
                      <option value="" disabled>
                        Select a service...
                      </option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-neutral-400">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Conditional "Other" Input Field */}
                {service === "other" && (
                  <div className="space-y-1.5 animate-in fade-in duration-150">
                    <label htmlFor="enquiry-other" className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                      Specify Service
                    </label>
                    <input
                      id="enquiry-other"
                      type="text"
                      value={otherService}
                      onChange={(e) => setOtherService(e.target.value)}
                      placeholder="Please specify the service or license you need"
                      className="w-full h-12 px-4 rounded-[6px] border border-neutral-200 bg-white text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-hidden transition-all shadow-2xs"
                      required
                      autoFocus
                      disabled={isSubmitting}
                    />
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 px-6 rounded-[6px] bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer inline-flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  <span>{isSubmitting ? "Submitting Enquiry..." : "Submit Enquiry"}</span>
                  <svg
                    className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* ================= RIGHT COLUMN: WHATSAPP CAPSULE & DIRECT REACH ================= */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full space-y-6 lg:pl-6 lg:border-l lg:border-neutral-200/80">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                Instant Assistance
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                Prefer chatting directly?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                Connect with our corporate advisory team on WhatsApp for fast answers, fee estimates, and procedural guidance.
              </p>
            </div>

            {/* WhatsApp Capsule Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-[12px] bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-xl active:scale-[0.99] flex items-center justify-center gap-3 cursor-pointer group"
              title="Contact us on WhatsApp"
            >
              <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.073.377-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
              </svg>
              <span>Contact us on WhatsApp</span>
            </a>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 pt-2">
              <div className="p-3.5 rounded-[6px] bg-[#f8fafc] border border-neutral-200 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#2563eb] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                    Phone Helpdesk
                  </span>
                  <a href={`tel:${DEFAULT_CONTACT_PHONE.replace(/\s+/g, "")}`} className="text-xs sm:text-sm font-bold text-neutral-900 hover:text-[#2563eb] transition-colors">
                    {DEFAULT_CONTACT_PHONE}
                  </a>
                </div>
              </div>

              <div className="p-3.5 rounded-[6px] bg-[#f8fafc] border border-neutral-200 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#2563eb] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                    Official Email
                  </span>
                  <a href={`mailto:${DEFAULT_CONTACT_EMAIL}`} className="text-xs sm:text-sm font-bold text-neutral-900 hover:text-[#2563eb] transition-colors truncate block">
                    {DEFAULT_CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

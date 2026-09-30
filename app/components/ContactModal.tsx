"use client";

import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import {
  getWhatsAppUrl,
  DEFAULT_WHATSAPP_PHONE,
  DEFAULT_CONTACT_PHONE,
  DEFAULT_CONTACT_EMAIL,
} from "../utils/whatsapp";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PHONE_NUMBER =
  process.env.NEXT_PUBLIC_CONTACT_PHONE || DEFAULT_CONTACT_PHONE || "+971 2 642 7667";
const WHATSAPP_PHONE =
  process.env.NEXT_PUBLIC_WHATSAPP_PHONE || DEFAULT_WHATSAPP_PHONE || "971543078430";
const EMAIL_ADDRESS =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || DEFAULT_CONTACT_EMAIL || "abctyping26@gmail.com";

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [mounted, setMounted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
    visible: false,
    text: "Copy",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle ESC key to close & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setCursor((prev) => ({
      ...prev,
      x: e.clientX,
      y: e.clientY,
    }));
  }, []);

  const handleMouseEnter = useCallback(
    (field: string) => {
      setCursor((prev) => ({
        ...prev,
        visible: true,
        text: copiedField === field ? "Copied! ✓" : "Copy",
      }));
    },
    [copiedField]
  );

  const handleMouseLeave = useCallback(() => {
    setCursor((prev) => ({
      ...prev,
      visible: false,
    }));
  }, []);

  const handleCopy = useCallback((text: string, field: string) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
    }
    setCopiedField(field);
    setCursor((prev) => ({
      ...prev,
      text: "Copied! ✓",
    }));

    setTimeout(() => {
      setCopiedField((prev) => (prev === field ? null : prev));
      setCursor((prev) => ({
        ...prev,
        text: "Copy",
      }));
    }, 1600);
  }, []);

  if (!mounted || !isOpen) return null;

  const whatsappUrl = getWhatsAppUrl(
    "Hello ABC Neon, I am reaching out from your website to enquire about your services.",
    WHATSAPP_PHONE
  );

  return createPortal(
    <div
      className="fixed inset-0 z-[999999] bg-slate-900/45 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
      onMouseMove={handleMouseMove}
      role="presentation"
    >
      {/* Floating Cursor Copy Tag */}
      {cursor.visible && (
        <div
          className={`fixed pointer-events-none z-[10000000] text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-lg transition-colors duration-150 whitespace-nowrap ${
            cursor.text.includes("Copied") ? "bg-emerald-600" : "bg-slate-900"
          }`}
          style={{
            transform: `translate3d(${cursor.x + 12}px, ${cursor.y + 12}px, 0)`,
          }}
        >
          {cursor.text}
        </div>
      )}

      <div
        className="relative w-full max-w-[360px] bg-white rounded-[22px] shadow-2xl border border-black/5 p-8 sm:p-9 text-center animate-in zoom-in-95 duration-200 box-border"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        {/* Close Button */}
        <button
          type="button"
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Center Top: ABC Logo */}
        <div className="inline-flex items-baseline justify-center">
          <span className="text-4xl font-extrabold tracking-tight text-black leading-none">
            abc
          </span>
          <span className="w-2 h-2 rounded-full bg-[#2563eb] ml-1 inline-block" aria-hidden="true" />
        </div>

        {/* Under Logo: Contact Us */}
        <h2 id="contact-modal-title" className="text-2xl font-bold text-slate-900 tracking-tight mt-4 mb-6">
          Contact Us
        </h2>

        {/* Simple Text Items & WhatsApp Action */}
        <div className="flex flex-col gap-5 items-center">
          {/* 1. Phone Number */}
          <div
            className="flex flex-col items-center cursor-pointer select-none px-3 py-1 rounded-lg hover:-translate-y-0.5 transition-transform group"
            onMouseEnter={() => handleMouseEnter("phone")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleCopy(PHONE_NUMBER, "phone")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleCopy(PHONE_NUMBER, "phone");
              }
            }}
            title="Click to copy phone number"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5 inline-flex items-center gap-1.5">
              Phone Number {copiedField === "phone" && <span className="text-emerald-600 font-bold lowercase">Copied!</span>}
            </span>
            <span className="text-lg font-bold text-slate-900 group-hover:text-[#2563eb] transition-colors tracking-tight">
              {PHONE_NUMBER}
            </span>
          </div>

          {/* 2. WhatsApp Direct Button */}
          <div
            className="flex flex-col items-center w-full py-0.5"
            onMouseEnter={handleMouseLeave}
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              WhatsApp
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20ba59] text-white text-[15px] font-bold px-6 py-2.5 rounded-full no-underline shadow-md hover:shadow-lg transition-all duration-200 active:scale-98 cursor-pointer w-auto max-w-[240px]"
              title="Chat on WhatsApp (+971 54 307 8430)"
              aria-label="Chat on WhatsApp"
            >
              <svg
                className="w-5 h-5 fill-current shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* 3. Email */}
          <div
            className="flex flex-col items-center cursor-pointer select-none px-3 py-1 rounded-lg hover:-translate-y-0.5 transition-transform group"
            onMouseEnter={() => handleMouseEnter("email")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleCopy(EMAIL_ADDRESS, "email")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleCopy(EMAIL_ADDRESS, "email");
              }
            }}
            title="Click to copy email address"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5 inline-flex items-center gap-1.5">
              Email {copiedField === "email" && <span className="text-emerald-600 font-bold lowercase">Copied!</span>}
            </span>
            <span className="text-lg font-bold text-slate-900 group-hover:text-[#2563eb] transition-colors tracking-tight">
              {EMAIL_ADDRESS}
            </span>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

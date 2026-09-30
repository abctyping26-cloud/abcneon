/**
 * Centralized Contact & WhatsApp utility for abcneon
 * Manages phone number resolution and pre-filled messages
 */

export const DEFAULT_WHATSAPP_PHONE =
  process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "971543078430";

export const DEFAULT_CONTACT_PHONE =
  process.env.NEXT_PUBLIC_CONTACT_PHONE || "+971 2 642 7667";

export const DEFAULT_CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "abctyping26@gmail.com";

/**
 * Returns a standardized wa.me link with encoded pre-filled text
 */
export function getWhatsAppUrl(prefilledText: string, phone?: string): string {
  const targetPhone = phone || DEFAULT_WHATSAPP_PHONE;
  const cleanPhone = targetPhone.replace(/\D/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(prefilledText.trim())}`;
}

/**
 * Pre-defined contextual message templates for ABC Neon
 */
export const WHATSAPP_MESSAGES = {
  cta: "Hello ABC Neon, I would like to discuss services for my business.",
  footer: "Hello ABC Neon, I would like to enquire about your services.",
  enquiry: "Hello ABC Neon, I would like to get a quote and submit an enquiry for your services.",
  general: "Hello ABC Neon, I would like more information about your corporate and technology services.",
};

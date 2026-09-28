/**
 * Centralized WhatsApp utility for abcneon
 * Manages phone number resolution and pre-filled messages
 */

export const DEFAULT_WHATSAPP_PHONE =
  process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "971543078430";

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
  general: "Hello ABC Neon, I would like more information about your corporate and technology services.",
};

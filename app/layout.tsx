import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
  weight: "300 900",
});

export const metadata: Metadata = {
  title: "ABC | Everything Your Business Needs. Under One Roof.",
  description:
    "From registration and compliance to finance, documentation, technology and growth — get the services you need to start and run your business.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "500x500", type: "image/png" },
      { url: "/logo.jpg", sizes: "500x500", type: "image/jpeg" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/logo.jpg" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} h-full antialiased`}
    >
      <body className={`${satoshi.className} min-h-full flex flex-col bg-white text-neutral-900`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import ServerWarmer from "./components/ServerWarmer";
import "./globals.css";

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
  weight: "300 900",
});

const siteUrl = "https://abcneon.in";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ABC Neon | Everything Your Business Needs. Under One Roof.",
    template: "%s | ABC Neon",
  },
  description:
    "From registration and compliance to finance, documentation, technology and growth — get the 69 services you need to start and run your business.",
  keywords: [
    "ABC Neon",
    "Company Registration",
    "Pvt Ltd Incorporation",
    "LLP Setup",
    "GST Registration and Filing",
    "Startup India DPIIT",
    "MSME Udyam Registration",
    "Trademark IP Protection",
    "Corporate Compliance",
    "Accounting and Bookkeeping",
    "Payroll and Labour Compliance",
    "Business Loans and Funding",
    "Working Capital",
    "Commercial Legal Agreements",
    "Custom Software and Website Development",
  ],
  authors: [{ name: "ABC Neon", url: siteUrl }],
  creator: "ABC Neon",
  publisher: "ABC Neon",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "ABC Neon",
    title: "ABC Neon | Everything Your Business Needs. Under One Roof.",
    description:
      "From registration and compliance to finance, documentation, technology and growth — get the 69 services you need to start and run your business.",
    images: [
      {
        url: "/logo.jpg",
        width: 500,
        height: 500,
        alt: "ABC Neon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ABC Neon | Everything Your Business Needs. Under One Roof.",
    description:
      "From registration and compliance to finance, documentation, technology and growth — get the 69 services you need to start and run your business.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2" },
      { url: "/icon.png?v=2", sizes: "500x500", type: "image/png" },
      { url: "/logo.jpg?v=2", sizes: "500x500", type: "image/jpeg" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: [
      { url: "/apple-icon.png?v=2", sizes: "180x180", type: "image/png" },
      { url: "/logo.jpg?v=2" },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "ABC Neon",
      url: siteUrl,
      logo: `${siteUrl}/logo.jpg`,
      email: "abctyping26@gmail.com",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+971 2 642 7667",
          contactType: "customer service",
          availableLanguage: ["English", "Hindi", "Malayalam", "Arabic"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "ABC Neon",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      description:
        "Unified business platform for company registration, compliance, finance, legal documentation, and technology services.",
    },
    {
      "@type": "OfferCatalog",
      "@id": `${siteUrl}/#services`,
      name: "ABC Neon Corporate Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Business Setup",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Company Registration (Pvt Ltd, LLP, Sole Proprietorship)",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "GST, MSME & Startup India Registration",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Tax & Compliance",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "GST Filing, Income Tax Returns (ITR) & ROC Corporate Filings",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Tax Audit, Accounting & Bookkeeping",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Finance & Loans",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Business Loans, Working Capital & MSME Subsidies",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Bank Project Reports (DPR) & CMA Data",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Legal & IP Protection",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Trademark Registration, NDAs & Commercial Contracts",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Website & Technology",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Web Application & Mobile App Development",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "CRM, ERP & WhatsApp Automation",
              },
            },
          ],
        },
      ],
    },
  ],
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-23230K88BL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-23230K88BL', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className={`${satoshi.className} min-h-full flex flex-col bg-white text-neutral-900`}>
        <ServerWarmer />
        {children}
      </body>
    </html>
  );
}


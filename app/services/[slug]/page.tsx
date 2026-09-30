import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllServices,
  getServiceBySlug,
  getRelatedServices,
} from "../../data/catalogData";
import ServiceDetailView from "../../components/ServiceDetailView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const allServices = getAllServices();
  return allServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | ABC Neon",
      description: "The requested service could not be found.",
    };
  }

  const siteUrl = "https://abcneon.in";
  const title = `${service.name} in Kerala & India | ABC Neon`;
  const description = `${service.detail.overview} Typical turnaround: ${service.detail.turnaround}. 100% compliant, expert CA/CS assisted.`;

  return {
    title,
    description,
    keywords: [
      service.name,
      `${service.name} Kerala`,
      `${service.name} Kochi`,
      `${service.name} Trivandrum`,
      service.category.title,
      "ABC Neon",
      "MCA ROC Kerala",
      "Business Compliance India",
    ],
    alternates: {
      canonical: `${siteUrl}/services/${slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: `${siteUrl}/services/${slug}`,
      siteName: "ABC Neon",
      title,
      description,
      images: [
        {
          url: "/logo.jpg",
          width: 500,
          height: 500,
          alt: `${service.name} - ABC Neon`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo.jpg"],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(slug, 4);
  const siteUrl = "https://abcneon.in";

  // Schema.org JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/services/${slug}/#service`,
        name: service.name,
        serviceType: service.category.title,
        description: service.detail.overview,
        provider: {
          "@type": "Organization",
          name: "ABC Neon",
          url: siteUrl,
          logo: `${siteUrl}/logo.jpg`,
        },
        areaServed: [
          {
            "@type": "State",
            name: "Kerala",
          },
          {
            "@type": "Country",
            name: "India",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: service.detail.tagline,
          itemListElement: service.detail.deliverables.map((item, idx) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item,
            },
            position: idx + 1,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/services/${slug}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: service.category.title,
            item: `${siteUrl}/#directory`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.name,
            item: `${siteUrl}/services/${slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/services/${slug}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: `What is the expected turnaround time for ${service.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `The standard processing turnaround is ${service.detail.turnaround}. Our corporate compliance desk initiates document drafting, digital signatures, and portal submissions within 24 hours.`,
            },
          },
          {
            "@type": "Question",
            name: `What prerequisites are required for ${service.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `The primary prerequisites include: ${service.detail.prerequisites}. Our specialists assist in drafting affidavits and statutory resolutions.`,
            },
          },
          {
            "@type": "Question",
            name: `What deliverables will I receive upon completion of ${service.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Upon successful execution, you will receive: ${service.detail.deliverables.join(
                ", "
              )}. All filings are government-authorized and digitally verified.`,
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetailView service={service} relatedServices={relatedServices} />
    </>
  );
}

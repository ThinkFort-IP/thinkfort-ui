import ServiceSection from "@/components/Service/ServiceSection";
import services from "@/data/services.json";

/* -------------------- METADATA -------------------- */
export const metadata = {
  title: "Our Services",
  description:
    "Discover ThinkFort's professional IP services including patent filings, trademarks, copyright protection, and IP consulting.",

  alternates: {
    canonical: "https://thinkfortip.com/service",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Our Services | ThinkFortIP",
    description:
      "Discover ThinkFort's professional IP services including patent filings, trademarks, copyright protection, and IP consulting.",
    url: "https://thinkfortip.com/service",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Services | ThinkFortIP",
    description:
      "Discover ThinkFort's professional IP services including patent filings, trademarks, copyright protection, and IP consulting.",
    images: ["https://thinkfortip.com/logo.png"],
  },
};

/* -------------------- PAGE -------------------- */
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": "https://thinkfortip.com/service#itemlist",
            name: "ThinkFortIP Services",
            url: "https://thinkfortip.com/service",
            description:
              "Professional IP services including patent filings, trademarks, copyright protection, and IP consulting.",
            publisher: {
              "@id": "https://thinkfortip.com/#organization",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://thinkfortip.com/service",
            },
            itemListElement: services.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `https://thinkfortip.com/service#${service.slug}`,
              name: service.title,
              description: service.description,
            })),
          }),
        }}
      />

      <div className="mt-35 mb-20">
        <ServiceSection />
      </div>
    </>
  );
}

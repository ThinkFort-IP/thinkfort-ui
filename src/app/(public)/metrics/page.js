import MetricsSection from "@/components/Metrics/MetricsSection";
export const metadata = {
  title: "Metrics",
  description:
    "View ThinkFortIP’s key metrics and impact, highlighting intellectual property matters handled, technical domains covered, and our client-focused execution approach.",
  alternates: {
    canonical: "https://thinkfortip.com/metrics",
  },
  openGraph: {
    title: "ThinkFortIP Metrics & Impact",
    description:
      "Key performance and impact metrics highlighting ThinkFortIP’s experience across patents, trademarks, and IP strategy.",
    url: "https://thinkfortip.com/metrics",
    type: "website",
  },
};
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://thinkfortip.com/metrics",
            name: "ThinkFortIP Metrics & Impact",
            url: "https://thinkfortip.com/metrics",
            description:
              "Key metrics and impact highlighting ThinkFortIP’s intellectual property experience, technical coverage, and client-focused execution.",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://thinkfortip.com/#website",
            },
            about: {
              "@type": "Organization",
              "@id": "https://thinkfortip.com/#organization",
              name: "ThinkFortIP",
            },
          }),
        }}
      />

      <div className="mt-35 mb-20">
        <MetricsSection />
      </div>
    </>
  );
}

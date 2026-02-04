import TestimonialsSection from "@/components/TestimonialsSection";
export const metadata = {
  title: "Testimonials",
  description:
    "Read client testimonials and feedback highlighting ThinkFortIP’s expertise in patents, trademarks, and strategic intellectual property services.",
  alternates: {
    canonical: "https://thinkfortip.com/testimonials",
  },
  robots: {
    index: true,
    follow: true,
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
            "@type": "ItemList",
            name: "ThinkFortIP Client Testimonials",
            url: "https://thinkfortip.com/testimonials",
            itemListElement: [
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Startup Founder",
                },
                reviewBody:
                  "ThinkFortIP supported us from idea structuring to filing a well-defined patent application. Their technical inputs strengthened our claims and overall IP strategy.",
                itemReviewed: {
                  "@type": "Organization",
                  name: "ThinkFortIP",
                },
              },
            ],
          }),
        }}
      />

      <div className="mt-35 mb-20">
        <TestimonialsSection />
      </div>
    </>
  );
}

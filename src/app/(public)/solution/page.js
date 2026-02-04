import SolutionsSection from "@/components/Solution/SolutionSection";
import solutions from "@/data/solutions.json";

/* -------------------- METADATA -------------------- */
export const metadata = {
  title: "Our Solutions",
  description:
    "Explore ThinkFort's innovative IP solutions, including patent strategies, IP analytics, and legal consulting services.",
  alternates: {
    canonical: "https://thinkfortip.com/solution",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Our Solutions | ThinkFortIP",
    description:
      "Explore ThinkFort's innovative IP solutions, including patent strategies, IP analytics, and legal consulting services.",
    url: "https://thinkfortip.com/solution",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Solutions | ThinkFortIP",
    description:
      "Explore ThinkFort's innovative IP solutions, including patent strategies, IP analytics, and legal consulting services.",
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
            "@id": "https://thinkfortip.com/solutions#itemlist",
            name: "ThinkFortIP Solutions",
            url: "https://thinkfortip.com/solutions",
            description:
              "Explore ThinkFortIP’s intellectual property solutions, including patent strategy, IP analytics, and legal consulting services for innovators.",
            numberOfItems: solutions.length,
            publisher: {
              "@id": "https://thinkfortip.com/#organization",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://thinkfortip.com/solutions",
            },
            itemListElement: solutions.map((solution, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `https://thinkfortip.com/solutions/${solution.slug}`,
              name: solution.headline,
            })),
          }),
        }}
      />

      <div className="mt-35 mb-20">
        <SolutionsSection />
      </div>
    </>
  );
}

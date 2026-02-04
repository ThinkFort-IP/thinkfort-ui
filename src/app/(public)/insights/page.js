import BlogSection from "@/components/Blog/BlogSection";
import blogs from "@/data/blogs.json";

/* -------------------- METADATA -------------------- */
export const metadata = {
  title: "IP & Legal Insights Blog",
  description:
    "Expert insights on patents, trademarks, copyrights, and intellectual property laws by ThinkFortIP.",

  alternates: {
    canonical: "https://thinkfortip.com/insights",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "IP & Legal Insights Blog | ThinkFortIP",
    description:
      "Stay updated with the latest IP laws, filing strategies, and legal insights.",
    url: "https://thinkfortip.com/insights",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "IP & Legal Insights Blog | ThinkFortIP",
    description:
      "Expert insights on patents, trademarks, copyrights, and intellectual property laws.",
    images: [
      "https://thinkfortip.com/logo.png", // optional, shows in Twitter preview
    ],
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
            "@id": "https://thinkfortip.com/insights#itemlist",
            name: "IP & Legal Insights Blog",
            url: "https://thinkfortip.com/insights",
            description:
              "Expert insights on patents, trademarks, copyrights, and intellectual property laws by ThinkFortIP.",

            publisher: {
              "@type": "Organization",
              "@id": "https://thinkfortip.com/#organization",
              name: "ThinkFortIP",
              url: "https://thinkfortip.com",
              logo: {
                "@type": "ImageObject",
                url: "https://thinkfortip.com/logo.png",
              },
            },

            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://thinkfortip.com/insights",
            },

            itemListElement: blogs.map((blog, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `https://thinkfortip.com/insights/${blog.slug}`,
              name: blog.title,
            })),
          }),
        }}
      />

      <BlogSection />
    </>
  );
}

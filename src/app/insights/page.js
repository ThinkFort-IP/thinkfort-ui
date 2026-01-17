import BlogSection from "@/components/Blog/BlogSection";
import blogs from "@/data/blogs.json";

/* -------------------- METADATA -------------------- */
export const metadata = {
  title: "IP & Legal Insights Blog | ThinkFort IP",
  description:
    "Expert insights on patents, trademarks, copyrights, and intellectual property laws by ThinkFort IP.",

  alternates: {
    canonical: "https://thinkfortip.netlify.app/insights",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "IP & Legal Insights Blog | ThinkFort IP",
    description:
      "Stay updated with the latest IP laws, filing strategies, and legal insights.",
    url: "https://thinkfortip.netlify.app/insights",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "IP & Legal Insights Blog | ThinkFort IP",
    description:
      "Expert insights on patents, trademarks, copyrights, and intellectual property laws.",
    images: [
      "https://thinkfortip.netlify.app/logo.png", // optional, shows in Twitter preview
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
            "name": "IP & Legal Insights Blog",
            "url": "https://thinkfortip.netlify.app/insights",
            "description":
              "Expert insights on patents, trademarks, copyrights, and intellectual property laws by ThinkFort IP.",
            itemListElement: blogs.map((blog, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `https://thinkfortip.netlify.app/insights/${blog.slug}`,
              name: blog.title,
              description: blog.excerpt,
              image: `https://thinkfortip.netlify.app${blog.image}`,
            })),
          }),
        }}
      />
      <BlogSection />
    </>
  );
}
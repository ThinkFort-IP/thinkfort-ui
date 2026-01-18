import BlogPage from "@/components/Blog/BlogPage";
import blogs from "@/data/blogs.json";
import { notFound } from "next/navigation";

/* -------------------- METADATA -------------------- */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return {};

  return {
    title: blog.title,
    description: blog.excerpt,
  };
}

/* -------------------- PAGE -------------------- */
export default async function Page({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: blog.title,
            description: blog.excerpt,
            image: `thinkfortip.netlify.app${blog.image}`,
            author: {
              "@type": "Organization",
              name: "ThinkFort",
            },
            publisher: {
              "@type": "Organization",
              name: "ThinkFort",
              logo: {
                "@type": "ImageObject",
                url: "thinkfortip.netlify.app/logo.png",
              },
            },
            datePublished: blog.publishedAt?.iso,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `thinkfortip.netlify.app/insights/${blog.slug}`,
            },
          }),
        }}
      />
      <div className="mt-35">{blog && <BlogPage blog={blog} />}</div>
    </>
  );
}

/* -------------------- STATIC GENERATION -------------------- */
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
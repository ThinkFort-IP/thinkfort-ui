import ServicePage from "@/components/Service/ServicePage";
import services from "@/data/services.json";
import { notFound } from "next/navigation";

/* -------------------- METADATA -------------------- */
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} | ThinkFort IP`,
    description: service.excerpt,
    alternates: {
      canonical: `https://thinkfortip.netlify.app/service/${slug}`,
    },
    openGraph: {
      title: `${service.title} | ThinkFort IP`,
      description: service.excerpt,
      url: `https://thinkfortip.netlify.app/service/${slug}`,
      type: "article",
      images: [
        {
          url: `https://thinkfortip.netlify.app${service.image || "/logo.png"}`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | ThinkFort IP`,
      description: service.excerpt,
      images: [
        `https://thinkfortip.netlify.app${service.image || "/logo.png"}`,
      ],
    },
  };
}

/* -------------------- PAGE -------------------- */
export default async function Page({ params }) {
  const { slug } = await params;
  if (!services) notFound();
  const service = services?.find((b) => b.slug === slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.excerpt,
            url: `https://thinkfortip.netlify.app/service/${service.slug}`,
            provider: {
              "@type": "Organization",
              name: "ThinkFort",
              url: "https://thinkfortip.netlify.app",
              logo: "https://thinkfortip.netlify.app/logo.png",
            },
          }),
        }}
      />
      <div className="mt-35">
        {service && <ServicePage service={service} />}
      </div>
    </>
  );
}

/* -------------------- STATIC GENERATION -------------------- */
export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

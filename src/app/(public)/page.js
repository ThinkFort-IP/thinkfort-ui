import styles from "../page.module.css";
import BlogSection from "@/components/Blog/BlogSection";
import HR from "@/components/HR";
import ServiceSection from "@/components/Service/ServiceSection";
import SolutionsSection from "@/components/Solution/SolutionSection";
import MetricsSection from "@/components/Metrics/MetricsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HeroSectionV2 from "@/components/HeroSectionV2";

export const metadata = {
  title: {
    absolute:
      "ThinkFortIP | Intellectual Property & Patent Services for Innovators",
  },
  description:
    "ThinkFortIP provides expert intellectual property, patent, trademark, and IP strategy services for startups, MSMEs, universities, and innovation-driven enterprises.",
  alternates: {
    canonical: "https://thinkfortip.com",
  },
};


export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://thinkfortip.com/#organization",
                name: "ThinkFortIP",
                alternateName: [
                  "ThinkFort IP",
                  "Think Fort IP",
                  "Think FortIP",
                ],
                url: "https://thinkfortip.com",
                logo: "https://thinkfortip.com/logo.png",
                description:
                  "ThinkFortIP provides expert intellectual property, patent, trademark, and IP strategy services for startups, MSMEs, and innovation-driven enterprises.",
              },
              {
                "@type": "WebSite",
                "@id": "https://thinkfortip.com/#website",
                url: "https://thinkfortip.com",
                name: "ThinkFortIP",
                publisher: {
                  "@id": "https://thinkfortip.com/#organization",
                },
              },
            ],
          }),
        }}
      />

      <div className={styles.page}>
        <main className={styles.main}>
          <HeroSectionV2 />
          <HR />
          <ServiceSection />
          <HR />
          <SolutionsSection />
          <HR />
          <MetricsSection />
          <HR />
          <TestimonialsSection />
          <HR />
          <BlogSection />
          <HR />
        </main>
      </div>
    </>
  );
}

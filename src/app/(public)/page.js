import styles from "../page.module.css";
import BlogSection from "@/components/Blog/BlogSection";
import HR from "@/components/HR";
import ServiceSection from "@/components/Service/ServiceSection";
import SolutionsSection from "@/components/Solution/SolutionSection";
import MetricsSection from "@/components/Metrics/MetricsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HeroSectionV2 from "@/components/HeroSectionV2";

export const metadata = {
  title: "Home | ThinkFortIP",
  description: "Professional IP services by ThinkFortIP.",
  alternates: {
    canonical: "https://thinkfortip.com",
  },
};

export default function Home() {
  return (
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
  );
}

import { HeroSection } from "@/components/HeroSection";
import styles from "../page.module.css";
import BlogSection from "@/components/Blog/BlogSection";
import HR from "@/components/HR";
import ServiceSection from "@/components/Service/ServiceSection";
import SolutionsSection from "@/components/Solution/SolutionSection";
import MetricsSection from "@/components/Metrics/MetricsSection";

export const metadata = {
  title: "Home — ThinkFort IP",
  description: "Professional IP services by ThinkFort IP.",
  alternates: {
    canonical: "https://thinkfortip.netlify.app/",
  },
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroSection />
        <HR />
        <BlogSection />
        <HR />
        <ServiceSection />
        <HR />
        <SolutionsSection />
        <HR />
        <MetricsSection />
        <HR />
      </main>
    </div>
  );
}

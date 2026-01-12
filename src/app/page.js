import { HeroSection } from "@/components/HeroSection";
import styles from "./page.module.css";
import BlogSection from "@/components/BlogSection";
import HR from "@/components/HR";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroSection />
        <HR />
        <BlogSection />
      </main>
    </div>
  );
}

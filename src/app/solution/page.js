import SolutionsSection from "@/components/Solution/SolutionSection";
export const metadata = {
  title: "IP Solutions",
  description:
    "Tailored intellectual property solutions designed for startups, enterprises, and innovators.",
  alternates: {
    canonical: "https://thinkfortip.netlify.app/solution",
  },
  openGraph: {
    title: "IP Solutions | ThinkFort",
    description:
      "Custom IP solutions for protecting, managing, and scaling your innovations.",
    url: "https://thinkfortip.netlify.app/solution",
  },
};
export default function Solution() {
  return (
    <div className="mt-35 mb-20">
      <SolutionsSection />
    </div>
  );
}
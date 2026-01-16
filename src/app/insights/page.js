import BlogSection from "@/components/Blog/BlogSection";
export const metadata = {
  title: "IP & Legal Insights Blog",
  description:
    "Expert insights on patents, trademarks, copyrights, and intellectual property laws by ThinkFort IP.",
  alternates: {
    canonical: "https://thinkfortip.netlify.app/insights",
  },
  openGraph: {
    title: "IP & Legal Insights Blog | ThinkFort IP",
    description:
      "Stay updated with the latest IP laws, filing strategies, and legal insights.",
    url: "https://thinkfortip.netlify.app/insights",
  },
};

export default function Page() {
  return (
    <BlogSection/>
  );
}

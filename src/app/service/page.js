import ServiceSection from "@/components/Service/ServiceSection";

export const metadata = {
  title: "IP Services",
  description:
    "Explore ThinkFort IP’s intellectual property services including patents, trademarks, copyrights, and IP compliance.",
  alternates: {
    canonical: "https://thinkfortip.netlify.app/service",
  },
  openGraph: {
    title: "IP Services | ThinkFort IP",
    description:
      "Comprehensive intellectual property services including patents, trademarks, and IP compliance.",
    url: "https://thinkfortip.netlify.app/service",
  },
};

export default function Service() {
  return (
    <div className="mt-35 mb-20">
      <ServiceSection />
    </div>
  );
}
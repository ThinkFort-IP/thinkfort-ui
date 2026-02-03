import MetricsSection from "@/components/Metrics/MetricsSection";
export const metadata = {
  title: "Metrics",
  description:
    "View ThinkFortIP’s key metrics and impact, highlighting intellectual property matters handled, technical domains covered, and our client-focused execution approach.",
};
export default function Page() {
    return (
        <>
            <div className="mt-35 mb-20">
                <MetricsSection />
            </div>
        </>
    )
}
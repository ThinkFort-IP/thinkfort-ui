import TestimonialsSection from "@/components/TestimonialsSection";
export const metadata = {
  title: "Testimonials",
  description:
    "Read client testimonials and feedback highlighting ThinkFortIP’s expertise in patents, trademarks, and strategic intellectual property services.",
};
export default function Page() {
  return (
    <>
      <div className="mt-35 mb-20">
        <TestimonialsSection />
      </div>
    </>
  );
}

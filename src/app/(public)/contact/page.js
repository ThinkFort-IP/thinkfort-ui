import RequirementMultiStepForm from "@/components/Form/RequirementMultiStepForm";

export const metadata = {
  title: "Contact us",
  description:
    "Get expert support from ThinkFort for intellectual property queries, filings, and legal assistance.",
  alternates: {
    canonical: "https://thinkfortip.com/contact",
  },
  openGraph: {
    title: "Support & Assistance | ThinkFort",
    description:
      "Professional IP support and guidance from experienced legal experts.",
    url: "https://thinkfortip.com/contact",
  },
};
export default function Page() {
    return (
        <>
            <RequirementMultiStepForm />
        </>
    );
};
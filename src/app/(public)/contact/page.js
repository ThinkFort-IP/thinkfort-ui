import RequirementMultiStepForm from "@/components/Form/RequirementMultiStepForm";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact ThinkFortIP for expert guidance on intellectual property, patents, trademarks, and IP strategy. Our team is here to help.",

  alternates: {
    canonical: "https://thinkfortip.com/contact",
  },

  openGraph: {
    title: "Contact ThinkFortIP | IP Support & Assistance",
    description:
      "Get professional intellectual property support and guidance from the ThinkFortIP team.",
    url: "https://thinkfortip.com/contact",
    siteName: "ThinkFortIP",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact ThinkFortIP",
            url: "https://thinkfortip.com/contact",
            mainEntity: {
              "@type": "Organization",
              name: "ThinkFortIP",
              url: "https://thinkfortip.com",
              logo: "https://thinkfortip.com/logo.png",
            },
          }),
        }}
      />

      <RequirementMultiStepForm />
    </>
  );
}

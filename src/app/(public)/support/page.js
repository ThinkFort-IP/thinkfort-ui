export const metadata = {
  title: "Technical Support",
  description:
    "Report technical issues, bugs, or access problems related to the ThinkFort website. Our support team will assist you promptly.",
  alternates: {
    canonical: "https://thinkfortip.com/support",
  },
  openGraph: {
    title: "Technical Support | ThinkFort",
    description:
      "Facing a technical issue on the ThinkFort website? Report bugs, errors, or access issues and get help from our support team.",
    url: "https://thinkfortip.com/support",
  },
};

import SupportForm from "@/components/Form/SupportForm";

export default function Page() {
  return (
    <>
        <SupportForm />
    </>
  );
}

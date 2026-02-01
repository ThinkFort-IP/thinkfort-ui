import Footers from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: {
    default: "ThinkFort IP – IP Services",
    template: "%s | ThinkFort IP",
  },
  description:
    "ThinkFort IP provides expert intellectual property services, solutions, and legal support for startups and enterprises.",
  openGraph: {
    title: "ThinkFort IP – IP Services",
    description:
      "ThinkFort IP provides expert intellectual property services, solutions, and legal support for startups and enterprises.",
    url: "https://thinkfortip.com/",
    siteName: "ThinkFort",
    images: [
      {
        url: "https://thinkfortip.com/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://thinkfortip.com",
  },
};


export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footers />
    </>
  );
}

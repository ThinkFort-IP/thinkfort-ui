import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(...args){window.dataLayer.push(args);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}

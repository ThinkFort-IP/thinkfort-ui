export const metadata = {
  title: "Submit Your IP Requirement",
  description:
    "Share your intellectual property requirements and get expert guidance from ThinkFort.",
  alternates: {
    canonical: "https://thinkfortip.netlify.app/requirements",
  },
  openGraph: {
    title: "Submit Your IP Requirement | ThinkFort",
    description:
      "Tell us your IP needs and our experts will assist you with the right solution.",
    url: "https://thinkfortip.netlify.app/requirements",
  },
};

export default function Requirements() {
  return (
    <div className="flex flex-col items-center">
      <iframe className="mt-35 h-400 w-400" src="https://docs.google.com/forms/d/e/1FAIpQLSf01XPeaOWDHeFLhzlw6wWDgKyR16FdfRtPx-fTzc972X91UQ/viewform?embedded=true">Loading…</iframe>
    </div>
  );
}
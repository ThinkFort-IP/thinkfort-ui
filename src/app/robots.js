export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://thinkfortip.netlify.app/sitemap.xml",
  };
}

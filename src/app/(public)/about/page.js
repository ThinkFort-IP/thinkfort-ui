import Image from "next/image";
export const metadata = {
  title: "About",
  description:
    "End-to-end IP filing services including patents, trademarks, and copyrights.",
};
export default function About() {
  return (
    <>
      <div className="mt-35 mb-10 md:px-30 px-10">
        <h1 className="text-xl uppercase font-semibold text-slate-700">
          What we do?
        </h1>
        <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-[rgb(var(--brand-green))] to-[rgb(var(--brand-gold))]"></div>
        <p className="mt-8">
            ThinkFortIP is an Intellectual Property Rights (IPR) firm focused on
            technically strong filings, strategic IP enhancement, and
            client-oriented execution. We work with startups, MSMEs,
            universities, and innovation-driven organizations to transform ideas
            into legally enforceable and commercially valuable IP assets.
          </p>
        <p className="mt-4">
          In a competitive innovation ecosystem, filing alone is not enough. The
          quality of drafting, accuracy of filing, and alignment with business
          goals determine the true strength of intellectual property.
          ThinkFortIP follows a structured, detail-driven approach to ensure
          that every patent, trademark, or copyright filing supports long-term
          protection and growth.
        </p>
        
      </div>
      <section className="mb-20 flex flex-col lg:flex-row items-center justify-center gap-15 md:px-30 px-10">
        <div className="relative shadow-2xl shadow-[rgb(var(--bg-surface))] rounded-2xl overflow-hidden shrink-0">
          <Image
            width={900}
            height={900}
            className="md:max-w-md object-cover rounded-2xl"
            src="/about.png"
            alt=""
          />
        </div>
        <div className="text-sm text-slate-600 max-w-2xl">
          <p className="mt-4 font-semibold">✓ Our Core Focus Areas</p>
          <div>
            <p>
              1. Technically enhanced patent drafting and patentability support.
            </p>
            <p>
              2. Accurate and compliant patent, trademark, and copyright filing.
            </p>
            <p>
              3. Strategic IP structuring aligned with business, funding, and
              expansion plans.
            </p>
            <p>
              4. Risk identification to reduce objections, oppositions, and
              future disputes.
            </p>
          </div>
          <p className="mt-4 font-semibold">✓ Why Clients Choose ThinkFortIP</p>
          <div>
            <p>1. Strong emphasis on enforceability, not symbolic filings.</p>
            <p>2. Client-centric communication with transparent processes.</p>
            <p>
              3. Industry-specific understanding of innovation and R&D
              workflows.
            </p>
            <p>4. Reliable execution that builds long-term trust.</p>
          </div>
          <p className="mt-4">
          We believe intellectual property is a business asset, not a formality.
          ThinkFortIP exists to help organizations protect innovation with
          clarity, confidence, and technical precision, so they can grow
          securely in competitive markets.
        </p>
        </div>
      </section>
    </>
  );
}

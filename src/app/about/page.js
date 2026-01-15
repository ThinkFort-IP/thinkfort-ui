import Image from "next/image";

export default function About() {
    return (
        <>
            <section className="mt-35 mb-20 flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4">
                <div className="relative shadow-2xl shadow-[rgb(var(--bg-surface))] rounded-2xl overflow-hidden shrink-0">
                {/* TODO: Change image */}
                    <Image width={900} height={900} className="max-w-md object-cover rounded-2xl"
                        src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
                        alt="" />
                    <div className="flex items-center gap-1 max-w-72 absolute bottom-8 left-8 bg-white p-4 rounded-xl">
                        <div className="flex -space-x-4 shrink-0">
                            <Image width={36} height={36} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="image"
                                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-1" />
                            <Image width={36} height={36} src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="image"
                                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[2]" />
                            <Image width={36} height={36} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                                alt="image"
                                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[3]" />
                            <div
                                className="flex items-center justify-center text-xs  text-white size-9 rounded-full border-[3px] border-white bg-[rgb(var(--brand-green))] hover:-translate-y-1 transition z-[4]">
                                50+
                            </div>
                        </div>
                        {/* TODO */}
                        <p className="text-sm font-medium text-slate-800">Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="text-sm text-slate-600 max-w-lg">
                    <h1 className="text-xl uppercase font-semibold text-slate-700">What we do?</h1>
                    <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-[rgb(var(--brand-green))] to-[rgb(var(--brand-gold))]"></div>
                    <p className="mt-8">ThinkFortIP is an Intellectual Property Rights (IPR) firm focused on technically strong filings, strategic IP enhancement, and client-oriented execution. We work with startups, MSMEs, universities, and innovation-driven organizations to transform ideas into legally enforceable and commercially valuable IP assets.</p>
                    <p className="mt-4">In a competitive innovation ecosystem, filing alone is not enough. The quality of drafting, accuracy of filing, and alignment with business goals determine the true strength of intellectual property. ThinkFortIP follows a structured, detail-driven approach to ensure that every patent, trademark, or copyright filing supports long-term protection and growth.</p>

                    <p className="mt-4">✓ Our Core Focus Areas</p>
                    <ul className="list-decimal">
                        <li>Technically enhanced patent drafting and patentability support.</li>
                        <li>Accurate and compliant patent, trademark, and copyright filing.</li>
                        <li>Strategic IP structuring aligned with business, funding, and expansion plans.</li>
                        <li>Risk identification to reduce objections, oppositions, and future disputes.</li>
                    </ul>
                    <p className="mt-4">✓ Why Clients Choose ThinkFortIP</p>
                    <ul className="list-decimal">
                        <li>Strong emphasis on enforceability, not symbolic filings.</li>
                        <li>Client-centric communication with transparent processes.</li>
                        <li>Industry-specific understanding of innovation and R&D workflows.</li>
                        <li>Reliable execution that builds long-term trust.</li>
                    </ul>
                    <p className="mt-4">We believe intellectual property is a business asset, not a formality. ThinkFortIP exists to help organizations protect innovation with clarity, confidence, and technical precision, so they can grow securely in competitive markets.</p>
                </div>
            </section>
        </>
    );
};
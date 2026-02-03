"use client"
import React from "react";

export default function FAQ () {
    const [openIndex, setOpenIndex] = React.useState(null);

    const faqs = [
        {
            question: "What services does your company provide?",
            answer: "We provide end-to-end intellectual property services, including patentability searches, drafting and filing of patents, trademarks, designs, and copyrights, IP prosecution support, IP strategy advisory, and portfolio management for startups, MSMEs, universities, and individual inventors.",
        },
        {
            question: "Do we provide legal advice through the website?",
            answer: "No. Information available on this website is for general informational purposes only and does not constitute legal advice. A formal professional relationship is established only after written engagement and confirmation of services.",
        },
        {
            question: "How do I know if my invention is patentable?",
            answer: "Patentability depends on novelty, inventive step, and industrial applicability. We conduct structured patentability and prior-art searches to assess whether an invention meets the legal requirements under applicable patent laws.",
        },
        {
            question: "Is my idea safe if I submit it through the website?",
            answer: "We maintain strict internal confidentiality practices; however, users are advised not to disclose sensitive invention details through the website unless a formal engagement or non-disclosure agreement (NDA) has been executed.",
        },
        {
            question: "Do we sign Non-Disclosure Agreements (NDAs)?",
            answer: "Yes. We can execute NDAs upon request before receiving confidential technical or commercial information, subject to mutual agreement.",
        },
        {
            question: "What is the typical timeline for patent filing?",
            answer: "The timeline varies based on the complexity of the invention and jurisdiction. Generally, drafting and filing a patent application may take 7–21 working days after receipt of complete information and documents.",
        },
        {
            question: "Do we guarantee patent or trademark registration?",
            answer: "No. Grant or registration of intellectual property rights is solely determined by the relevant intellectual property office. We do not guarantee approvals but ensure professional, compliant, and strategic handling of each case.",
        },
        {
            question: "Do we work with startups and MSMEs?",
            answer: "Yes. We regularly work with startups, MSMEs, research institutions, and universities, offering structured, cost-efficient IP solutions aligned with business and funding objectives.",
        },
        {
            question: "Do we provide international IP filing support?",
            answer: "Yes. We assist with international patent and trademark filings through appropriate treaties and international filing mechanisms, in coordination with trusted associates where required.",
        },
        {
            question: "How are your professional fees structured?",
            answer: "Fees depend on the scope of work, complexity, jurisdiction, and stage of service. Professional fees are communicated transparently through formal proposals. Government and official fees are charged separately unless stated otherwise.",
        },
        {
            question: "Can universities and researchers engage your services?",
            answer: "Yes. We support universities, research centers, and PhD scholars with patent searches, drafting, filing, technology commercialization support, and IP awareness programs.",
        },
        {
            question: "Will we communicate directly with patent offices on my behalf?",
            answer: "Yes, once formally authorized, we represent clients before relevant intellectual property offices and manage official communications, filings, and responses.",
        },
        {
            question: "What documents are required to start an IP filing?",
            answer: "Required documents vary by service but may include: ",
            bullets: [
                "Invention or brand details",
                "Applicant and inventor information",
                "Supporting technical or design documents",
                "Authorization form"
            ]
        },
        {
            question: "How can I contact your team?",
            answer: "You may contact us through the website enquiry form or official email mentioned on the Contact Us page. Our team will respond within a reasonable business timeframe.",
        },
    ];
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <div className="mt-35 mb-20 flex flex-col md:flex-row items-start justify-center gap-8 px-4 md:px-0">
                
                <div>
                    <p className="text-[rgb(var(--brand-gold))] text-sm font-medium">FAQ&apos;s</p>
                    <h1 className="text-3xl font-semibold">Looking for answer?</h1>
                    <p className="text-sm text-slate-500 mt-2 pb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis bibendum felis a dignissim.
                    </p>
                    {faqs.map((faq, index) => (
                        <div className="border-b border-slate-200 py-4 cursor-pointer" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                            <div className="flex items-center justify-between">
                                <h3 className="text-base font-medium">
                                    {faq.question}
                                </h3>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}>
                                    <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-200 ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                                {faq?.answer}
                                {faq?.bullets && (
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                {faq?.bullets.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                                </ul>
                            )}
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
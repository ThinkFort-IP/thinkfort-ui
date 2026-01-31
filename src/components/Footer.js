import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <style>{`
                @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
            
                * {
                    font-family: "Poppins", sans-serif;
                }
            `}</style>
      <footer
        className="bg-black py-12 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "gainsboro" }}
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">
            <div className="w-full md:w-[45%] lg:w-[35%] flex flex-col items-center md:items-start text-center md:text-left">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="Description of my image"
                  width={157} // Specify the width of the image
                  height={40} // Specify the height of the image
                />
              </Link>

              <p className="text-sm text-[rgb(var(--brand-green))] mt-6 max-w-sm leading-relaxed">
                Strategic intellectual property solutions helping innovators
                protect ideas, strengthen assets, and unlock long-term value.
              </p>
            </div>

            <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-sm text-[rgb(var(--brand-green))] font-medium">
                Important Links
              </h3>
              <div className="flex flex-col gap-2 mt-6">
                <Link
                  href="/about"
                  className="text-sm text-[rgb(var(--brand-green))] hover:text-[rgb(var(--btn-hover))] transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/faq"
                  className="text-sm text-[rgb(var(--brand-green))] hover:text-[rgb(var(--btn-hover))] transition-colors"
                >
                  FAQ
                </Link>
                <Link
                  href="/careers"
                  className="text-sm text-[rgb(var(--brand-green))] hover:text-[rgb(var(--btn-hover))] transition-colors"
                >
                  Careers
                </Link>
                <Link
                  href="/testimonials"
                  className="text-sm text-[rgb(var(--brand-green))] hover:text-[rgb(var(--btn-hover))] transition-colors"
                >
                  Testimonials
                </Link>
                <Link
                  href="/metrics"
                  className="text-sm text-[rgb(var(--brand-green))] hover:text-[rgb(var(--btn-hover))] transition-colors"
                >
                  Metrics
                </Link>
                <Link
                  href="/support"
                  className="text-sm text-[rgb(var(--brand-green))] hover:text-[rgb(var(--btn-hover))] transition-colors"
                >
                  Support
                </Link>
                <Link
                  href="/contact"
                  className="text-sm text-[rgb(var(--brand-green))] hover:text-[rgb(var(--btn-hover))] transition-colors"
                >
                  Contact us
                </Link>
              </div>
            </div>

            <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-sm text-[rgb(var(--brand-green))] font-medium">
                Social Links
              </h3>
              <div className="flex flex-col gap-2 mt-6">
                <a
                  href="https://x.com/thinkfortip"
                  target="_blank"
                  className="text-sm text-[rgb(var(--brand-green))] hover:text-[rgb(var(--btn-hover))] transition-colors"
                >
                  X.com (Twitter)
                </a>
                <a
                  href="https://www.instagram.com/thinkfortip"
                  target="_blank"
                  className="text-sm text-[rgb(var(--brand-green))] hover:text-[rgb(var(--btn-hover))] transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.youtube.com/@ThinkFortIP"
                  target="_blank"
                  className="text-sm text-[rgb(var(--brand-green))] hover:text-[rgb(var(--btn-hover))] transition-colors"
                >
                  Youtube
                </a>
                <a
                  href="https://www.linkedin.com/company/thinkfortip"
                  target="_blank"
                  className="text-sm text-[rgb(var(--brand-green))] hover:text-[rgb(var(--btn-hover))] transition-colors"
                >
                  Linkedin
                </a>
              </div>
            </div>

            <div className="w-full md:w-[45%] lg:w-[25%] flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-sm text-[rgb(var(--brand-green))] font-medium">
                Subscribe for news
              </h3>
              <div className="flex items-center border gap-2 border-[rgb(var(--brand-green))] h-13 max-w-80 w-full rounded-full overflow-hidden mt-4">
                <input
                  type="email"
                  placeholder="Enter your email.."
                  className="w-full h-full pl-6 outline-none text-sm bg-transparent text-[rgb(var(--brand-green))] placeholder-[rgb(var(--brand-green))] placeholder:text-xs"
                  required
                />
                <button
                  type="submit"
                  className="bg-[rgb(var(--brand-green))] hover:bg-[rgb(var(--btn-hover))] active:scale-95 transition w-56 h-10 rounded-full text-sm text-white cursor-pointer mr-1.5"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Office Locations */}
          <div className="flex justify-center md:justify-end mt-10">
            <div className="flex items-start gap-2 text-xs text-[rgb(var(--brand-green))]">
              <FaMapMarkerAlt className="mt-0.5" />
              <div className="leading-snug">
                <p>Noida, India</p>
              </div>
            </div>
          </div>

          <div className="w-full h-px mt-5 mb-4 bg-linear-to-r from-black via-white/25 to-black"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[rgb(var(--brand-green))]">
              © 2026 ThinkFort IP. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/terms-and-conditions"
                className="text-xs text-[rgb(var(--brand-green))] hover:text-[rgb(var(--btn-hover))] transition-colors"
              >
                Terms & Conditions
              </Link>
              <div className="w-px h-4 bg-white/20"></div>
              <Link
                href="/privacy-policy"
                className="text-xs text-[rgb(var(--brand-green))] hover:text-[rgb(var(--btn-hover))] transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

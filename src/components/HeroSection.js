"use client"
import Image from "next/image";
import { useRouter } from 'next/navigation'
export const HeroSection = () => {
  const router = useRouter()
  return (
    <div className="mt-35 flex flex-col max-md:gap-20 md:flex-row pb-20 items-center justify-between mt-20 px-4 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-col items-center md:items-start">
          
          <h1 className="text-center md:text-left text-5xl leading-[68px] md:text-6xl md:leading-[84px] font-medium max-w-xl text-[rgb(var(--text-primary))]">
              Lorem ipsum dolor sit amet.
          </h1>
          <p className="text-center md:text-left text-sm text-[rgb(var(--text-secondary))] max-w-lg mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis bibendum felis a dignissim. Sed nulla dui.
          </p>
          <div className="flex items-center gap-4 mt-8 text-sm">
              <button className="bg-[rgb(var(--brand-green))] hover:bg-[rgb(var(--btn-hover))] text-white active:scale-95 rounded-md px-7 h-11" onClick={()=> router.push('/requirements')}>
                  Get started
              </button>
          </div>
      </div>
      <Image src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/hero-section-showcase-3.png" alt="hero" className="max-w-xs sm:max-w-sm lg:max-w-md transition-all duration-300" width={448} height={489}/>
    </div>
  );
}
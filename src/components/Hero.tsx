"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const imgWrapperRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    const lines = textRef.current?.querySelectorAll(".hero-line");
    if (lines) {
      tl.fromTo(
        lines,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out" },
        0.2
      );
    }

    tl.fromTo(
      imgWrapperRef.current,
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: "power3.out" },
      0.1
    );

    tl.fromTo(
      metaRef.current?.children || [],
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power2.out" },
      0.8
    );

    gsap.to(imgWrapperRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-espresso pt-8 pb-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div ref={imgWrapperRef} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <Image 
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2000&auto=format&fit=crop" 
            alt="Premium chocolate cake" 
            fill
            priority
            className="object-cover opacity-60"
          />
        </div>
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/40 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 z-10 relative pt-24 lg:pt-32">
        <div className="max-w-5xl text-cream">
          <h1 ref={textRef} className="text-6xl md:text-8xl lg:text-[7rem] xl:text-[8.5rem] font-serif leading-[0.9] tracking-tight uppercase">
            <div className="overflow-hidden pb-2"><span className="hero-line block">Cakes</span></div>
            <div className="overflow-hidden pb-2"><span className="hero-line block text-light-sage italic pr-4">Made</span></div>
            <div className="overflow-hidden pb-2"><span className="hero-line block pl-8 md:pl-16">With</span></div>
            <div className="overflow-hidden pb-2"><span className="hero-line block">Character.</span></div>
          </h1>
          
          <div className="mt-12 md:mt-24 max-w-sm" ref={metaRef}>
            <p className="text-lg md:text-xl font-light leading-relaxed mb-6">
              Custom homemade Cakes and Treats in Queens, NY by Monique.
            </p>
            <div className="flex flex-wrap gap-4 text-xs tracking-widest uppercase opacity-80">
              <span>Queens, NY</span>
              <span>•</span>
              <span>Premium Quality</span>
              <span>•</span>
              <span>Made by Mo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

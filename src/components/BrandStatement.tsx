"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function BrandStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const lines = textRef.current?.querySelectorAll(".statement-line");
    
    if (lines) {
      gsap.fromTo(
        lines,
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.5, 
          stagger: 0.2, 
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }

    gsap.fromTo(
      pRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: pRef.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="about" className="pt-48 pb-32 px-6 md:px-12 bg-espresso text-cream">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h2 ref={textRef} className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-16 max-w-5xl">
          <div className="overflow-hidden pb-2"><span className="statement-line block">Not just dessert.</span></div>
          <div className="overflow-hidden pb-2"><span className="statement-line block italic text-earth-green">A little piece of art</span></div>
          <div className="overflow-hidden pb-2"><span className="statement-line block">made to be eaten.</span></div>
        </h2>
        
        <p ref={pRef} className="max-w-2xl text-lg md:text-xl font-light leading-relaxed opacity-90">
          Mo&apos;s Cakes & Treats creates custom homemade Cakes and Treats in Queens, NY, combining playful design, thoughtful ingredients and flavours worth coming back for.
        </p>
      </div>
    </section>
  );
}

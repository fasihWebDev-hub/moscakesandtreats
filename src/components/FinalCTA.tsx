"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { OrderModal } from "./OrderModal";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function FinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useGSAP(() => {
    gsap.fromTo(".final-cta-text",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        }
      }
    );

    gsap.to(".final-cta-bg", {
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-32 md:py-48 px-6 md:px-12 flex items-center justify-center overflow-hidden min-h-[80vh]">
      <div className="absolute inset-0 z-0 bg-espresso">
        <Image 
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2000&auto=format&fit=crop" 
          alt="Cake detail" 
          fill
          className="final-cta-bg object-cover opacity-20"
        />
      </div>

      <div className="container mx-auto text-center relative z-10 text-cream">
        <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-serif leading-[0.85] tracking-tight uppercase mb-12">
          <div className="overflow-hidden"><span className="final-cta-text block">Your Next</span></div>
          <div className="overflow-hidden"><span className="final-cta-text block italic text-earth-green">Celebration</span></div>
          <div className="overflow-hidden"><span className="final-cta-text block">Deserves</span></div>
          <div className="overflow-hidden"><span className="final-cta-text block">A Cake.</span></div>
        </h2>
        
        <p className="final-cta-text text-lg md:text-xl font-light mb-16 opacity-90 max-w-xl mx-auto">
          Custom homemade Cakes and Treats in Queens, NY.
        </p>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="final-cta-text group relative inline-flex items-center justify-center px-12 py-6 bg-cream text-espresso overflow-hidden"
        >
          <div className="absolute inset-0 w-full h-full bg-earth-green transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
          <span className="relative z-10 flex items-center text-sm uppercase tracking-widest font-bold group-hover:text-cream transition-colors duration-300">
            Order Your Cake <span className="ml-4 text-xl">→</span>
          </span>
        </button>
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

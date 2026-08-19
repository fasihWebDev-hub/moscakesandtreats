"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  const text = "LUXURIOUS • HANDMADE • QUEENS, NY • CELEBRATIONS • CAKES • TREATS • ";

  useGSAP(() => {
    gsap.to(".marquee-inner", {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1,
    });
  }, { scope: marqueeRef });

  return (
    <section className="py-12 bg-earth-green text-cream overflow-hidden border-y border-cream/20">
      <div ref={marqueeRef} className="w-full flex whitespace-nowrap overflow-hidden no-scrollbar">
        <div className="marquee-inner flex text-2xl md:text-4xl font-serif tracking-widest uppercase">
          <span className="pr-4">{text}</span>
          <span className="pr-4">{text}</span>
          <span className="pr-4">{text}</span>
          <span className="pr-4">{text}</span>
        </div>
      </div>
    </section>
  );
}

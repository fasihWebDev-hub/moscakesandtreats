"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800&auto=format&fit=crop", className: "col-span-1 row-span-2 aspect-[3/4]" },
  { src: "https://images.unsplash.com/photo-1514517521153-1be72277b32f?q=80&w=800&auto=format&fit=crop", className: "col-span-1 row-span-1 aspect-square mt-12" },
  { src: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=800&auto=format&fit=crop", className: "col-span-2 row-span-2 aspect-[4/3]" },
  { src: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?q=80&w=800&auto=format&fit=crop", className: "col-span-1 row-span-1 aspect-square" },
  { src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop", className: "col-span-1 row-span-2 aspect-[3/4] -mt-12" },
  { src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop", className: "col-span-1 row-span-1 aspect-square" },
];

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLElement>(".gallery-item");
    
    items.forEach((item, i) => {
      // Parallax effect
      gsap.to(item, {
        yPercent: i % 2 === 0 ? -10 : 10,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Reveal animation
      gsap.fromTo(item,
        { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="gallery" className="py-32 px-6 md:px-12 bg-cream text-espresso">
      <div className="container mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-serif mb-6">FOLLOW THE SWEET LIFE</h2>
          <a href="#" className="text-sm tracking-widest uppercase hover:text-earth-green transition-colors border-b border-espresso pb-1">
            @alxbakehouse
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 auto-rows-auto">
          {images.map((img, idx) => (
            <div key={idx} className={`gallery-item relative overflow-hidden group ${img.className}`}>
              <div className="absolute inset-0 bg-espresso/5">
                <Image 
                  src={img.src} 
                  alt={`Gallery image ${idx + 1}`} 
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-espresso/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-cream text-2xl">♡</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

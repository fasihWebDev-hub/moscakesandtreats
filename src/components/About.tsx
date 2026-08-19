"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".about-image-wrapper", 
      { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
      { 
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", 
        duration: 1.5, 
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        }
      }
    );

    gsap.fromTo(".about-text",
      { opacity: 0, x: 50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 bg-cream text-espresso overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
          <div className="about-image-wrapper absolute inset-0 bg-light-sage">
            <Image 
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop" 
              alt="Monique baking in the studio" 
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center max-w-xl">
          <h2 className="about-text text-5xl md:text-7xl font-serif mb-8 leading-none">
            MADE BY <br/> MONIQUE
          </h2>
          <div className="about-text space-y-6 text-lg font-light opacity-90">
            <p>
              It started with a simple belief: desserts shouldn&apos;t be a compromise. They should be a celebration.
            </p>
            <p>
              Every cake that leaves our Queens studio is handcrafted in small batches, focusing on imaginative design and flavour profiles that linger long after the last bite.
            </p>
            <p className="font-serif italic text-2xl pt-4 text-earth-green">
              &quot;Baking is my love language. This is how I speak it.&quot;
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

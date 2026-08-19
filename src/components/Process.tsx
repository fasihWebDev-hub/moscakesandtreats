"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: "01", title: "TELL ME YOUR IDEA", desc: "Share your vision, theme, and flavours. I'll listen and gather the details to understand what makes your celebration special." },
  { num: "02", title: "WE CREATE THE DETAILS", desc: "I'll design a custom concept for your cake, from the structure down to the intricate textural details and finishing touches." },
  { num: "03", title: "MAKE IT A CELEBRATION", desc: "Your cake is baked fresh, styled beautifully, and ready to be the sweet centrepiece of your unforgettable moment." },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const processItems = gsap.utils.toArray<HTMLElement>(".process-step");
    
    processItems.forEach((item) => {
      gsap.fromTo(item,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 bg-cream text-espresso">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-24 md:space-y-32">
          {steps.map((step) => (
            <div key={step.num} className="process-step flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
              <div className="text-6xl md:text-8xl font-serif text-earth-green opacity-50 shrink-0">
                {step.num}
              </div>
              <div className="pt-4 md:pt-6">
                <h3 className="text-2xl md:text-4xl font-serif mb-4">{step.title}</h3>
                <p className="text-lg opacity-80 max-w-lg leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

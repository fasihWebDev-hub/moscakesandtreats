"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { OrderModal } from "./OrderModal";

gsap.registerPlugin(ScrollTrigger);

export function CustomOrders() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useGSAP(() => {
    gsap.fromTo(".custom-order-text",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 bg-light-sage text-espresso">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h2 className="custom-order-text text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-none">
          MADE FOR <br className="md:hidden" /> YOUR MOMENT.
        </h2>
        
        <p className="custom-order-text max-w-2xl text-lg md:text-xl font-light mb-12 opacity-90">
          Whether it's a birthday, wedding, anniversary, or a corporate event, we design custom cakes that serve as the beautiful centrepiece for your celebration.
        </p>

        <div className="custom-order-text flex flex-wrap justify-center gap-4 mb-16 opacity-80 text-sm uppercase tracking-widest">
          <span>Birthdays</span>
          <span>•</span>
          <span>Weddings</span>
          <span>•</span>
          <span>Anniversaries</span>
          <span>•</span>
          <span>Baby Showers</span>
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="custom-order-text group relative inline-flex items-center justify-center px-10 py-5 bg-espresso text-cream overflow-hidden"
        >
          <div className="absolute inset-0 w-full h-full bg-earth-green transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
          <span className="relative z-10 flex items-center text-sm uppercase tracking-widest font-medium">
            Start a Custom Order <span className="ml-3 transition-transform duration-300 group-hover:translate-x-2">→</span>
          </span>
        </button>
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

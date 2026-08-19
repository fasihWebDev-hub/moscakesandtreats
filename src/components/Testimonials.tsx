"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "Monique turned our idea into the most beautiful cake we've ever had — and it tasted even better.",
    name: "Sarah & James",
    event: "Wedding",
  },
  {
    quote: "The pistachio cake was an absolute showstopper. Every single guest asked where it was from.",
    name: "Mia T.",
    event: "30th Birthday",
  },
  {
    quote: "I never thought a cake could be this rich and decadent. A true work of art.",
    name: "David L.",
    event: "Anniversary",
  }
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo(".testimonial-content",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: containerRef });

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 bg-espresso text-cream overflow-hidden">
      <div className="container mx-auto max-w-5xl text-center relative">
        <div className="testimonial-content min-h-[300px] flex flex-col justify-center items-center">
          <p className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-12">
            &quot;{testimonials[currentIndex].quote}&quot;
          </p>
          <div className="text-sm tracking-widest uppercase">
            <span className="font-semibold">{testimonials[currentIndex].name}</span>
            <span className="mx-3 opacity-50">|</span>
            <span className="opacity-80 text-earth-green">{testimonials[currentIndex].event}</span>
          </div>
        </div>

        <div className="testimonial-content flex justify-center gap-8 mt-16">
          <button onClick={prev} className="p-3 rounded-full border border-cream/20 hover:bg-cream hover:text-espresso transition-colors">
            <ArrowLeft size={20} />
          </button>
          <button onClick={next} className="p-3 rounded-full border border-cream/20 hover:bg-cream hover:text-espresso transition-colors">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

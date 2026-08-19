"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { X } from "lucide-react";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.3,
      });
      gsap.to(modalRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.1,
      });
    } else {
      gsap.to(modalRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3,
        delay: 0.2,
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso/40 backdrop-blur-sm opacity-0 pointer-events-none"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-cream p-8 md:p-12 opacity-0 translate-y-12"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-espresso hover:text-earth-green transition-colors"
        >
          <X size={24} />
        </button>

        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-2">Made for Your Moment</h2>
          <p className="text-sm text-espresso/70">
            Tell us about your celebration and we&apos;ll create something special.
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2">Name</label>
              <input type="text" className="w-full border-b border-espresso/30 bg-transparent py-2 focus:outline-none focus:border-espresso transition-colors" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2">Email</label>
              <input type="email" className="w-full border-b border-espresso/30 bg-transparent py-2 focus:outline-none focus:border-espresso transition-colors" placeholder="jane@example.com" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2">Event Type</label>
              <input type="text" className="w-full border-b border-espresso/30 bg-transparent py-2 focus:outline-none focus:border-espresso transition-colors" placeholder="e.g. Birthday, Wedding" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2">Event Date</label>
              <input type="date" className="w-full border-b border-espresso/30 bg-transparent py-2 focus:outline-none focus:border-espresso transition-colors" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2">Servings</label>
              <input type="number" className="w-full border-b border-espresso/30 bg-transparent py-2 focus:outline-none focus:border-espresso transition-colors" placeholder="10" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2">Flavour</label>
              <input type="text" className="w-full border-b border-espresso/30 bg-transparent py-2 focus:outline-none focus:border-espresso transition-colors" placeholder="e.g. Chocolate" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2">Budget</label>
              <input type="text" className="w-full border-b border-espresso/30 bg-transparent py-2 focus:outline-none focus:border-espresso transition-colors" placeholder="$" />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest mb-2">Details & Inspiration</label>
            <textarea rows={4} className="w-full border-b border-espresso/30 bg-transparent py-2 focus:outline-none focus:border-espresso transition-colors resize-none" placeholder="Tell me about the design, colours, and vibe..."></textarea>
          </div>

          <button className="w-full bg-espresso text-cream py-4 uppercase tracking-widest text-sm hover:bg-earth-green transition-colors mt-8">
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}

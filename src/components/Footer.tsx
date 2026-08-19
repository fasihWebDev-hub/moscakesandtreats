"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".footer-element", 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <footer ref={containerRef} className="bg-espresso text-cream pt-24 pb-12 px-6 md:px-12 border-t border-cream/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
          <div className="md:col-span-2">
            <h3 className="footer-element text-4xl font-serif mb-6">MO&apos;S CAKES & TREATS</h3>
            <p className="footer-element text-sm opacity-70 max-w-sm">
              Custom homemade Cakes and Treats, handmade in Queens, NY. 
              <br/>🌟 5 Star Hygiene Rating | 🔒 Registered + Insured
              <br/>🚫 Do Not Cater for Allergies
            </p>
          </div>
          
          <div>
            <h4 className="footer-element text-xs tracking-widest uppercase mb-6 text-earth-green">Contact</h4>
            <ul className="space-y-4 text-sm opacity-90">
              <li className="footer-element"><a href="#" className="hover:text-earth-green transition-colors">💌 Order via DM</a></li>
              <li className="footer-element">Queens, NY (11413)</li>
            </ul>
          </div>

          <div>
            <h4 className="footer-element text-xs tracking-widest uppercase mb-6 text-earth-green">Follow</h4>
            <ul className="space-y-4 text-sm opacity-90">
              <li className="footer-element"><a href="#" className="hover:text-earth-green transition-colors">Instagram</a></li>
              <li className="footer-element"><a href="#" className="hover:text-earth-green transition-colors">TikTok</a></li>
              <li className="footer-element"><a href="#" className="hover:text-earth-green transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-cream/10 text-xs opacity-50">
          <p className="footer-element mb-4 md:mb-0">© 2026 Mo&apos;s Cakes & Treats. All rights reserved.</p>
          <div className="footer-element flex space-x-6">
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

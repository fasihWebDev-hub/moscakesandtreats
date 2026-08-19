"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { OrderModal } from "./OrderModal";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal animation on load
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
    );

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    if (isMobileMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.inOut"
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.inOut"
      });
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-cream/90 backdrop-blur-md py-4 shadow-sm text-espresso"
            : "bg-transparent py-6 text-cream"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="font-serif text-xl tracking-widest font-bold">
            MO&apos;S CAKES & TREATS
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            <div className="flex space-x-8 text-sm uppercase tracking-widest">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-earth-green transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <button
              onClick={() => setIsOrderModalOpen(true)}
              className="text-sm uppercase tracking-widest border-b border-current pb-1 hover:text-earth-green hover:border-earth-green transition-all"
            >
              Order a Cake →
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden z-50 relative ${isMobileMenuOpen ? "text-espresso" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 bg-cream z-30 flex flex-col justify-center px-12 translate-x-full"
      >
        <div className="flex flex-col space-y-8 text-3xl font-serif">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-earth-green transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsOrderModalOpen(true);
            }}
            className="text-left hover:text-earth-green transition-colors flex items-center gap-2"
          >
            Order a Cake <span className="text-xl">→</span>
          </button>
        </div>
      </div>

      {/* Order Modal */}
      <OrderModal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
      />
    </>
  );
}

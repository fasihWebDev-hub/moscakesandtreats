"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    name: "Signature Chocolate Cake",
    desc: "Rich, dense, and unapologetically decadent.",
    category: "Cakes",
    img: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=1200&auto=format&fit=crop",
    className: "col-span-1 md:col-span-2 aspect-[4/3] md:aspect-[16/9]",
  },
  {
    id: 2,
    name: "Strawberry Dream",
    desc: "Light vanilla sponge with fresh strawberries.",
    category: "Cakes",
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop",
    className: "col-span-1 aspect-[3/4]",
  },
  {
    id: 3,
    name: "Pistachio Celebration",
    desc: "Earthy pistachio with a hint of rose water.",
    category: "Celebration",
    img: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=800&auto=format&fit=crop",
    className: "col-span-1 aspect-square",
  },
  {
    id: 4,
    name: "Mini Cupcake Box",
    desc: "A tasting selection of our finest flavours.",
    category: "Bites",
    img: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=800&auto=format&fit=crop",
    className: "col-span-1 md:col-span-2 aspect-[4/3] md:aspect-[21/9]",
  }
];

export function FeaturedCollection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLElement>(".product-card");
    
    items.forEach((item) => {
      gsap.fromTo(item, 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="menu" className="py-32 px-6 md:px-12 bg-cream text-espresso">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="text-4xl md:text-6xl font-serif leading-none">
            THE SWEET <br className="hidden md:block"/> COLLECTION
          </h2>
          <p className="max-w-xs mt-6 md:mt-0 text-sm tracking-wide uppercase opacity-70">
            Handcrafted daily using luxurious ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-min">
          {products.map((product) => (
            <div key={product.id} className={`product-card group relative overflow-hidden ${product.className}`}>
              <div className="absolute inset-0 overflow-hidden bg-espresso/5">
                <Image 
                  src={product.img} 
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                <span className="text-earth-green text-xs tracking-widest uppercase mb-2 block transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{product.category}</span>
                <h3 className="text-cream text-2xl md:text-3xl font-serif mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{product.name}</h3>
                <p className="text-cream/80 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

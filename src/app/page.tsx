import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BrandStatement } from "@/components/BrandStatement";
import { FeaturedCollection } from "@/components/FeaturedCollection";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { CustomOrders } from "@/components/CustomOrders";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full relative">
      <Navbar />
      <Hero />
      <BrandStatement />
      <FeaturedCollection />
      <Marquee />
      <About />
      <Gallery />
      <CustomOrders />
      <Process />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}

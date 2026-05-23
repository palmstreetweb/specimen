import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Foundry from "@/components/Foundry";
import Catalog from "@/components/Catalog";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import InUse from "@/components/InUse";
import Faq from "@/components/Faq";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-grow">
        <Hero />
        <Foundry />
        <Catalog />
        <Process />
        <Testimonial />
        <InUse />
        <Faq />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

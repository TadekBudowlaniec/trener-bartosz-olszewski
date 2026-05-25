import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { ForWho } from "@/components/ForWho";
import { Process } from "@/components/Process";
import { Metamorfozy } from "@/components/Metamorfozy";
import { Pricing } from "@/components/Pricing";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <ForWho />
        <Process />
        <Metamorfozy />
        <Pricing />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}

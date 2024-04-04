import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FormSection from "./components/FormSection";
import Footersection from "./components/Footersection";
import Marqsection from "./components/Marqsection";
import FAQsection from "./components/FAQsection";
import HowTosection from "./components/HowTosection";
import LegalAdSection from "./components/LegalAdSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto px-12  py-4">

      <HeroSection />
      <FormSection />
      <Marqsection />
      <HowTosection />
      <FAQsection />
      <LegalAdSection />
      <Footersection />

    </main>
  );
}

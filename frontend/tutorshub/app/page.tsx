import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import PricingPage from "@/components/Pricing";
import { FaHome, FaInfoCircle, FaDollarSign, FaEnvelope } from "react-icons/fa";
import { FaBlog } from 'react-icons/fa6';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
      <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome />},
          { name: "About", link: "/about", icon: <FaInfoCircle /> },
          { name: "Pricing", link: "/#pricing", icon: <FaDollarSign /> },
          { name: "Blog", link: '/blog', icon: <FaBlog />},
          { name: "Contact", link: '/contact', icon: <FaEnvelope />}
        ]} />
        <Hero />
        <Grid />
        <PricingPage />
      </div>
    </main>
  );
}

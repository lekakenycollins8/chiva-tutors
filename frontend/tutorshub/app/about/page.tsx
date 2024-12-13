// app/about/page.tsx
import About from '@/components/About';
import { FaHome, FaInfoCircle, FaDollarSign, FaEnvelope } from "react-icons/fa";
import { FaBlog } from 'react-icons/fa6';
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative overflow-hidden">
      {/* Background beams with overlay */}
      <div className="absolute inset-0 w-full h-full bg-slate-950/75">
        <BackgroundBeams />
      </div>
      
      {/* Content layer */}
      <div className="relative z-10 w-full">
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome />},
          { name: "About", link: "/about", icon: <FaInfoCircle /> },
          { name: "Pricing", link: "/#pricing", icon: <FaDollarSign /> },
          { name: "Blog", link: '/blog', icon: <FaBlog />},
          { name: "Contact", link: '/contact', icon: <FaEnvelope />}
        ]} />
        <About />
      </div>
    </main>
  );
}
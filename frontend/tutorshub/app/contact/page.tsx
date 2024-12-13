import ContactForm from '@/components/ContactForm';
import { Container, Typography } from '@mui/material';
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { FaHome, FaInfoCircle, FaDollarSign, FaBlog, FaEnvelope } from "react-icons/fa";
import { BackgroundLines } from "@/components/ui/BackgroundLines";

export default function ContactPage() {
  return (
    <main className="min-h-screen relative">
      <BackgroundLines className="absolute inset-0">
        <div className="relative z-10 py-16">
          <Container maxWidth="lg">
            <div className="text-center mb-16">
            <Typography 
            variant="h2" 
            className="mt-7 font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-red-500 text-3xl md:text-4xl lg:text-5xl"
            >
            Contact Us
            </Typography>
            <Typography 
            variant="subtitle1" 
            className="text-white-600 mx-auto text-center text-base md:text-lg lg:text-xl"
            >
            Have questions or need help? We&apos;re here to help!
            </Typography>
            </div>
            <FloatingNav navItems={[
              {name: 'Home', link: '/', icon: <FaHome />},
              { name: "About", link: "/about", icon: <FaInfoCircle /> },
              { name: "Pricing", link: "/#pricing", icon: <FaDollarSign /> },
              { name: "Blog", link: '/blog', icon: <FaBlog />},
              { name: "Contact", link: '/contact', icon: <FaEnvelope />}
            ]} />
            <ContactForm />
          </Container>
        </div>
      </BackgroundLines>
    </main>
  );
}
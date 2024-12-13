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
                className="mt-5 font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-600"
              >
                Contact Us
              </Typography>
                <Typography 
                variant="subtitle1" 
                className="text-gray-600 max-w-2xl text-center mx-auto"
                >
                Have questions? We&apos;d love to hear from you.
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
'use client';

import { Container, Grid, Typography, Box, IconButton, Stack } from '@mui/material';
import Link from 'next/link';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Blog', href: '/blog' },
    { title: 'Contact', href: '/contact' },
  ];

  const services = [
    { title: 'Chemistry Tutoring', href: '/#services' },
    { title: 'Mathematics Help', href: '/#services' },
    { title: 'Business Studies', href: '/#services' },
    { title: 'Accounting Lessons', href: '/#services' },
  ];

  const resources = [
    { title: 'Study Materials', href: '/blog' },
    { title: 'FAQs', href: '/faqs' },
    { title: 'Testimonials', href: '/#testimonials' },
    { title: 'Pricing', href: '/#pricing' },
  ];

  return (
    <Box className="bg-gradient-to-b from-purple-100 to-black text-white">
      <Container maxWidth="lg" className="py-12">
        <Grid container spacing={6}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="font-bold mb-4">
              Chiva TutorsHub
            </Typography>
            <Typography variant="body2" className="text-gray-300 mb-4">
              Empowering students through personalized tutoring in Chemistry, Mathematics, 
              Business Studies, and Accounting.
            </Typography>
            <Stack direction="row" spacing={2}>
              <IconButton 
              href="https://www.instagram.com/chiva_tutorhub/profilecard/?igsh=eGRsaHhkN2Y4eDls" 
              target="_blank"
              sx={{ color: 'white', '&:hover': { color: 'purple.400' }, transition: 'color 0.3s' }}
              aria-label="Instagram"
              >
              <InstagramIcon />
              </IconButton>
              <IconButton 
              href="tel:+254719575186" 
              target="_blank"
              sx={{ color: 'white', '&:hover': { color: 'purple.400' }, transition: 'color 0.3s' }}
              aria-label="Phone"
              >
              <PhoneIcon />
              </IconButton>
              <IconButton 
              href="mailto:ochiengcharles1997@gmail.com"
              sx={{ color: 'white', '&:hover': { color: 'purple.400' }, transition: 'color 0.3s' }}
              aria-label="Email"
              >
              <EmailIcon />
              </IconButton>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" className="font-bold mb-4">
              Quick Links
            </Typography>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="font-bold mb-4">
              Services
            </Typography>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.title}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>

          {/* Resources */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="font-bold mb-4">
              Resources
            </Typography>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.title}>
                  <Link 
                    href={resource.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    {resource.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box className="border-t border-gray-800 mt-12 pt-8">
          <Grid container spacing={2} justifyContent="space-between" alignItems="center">
            <Grid item xs={12} md="auto">
              <Typography variant="body2" className="text-gray-400 text-center md:text-left">
                © {currentYear} Chiva TutorHub. All rights reserved.
              </Typography>
            </Grid>
            <Grid item xs={12} md="auto">
              <Stack 
                direction="row" 
                spacing={3} 
                justifyContent={{ 
                  xs: "center",
                  md: "flex-end"
                }}
              >
                <Link href="/privacy" className="text-gray-400 hover:text-purple-400 text-sm">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-purple-400 text-sm">
                  Terms of Service
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
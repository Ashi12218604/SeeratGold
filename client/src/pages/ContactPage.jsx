import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ContactSection from '../components/home/ContactSection';
import { motion } from 'framer-motion';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 md:pt-40 pb-16 bg-cream min-h-screen">
      <Helmet>
        <title>Contact Us | Seerat Gold</title>
        <meta name="description" content="Get in touch with Seerat Gold. Order via WhatsApp or reach out for inquiries." />
      </Helmet>
      


      <ContactSection />
    </div>
  );
};

export default ContactPage;

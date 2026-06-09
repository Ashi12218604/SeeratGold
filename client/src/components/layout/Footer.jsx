import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../../utils/constants';

const footerLinks = {
  quickLinks: [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Combo Packs', path: '/combos' },
    { name: 'Special Offers', path: '/offers' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ],
  categories: [
    { name: 'Ground Spices', path: '/category/ground-spices' },
    { name: 'Whole Spices', path: '/category/whole-spices' },
    { name: 'Premium Spices', path: '/category/premium-spices' },
    { name: 'Blended Masalas', path: '/category/blended-masalas' },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-dark text-white">
      {/* Main Footer */}
      <div className="section-padding section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex flex-col items-start gap-2 mb-6 group">
              <img 
                src="/images/logo-square.png" 
                alt="Seerat Gold Logo" 
                className="h-16 md:h-20 w-auto rounded-lg shadow-lg object-contain transition-transform duration-300 group-hover:scale-105" 
              />
              <span className="font-body text-[11px] font-medium text-secondary tracking-[0.05em] pl-1">
                सीरत जहाँ.. स्वाद वहाँ
              </span>
            </Link>
            <p className="font-body text-sm text-white/60 leading-relaxed mb-6">
              Authentic spices sourced from their place of origin, carefully 
              processed and delivered with their original taste intact.
            </p>
            <div className="w-12 h-0.5 bg-gradient-gold rounded-full" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-base text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-white/60 hover:text-secondary 
                               transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/40 
                                     group-hover:bg-secondary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display font-semibold text-base text-white mb-6">
              Categories
            </h4>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-white/60 hover:text-secondary 
                               transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/40 
                                     group-hover:bg-secondary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-base text-white mb-6">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-3 text-white/60 hover:text-secondary 
                           transition-colors font-body text-sm group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center
                                group-hover:bg-secondary/10 transition-colors">
                  <Phone size={16} />
                </div>
                {CONTACT_INFO.phone}
              </a>
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-whatsapp 
                           transition-colors font-body text-sm group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center
                                group-hover:bg-whatsapp/10 transition-colors">
                  <MessageCircle size={16} />
                </div>
                WhatsApp Us
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-3 text-white/60 hover:text-secondary 
                           transition-colors font-body text-sm group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center
                                group-hover:bg-secondary/10 transition-colors">
                  <Mail size={16} />
                </div>
                {CONTACT_INFO.email}
              </a>
              <div className="flex items-start gap-3 text-white/60 font-body text-sm">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} />
                </div>
                <span>{CONTACT_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-padding section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-white/40">
              © {currentYear} Seerat Gold. All rights reserved. Made with ❤️ in India.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/about"
                className="font-body text-xs text-white/40 hover:text-secondary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/about"
                className="font-body text-xs text-white/40 hover:text-secondary transition-colors"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

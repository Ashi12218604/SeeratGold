import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle, ChevronDown, Search } from 'lucide-react';
import { generateWhatsAppURL, getGeneralInquiryMessage, WHATSAPP_NUMBER } from '../../utils/whatsapp';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Combos', path: '/combos' },
  { name: 'Offers', path: '/offers' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isDarkNav = !isHomePage || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-500 ease-premium
          ${isDarkNav
            ? 'bg-white/95 backdrop-blur-xl shadow-card border-b border-cream-dark/30 py-3'
            : 'bg-transparent py-5'
          }`}
      >
        <div className="section-padding section-container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex flex-col items-center group">
              <img 
                src="/images/logo-square.png" 
                alt="Seerat Gold Logo" 
                className="h-14 md:h-16 w-auto rounded-lg shadow-md object-contain transition-transform duration-300 group-hover:scale-105" 
              />
              <span className={`font-body text-[10px] md:text-[11px] mt-1 font-medium tracking-[0.05em] transition-colors duration-300
                ${isDarkNav ? 'text-primary' : 'text-white'}`}>
                सीरत जहाँ.. स्वाद वहाँ
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${
                    isDarkNav
                      ? isActive(link.path)
                        ? 'text-primary after:w-full'
                        : 'text-charcoal hover:text-primary'
                      : isActive(link.path)
                        ? 'text-secondary after:w-full after:bg-secondary'
                        : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/products"
                className={`p-2 rounded-full transition-colors ${
                  isDarkNav ? 'text-charcoal hover:bg-cream hover:text-primary' : 'text-white hover:bg-white/10'
                }`}
                aria-label="Search Products"
              >
                <Search size={20} />
              </Link>
              <a
                href={generateWhatsAppURL(WHATSAPP_NUMBER, getGeneralInquiryMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-5 py-2.5"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>

            {/* Mobile Nav Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                to="/products"
                className={`p-2 rounded-xl transition-colors ${
                  isDarkNav ? 'text-charcoal hover:bg-cream hover:text-primary' : 'text-white hover:bg-white/10'
                }`}
                aria-label="Search Products"
              >
                <Search size={22} />
              </Link>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className={`p-2 rounded-xl transition-colors ${
                  isDarkNav ? 'text-primary hover:bg-cream' : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-white shadow-2xl lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-6 border-b border-cream-dark">
                  <div className="flex flex-col items-center justify-center w-full">
                    <img 
                      src="/images/logo-square.png" 
                      alt="Seerat Gold Logo" 
                      className="h-20 w-auto rounded-lg shadow-md object-contain" 
                    />
                    <span className="font-body text-[11px] mt-1.5 font-medium text-primary tracking-[0.05em]">
                      सीरत जहाँ.. स्वाद वहाँ
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="p-2 rounded-lg text-charcoal-light hover:bg-cream transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="flex-1 py-6 px-4 overflow-y-auto">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-body font-medium 
                          transition-all duration-200 mb-1
                          ${isActive(link.path)
                            ? 'bg-primary/5 text-primary border-l-3 border-primary'
                            : 'text-charcoal hover:bg-cream hover:text-primary'
                          }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Drawer Footer */}
                <div className="p-6 border-t border-cream-dark">
                  <a
                    href={generateWhatsAppURL(WHATSAPP_NUMBER, getGeneralInquiryMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full text-center"
                  >
                    <MessageCircle size={18} />
                    Order on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

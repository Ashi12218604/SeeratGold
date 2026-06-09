import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ChevronDown } from 'lucide-react';
import { generateWhatsAppURL, getGeneralInquiryMessage, WHATSAPP_NUMBER } from '../../utils/whatsapp';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToProducts = () => {
    const el = document.getElementById('categories-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToStory = () => {
    const el = document.getElementById('story-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: 0.5 + i * 0.04,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const headlineText = "Authentic Indian Spices";
  const headlineLetters = headlineText.split('');

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/hero-bg.png"
          alt="Seerat Gold Premium Spices"
          className="w-full h-full object-cover"
          onLoad={() => setIsLoaded(true)}
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/60 via-transparent to-primary/30" />
      </div>

      {/* Floating spice particles */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-secondary/20"
            style={{
              width: `${8 + i * 4}px`,
              height: `${8 + i * 4}px`,
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding section-container text-center">
        <AnimatePresence>
          {isLoaded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-4xl mx-auto"
            >
              {/* Brand badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full 
                           bg-white/10 backdrop-blur-md border border-white/20"
              >
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-soft" />
                <span className="text-secondary font-body text-sm font-medium tracking-widest uppercase">
                  Seerat Gold
                </span>
              </motion.div>

              {/* Main Headline - Letter by letter animation */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-display-xl font-bold text-white mb-4 md:mb-6 leading-tight">
                {headlineLetters.map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                    style={{ whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="font-body text-lg sm:text-xl md:text-2xl text-cream/90 mb-3 md:mb-4 font-light tracking-wide"
              >
                Pure by Origin. Rich by Nature.
              </motion.p>

              {/* Gold divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-16 md:w-24 h-1 bg-gradient-gold mx-auto mb-6 md:mb-8 rounded-full"
              />

              {/* Sub-message */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="font-body text-sm sm:text-base md:text-lg text-cream-dark/80 mb-8 md:mb-10 max-w-2xl mx-auto px-4 md:px-0"
              >
                Sourced from their native regions, carefully processed, and delivered 
                with their original taste intact.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0, duration: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <button
                  onClick={scrollToProducts}
                  className="btn-gold text-base px-10 py-4 group"
                >
                  Explore Products
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </button>

                <a
                  href={generateWhatsAppURL(WHATSAPP_NUMBER, getGeneralInquiryMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base px-10 py-4"
                >
                  <MessageCircle size={20} />
                  Order on WhatsApp
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToStory}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 
                   text-white/70 hover:text-white transition-colors cursor-pointer group"
      >
        <span className="text-xs font-body tracking-widest uppercase">Discover Our Journey</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={24} className="group-hover:text-secondary transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;

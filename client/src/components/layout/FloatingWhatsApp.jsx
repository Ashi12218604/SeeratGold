import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { generateWhatsAppURL, getGeneralInquiryMessage, WHATSAPP_NUMBER } from '../../utils/whatsapp';

const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Show tooltip after 5 seconds if user hasn't interacted
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) setShowTooltip(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [hasInteracted]);

  // Auto-hide tooltip after showing for 5 seconds
  useEffect(() => {
    if (showTooltip) {
      const timer = setTimeout(() => setShowTooltip(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showTooltip]);

  const handleClick = () => {
    setHasInteracted(true);
    setShowTooltip(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-card-hover px-5 py-3.5 max-w-[220px]
                       border border-cream-dark"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-charcoal-light/80 
                         text-white flex items-center justify-center hover:bg-charcoal transition-colors"
            >
              <X size={10} />
            </button>
            <p className="font-body text-sm text-charcoal">
              <span className="font-semibold text-primary">Need help?</span>
              <br />
              Chat with us on WhatsApp!
            </p>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1.5 
                            w-3 h-3 bg-white border-r border-b border-cream-dark rotate-[-45deg]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <a
        href={generateWhatsAppURL(WHATSAPP_NUMBER, getGeneralInquiryMessage())}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        onMouseEnter={() => !hasInteracted && setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative w-14 h-14 rounded-full bg-whatsapp text-white flex items-center 
                   justify-center shadow-lg hover:shadow-xl hover:scale-110 
                   transition-all duration-300 ease-premium whatsapp-pulse"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} fill="white" strokeWidth={0} />
        
        {/* Online indicator */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-green-400 
                         border-2 border-white" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;

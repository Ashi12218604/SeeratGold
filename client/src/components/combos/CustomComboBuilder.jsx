import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, MessageCircle } from 'lucide-react';
import { generateWhatsAppURL, WHATSAPP_NUMBER } from '../../utils/whatsapp';
import { useAppContext } from '../../context/AppContext';

const CustomComboBuilder = () => {
  const { products } = useAppContext();
  const [selectedSpices, setSelectedSpices] = useState([]);

  const toggleSpice = (productName) => {
    if (selectedSpices.includes(productName)) {
      setSelectedSpices(selectedSpices.filter(name => name !== productName));
    } else {
      setSelectedSpices([...selectedSpices, productName]);
    }
  };

  const removeSpice = (productName) => {
    setSelectedSpices(selectedSpices.filter(name => name !== productName));
  };

  const buildWhatsAppMessage = () => {
    const items = selectedSpices.map(item => `- ${item}`).join('\n');
    let priceText = "Please let me know the total price and details.";
    if (selectedSpices.length === 6) {
      priceText = "As per the offer, this 6-item combo is for ₹599.";
    } else if (selectedSpices.length === 10) {
      priceText = "As per the offer, this 10-item combo is for ₹999.";
    }
    return `Hi, I'd like to order a custom combo pack with the following ${selectedSpices.length} spices:\n\n${items}\n\n${priceText}`;
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-14 rounded-3xl bg-white shadow-card overflow-hidden" id="custom-combo-builder">
      <div className="bg-primary p-6 md:p-10 text-white">
        <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
          Build Your Own Custom Combo
        </h3>
        <p className="font-body text-cream/80 max-w-2xl">
          Select the spices you want in your custom box. Enjoy our special flat pricing: <strong>6 items for ₹599</strong>, or a full box of <strong>10 items for ₹999</strong>!
        </p>
      </div>
      
      <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Side: Spice Selection Grid */}
        <div className="lg:col-span-8">
          <h4 className="font-display font-semibold text-lg text-charcoal mb-4">Select Spices</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => toggleSpice(product.name)}
                className={`p-3 rounded-xl border text-sm font-body text-left transition-all ${
                  selectedSpices.includes(product.name)
                    ? 'border-primary bg-primary/5 text-primary shadow-sm'
                    : 'border-cream-dark hover:border-primary/50 text-charcoal'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-medium leading-tight">{product.name}</span>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${
                    selectedSpices.includes(product.name) ? 'border-primary bg-primary' : 'border-gray-300'
                  }`}>
                    {selectedSpices.includes(product.name) && <Check size={12} className="text-white" />}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Selected Summary */}
        <div className="lg:col-span-4 flex flex-col h-full bg-cream rounded-2xl p-6 border border-cream-dark">
          <h4 className="font-display font-semibold text-lg text-charcoal mb-4 border-b border-charcoal/10 pb-3">
            Your Selection ({selectedSpices.length})
          </h4>
          
          <div className="flex-1 overflow-y-auto min-h-[150px] mb-6">
            <AnimatePresence>
              {selectedSpices.length === 0 ? (
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="text-charcoal/50 text-sm font-body italic text-center mt-10"
                >
                  Select some spices to start building your combo.
                </motion.p>
              ) : (
                <ul className="space-y-2">
                  {selectedSpices.map((item) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex items-center justify-between bg-white p-3 rounded-lg shadow-soft border border-charcoal/5"
                    >
                      <span className="font-body text-sm text-charcoal font-medium">{item}</span>
                      <button 
                        onClick={() => removeSpice(item)}
                        className="text-charcoal/40 hover:text-red-500 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </motion.li>
                  ))}
                </ul>
              )}
            </AnimatePresence>
          </div>

          <div className="pt-4 border-t border-charcoal/10">
            <a
              href={selectedSpices.length > 0 ? generateWhatsAppURL(WHATSAPP_NUMBER, buildWhatsAppMessage()) : '#'}
              target={selectedSpices.length > 0 ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-body font-bold transition-all ${
                selectedSpices.length > 0
                  ? 'bg-whatsapp text-white shadow-md hover:shadow-lg hover:-translate-y-0.5'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <MessageCircle size={20} />
              Get Custom Quote
            </a>
            <p className="text-center text-[11px] font-body text-charcoal/50 mt-3">
              {selectedSpices.length === 6 && <span className="font-bold text-primary">Great! You've selected 6 items for ₹599.</span>}
              {selectedSpices.length === 10 && <span className="font-bold text-primary">Amazing! You've selected 10 items for ₹999.</span>}
              {selectedSpices.length !== 6 && selectedSpices.length !== 10 && "Pricing: 6 items for ₹599 | 10 items for ₹999"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomComboBuilder;

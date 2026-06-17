import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Tag, Gift, Percent } from 'lucide-react';
import { Link } from 'react-router-dom';

const OffersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 bg-cream min-h-screen">
      <Helmet>
        <title>Special Offers | Seerat Gold</title>
        <meta name="description" content="Exclusive offers and discounts on premium Seerat Gold spices." />
      </Helmet>

      <div className="pt-32 pb-16 md:pt-40 md:pb-20 section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Special Offers
          </h1>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mb-6 rounded-full" />
          <p className="font-body text-charcoal-light max-w-2xl mx-auto">
            Discover our latest promotions and discounts on premium authentic spices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="bg-white rounded-3xl p-8 shadow-card border border-cream-dark flex flex-col items-center text-center gap-4 hover:shadow-lg transition-shadow"
            >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-2">
                    <Percent size={32} />
                </div>
                <div>
                    <h3 className="font-display text-2xl font-bold text-primary mb-3">Flat 15% Off</h3>
                    <p className="font-body text-charcoal-light mb-6">Enjoy a flat 15% discount on all individual spice orders.</p>
                    <Link to="/products" className="text-secondary font-bold font-body hover:text-primary transition-colors inline-flex items-center gap-1">
                      Shop Spices →
                    </Link>
                </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="bg-primary text-white rounded-3xl p-8 shadow-card flex flex-col items-center text-center gap-4 relative overflow-hidden"
            >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary rounded-full opacity-20 blur-2xl"></div>
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-secondary mb-2 relative z-10">
                    <Gift size={32} />
                </div>
                <div className="relative z-10">
                    <h3 className="font-display text-2xl font-bold text-white mb-3">Free Trial Kit</h3>
                    <p className="font-body text-white/80 mb-6">Get a free Seerat Gold Trial Kit (worth Rs. 149) on orders above Rs. 999.</p>
                    <Link to="/products" className="text-secondary font-bold font-body hover:text-white transition-colors inline-flex items-center gap-1">
                      Order Now →
                    </Link>
                </div>
            </motion.div>

             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="bg-white rounded-3xl p-8 shadow-card border border-cream-dark flex flex-col items-center text-center gap-4 hover:shadow-lg transition-shadow"
            >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-2">
                    <Tag size={32} />
                </div>
                <div>
                    <h3 className="font-display text-2xl font-bold text-primary mb-3">Extra 5% Off Combos</h3>
                    <p className="font-body text-charcoal-light mb-6">Get an additional 5% off when you order any of our curated combo packs.</p>
                    <Link to="/combos" className="text-secondary font-bold font-body hover:text-primary transition-colors inline-flex items-center gap-1">
                      View Combos →
                    </Link>
                </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OffersPage;

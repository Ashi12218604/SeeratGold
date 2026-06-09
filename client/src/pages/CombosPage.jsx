/**
 * CombosPage - Full combo pack listing page
 * Detailed combo cards with all information
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Gift } from 'lucide-react';
import ComboCard from '../components/common/ComboCard';
import WhatsAppButton from '../components/common/WhatsAppButton';
import { useAppContext } from '../context/AppContext';

const CombosPage = () => {
  const { combos } = useAppContext();

  return (
    <>
      <Helmet>
        <title>Combo Packs | Seerat Gold</title>
        <meta name="description" content="Save more with Seerat Gold combo packs. Curated spice bundles at unbeatable prices." />
      </Helmet>

      <main className="min-h-screen bg-cream">
        {/* Page header */}
        <div className="bg-primary pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="section-container text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5"
            >
              <Gift size={28} className="text-secondary" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-3"
            >
              Value Combo Packs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-body text-cream/70 max-w-xl mx-auto"
            >
              Save more with our carefully curated spice bundles. Perfect for stocking your kitchen with premium flavors.
            </motion.p>
          </div>
        </div>

        {/* Combos grid */}
        <section className="section-container py-10 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {combos.map((combo, index) => (
              <ComboCard key={combo.id} combo={combo} index={index} />
            ))}
          </div>

          {/* Custom combo CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-14 p-8 md:p-12 rounded-2xl bg-white shadow-card"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-charcoal mb-3">
              Want a Custom Combo?
            </h3>
            <p className="font-body text-charcoal/60 max-w-lg mx-auto mb-6">
              Can't find the perfect combination? Let us create a custom combo pack tailored to your needs. 
              Just tell us what you want!
            </p>
            <WhatsAppButton variant="primary" className="mx-auto" />
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default CombosPage;

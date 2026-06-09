/**
 * ComboPacks - Homepage combo packs section
 * Dark green background with cream text, showcasing value combo packs
 */

import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import ComboCard from '../common/ComboCard';
import WhatsAppButton from '../common/WhatsAppButton';
import { useAppContext } from '../../context/AppContext';

const ComboPacks = () => {
  const { combos } = useAppContext();

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full border border-cream" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border border-cream" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-cream" />
      </div>

      <div className="section-container relative z-10">
        <SectionTitle
          title="Value Combo Packs"
          subtitle="Get more for less with our specially curated combo packs. Save big on your favorite spices!"
          light
        />

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8">
          {combos.map((combo, index) => (
            <ComboCard key={combo.id} combo={combo} index={index} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
          {combos.map((combo, index) => (
            <motion.div
              key={combo.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex-shrink-0 w-[85vw] snap-center"
            >
              <ComboCard combo={combo} index={index} />
            </motion.div>
          ))}
        </div>

        {/* General WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-cream/70 font-body text-sm mb-4">
            Want a custom combo? Let us know!
          </p>
          <WhatsAppButton variant="primary" className="!bg-secondary !text-charcoal hover:!bg-secondary/90" />
        </motion.div>
      </div>
    </section>
  );
};

export default ComboPacks;

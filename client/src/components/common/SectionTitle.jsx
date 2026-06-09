/**
 * SectionTitle - Reusable section header with gold divider
 * Used across all page sections for consistent headings
 */

import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, centered = true, light = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-10 md:mb-14 ${centered ? 'text-center' : 'text-left'}`}
    >
      {/* Gold divider line */}
      <div className={`gold-divider ${centered ? 'mx-auto' : ''}`} />

      {/* Section heading */}
      <h2
        className={`section-title ${
          light ? 'text-cream' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>

      {/* Optional subtitle */}
      {subtitle && (
        <p
          className={`section-subtitle ${centered ? 'mx-auto' : ''} ${
            light ? 'text-cream/70' : 'text-charcoal/60'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;

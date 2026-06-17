/**
 * ComboCard - Premium combo pack card
 * Shows included products, savings, and WhatsApp order button
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Check } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const ComboCard = ({ combo, index = 0 }) => {
  const [selectedWeight, setSelectedWeight] = useState(0);
  const { name, description, image, products = [], tags = [], weightOptions = [] } = combo;

  const currentOption = weightOptions.length > 0 ? weightOptions[selectedWeight] : { price: combo.price, mrp: combo.mrp, weight: null };
  const { price, mrp, weight } = currentOption;


  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="card-base overflow-hidden group"
    >
      {/* Card top - Image */}
      <div className="relative overflow-hidden h-40 sm:h-48 bg-primary/5">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Savings ribbon */}
        <div className="absolute top-0 right-0 z-10 w-28 h-28 overflow-hidden rounded-tr-xl">
          <div className="absolute top-6 -right-10 w-40 transform rotate-45 bg-accent text-white text-center py-1.5 text-xs font-bold font-body shadow-md uppercase tracking-wider border-y border-white/20">
            {Math.round(((mrp - price) / mrp) * 100)}% OFF
          </div>
        </div>

        {/* Tag badge */}
        {tags.includes('bestseller') && (
          <div className="absolute top-4 left-4 bg-secondary text-charcoal text-xs font-bold font-body px-2.5 py-1 rounded-full">
            ⭐ Bestseller
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-4 sm:p-5 md:p-6 flex flex-col gap-3 md:gap-4">
        {/* Combo title */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
            <Package size={20} className="text-secondary" />
          </div>
          <div>
            <h3 className="font-display text-lg md:text-xl font-bold text-charcoal">{name}</h3>
            <p className="text-sm text-charcoal/60 font-body mt-1 hidden sm:block">{description}</p>
          </div>
        </div>

        {/* Included products list */}
        <div className="space-y-1.5">
          <p className="text-[10px] sm:text-xs font-body font-semibold text-charcoal/50 uppercase tracking-wider">
            Includes
          </p>
          <ul className="flex flex-wrap gap-x-3 gap-y-1">
            {products.map((product, i) => (
              <li key={i} className="flex items-center gap-1.5 text-xs font-body text-charcoal/80">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0" />
                {product}
              </li>
            ))}
          </ul>
        </div>

        {/* Weight selector pills */}
        {weightOptions.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {weightOptions.map((opt, idx) => (
              <button
                key={opt.weight}
                onClick={() => setSelectedWeight(idx)}
                className={`px-3 py-1 text-xs font-body font-medium rounded-full border transition-all ${
                  selectedWeight === idx
                    ? 'bg-primary text-cream border-primary'
                    : 'bg-transparent text-charcoal/70 border-charcoal/20 hover:border-primary/50'
                }`}
              >
                {opt.weight}
              </button>
            ))}
          </div>
        )}

        {/* Price section */}
        <div className="flex items-baseline gap-3 pt-2 border-t border-charcoal/10">
          <span className="text-2xl font-display font-bold text-primary">₹{price}</span>
          <span className="text-base text-charcoal/50 line-through font-display font-medium">₹{mrp}</span>
          <span className="text-sm font-body font-semibold text-accent">
            ({Math.round(((mrp - price) / mrp) * 100)}% off)
          </span>
        </div>

        {/* WhatsApp order button */}
        <WhatsAppButton
          productName={name}
          weight={weight}
          variant="primary"
          className="w-full"
          isCombo
        />
      </div>
    </motion.div>
  );
};

export default ComboCard;

/**
 * ProductCard - Premium product card component
 * Displays product image, details, weight selector, price, and WhatsApp CTA
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const ProductCard = ({ product }) => {
  const [selectedWeight, setSelectedWeight] = useState(0);

  const {
    name,
    slug,
    description,
    image,
    weightOptions = [],
    tags = [],
  } = product;

  const currentOption = weightOptions[selectedWeight] || {};
  const hasDiscount = currentOption.mrp && currentOption.price < currentOption.mrp;
  const discountPercent = hasDiscount
    ? Math.round(((currentOption.mrp - currentOption.price) / currentOption.mrp) * 100)
    : 0;

  const isBestseller = tags.includes('bestseller');
  const isPremium = tags.includes('premium');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="card-product group"
    >
      {/* Image section */}
      <Link to={`/products/${slug}`} className="block relative overflow-hidden rounded-t-xl">
        <div className="aspect-square bg-cream/50 overflow-hidden p-3 md:p-6 flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {isBestseller && (
            <span className="offer-badge bg-secondary text-charcoal text-xs font-bold px-2.5 py-1 rounded-full">
              ⭐ Bestseller
            </span>
          )}
          {isPremium && (
            <span className="offer-badge bg-primary text-cream text-xs font-bold px-2.5 py-1 rounded-full">
              Premium
            </span>
          )}
        </div>

        {/* Discount Ribbon */}
        {hasDiscount && (
          <div className="absolute top-0 right-0 z-10 w-28 h-28 overflow-hidden rounded-tr-xl">
            <div className="absolute top-6 -right-10 w-40 transform rotate-45 bg-accent text-white text-center py-1.5 text-xs font-bold font-body shadow-md uppercase tracking-wider border-y border-white/20">
              {discountPercent}% OFF
            </div>
          </div>
        )}
      </Link>

      {/* Card body */}
      <div className="p-4 flex flex-col gap-3">
        {/* Product name & description */}
        <Link to={`/products/${slug}`}>
          <h3 className="font-display text-lg font-semibold text-charcoal group-hover:text-primary transition-colors line-clamp-1">
            {name}
          </h3>
        </Link>
        <p className="text-sm text-charcoal/60 line-clamp-2 font-body">{description}</p>

        {/* Weight selector pills */}
        {weightOptions.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {weightOptions.map((opt, index) => (
              <button
                key={opt.weight}
                onClick={() => setSelectedWeight(index)}
                className={`px-3 py-1 text-xs font-body font-medium rounded-full border transition-all ${
                  selectedWeight === index
                    ? 'bg-primary text-cream border-primary'
                    : 'bg-transparent text-charcoal/70 border-charcoal/20 hover:border-primary/50'
                }`}
              >
                {opt.weight}
              </button>
            ))}
          </div>
        )}

        {/* Price display */}
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-display font-bold text-primary">
            ₹{currentOption.price}
          </span>
          {hasDiscount && (
            <>
              <span className="text-sm text-charcoal/50 line-through font-display font-medium">
                ₹{currentOption.mrp}
              </span>
              <span className="text-xs font-body font-semibold text-accent ml-1">
                ({discountPercent}% off)
              </span>
            </>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 mt-auto pt-1">
          <WhatsAppButton
            productName={name}
            weight={currentOption.weight}
            variant="small"
            className="flex-1"
          />
          <Link
            to={`/products/${slug}`}
            className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-body font-medium text-charcoal/70 border border-charcoal/20 rounded-lg hover:border-primary hover:text-primary transition-all"
          >
            <ShoppingBag size={14} />
            <span className="hidden sm:inline">Details</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

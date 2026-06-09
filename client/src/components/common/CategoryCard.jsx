/**
 * CategoryCard - Category showcase card with image overlay
 * Links to the category page with hover animations
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CategoryCard = ({ category, index = 0 }) => {
  const { name, slug, description, productCount, image } = category;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/category/${slug}`}
        className="group block relative overflow-hidden rounded-2xl h-56 md:h-64 shadow-card hover:shadow-gold transition-shadow duration-500"
      >
        {/* Background image with zoom on hover */}
        <div className="absolute inset-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />

        {/* Hover border glow */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-secondary/50 transition-colors duration-500" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-cream mb-1">
                {name}
              </h3>
              <p className="text-cream/60 text-sm font-body">
                {productCount} {productCount === 1 ? 'Product' : 'Products'}
              </p>
            </div>

            {/* Arrow indicator */}
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
              <ArrowRight
                size={18}
                className="text-cream group-hover:text-charcoal transition-colors duration-300 group-hover:translate-x-0.5 transform"
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;

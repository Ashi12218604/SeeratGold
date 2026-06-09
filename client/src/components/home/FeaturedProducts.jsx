/**
 * FeaturedProducts - Homepage featured products grid
 * Shows 6 featured products with responsive grid and "View All" CTA
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import ProductCard from '../common/ProductCard';
import { useAppContext } from '../../context/AppContext';

const FeaturedProducts = () => {
  const { products } = useAppContext();

  // Get only featured products (up to 16 for a 4x4 grid)
  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 16);

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <SectionTitle
          title="Featured Products"
          subtitle="Handpicked favorites loved by home chefs across India."
        />

        {/* Unified grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Products CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10 md:mt-14"
        >
          <Link
            to="/products"
            className="btn-secondary inline-flex items-center gap-2 group"
          >
            View All Products
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

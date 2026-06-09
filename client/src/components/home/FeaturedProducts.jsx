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

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex-shrink-0 w-[68vw] snap-center"
            >
              <ProductCard product={product} />
            </motion.div>
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

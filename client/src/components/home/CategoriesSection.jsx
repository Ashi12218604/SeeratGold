/**
 * CategoriesSection - Homepage categories grid
 * Displays all spice categories in a 2x2 grid with staggered animations
 */

import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import CategoryCard from '../common/CategoryCard';
import { useAppContext } from '../../context/AppContext';

const CategoriesSection = () => {
  const { categories } = useAppContext();

  return (
    <section className="section-padding bg-cream">
      <div className="section-container">
        <SectionTitle
          title="Our Spice Collection"
          subtitle="Explore our carefully curated categories of premium spices, each sourced from the finest growing regions."
        />

        {/* Desktop: 2x4 grid, Tablet: 2 cols, Mobile: horizontal scroll */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* Mobile: horizontal scrollable */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex-shrink-0 w-[75vw] snap-center"
            >
              <CategoryCard category={category} index={0} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

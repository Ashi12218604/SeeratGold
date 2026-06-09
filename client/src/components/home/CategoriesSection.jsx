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

        {/* Unified grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

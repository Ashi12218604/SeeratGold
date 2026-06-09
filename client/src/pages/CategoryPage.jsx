/**
 * CategoryPage - Category-specific product listing
 * Shows category header and filtered product grid
 */

import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Home, ArrowLeft } from 'lucide-react';
import ProductCard from '../components/common/ProductCard';
import { useAppContext } from '../context/AppContext';

const CategoryPage = () => {
  const { slug } = useParams();
  const { products, categories } = useAppContext();

  // Find category
  const category = useMemo(
    () => categories.find((c) => c.slug === slug),
    [categories, slug]
  );

  // Filter products for this category
  const categoryProducts = useMemo(
    () => products.filter((p) => p.category === slug),
    [products, slug]
  );

  // Category not found
  if (!category) {
    return (
      <main className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-3">Category Not Found</h2>
          <p className="font-body text-charcoal/60 mb-6">This category doesn't exist.</p>
          <Link to="/products" className="btn-primary">
            Browse All Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>{category.name} | Seerat Gold</title>
        <meta name="description" content={category.description} />
      </Helmet>

      <main className="min-h-screen bg-cream">
        {/* Category hero header */}
        <div className="relative overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 to-primary/90" />
          </div>

          <div className="relative section-container pt-36 pb-20 md:pt-44 md:pb-28">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-1.5 text-sm font-body text-cream/60 mb-6">
              <Link to="/" className="hover:text-cream transition-colors flex items-center gap-1">
                <Home size={14} />
                Home
              </Link>
              <ChevronRight size={14} />
              <Link to="/products" className="hover:text-cream transition-colors">
                Products
              </Link>
              <ChevronRight size={14} />
              <span className="text-cream">{category.name}</span>
            </nav>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-5xl font-bold text-cream mb-4"
            >
              {category.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-body text-cream/70 text-lg max-w-2xl"
            >
              {category.description}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-body text-cream/50 text-sm mt-3"
            >
              {categoryProducts.length} {categoryProducts.length === 1 ? 'product' : 'products'} available
            </motion.p>
          </div>
        </div>

        {/* Product grid */}
        <section className="section-container py-10 md:py-14">
          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="font-display text-xl font-semibold text-charcoal/60 mb-2">
                No products in this category yet
              </h3>
              <p className="font-body text-sm text-charcoal/40 mb-6">
                Check back soon for new additions.
              </p>
              <Link to="/products" className="btn-primary inline-flex items-center gap-2">
                <ArrowLeft size={16} />
                Browse All Products
              </Link>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default CategoryPage;

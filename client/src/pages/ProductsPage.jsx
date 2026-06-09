/**
 * ProductsPage - Full product catalog page
 * Category filters, search, and responsive product grid
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, X, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/common/ProductCard';
import SectionTitle from '../components/common/SectionTitle';
import { useAppContext } from '../context/AppContext';

const FORMATS = [
  { id: 'whole', name: 'Whole' },
  { id: 'ground', name: 'Ground' },
  { id: 'blend', name: 'Blends' },
];

const HEAT_LEVELS = [
  { id: 'mild', name: 'Mild' },
  { id: 'medium', name: 'Medium' },
  { id: 'hot', name: 'Very Hot' },
];

const ProductsPage = () => {
  const { products, categories } = useAppContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedFormats, setSelectedFormats] = useState([]);
  const [selectedHeatLevels, setSelectedHeatLevels] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Toggle category filter
  const toggleCategory = (slug) => {
    setSelectedCategories((prev) =>
      prev.includes(slug) ? prev.filter((c) => c !== slug) : [...prev, slug]
    );
  };

  const toggleFormat = (formatId) => {
    setSelectedFormats((prev) =>
      prev.includes(formatId) ? prev.filter((f) => f !== formatId) : [...prev, formatId]
    );
  };

  const toggleHeatLevel = (heatId) => {
    setSelectedHeatLevels((prev) =>
      prev.includes(heatId) ? prev.filter((h) => h !== heatId) : [...prev, heatId]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setSelectedFormats([]);
    setSelectedHeatLevels([]);
  };

  // Filtered products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    // Filter by selected categories
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Filter by Format
    if (selectedFormats.length > 0) {
      result = result.filter((p) => {
        const hasWhole = selectedFormats.includes('whole') && (p.tags?.includes('whole') || p.category === 'whole-spices');
        const hasGround = selectedFormats.includes('ground') && (p.category === 'ground-spices' || p.tags?.includes('crushed') || p.tags?.includes('powder'));
        const hasBlend = selectedFormats.includes('blend') && (p.tags?.includes('blend') || p.category === 'blended-masalas');
        return hasWhole || hasGround || hasBlend;
      });
    }

    // Filter by Heat Level
    if (selectedHeatLevels.length > 0) {
      result = result.filter((p) => {
        const hasMild = selectedHeatLevels.includes('mild') && (p.tags?.includes('mild') || p.tags?.includes('sweet') || p.tags?.includes('tangy') || p.tags?.includes('essential'));
        const hasMedium = selectedHeatLevels.includes('medium') && (p.tags?.includes('warm') || p.tags?.includes('sharp') || p.tags?.includes('strong'));
        const hasHot = selectedHeatLevels.includes('hot') && p.tags?.includes('hot');
        return hasMild || hasMedium || hasHot;
      });
    }

    return result;
  }, [products, searchQuery, selectedCategories, selectedFormats, selectedHeatLevels]);

  const hasActiveFilters = searchQuery.trim() || selectedCategories.length > 0 || selectedFormats.length > 0 || selectedHeatLevels.length > 0;
  const activeFiltersCount = selectedCategories.length + selectedFormats.length + selectedHeatLevels.length;

  // Sidebar filters component (shared between desktop and mobile)
  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-display text-base font-semibold text-charcoal mb-3">
          Categories
        </h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.slug)}
                onChange={() => toggleCategory(cat.slug)}
                className="w-4 h-4 rounded border-charcoal/30 text-primary focus:ring-primary/30"
              />
              <span className="text-sm font-body text-charcoal/70 group-hover:text-charcoal transition-colors">
                {cat.name}
              </span>
              <span className="text-xs font-body text-charcoal/40 ml-auto">
                ({cat.productCount})
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Format Filters */}
      <div>
        <h3 className="font-display text-base font-semibold text-charcoal mb-3">
          Format
        </h3>
        <div className="space-y-2">
          {FORMATS.map((format) => (
            <label
              key={format.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedFormats.includes(format.id)}
                onChange={() => toggleFormat(format.id)}
                className="w-4 h-4 rounded border-charcoal/30 text-primary focus:ring-primary/30"
              />
              <span className="text-sm font-body text-charcoal/70 group-hover:text-charcoal transition-colors">
                {format.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Heat Level Filters */}
      <div>
        <h3 className="font-display text-base font-semibold text-charcoal mb-3">
          Heat Level
        </h3>
        <div className="space-y-2">
          {HEAT_LEVELS.map((heat) => (
            <label
              key={heat.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedHeatLevels.includes(heat.id)}
                onChange={() => toggleHeatLevel(heat.id)}
                className="w-4 h-4 rounded border-charcoal/30 text-primary focus:ring-primary/30"
              />
              <span className="text-sm font-body text-charcoal/70 group-hover:text-charcoal transition-colors">
                {heat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear filters button */}
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="w-full text-sm font-body font-medium text-accent hover:text-accent/80 transition-colors py-2 border border-accent/20 rounded-lg"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Products | Seerat Gold</title>
        <meta name="description" content="Explore our full range of premium spices, ground masalas, and spice blends. Order via WhatsApp for the freshest delivery." />
      </Helmet>

      <main className="min-h-screen bg-cream">
        {/* Page header */}
        <div className="bg-primary pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="section-container text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-3"
            >
              Our Products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-body text-cream/70 max-w-lg mx-auto"
            >
              Explore our complete range of premium spices
            </motion.p>
          </div>
        </div>

        <div className="section-container py-8 md:py-12">
          {/* Search bar & mobile filter toggle */}
          <div className="flex gap-3 mb-8">
            <div className="flex-1 relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search spices..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-charcoal/10 bg-white font-body text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
              />
            </div>
            <button
              onClick={() => setShowFilters(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-3 rounded-xl border border-charcoal/10 bg-white font-body text-sm text-charcoal/70 hover:border-primary/50 transition-colors"
            >
              <SlidersHorizontal size={16} />
              Filters
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-primary text-cream text-xs flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>

          <div className="flex gap-8">
            {/* Desktop sidebar filters */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 bg-white p-5 rounded-2xl shadow-card">
                <div className="flex items-center gap-2 mb-5 pb-3 border-b border-charcoal/10">
                  <Filter size={16} className="text-primary" />
                  <h2 className="font-display text-lg font-semibold text-charcoal">Filters</h2>
                </div>
                <FilterContent />
              </div>
            </aside>

            {/* Product grid */}
            <div className="flex-1">
              {/* Results count */}
              <p className="text-sm font-body text-charcoal/50 mb-5">
                Showing {filteredProducts.length} of {products.length} products
                {hasActiveFilters && (
                  <button onClick={clearFilters} className="ml-2 text-primary hover:underline">
                    (Clear filters)
                  </button>
                )}
              </p>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <Search size={48} className="text-charcoal/20 mx-auto mb-4" />
                  <h3 className="font-display text-xl font-semibold text-charcoal/60 mb-2">
                    No products found
                  </h3>
                  <p className="font-body text-sm text-charcoal/40">
                    Try adjusting your search or filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile filter drawer */}
        <AnimatePresence>
          {showFilters && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowFilters(false)}
                className="fixed inset-0 bg-charcoal/50 z-40 lg:hidden"
              />

              {/* Drawer */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 p-6 overflow-y-auto lg:hidden"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-lg font-semibold text-charcoal">Filters</h2>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="w-8 h-8 rounded-full bg-charcoal/5 flex items-center justify-center"
                  >
                    <X size={16} className="text-charcoal/60" />
                  </button>
                </div>
                <FilterContent />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </main>
    </>
  );
};

export default ProductsPage;

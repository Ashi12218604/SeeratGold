/**
 * ProductDetailPage - Individual product detail view
 * Shows product image, info, weight selector, WhatsApp order, and related products
 */

import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Home, ArrowLeft, ArrowRight } from 'lucide-react';
import WhatsAppButton from '../components/common/WhatsAppButton';
import ProductCard from '../components/common/ProductCard';
import SectionTitle from '../components/common/SectionTitle';
import { useAppContext } from '../context/AppContext';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const { products, categories } = useAppContext();
  const [selectedWeight, setSelectedWeight] = useState(0);

  // Find the product
  const product = useMemo(
    () => products.find((p) => p.slug === slug),
    [products, slug]
  );

  // Related products (same category, excluding current)
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
  }, [products, product]);

  // Category info
  const category = useMemo(
    () => (product ? categories.find((c) => c.slug === product.category) : null),
    [categories, product]
  );

  // Reset weight selection on product change
  useEffect(() => {
    setSelectedWeight(0);
    window.scrollTo(0, 0);
  }, [slug]);

  // Product not found state
  if (!product) {
    return (
      <main className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-3">Product Not Found</h2>
          <p className="font-body text-charcoal/60 mb-6">The product you're looking for doesn't exist.</p>
          <Link to="/products" className="btn-primary">
            Browse Products
          </Link>
        </div>
      </main>
    );
  }

  const currentOption = product.weightOptions?.[selectedWeight] || {};
  const hasDiscount = currentOption.mrp && currentOption.price < currentOption.mrp;
  const discountPercent = hasDiscount
    ? Math.round(((currentOption.mrp - currentOption.price) / currentOption.mrp) * 100)
    : 0;

  return (
    <>
      <Helmet>
        <title>{product.name} | Seerat Gold</title>
        <meta name="description" content={`${product.description} Order Seerat Gold ${product.name} via WhatsApp.`} />
      </Helmet>

      <main className="min-h-screen bg-cream">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-charcoal/5 pt-24 lg:pt-28">
          <div className="section-container py-3">
            <nav className="flex items-center gap-1.5 text-sm font-body text-charcoal/50 overflow-x-auto">
              <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
                <Home size={14} />
                Home
              </Link>
              <ChevronRight size={14} />
              <Link to="/products" className="hover:text-primary transition-colors">
                Products
              </Link>
              {category && (
                <>
                  <ChevronRight size={14} />
                  <Link to={`/category/${category.slug}`} className="hover:text-primary transition-colors">
                    {category.name}
                  </Link>
                </>
              )}
              <ChevronRight size={14} />
              <span className="text-charcoal font-medium truncate">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Product detail */}
        <section className="section-container py-8 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
            {/* Left: Product image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tags below image */}
              {product.tags?.length > 0 && (
                <div className="flex gap-2 mt-4">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-body font-semibold capitalize bg-secondary/10 text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Right: Product info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col"
            >
              {/* Category label */}
              {category && (
                <Link
                  to={`/category/${category.slug}`}
                  className="text-sm font-body font-medium text-secondary hover:text-primary transition-colors mb-2 inline-block"
                >
                  {category.name}
                </Link>
              )}

              {/* Product name */}
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
                {product.name}
              </h1>

              {/* Description */}
              <p className="font-body text-charcoal/60 text-base md:text-lg leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Weight selector */}
              <div className="mb-6">
                <p className="text-sm font-body font-semibold text-charcoal/50 uppercase tracking-wider mb-3">
                  Select Weight
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.weightOptions?.map((opt, index) => (
                    <button
                      key={opt.weight}
                      onClick={() => setSelectedWeight(index)}
                      className={`px-5 py-2.5 rounded-xl border-2 font-body font-semibold text-sm transition-all ${
                        selectedWeight === index
                          ? 'bg-primary text-cream border-primary shadow-md'
                          : 'bg-white text-charcoal/70 border-charcoal/15 hover:border-primary/50'
                      }`}
                    >
                      {opt.weight}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price display */}
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-3xl md:text-4xl font-display font-bold text-primary">
                  ₹{currentOption.price}
                </span>
                {hasDiscount && (
                  <>
                    <span className="text-lg text-charcoal/40 line-through font-body">
                      ₹{currentOption.mrp}
                    </span>
                    <span className="text-sm font-body font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                      {discountPercent}% OFF
                    </span>
                  </>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <WhatsAppButton
                  productName={product.name}
                  weight={currentOption.weight}
                  variant="primary"
                  className="flex-1 justify-center py-3.5 text-base"
                />
                <WhatsAppButton
                  productName={product.name}
                  weight={currentOption.weight}
                  variant="primary"
                  className="flex-1 justify-center py-3.5 text-base !bg-charcoal/10 !text-charcoal hover:!bg-charcoal/15"
                />
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-6 border-t border-charcoal/10">
                {[
                  { label: '100% Pure', icon: '🌿' },
                  { label: 'Fresh Packed', icon: '📦' },
                  { label: 'No Additives', icon: '✅' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-sm font-body text-charcoal/60">
                    <span>{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="section-padding bg-white">
            <div className="section-container">
              <SectionTitle
                title="Related Products"
                subtitle="You might also like these spices from the same category."
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {relatedProducts.map((rp) => (
                  <ProductCard key={rp.id} product={rp} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Sticky Mobile Buy Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-40 md:hidden border-t border-charcoal/10">
          <WhatsAppButton
            productName={product.name}
            weight={currentOption.weight}
            variant="primary"
            className="w-full justify-center py-3 text-base shadow-gold"
          />
        </div>
      </main>
    </>
  );
};

export default ProductDetailPage;

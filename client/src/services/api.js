/**
 * API service layer for Seerat Gold
 * Axios instance with fallback to demo data when backend is unavailable
 */

import axios from 'axios';
import { demoProducts, demoCategories, demoCombos, demoOffers } from '../data/demoData';

// Create axios instance with base URL from environment or default
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Fetch all products
 * @param {object} params - Query params (category, search, etc.)
 * @returns {Promise<Array>} Array of products
 */
export const getProducts = async (params = {}) => {
  try {
    const response = await api.get('/products', { params });
    return response.data;
  } catch (error) {
    console.warn('API unavailable, using demo data for products:', error.message);
    // Apply client-side filtering on demo data
    let filtered = [...demoProducts];
    if (params.category) {
      filtered = filtered.filter((p) => p.category === params.category);
    }
    if (params.search) {
      const query = params.search.toLowerCase();
      filtered = filtered.filter((p) => p.name.toLowerCase().includes(query));
    }
    if (params.featured) {
      filtered = filtered.filter((p) => p.isFeatured);
    }
    return filtered;
  }
};

/**
 * Fetch a single product by slug
 * @param {string} slug - Product slug
 * @returns {Promise<Object>} Product object
 */
export const getProductBySlug = async (slug) => {
  try {
    const response = await api.get(`/products/${slug}`);
    return response.data;
  } catch (error) {
    console.warn('API unavailable, using demo data for product:', error.message);
    return demoProducts.find((p) => p.slug === slug) || null;
  }
};

/**
 * Fetch featured products
 * @returns {Promise<Array>} Array of featured products
 */
export const getFeaturedProducts = async () => {
  try {
    const response = await api.get('/products', { params: { featured: true } });
    return response.data;
  } catch (error) {
    console.warn('API unavailable, using demo data for featured products:', error.message);
    return demoProducts.filter((p) => p.isFeatured);
  }
};

/**
 * Fetch all categories
 * @returns {Promise<Array>} Array of categories
 */
export const getCategories = async () => {
  try {
    const response = await api.get('/categories');
    return response.data;
  } catch (error) {
    console.warn('API unavailable, using demo data for categories:', error.message);
    return demoCategories;
  }
};

/**
 * Fetch a single category by slug
 * @param {string} slug - Category slug
 * @returns {Promise<Object>} Category object
 */
export const getCategoryBySlug = async (slug) => {
  try {
    const response = await api.get(`/categories/${slug}`);
    return response.data;
  } catch (error) {
    console.warn('API unavailable, using demo data for category:', error.message);
    return demoCategories.find((c) => c.slug === slug) || null;
  }
};

/**
 * Fetch all combo packs
 * @returns {Promise<Array>} Array of combos
 */
export const getCombos = async () => {
  try {
    const response = await api.get('/combos');
    return response.data;
  } catch (error) {
    console.warn('API unavailable, using demo data for combos:', error.message);
    return demoCombos;
  }
};

/**
 * Fetch active offers
 * @returns {Promise<Array>} Array of offers
 */
export const getOffers = async () => {
  try {
    const response = await api.get('/offers');
    return response.data;
  } catch (error) {
    console.warn('API unavailable, using demo data for offers:', error.message);
    return demoOffers;
  }
};

/**
 * Fetch site settings
 * @returns {Promise<Object>} Settings object
 */
export const getSettings = async () => {
  try {
    const response = await api.get('/settings');
    return response.data;
  } catch (error) {
    console.warn('API unavailable, using default settings:', error.message);
    return {
      siteName: 'Seerat Gold',
      tagline: 'सीरत जहाँ.. स्वाद वहाँ',
      whatsapp: '+91 92585 65788',
      phone: '+91 92585 65788',
      email: 'snvlaghudyog01@gmail.com',
      address: 'Garg Departmental Store, Bhandari Bagh, Dehradun, Uttarakhand 248001',
    };
  }
};

export default api;

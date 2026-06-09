/**
 * AppContext - Global application state provider
 * Provides products, categories, combos, offers, settings, and language state
 */

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getProducts, getCategories, getCombos, getOffers, getSettings } from '../services/api';

// Create context
const AppContext = createContext(null);

/**
 * AppProvider - Wraps the app and provides global state
 */
export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [combos, setCombos] = useState([]);
  const [offers, setOffers] = useState([]);
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState('en');

  // Fetch all data on mount
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [productsData, categoriesData, combosData, offersData, settingsData] =
        await Promise.all([
          getProducts(),
          getCategories(),
          getCombos(),
          getOffers(),
          getSettings(),
        ]);

      setProducts(productsData);
      setCategories(categoriesData);
      setCombos(combosData);
      setOffers(offersData);
      setSettings(settingsData);
    } catch (error) {
      console.error('Error fetching app data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Toggle language between English and Hindi
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const value = {
    products,
    categories,
    combos,
    offers,
    settings,
    loading,
    language,
    setLanguage,
    toggleLanguage,
    refetch: fetchData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

/**
 * useAppContext - Custom hook to consume AppContext
 * @returns {object} Context value
 */
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export default AppContext;

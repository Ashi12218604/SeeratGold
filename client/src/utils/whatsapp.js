/**
 * WhatsApp Integration Utilities for Seerat Gold
 * Generates WhatsApp URLs with prefilled messages
 */

export const WHATSAPP_NUMBER = '919258565788';

/**
 * Generate a WhatsApp chat URL
 * @param {string} phone - Phone number with country code
 * @param {string} message - Prefilled message
 * @returns {string} WhatsApp URL
 */
export const generateWhatsAppURL = (phone, message) => {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
};

/**
 * Generate product inquiry message
 * @param {string} productName - Name of the product
 * @param {string} weight - Weight variant (optional)
 * @returns {string} Prefilled message
 */
export const getProductInquiryMessage = (productName, weight = '') => {
  const weightText = weight ? ` (${weight})` : '';
  return `Hello! I'm interested in Seerat Gold *${productName}*${weightText}. Please share details and availability. 🌿`;
};

/**
 * Generate general inquiry message
 * @returns {string} Prefilled message
 */
export const getGeneralInquiryMessage = () => {
  return `Hello! I'm interested in Seerat Gold products. Please share your catalog and pricing. 🌿`;
};

/**
 * Generate combo inquiry message
 * @param {string} comboName - Name of the combo pack
 * @returns {string} Prefilled message
 */
export const getComboInquiryMessage = (comboName) => {
  return `Hello! I'm interested in the Seerat Gold *${comboName}*. Please share details and pricing. 🌿`;
};

/**
 * Generate WhatsApp order message
 * @param {string} productName - Product name
 * @param {string} weight - Weight variant
 * @param {number} quantity - Quantity (default 1)
 * @returns {string} Prefilled message
 */
export const getOrderMessage = (productName, weight, quantity = 1) => {
  return `Hello! I'd like to order:\n\n📦 *${productName}* (${weight}) × ${quantity}\n\nPlease confirm availability and total. 🌿`;
};

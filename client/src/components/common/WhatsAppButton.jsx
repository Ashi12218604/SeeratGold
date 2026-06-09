/**
 * WhatsAppButton - Reusable WhatsApp CTA button
 * Supports primary, small, and icon-only variants
 */

import React from 'react';
import { MessageCircle } from 'lucide-react';
import {
  generateWhatsAppURL,
  getProductInquiryMessage,
  getGeneralInquiryMessage,
  getComboInquiryMessage,
  WHATSAPP_NUMBER,
} from '../../utils/whatsapp';

const WhatsAppButton = ({
  productName,
  weight,
  className = '',
  variant = 'primary',
  isCombo = false,
}) => {
  // Build the appropriate message based on context
  const getMessage = () => {
    if (isCombo && productName) {
      return getComboInquiryMessage(productName);
    }
    if (productName && weight) {
      return getProductInquiryMessage(productName, weight);
    }
    if (productName) {
      return getProductInquiryMessage(productName, 'any size');
    }
    return getGeneralInquiryMessage();
  };

  const url = generateWhatsAppURL(WHATSAPP_NUMBER, getMessage());

  // Variant styles
  const variants = {
    primary: 'btn-whatsapp px-5 py-2.5 text-sm',
    small: 'btn-whatsapp px-3 py-2 text-xs',
    icon: 'btn-whatsapp w-10 h-10 p-0 flex items-center justify-center rounded-full',
  };

  const buttonClass = variants[variant] || variants.primary;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${buttonClass} inline-flex items-center justify-center gap-1.5 font-body font-semibold transition-all ${className}`}
      aria-label={`Order ${productName || 'products'} via WhatsApp`}
    >
      <MessageCircle size={variant === 'icon' ? 20 : 16} />
      {variant !== 'icon' && (
        <span>{isCombo ? 'Order Combo' : 'Order Now'}</span>
      )}
    </a>
  );
};

export default WhatsAppButton;

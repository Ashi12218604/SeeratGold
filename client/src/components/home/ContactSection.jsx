/**
 * ContactSection - Homepage contact information section
 * Split layout with contact details on left and map on right
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const InstagramIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
import SectionTitle from '../common/SectionTitle';
import WhatsAppButton from '../common/WhatsAppButton';
import { CONTACT_INFO } from '../../utils/constants';
import { QRCodeSVG } from 'qrcode.react';

// Contact info items
const contactItems = [
  { icon: Phone, label: 'Phone', value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: CONTACT_INFO.whatsapp,
    href: CONTACT_INFO.whatsappLink,
    isWhatsapp: true,
  },
  { icon: Mail, label: 'Email', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
  { icon: InstagramIcon, label: 'Instagram', value: '@seerat.spices', href: CONTACT_INFO.instagram },
  { icon: MapPin, label: 'Address', value: CONTACT_INFO.address, href: '#' },
  { icon: Clock, label: 'Hours', value: CONTACT_INFO.workingHours, href: '#' },
];

const ContactSection = () => {
  return (
    <section className="section-padding bg-cream" id="contact">
      <div className="section-container">
        <SectionTitle
          title="Get In Touch"
          subtitle="We'd love to hear from you. Reach out for orders, inquiries, or just to say hello!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {contactItems.map(({ icon: Icon, label, value, href, isWhatsapp }) => (
              <a
                key={label}
                href={href}
                target={isWhatsapp ? '_blank' : undefined}
                rel={isWhatsapp ? 'noopener noreferrer' : undefined}
                className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-card hover:shadow-card-hover transition-shadow group"
              >
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isWhatsapp ? 'bg-whatsapp/10 text-whatsapp' : 'bg-primary/10 text-primary'
                  } group-hover:scale-105 transition-transform`}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-xs font-body font-semibold text-charcoal/50 uppercase tracking-wider">
                    {label}
                  </p>
                  <p className="text-sm md:text-base font-body text-charcoal font-medium mt-0.5">
                    {value}
                  </p>
                </div>
              </a>
            ))}

            {/* WhatsApp CTA */}
            <div className="pt-4">
              <WhatsAppButton variant="primary" className="w-full sm:w-auto" />
            </div>

            {/* QR Codes */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white shadow-card text-center">
                <p className="text-xs font-body font-semibold text-charcoal/50 uppercase tracking-wider mb-3">
                  Scan to WhatsApp
                </p>
                <div className="flex flex-col items-center justify-center mx-auto">
                  <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-lg border border-charcoal/10 inline-block hover:shadow-md transition-shadow">
                    <QRCodeSVG value={CONTACT_INFO.whatsappLink} size={110} />
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white shadow-card text-center">
                <p className="text-xs font-body font-semibold text-charcoal/50 uppercase tracking-wider mb-3">
                  Instagram
                </p>
                <div className="flex flex-col items-center justify-center mx-auto">
                  <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-lg border border-charcoal/10 inline-block hover:shadow-md transition-shadow">
                    <img src="/images/instagram-qr.png" alt="Instagram QR Code" width="110" height="110" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-full min-h-[400px] rounded-2xl bg-white shadow-card overflow-hidden">
              <iframe
                title="Seerat Gold Location"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                loading="lazy"
                allowFullScreen
                src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.mapQuery || CONTACT_INFO.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

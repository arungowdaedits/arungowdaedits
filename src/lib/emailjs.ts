import emailjs from '@emailjs/browser';

// EmailJS Configuration
export const EMAILJS_CONFIG = {
  serviceId: 'service_mpgfc0m',
  templateId: 'template_lh0kjfn',
  publicKey: 'ZrOho3QoD9fR1EzoX'
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.publicKey);

export { emailjs };
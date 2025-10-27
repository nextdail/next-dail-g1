import { type ClassValue, clsx } from 'clsx';

/**
 * Utility function to merge Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Format phone number for WhatsApp link
 */
export function formatWhatsAppLink(phone: string, message?: string): string {
  const cleanPhone = phone.replace(/\D/g, '');
  const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${cleanPhone}${encodedMessage}`;
}

/**
 * Format phone number for tel: link
 */
export function formatPhoneLink(phone: string): string {
  return `tel:${phone}`;
}

/**
 * Format email link
 */
export function formatEmailLink(email: string, subject?: string): string {
  const encodedSubject = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${email}${encodedSubject}`;
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function for scroll/resize events
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

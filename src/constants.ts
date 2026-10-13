export const WHATSAPP_NUMBER = '573001234567';
export const CONTACT_EMAIL = 'altiora100@gmail.com';
export const APP_URL = 'https://app.altiora.com';

export const WA_DEFAULT_TEXT = 'Hola Altiora, quiero información sobre sus sistemas de gestión.';

export function waLink(text: string = WA_DEFAULT_TEXT): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

// Desplaza a una sección considerando el alto del navbar fija.
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const NAVBAR_HEIGHT = 64;
  const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT - 16;
  window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
}

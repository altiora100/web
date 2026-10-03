// Logos reales de cada sistema, replicados de sus aplicaciones.
// - Odontología (Altiora Dent): gema en círculo (favicon LogoCirculo del login)
// - Comercial (altiora-pos): gema azul + "Altiora / Gestión Comercial" (sidebar de sistema-gestion-comercial)
import ContentCutIcon from '@mui/icons-material/ContentCut';
import HotelIcon from '@mui/icons-material/Hotel';

interface LogoProps {
  size?: number;
  variant?: 'white' | 'color';
}
export function DentalLogo({ size = 32, variant = 'white' }: LogoProps) {
  // Réplica exacta del logo de Altiora Dent:
  // - variant "color": public/logo.svg (favicon) → círculo #3b82f6 + gema blanca
  // - variant "white": LogoCirculo del login → círculo translúcido + gema blanca
  const circle = variant === 'white' ? 'rgba(255,255,255,0.22)' : '#3b82f6';
  const fills = ['rgba(255,255,255,0.95)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,0.65)'];
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" width={size} height={size}>
      <circle cx="32" cy="32" r="30" fill={circle} />
      <polygon points="32,12 50,22 32,32 14,22" fill={fills[0]} />
      <polygon points="14,22 32,32 32,50 14,40" fill={fills[1]} />
      <polygon points="50,22 32,32 32,50 50,40" fill={fills[2]} />
    </svg>
  );
}

// Marca propia de Gestión Odontológica (Altiora Dent): molar.
// El proyecto no trae archivo de logo con forma de diente, así que se dibuja
// en el mismo estilo geométrico para distinguirlo de la gema comercial.
export function DentalToothLogo({ size = 32, variant = 'white' }: LogoProps) {
  const fill = variant === 'white' ? '#ffffff' : '#0891b2';
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" width={size} height={size}>
      <path
        d="M20 8 C14 8 10 13 10 19 C10 25 13 28 15 33 C17 38 17 44 19 50 C20 54 24 54 25 50 C26 46 26 42 29 42 L35 42 C38 42 38 46 39 50 C40 54 44 54 45 50 C47 44 47 38 49 33 C51 28 54 25 54 19 C54 13 50 8 44 8 C41 8 39 9 37 10 C35.5 10.8 33.5 11.5 32 11.5 C30.5 11.5 28.5 10.8 27 10 C25 9 23 8 20 8 Z"
        fill={fill}
      />
    </svg>
  );
}

export function CommercialLogo({ size = 32 }: LogoProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" width={size} height={size}>
      <polygon points="32,12 50,22 32,32 14,22" fill="rgba(59,130,246,0.95)" />
      <polygon points="14,22 32,32 32,50 14,40" fill="rgba(59,130,246,0.7)" />
      <polygon points="50,22 32,32 32,50 50,40" fill="rgba(59,130,246,0.5)" />
    </svg>
  );
}

export function BarberLogo({ size = 32 }: LogoProps) {
  return <ContentCutIcon sx={{ fontSize: size, color: '#fff' }} />;
}

export function HotelLogo({ size = 32 }: LogoProps) {
  return <HotelIcon sx={{ fontSize: size, color: '#fff' }} />;
}

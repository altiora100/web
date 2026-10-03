import type { ReactNode } from 'react';
import type { ComponentType } from 'react';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CloudIcon from '@mui/icons-material/Cloud';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AssessmentIcon from '@mui/icons-material/Assessment';
import InventoryIcon from '@mui/icons-material/Inventory';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import BarChartIcon from '@mui/icons-material/BarChart';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import HotelIcon from '@mui/icons-material/Hotel';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import StarRateIcon from '@mui/icons-material/StarRate';
import PaymentsIcon from '@mui/icons-material/Payments';
import KingBedIcon from '@mui/icons-material/KingBed';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { DentalToothLogo, CommercialLogo, BarberLogo, HotelLogo } from '../components/logos';

export interface NavItem {
  label: string;
  id: string;
}

export interface SystemFeature {
  icon: ReactNode;
  text: string;
}

export interface System {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  /** Logo real del sistema para fondos de color (siempre variante blanca) */
  Logo: ComponentType<{ size?: number }>;
  color: string;
  bgGradient: string;
  bgLight: string;
  features: SystemFeature[];
  idealFor: string[];
  highlights: { title: string; desc: string }[];
}

export interface Benefit {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Quiénes Somos', id: 'quienes-somos' },
  { label: 'Sistemas', id: 'sistemas' },
  { label: 'Desarrollo a Medida', id: 'desarrollo-medida' },
  { label: 'Precios', id: 'precios' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Beneficios', id: 'beneficios' },
  { label: 'Contacto', id: 'contacto' },
];

export const SYSTEMS: System[] = [
  {
    id: 'dental',
    title: 'Gestión Odontológica',
    subtitle: 'Sistema integral para clínicas dentales',
    description:
      'Administra tu clínica de odontología de forma completa. Desde la agenda de pacientes hasta el odontograma digital, facturación y reportes detallados.',
    icon: <LocalHospitalIcon sx={{ fontSize: 32 }} />,
    Logo: ({ size = 44 }: { size?: number }) => <DentalToothLogo size={size} variant="white" />,
    color: '#0891b2',
    bgGradient: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
    bgLight: '#f0fdfa',
    features: [
      { icon: <CalendarMonthIcon />, text: 'Agenda de citas inteligente' },
      { icon: <PeopleIcon />, text: 'Historial clínico digital' },
      { icon: <MedicalServicesIcon />, text: 'Odontograma interactivo' },
      { icon: <AssessmentIcon />, text: 'Reportes y estadísticas' },
    ],
    idealFor: ['Clínicas dentales', 'Ortodoncistas', 'Consultorios independientes'],
    highlights: [
      { title: 'Odontograma digital', desc: 'Registra tratamientos por pieza dental con fotos y evolución.' },
      { title: 'Recordatorios automáticos', desc: 'Reduce ausencias con SMS y WhatsApp.' },
      { title: 'Facturación y presupuestos', desc: 'Cotizaciones, abonos y cuentas por cobrar.' },
    ],
  },
  {
    id: 'commercial',
    title: 'Gestión Comercial',
    subtitle: 'Control total de tu negocio',
    description:
      'Gestiona inventarios, facturación, cuentas por cobrar y reportes financieros. Todo lo que necesitas para dirigir tu empresa en un solo lugar.',
    icon: <PointOfSaleIcon sx={{ fontSize: 32 }} />,
    Logo: ({ size = 44 }: { size?: number }) => <CommercialLogo size={size} />,
    color: '#7c3aed',
    bgGradient: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)',
    bgLight: '#f5f3ff',
    features: [
      { icon: <InventoryIcon />, text: 'Inventario en tiempo real' },
      { icon: <AccountBalanceIcon />, text: 'Facturación y recibos' },
      { icon: <BarChartIcon />, text: 'Análisis financiero' },
      { icon: <TrendingUpIcon />, text: 'Control de ventas' },
    ],
    idealFor: ['Tiendas y minimarkets', 'Distribuidoras', 'Pymes de servicios'],
    highlights: [
      { title: 'Stock en tiempo real', desc: 'Alertas de stock mínimo y movimientos por sucursal.' },
      { title: 'Facturación y reportes', desc: 'Comprobantes, cuentas por cobrar y reportes contables. Facturación electrónica próximamente.' },
      { title: 'Cuentas por cobrar', desc: 'Control de créditos, abonos y cartera vencida.' },
    ],
  },
  {
    id: 'barberia',
    title: 'Gestión Barbería',
    subtitle: 'Tu barbería siempre llena y organizada',
    description:
      'Reservas online, control de barberos y sillas, historial de cortes por cliente, membresías y pagos. La experiencia premium que tus clientes esperan.',
    icon: <ContentCutIcon sx={{ fontSize: 32 }} />,
    Logo: BarberLogo,
    color: '#b45309',
    bgGradient: 'linear-gradient(135deg, #92400e 0%, #f59e0b 100%)',
    bgLight: '#fffbeb',
    features: [
      { icon: <EventAvailableIcon />, text: 'Reservas online 24/7' },
      { icon: <PeopleIcon />, text: 'Control de barberos' },
      { icon: <StarRateIcon />, text: 'Membresías y fidelización' },
      { icon: <PaymentsIcon />, text: 'Pagos y propinas' },
    ],
    idealFor: ['Barberías', 'Salones de belleza', 'Estudios de tatuajes'],
    highlights: [
      { title: 'Agenda por barbero y silla', desc: 'Evita cruces, gestiona tiempos y pausas automáticamente.' },
      { title: 'Link de reservas', desc: 'Tus clientes reservan desde Instagram o WhatsApp sin llamadas.' },
      { title: 'Historial de estilo', desc: 'Fotos, fórmulas de color y preferencias por cliente.' },
    ],
  },
  {
    id: 'hotel',
    title: 'Gestión Hotelera',
    subtitle: 'Ocupación máxima, cero estrés',
    description:
      'Calendario de reservas, check-in / check-out en segundos, control de habitaciones, servicios extras y reportes de ocupación e ingresos.',
    icon: <HotelIcon sx={{ fontSize: 32 }} />,
    Logo: HotelLogo,
    color: '#047857',
    bgGradient: 'linear-gradient(135deg, #065f46 0%, #10b981 100%)',
    bgLight: '#ecfdf5',
    features: [
      { icon: <CalendarMonthIcon />, text: 'Reservas y disponibilidad' },
      { icon: <KingBedIcon />, text: 'Control de habitaciones' },
      { icon: <RoomServiceIcon />, text: 'Servicios y consumos' },
      { icon: <MeetingRoomIcon />, text: 'Check-in / Check-out' },
    ],
    idealFor: ['Hoteles boutique', 'Hostales', 'Apartamentos turísticos'],
    highlights: [
      { title: 'Mapa de ocupación', desc: 'Ve habitaciones libres, ocupadas y en limpieza en un vistazo.' },
      { title: 'Tarifas por temporada', desc: 'Precios dinámicos por tipo de habitación y temporada.' },
      { title: 'Consumos extras', desc: 'Minibar, restaurante y servicios cargados a la habitación.' },
    ],
  },
];

export const BENEFITS: Benefit[] = [
  {
    icon: <SecurityIcon sx={{ fontSize: 28 }} />,
    title: 'Seguridad Industrial',
    description: 'Cifrado de datos de extremo a extremo y cumplimiento con normativas de protección de datos.',
    color: '#059669',
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 28 }} />,
    title: 'Alto Rendimiento',
    description: 'Plataforma optimizada para responder en milisegundos, incluso con grandes volúmenes de datos.',
    color: '#2563eb',
  },
  {
    icon: <CloudIcon sx={{ fontSize: 28 }} />,
    title: 'En la Nube',
    description: 'Accede desde cualquier lugar y dispositivo. Tus datos siempre seguros y disponibles.',
    color: '#7c3aed',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 28 }} />,
    title: 'Soporte 24/7',
    description: 'Equipo de soporte técnico disponible todo el día para ayudarte cuando lo necesites.',
    color: '#d97706',
  },
];

export const STATS = [
  { value: '500+', label: 'Negocios activos' },
  { value: '50K+', label: 'Clientes gestionados' },
  { value: '99.9%', label: 'Uptime garantizado' },
  { value: '24/7', label: 'Soporte disponible' },
];

export const ABOUT_VALUES = ['Innovación', 'Compromiso', 'Calidad', 'Soporte'];

export const ABOUT_TILES = [
  { icon: <DentalToothLogo size={24} variant="color" />, label: 'Odontología', color: '#0891b2' },
  { icon: <CommercialLogo size={24} />, label: 'Comercio', color: '#7c3aed' },
  { icon: <ContentCutIcon />, label: 'Barbería', color: '#b45309' },
  { icon: <HotelIcon />, label: 'Hoteles', color: '#047857' },
];

export const CONTACT_INFO = [
  { icon: <PhoneIcon />, label: '+57 300 123 4567', sub: 'Lun - Vie, 8am - 6pm' },
  { icon: <EmailIcon />, label: 'altiora100@gmail.com', sub: 'Respuesta en 24 horas' },
  { icon: <LocationOnIcon />, label: 'Colombia', sub: 'Servicio en toda Latinoamérica' },
];

export const FOOTER_PRODUCT_LINKS = ['Gestión Odontológica', 'Gestión Comercial', 'Gestión Barbería', 'Gestión Hotelera', 'Desarrollo a Medida', 'Precios', 'Demo'];
export const FOOTER_COMPANY_LINKS = ['Quiénes Somos', 'Blog', 'Carreras', 'Contacto'];
export const FOOTER_LEGAL_LINKS = ['Política de Privacidad', 'Términos de Uso'];

export interface Testimonial {
  quote: string;
  name: string;
  business: string;
  system: string;
  initials: string;
  color: string;
}

// TODO: reemplazar con clientes reales (nombre, negocio y resultado verificable)
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Pasamos de agenda en cuaderno a cero ausencias. Los recordatorios por WhatsApp nos llenaron la agenda en el primer mes.',
    name: 'Dra. Carolina Méndez',
    business: 'Clínica Dental Sonríe',
    system: 'Gestión Odontológica',
    initials: 'CM',
    color: '#0891b2',
  },
  {
    quote: 'El panel me muestra las ventas del día y el stock bajo sin abrir Excel. Cierro caja en minutos, antes me tomaba una hora.',
    name: 'Jean Córdoba',
    business: 'Minimarket El Progreso',
    system: 'Gestión Comercial',
    initials: 'JC',
    color: '#4f46e5',
  },
  {
    quote: 'Los clientes reservan solos desde Instagram y llegan puntuales. Mis sillas no se desocupan entre semana.',
    name: 'Diego Ramírez',
    business: 'Barbería Corte Fino',
    system: 'Gestión Barbería',
    initials: 'DR',
    color: '#b45309',
  },
];

export interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  color: string;
}

// Precios mensuales reales por sistema (COP). Sin precio → plan personalizado.
export const PRICING: Record<string, Plan[]> = {
  commercial: [
    {
      name: 'Básico',
      price: '$55.000',
      period: '/mes',
      description: 'Para empezar a vender con control.',
      features: ['1 usuario + 1 sede', 'Punto de venta + inventario', 'Soporte por WhatsApp', 'Copias de seguridad diarias'],
      highlighted: false,
      color: '#4f46e5',
    },
    {
      name: 'Profesional',
      price: '$70.000',
      period: '/mes',
      description: 'El favorito: operación completa.',
      features: ['Hasta 5 usuarios', 'Todos los módulos + reportes', 'Documentos y cuentas por cobrar', 'Capacitación incluida', 'Soporte prioritario 24/7'],
      highlighted: true,
      color: '#4f46e5',
    },
    {
      name: 'Premium',
      price: '$120.000',
      period: '/mes',
      description: 'Para negocios multi-sede.',
      features: ['Usuarios y sedes ilimitadas', 'Restaurante, delivery y cocina', 'API e integraciones', 'Gerente de cuenta dedicado'],
      highlighted: false,
      color: '#4f46e5',
    },
  ],
  dental: [
    {
      name: 'Básico',
      price: '$70.000',
      period: '/mes',
      description: 'Para consultorios que se ordenan.',
      features: ['1 consultorio', 'Agenda + historial de pacientes', 'Odontograma digital', 'Soporte por WhatsApp'],
      highlighted: false,
      color: '#0891b2',
    },
    {
      name: 'Profesional',
      price: '$120.000',
      period: '/mes',
      description: 'El favorito: agenda siempre llena.',
      features: ['Hasta 5 usuarios', 'Recordatorios por WhatsApp', 'Facturación y presupuestos', 'Reportes y estadísticas', 'Capacitación incluida'],
      highlighted: true,
      color: '#0891b2',
    },
    {
      name: 'Premium',
      price: '$140.000',
      period: '/mes',
      description: 'Para clínicas multi-sede.',
      features: ['Consultorios ilimitados', 'Multi-sede y roles avanzados', 'API e integraciones', 'Gerente de cuenta dedicado'],
      highlighted: false,
      color: '#0891b2',
    },
  ],
};

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: '¿Necesito internet para usar el sistema?',
    a: 'Sí, nuestros sistemas funcionan en la nube: accedes desde cualquier computador, tablet o celular con internet y tus datos se sincronizan en tiempo real.',
  },
  {
    q: '¿Los sistemas tienen facturación electrónica (DIAN)?',
    a: 'Aún no. Hoy generan comprobantes, recibos y reportes contables. La facturación electrónica está en nuestro roadmap y será una actualización automática para clientes activos.',
  },
  {
    q: '¿Capacitan a mi equipo?',
    a: 'Sí. Los planes Profesional y Premium incluyen capacitación inicial y acompañamiento en la puesta en marcha, sin costo adicional.',
  },
  {
    q: '¿Mis datos están seguros?',
    a: 'Tus datos viven en la nube con copias de seguridad diarias y acceso por usuarios y roles. Solo tu equipo puede ver tu información.',
  },
  {
    q: '¿Puedo probar antes de pagar?',
    a: 'Claro. Explora las demos interactivas de esta página o escríbenos y te agendamos una demostración personalizada con tus propios datos.',
  },
  {
    q: '¿Hacen desarrollos a la medida?',
    a: 'Sí. Además de los 4 sistemas listos, construimos software a medida por fases. Completa el formulario de Desarrollo a Medida y te cotizamos en menos de 24 horas.',
  },
];

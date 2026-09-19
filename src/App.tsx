import { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  IconButton,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const theme = createTheme({
  palette: {
    primary: { main: '#1e3a8a' },
    secondary: { main: '#2563eb' },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const NAV_ITEMS = ['Inicio', 'Quiénes Somos', 'Sistemas', 'Beneficios', 'Contacto'];

const SYSTEMS = [
  {
    id: 'dental',
    title: 'Gestión Odontológica',
    subtitle: 'Sistema integral para clínicas dentales',
    description:
      'Administra tu clínica de odontología de forma completa. Desde la agenda de pacientes hasta el odontograma digital, facturación y reportes detallados.',
    icon: <LocalHospitalIcon sx={{ fontSize: 32 }} />,
    color: '#0891b2',
    bgGradient: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
    bgLight: '#f0fdfa',
    features: [
      { icon: <CalendarMonthIcon />, text: 'Agenda de citas inteligente' },
      { icon: <PeopleIcon />, text: 'Historial clínico digital' },
      { icon: <MedicalServicesIcon />, text: 'Odontograma interactivo' },
      { icon: <AssessmentIcon />, text: 'Reportes y estadísticas' },
    ],
  },
  {
    id: 'commercial',
    title: 'Gestión Comercial',
    subtitle: 'Control total de tu negocio',
    description:
      'Gestiona inventarios, facturación, cuentas por cobrar y reportes financieros. Todo lo que necesitas para dirigir tu empresa en un solo lugar.',
    icon: <PointOfSaleIcon sx={{ fontSize: 32 }} />,
    color: '#7c3aed',
    bgGradient: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)',
    bgLight: '#f5f3ff',
    features: [
      { icon: <InventoryIcon />, text: 'Inventario en tiempo real' },
      { icon: <AccountBalanceIcon />, text: 'Facturación electrónica' },
      { icon: <BarChartIcon />, text: 'Análisis financiero' },
      { icon: <TrendingUpIcon />, text: 'Control de ventas' },
    ],
  },
];

const BENEFITS = [
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

const STATS = [
  { value: '500+', label: 'Clínicas activas' },
  { value: '50K+', label: 'Pacientes gestionados' },
  { value: '99.9%', label: 'Uptime garantizado' },
  { value: '24/7', label: 'Soporte disponible' },
];

function Landing() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id.toLowerCase().replace(/\s+/g, '-'));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 280, pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, mb: 2 }}>
        <Typography variant="h6" fontWeight={700} color="primary">
          Altiora
        </Typography>
        <IconButton onClick={() => setMobileOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {NAV_ITEMS.map((item) => (
          <ListItem key={item} onClick={() => handleScroll(item)} sx={{ cursor: 'pointer' }}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
      <Box sx={{ px: 2, mt: 2 }}>
        <Button variant="contained" fullWidth sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 600 }}>
          Iniciar Sesión
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Box
        component="nav"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          bgcolor: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: '1.1rem' }}>A</Typography>
              </Box>
              <Typography variant="h6" fontWeight={700} sx={{ color: '#0f172a' }}>
                Altiora
              </Typography>
            </Box>

            {!isMobile ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                {NAV_ITEMS.map((item) => (
                  <Typography
                    key={item}
                    onClick={() => handleScroll(item)}
                    sx={{
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: '#475569',
                      '&:hover': { color: '#1e3a8a' },
                      transition: 'color 0.2s',
                    }}
                  >
                    {item}
                  </Typography>
                ))}
                <Button variant="contained" sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 600, px: 3 }}>
                  Iniciar Sesión
                </Button>
              </Box>
            ) : (
              <IconButton onClick={() => setMobileOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Container>
      </Box>

      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        {drawer}
      </Drawer>

      {/* Hero */}
      <Box
        id="inicio"
        sx={{
          pt: 12,
          pb: 10,
          background: 'linear-gradient(180deg, #f0f4ff 0%, #ffffff 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: -200,
            right: -200,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: -150,
            left: -150,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
          }}
        />
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Chip
                label="Soluciones tecnológicas para tu negocio"
                size="small"
                sx={{ mb: 2, bgcolor: '#eff6ff', color: '#1e3a8a', fontWeight: 600, fontSize: '0.75rem' }}
              />
              <Typography
                variant="h3"
                sx={{ fontWeight: 800, color: '#0f172a', lineHeight: 1.15, mb: 2, fontSize: { xs: '2rem', md: '2.75rem' } }}
              >
                Impulsa tu negocio con{' '}
                <Box component="span" sx={{ color: '#2563eb' }}>
                  software inteligente
                </Box>
              </Typography>
              <Typography variant="h6" sx={{ color: '#64748b', fontWeight: 400, mb: 4, lineHeight: 1.6 }}>
                Desarrollamos sistemas de gestión poderosos y fáciles de usar para clínicas odontológicas y empresas que buscan optimizar sus procesos.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
                    boxShadow: '0 4px 14px rgba(37,99,235,0.3)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #172a63 0%, #1d4ed8 100%)',
                      boxShadow: '0 6px 20px rgba(37,99,235,0.4)',
                    },
                  }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Comenzar Ahora
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => handleScroll('Sistemas')}
                  sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 600, px: 4, py: 1.5 }}
                >
                  Ver Sistemas
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                <Box
                  sx={{
                    width: 200,
                    p: 3,
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
                    color: '#fff',
                    mt: 4,
                    boxShadow: '0 12px 40px rgba(8,145,178,0.25)',
                  }}
                >
                  <LocalHospitalIcon sx={{ fontSize: 40, mb: 1 }} />
                  <Typography sx={{ fontWeight: 700, fontSize: '0.95rem' }}>Gestión Odontológica</Typography>
                  <Typography sx={{ fontSize: '0.8rem', opacity: 0.9, mt: 0.5 }}>Clínicas dentales</Typography>
                </Box>
                <Box
                  sx={{
                    width: 200,
                    p: 3,
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)',
                    color: '#fff',
                    mt: 8,
                    boxShadow: '0 12px 40px rgba(124,58,237,0.25)',
                  }}
                >
                  <PointOfSaleIcon sx={{ fontSize: 40, mb: 1 }} />
                  <Typography sx={{ fontWeight: 700, fontSize: '0.95rem' }}>Gestión Comercial</Typography>
                  <Typography sx={{ fontSize: '0.8rem', opacity: 0.9, mt: 0.5 }}>Empresas y negocios</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats */}
      <Box sx={{ py: 4, bgcolor: '#ffffff', borderBottom: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 3 }}>
            {STATS.map((stat) => (
              <Box key={stat.label} sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#1e3a8a' }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', mt: 0.5 }}>
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Quiénes Somos */}
      <Box id="quienes-somos" sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Chip
                label="Quiénes Somos"
                size="small"
                sx={{ mb: 2, bgcolor: '#eff6ff', color: '#1e3a8a', fontWeight: 600, fontSize: '0.75rem' }}
              />
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a', mb: 2 }}>
                Tecnología que transforma negocios
              </Typography>
              <Typography sx={{ color: '#64748b', mb: 3, lineHeight: 1.7 }}>
                En <strong>Altiora</strong> creemos que la tecnología debe ser una herramienta al servicio de las personas. Somos un equipo de desarrolladores y especialistas comprometidos en crear soluciones de software que simplifican la gestión empresarial.
              </Typography>
              <Typography sx={{ color: '#64748b', mb: 4, lineHeight: 1.7 }}>
                Nuestros sistemas están diseñados pensando en la experiencia del usuario: intuitivos, potentes y escalables. Desde clínicas odontológicas hasta empresas comerciales, ayudamos a nuestros clientes a tomar mejores decisiones basadas en datos.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {['Innovación', 'Compromiso', 'Calidad', 'Soporte'].map((item) => (
                  <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <CheckCircleIcon sx={{ fontSize: 18, color: '#059669' }} />
                    <Typography sx={{ fontWeight: 600, fontSize: '0.875rem', color: '#334155' }}>{item}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 4, borderRadius: 4, background: 'linear-gradient(135deg, #f0f4ff 0%, #f5f3ff 100%)' }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                  {[
                    { icon: <LocalHospitalIcon />, label: 'Odontología', color: '#0891b2' },
                    { icon: <PointOfSaleIcon />, label: 'Comercio', color: '#7c3aed' },
                    { icon: <CloudIcon />, label: 'Cloud', color: '#2563eb' },
                    { icon: <SecurityIcon />, label: 'Seguridad', color: '#059669' },
                  ].map((item) => (
                    <Box
                      key={item.label}
                      sx={{ p: 2.5, borderRadius: 2, bgcolor: '#ffffff', textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
                    >
                      <Avatar sx={{ bgcolor: `${item.color}15`, color: item.color, width: 48, height: 48, mx: 'auto', mb: 1 }}>
                        {item.icon}
                      </Avatar>
                      <Typography sx={{ fontWeight: 600, fontSize: '0.85rem' }}>{item.label}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Sistemas */}
      <Box id="sistemas" sx={{ py: 10, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              label="Nuestros Sistemas"
              size="small"
              sx={{ mb: 2, bgcolor: '#eff6ff', color: '#1e3a8a', fontWeight: 600, fontSize: '0.75rem' }}
            />
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a', mb: 1.5 }}>
              Soluciones diseñadas para ti
            </Typography>
            <Typography sx={{ color: '#64748b', maxWidth: 600, mx: 'auto' }}>
              Dos sistemas especializados que se adaptan a las necesidades de tu industria.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {SYSTEMS.map((system) => (
              <Grid item xs={12} md={6} key={system.id}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: 'divider',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 20px 40px ${system.color}15`,
                      borderColor: system.color,
                    },
                  }}
                >
                  <Box
                    sx={{
                      p: 3,
                      background: system.bgGradient,
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.2)', width: 56, height: 56 }}>{system.icon}</Avatar>
                    <Box>
                      <Typography sx={{ fontWeight: 700, fontSize: '1.15rem' }}>{system.title}</Typography>
                      <Typography sx={{ fontSize: '0.85rem', opacity: 0.9 }}>{system.subtitle}</Typography>
                    </Box>
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Typography sx={{ color: '#475569', mb: 3, lineHeight: 1.7, fontSize: '0.9rem' }}>
                      {system.description}
                    </Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
                      {system.features.map((feat) => (
                        <Box key={feat.text} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Avatar sx={{ bgcolor: system.bgLight, color: system.color, width: 32, height: 32 }}>
                            {feat.icon}
                          </Avatar>
                          <Typography sx={{ fontSize: '0.8rem', fontWeight: 500, color: '#334155' }}>{feat.text}</Typography>
                        </Box>
                      ))}
                    </Box>
                    <Button
                      variant="outlined"
                      fullWidth
                      sx={{
                        mt: 3,
                        borderRadius: 2,
                        textTransform: 'none',
                        fontWeight: 600,
                        borderColor: system.color,
                        color: system.color,
                        '&:hover': { bgcolor: system.bgLight, borderColor: system.color },
                      }}
                    >
                      Conocer Más
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Beneficios */}
      <Box id="beneficios" sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              label="Beneficios"
              size="small"
              sx={{ mb: 2, bgcolor: '#eff6ff', color: '#1e3a8a', fontWeight: 600, fontSize: '0.75rem' }}
            />
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a', mb: 1.5 }}>
              ¿Por qué elegir Altiora?
            </Typography>
            <Typography sx={{ color: '#64748b', maxWidth: 600, mx: 'auto' }}>
              Ofrecemos más que software. Brindamos una experiencia completa de gestión.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {BENEFITS.map((benefit) => (
              <Grid item xs={12} sm={6} md={3} key={benefit.title}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    textAlign: 'center',
                    p: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 12px 30px ${benefit.color}12`,
                      borderColor: benefit.color,
                    },
                  }}
                >
                  <Avatar sx={{ bgcolor: `${benefit.color}12`, color: benefit.color, width: 56, height: 56, mx: 'auto', mb: 2 }}>
                    {benefit.icon}
                  </Avatar>
                  <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', mb: 1 }}>{benefit.title}</Typography>
                  <Typography sx={{ fontSize: '0.83rem', color: '#64748b', lineHeight: 1.6 }}>
                    {benefit.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        sx={{
          py: 10,
          background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
          }}
        />
        <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative' }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
            ¿Listo para transformar tu negocio?
          </Typography>
          <Typography sx={{ opacity: 0.85, mb: 4, maxWidth: 500, mx: 'auto' }}>
            Únete a cientos de empresas que ya confían en Altiora para gestionar sus operaciones diarias.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
                px: 4,
                py: 1.5,
                bgcolor: '#ffffff',
                color: '#1e3a8a',
                boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                '&:hover': { bgcolor: '#f0f4ff' },
              }}
            >
              Solicitar Demostración
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => handleScroll('Contacto')}
              sx={{
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderColor: 'rgba(255,255,255,0.4)',
                color: '#fff',
                '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.1)' },
              }}
            >
              Contactar Ventas
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Contacto */}
      <Box id="contacto" sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={5}>
              <Chip
                label="Contacto"
                size="small"
                sx={{ mb: 2, bgcolor: '#eff6ff', color: '#1e3a8a', fontWeight: 600, fontSize: '0.75rem' }}
              />
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a', mb: 2 }}>
                Hablemos
              </Typography>
              <Typography sx={{ color: '#64748b', mb: 4, lineHeight: 1.7 }}>
                ¿Tienes preguntas? Estamos aquí para ayudarte. Contáctanos y te responderemos lo antes posible.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                {[
                  { icon: <PhoneIcon />, label: '+57 300 123 4567', sub: 'Lun - Vie, 8am - 6pm' },
                  { icon: <EmailIcon />, label: 'info@altiora.com', sub: 'Respuesta en 24 horas' },
                  { icon: <LocationOnIcon />, label: 'Colombia', sub: 'Servicio en toda Latinoamérica' },
                ].map((item) => (
                  <Box key={item.label} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Avatar sx={{ bgcolor: '#eff6ff', color: '#2563eb', width: 44, height: 44 }}>{item.icon}</Avatar>
                    <Box>
                      <Typography sx={{ fontWeight: 600, fontSize: '0.9rem' }}>{item.label}</Typography>
                      <Typography sx={{ fontSize: '0.8rem', color: '#94a3b8' }}>{item.sub}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Card elevation={0} sx={{ p: 4, borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Typography sx={{ fontWeight: 600, fontSize: '0.8rem', mb: 0.5, color: '#475569' }}>Nombre</Typography>
                      <Box
                        component="input"
                        placeholder="Tu nombre"
                        sx={{
                          width: '100%',
                          p: 1.5,
                          borderRadius: 1.5,
                          border: '1px solid #e2e8f0',
                          fontSize: '0.875rem',
                          outline: 'none',
                          '&:focus': { borderColor: '#2563eb' },
                          boxSizing: 'border-box',
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography sx={{ fontWeight: 600, fontSize: '0.8rem', mb: 0.5, color: '#475569' }}>Email</Typography>
                      <Box
                        component="input"
                        placeholder="tu@email.com"
                        sx={{
                          width: '100%',
                          p: 1.5,
                          borderRadius: 1.5,
                          border: '1px solid #e2e8f0',
                          fontSize: '0.875rem',
                          outline: 'none',
                          '&:focus': { borderColor: '#2563eb' },
                          boxSizing: 'border-box',
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.8rem', mb: 0.5, color: '#475569' }}>Empresa</Typography>
                    <Box
                      component="input"
                      placeholder="Nombre de tu empresa"
                      sx={{
                        width: '100%',
                        p: 1.5,
                        borderRadius: 1.5,
                        border: '1px solid #e2e8f0',
                        fontSize: '0.875rem',
                        outline: 'none',
                        '&:focus': { borderColor: '#2563eb' },
                        boxSizing: 'border-box',
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.8rem', mb: 0.5, color: '#475569' }}>Mensaje</Typography>
                    <Box
                      component="textarea"
                      placeholder="¿En qué podemos ayudarte?"
                      rows={4}
                      sx={{
                        width: '100%',
                        p: 1.5,
                        borderRadius: 1.5,
                        border: '1px solid #e2e8f0',
                        fontSize: '0.875rem',
                        outline: 'none',
                        resize: 'vertical',
                        fontFamily: 'inherit',
                        '&:focus': { borderColor: '#2563eb' },
                        boxSizing: 'border-box',
                      }}
                    />
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      alignSelf: 'flex-start',
                      borderRadius: 2,
                      textTransform: 'none',
                      fontWeight: 600,
                      px: 4,
                      background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
                      '&:hover': { background: 'linear-gradient(135deg, #172a63 0%, #1d4ed8 100%)' },
                    }}
                  >
                    Enviar Mensaje
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: '#0f172a', color: '#94a3b8', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: 1.5,
                    background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: '0.95rem' }}>A</Typography>
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff' }}>
                  Altiora
                </Typography>
              </Box>
              <Typography sx={{ fontSize: '0.85rem', mb: 2, lineHeight: 1.7 }}>
                Soluciones tecnológicas que impulsan el crecimiento de tu negocio.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {[FacebookIcon, LinkedInIcon, InstagramIcon].map((Icon, i) => (
                  <IconButton key={i} sx={{ color: '#64748b', '&:hover': { color: '#3b82f6' } }}>
                    <Icon fontSize="small" />
                  </IconButton>
                ))}
              </Box>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography sx={{ fontWeight: 700, fontSize: '0.85rem', color: '#fff', mb: 2 }}>Producto</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {['Gestión Odontológica', 'Gestión Comercial', 'Precios', 'Demo'].map((item) => (
                  <Typography key={item} sx={{ fontSize: '0.83rem', cursor: 'pointer', '&:hover': { color: '#3b82f6' } }}>
                    {item}
                  </Typography>
                ))}
              </Box>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography sx={{ fontWeight: 700, fontSize: '0.85rem', color: '#fff', mb: 2 }}>Empresa</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {['Quiénes Somos', 'Blog', 'Carreras', 'Contacto'].map((item) => (
                  <Typography key={item} sx={{ fontSize: '0.83rem', cursor: 'pointer', '&:hover': { color: '#3b82f6' } }}>
                    {item}
                  </Typography>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography sx={{ fontWeight: 700, fontSize: '0.85rem', color: '#fff', mb: 2 }}>
                Suscríbete a nuestro newsletter
              </Typography>
              <Typography sx={{ fontSize: '0.83rem', mb: 2 }}>Recibe las últimas novedades y actualizaciones.</Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Box
                  component="input"
                  placeholder="tu@email.com"
                  sx={{
                    flex: 1,
                    p: 1.5,
                    borderRadius: 1.5,
                    border: '1px solid #334155',
                    bgcolor: '#1e293b',
                    color: '#fff',
                    fontSize: '0.85rem',
                    outline: 'none',
                    '&:focus': { borderColor: '#3b82f6' },
                  }}
                />
                <Button
                  variant="contained"
                  sx={{ borderRadius: 1.5, textTransform: 'none', fontWeight: 600, bgcolor: '#3b82f6', '&:hover': { bgcolor: '#2563eb' } }}
                >
                  Suscribir
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ borderColor: '#1e293b', my: 4 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
            <Typography sx={{ fontSize: '0.8rem' }}>© 2024 Altiora. Todos los derechos reservados.</Typography>
            <Box sx={{ display: 'flex', gap: 3 }}>
              {['Política de Privacidad', 'Términos de Uso'].map((item) => (
                <Typography key={item} sx={{ fontSize: '0.8rem', cursor: 'pointer', '&:hover': { color: '#3b82f6' } }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Landing />
    </ThemeProvider>
  );
}

export default App;

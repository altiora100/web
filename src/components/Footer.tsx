import { useState } from 'react';
import { Box, Typography, Button, Container, Grid, IconButton, Divider, CircularProgress } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { FOOTER_LEGAL_LINKS } from '../data/content';
import { CONTACT_EMAIL } from '../constants';
import { scrollToSection } from '../utils/scroll';
import { useNavigate, useLocation } from 'react-router-dom';

type NLStatus = 'idle' | 'sending' | 'done' | 'error';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<NLStatus>('idle');

  const goSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(id), 150);
    } else {
      scrollToSection(id);
    }
  };

  const productLinks: { label: string; action: () => void }[] = [
    { label: 'Gestión Odontológica', action: () => navigate('/sistemas/dental') },
    { label: 'Gestión Comercial', action: () => navigate('/sistemas/commercial') },
    { label: 'Gestión Barbería', action: () => navigate('/sistemas/barberia') },
    { label: 'Gestión Hotelera', action: () => navigate('/sistemas/hotel') },
    { label: 'Desarrollo a Medida', action: () => goSection('desarrollo-medida') },
    { label: 'Precios', action: () => goSection('precios') },
    { label: 'Demo', action: () => navigate('/demo/commercial') },
  ];

  const companyLinks: { label: string; action: () => void }[] = [
    { label: 'Quiénes Somos', action: () => goSection('quienes-somos') },
    { label: 'Precios', action: () => goSection('precios') },
    { label: 'Contacto', action: () => goSection('contacto') },
  ];

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ _subject: 'Newsletter Altiora: ' + email.trim(), Email: email.trim() }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('done');
    } catch {
      setStatus('error');
    }
  };

  return (
    <Box sx={{ bgcolor: '#0f172a', color: '#94a3b8', py: { xs: 12, md: 6 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Box component="img" src="/logo.svg" alt="Altiora" sx={{ width: 32, height: 32, borderRadius: 1.5 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', fontFamily: '"Space Grotesk", sans-serif' }}>
                Altiora
              </Typography>
            </Box>
            <Typography sx={{ fontSize: '0.85rem', mb: 2, lineHeight: 1.7 }}>
              Soluciones tecnológicas que impulsan el crecimiento de tu negocio.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {[
                { Icon: FacebookIcon, href: 'https://facebook.com' },
                { Icon: LinkedInIcon, href: 'https://linkedin.com' },
                { Icon: InstagramIcon, href: 'https://instagram.com' },
              ].map(({ Icon, href }, i) => (
                <IconButton key={i} href={href} target="_blank" rel="noopener noreferrer" sx={{ color: '#64748b', '&:hover': { color: '#3b82f6' } }}>
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Box>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography sx={{ fontWeight: 700, fontSize: '0.85rem', color: '#fff', mb: 2 }}>Producto</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {productLinks.map((item) => (
                <Typography
                  key={item.label}
                  onClick={item.action}
                  sx={{ fontSize: '0.83rem', cursor: 'pointer', '&:hover': { color: '#3b82f6' } }}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography sx={{ fontWeight: 700, fontSize: '0.85rem', color: '#fff', mb: 2 }}>Empresa</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {companyLinks.map((item) => (
                <Typography
                  key={item.label}
                  onClick={item.action}
                  sx={{ fontSize: '0.83rem', cursor: 'pointer', '&:hover': { color: '#3b82f6' } }}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontWeight: 700, fontSize: '0.85rem', color: '#fff', mb: 2 }}>
              Suscríbete a nuestro newsletter
            </Typography>
            <Typography sx={{ fontSize: '0.83rem', mb: 2 }}>Recibe las últimas novedades y actualizaciones.</Typography>
            {status === 'done' ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#4ade80', fontSize: '0.85rem' }}>
                <CheckCircleIcon sx={{ fontSize: 18 }} />
                ¡Suscripción registrada! Te contactaremos pronto.
              </Box>
            ) : (
              <Box component="form" onSubmit={handleNewsletter} sx={{ display: 'flex', gap: 1 }}>
                <Box
                  component="input"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  sx={{
                    flex: 1,
                    p: 1.5,
                    borderRadius: 1.5,
                    border: `1px solid ${status === 'error' ? '#ef4444' : '#334155'}`,
                    bgcolor: '#1e293b',
                    color: '#fff',
                    fontSize: '0.85rem',
                    outline: 'none',
                    '&:focus': { borderColor: '#3b82f6' },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  disabled={status === 'sending'}
                  sx={{ borderRadius: 1.5, textTransform: 'none', fontWeight: 600, bgcolor: '#3b82f6', '&:hover': { bgcolor: '#2563eb' } }}
                >
                  {status === 'sending' ? <CircularProgress size={18} color="inherit" /> : 'Suscribir'}
                </Button>
              </Box>
            )}
            {status === 'error' && (
              <Typography sx={{ fontSize: '0.78rem', color: '#f87171', mt: 1 }}>
                Ingresa un email válido para suscribirte.
              </Typography>
            )}
          </Grid>
        </Grid>
        <Divider sx={{ borderColor: '#1e293b', my: 4 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
          <Typography sx={{ fontSize: '0.8rem' }}>© 2026 Altiora · Hecho en Colombia</Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            {FOOTER_LEGAL_LINKS.map((item) => (
              <Typography key={item} sx={{ fontSize: '0.8rem' }}>
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

import { Box, Typography, Button, Container, Grid, Card, CardContent, Avatar, Chip } from '@mui/material';
import { useParams, useNavigate, Link as RouterLink } from 'react-router-dom';
import { useEffect } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SYSTEMS } from '../data/content';
import { DEMO_IDS } from '../components/demo/DemoShell';
import { scrollToSection } from '../utils/scroll';
import { setPageMeta } from '../utils/meta';

export default function SystemDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const system = SYSTEMS.find((s) => s.id === id);
  const others = SYSTEMS.filter((s) => s.id !== id);

  useEffect(() => {
    if (system) {
      setPageMeta({
        title: `${system.title} | Altiora`,
        description: `${system.subtitle}. ${system.description}`,
      });
    }
  }, [system]);

  if (!system) {
    return (
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <Navbar />
        <Container maxWidth="md" sx={{ pt: 16, pb: 10, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
            Sistema no encontrado
          </Typography>
          <Button component={RouterLink} to="/" variant="contained" sx={{ mt: 2, textTransform: 'none' }}>
            Volver al inicio
          </Button>
        </Container>
        <Footer />
      </Box>
    );
  }

  const goContact = () => {
    navigate('/');
    setTimeout(() => scrollToSection('contacto'), 100);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fff' }}>
      <Navbar />

      {/* Header */}
      <Box sx={{ pt: 12, pb: 8, background: system.bgGradient, color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <Container maxWidth="lg">
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/')}
            sx={{ color: '#fff', textTransform: 'none', mb: 3, bgcolor: 'rgba(255,255,255,0.15)', '&:hover': { bgcolor: 'rgba(255,255,255,0.25)' } }}
          >
            Todos los sistemas
          </Button>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Box sx={{ mb: 2, filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.35))' }}>
                <system.Logo size={72} />
              </Box>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 1, fontSize: { xs: '2rem', md: '2.75rem' } }}>
                {system.title}
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.92, fontWeight: 400, mb: 2 }}>
                {system.subtitle}
              </Typography>
              <Typography sx={{ opacity: 0.85, lineHeight: 1.7, maxWidth: 560, mb: 4 }}>{system.description}</Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={goContact}
                  endIcon={<ArrowForwardIcon />}
                  sx={{ bgcolor: '#fff', color: system.color, textTransform: 'none', fontWeight: 700, '&:hover': { bgcolor: '#f8fafc' } }}
                >
                  Solicitar Demo
                </Button>
                {DEMO_IDS.includes(system.id) && (
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<PlayCircleIcon />}
                    onClick={() => navigate(`/demo/${system.id}`)}
                    sx={{ bgcolor: 'rgba(0,0,0,0.3)', textTransform: 'none', fontWeight: 700, border: '1px solid rgba(255,255,255,0.4)', '&:hover': { bgcolor: 'rgba(0,0,0,0.45)' } }}
                  >
                    Ver demo en vivo
                  </Button>
                )}
                <Button
                  variant="outlined"
                  size="large"
                  onClick={goContact}
                  sx={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff', textTransform: 'none', fontWeight: 600, '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.1)' } }}
                >
                  Hablar con ventas
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card sx={{ borderRadius: 3, p: 1 }}>
                <CardContent>
                  <Typography sx={{ fontWeight: 800, mb: 2 }}>Ideal para</Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                    {system.idealFor.map((item) => (
                      <Chip key={item} label={item} sx={{ bgcolor: system.bgLight, color: system.color, fontWeight: 600 }} />
                    ))}
                  </Box>
                  <Typography sx={{ fontWeight: 800, mb: 2 }}>Incluye</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    {system.features.map((f) => (
                      <Box key={f.text} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Avatar sx={{ bgcolor: system.bgLight, color: system.color, width: 36, height: 36 }}>{f.icon}</Avatar>
                        <Typography sx={{ fontWeight: 500, fontSize: '0.9rem' }}>{f.text}</Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Highlights */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, textAlign: 'center', mb: 1 }}>
          ¿Por qué te va a encantar?
        </Typography>
        <Typography sx={{ textAlign: 'center', color: '#64748b', mb: 5 }}>
          Funciones pensadas para tu día a día.
        </Typography>
        <Grid container spacing={3}>
          {system.highlights.map((h) => (
            <Grid item xs={12} md={4} key={h.title}>
              <Card elevation={0} sx={{ height: '100%', borderRadius: 3, border: '1px solid', borderColor: 'divider', p: 3 }}>
                <CheckCircleIcon sx={{ color: system.color, mb: 1 }} />
                <Typography sx={{ fontWeight: 700, mb: 1 }}>{h.title}</Typography>
                <Typography sx={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6 }}>{h.desc}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Otros sistemas */}
        <Typography variant="h5" sx={{ fontWeight: 800, mt: 8, mb: 3, textAlign: 'center' }}>
          Explora otros sistemas
        </Typography>
        <Grid container spacing={3}>
          {others.map((o) => (
            <Grid item xs={12} sm={6} md={4} key={o.id}>
              <Card
                elevation={0}
                onClick={() => navigate(`/sistemas/${o.id}`)}
                sx={{ borderRadius: 3, border: '1px solid', borderColor: 'divider', overflow: 'hidden', cursor: 'pointer', '&:hover': { borderColor: o.color, transform: 'translateY(-3px)', boxShadow: `0 12px 30px ${o.color}18` }, transition: 'all .25s' }}
              >
                <Box sx={{ p: 2.5, background: o.bgGradient, color: '#fff', display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <o.Logo size={36} />
                  <Typography sx={{ fontWeight: 700 }}>{o.title}</Typography>
                </Box>
                <CardContent>
                  <Typography sx={{ fontSize: '0.85rem', color: '#64748b' }}>{o.subtitle}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}

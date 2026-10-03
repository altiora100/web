import { Box, Typography, Button, Container, Grid, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CodeIcon from '@mui/icons-material/Code';
import { useNavigate } from 'react-router-dom';
import { scrollToSection } from '../utils/scroll';
import { SYSTEMS } from '../data/content';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <Box
      id="inicio"
      sx={{
        pt: 14,
        pb: 10,
        position: 'relative',
        overflow: 'hidden',
        bgcolor: '#050816',
        color: '#fff',
        backgroundImage:
          'linear-gradient(rgba(148,163,184,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.07) 1px, transparent 1px)',
        backgroundSize: '44px 44px',
      }}
    >
      {/* Glows */}
      <Box sx={{ position: 'absolute', top: -180, left: '10%', width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 65%)', filter: 'blur(10px)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', top: -120, right: '-5%', width: 560, height: 560, borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,70,229,0.32) 0%, transparent 65%)', filter: 'blur(10px)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: -220, left: '30%', width: 620, height: 420, borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 65%)', filter: 'blur(10px)', pointerEvents: 'none' }} />
      {/* Fade to next section */}
      <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, background: 'linear-gradient(180deg, transparent 0%, #050816 100%)', pointerEvents: 'none' }} />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Chip
              icon={<AutoAwesomeIcon sx={{ fontSize: 14 }} />}
              label="Software de gestión + desarrollo a medida"
              size="small"
              sx={{
                mb: 2.5,
                bgcolor: 'rgba(59,130,246,0.12)',
                color: '#bfdbfe',
                fontWeight: 600,
                fontSize: '0.75rem',
                border: '1px solid rgba(59,130,246,0.35)',
                backdropFilter: 'blur(8px)',
                '& .MuiChip-icon': { color: '#60a5fa' },
              }}
            />
            <Typography
              variant="h2"
              sx={{ fontWeight: 700, lineHeight: 1.05, mb: 2, fontSize: { xs: '2.4rem', md: '3.4rem' }, letterSpacing: '-0.03em' }}
            >
              El futuro de tu negocio{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(90deg, #60a5fa 0%, #818cf8 45%, #22d3ee 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                empieza con software
              </Box>
            </Typography>
            <Typography sx={{ color: '#94a3b8', mb: 4, lineHeight: 1.7, fontSize: '1.05rem', maxWidth: 520 }}>
              Sistemas listos para odontología, comercio, barberías y hoteles — y si necesitas algo único,{' '}
              <Box component="span" sx={{ color: '#e2e8f0', fontWeight: 600 }}>
                lo desarrollamos a tu medida
              </Box>
              .
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => scrollToSection('sistemas')}
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 4,
                  py: 1.6,
                  fontSize: '0.95rem',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%)',
                  boxShadow: '0 8px 32px rgba(59,130,246,0.45), inset 0 1px 0 rgba(255,255,255,0.25)',
                  '&:hover': { background: 'linear-gradient(135deg, #2563eb 0%, #4338ca 100%)', boxShadow: '0 12px 40px rgba(59,130,246,0.55)' },
                }}
              >
                Explorar Sistemas
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => scrollToSection('desarrollo-medida')}
                startIcon={<CodeIcon />}
                sx={{
                  px: 4,
                  py: 1.6,
                  fontSize: '0.95rem',
                  borderColor: 'rgba(148,163,184,0.35)',
                  color: '#e2e8f0',
                  bgcolor: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(8px)',
                  '&:hover': { borderColor: '#22d3ee', bgcolor: 'rgba(34,211,238,0.08)' },
                }}
              >
                Cotizar mi desarrollo
              </Button>
            </Box>
            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
              {[
                ['4', 'sistemas listos'],
                ['100%', 'en la nube'],
                ['24/7', 'soporte'],
              ].map(([v, l]) => (
                <Box key={l} sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                  <Typography sx={{ fontWeight: 800, fontSize: '1.3rem', color: '#fff' }}>{v}</Typography>
                  <Typography sx={{ fontSize: '0.8rem', color: '#64748b' }}>{l}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              {SYSTEMS.map((system, i) => (
                <Box
                  key={system.id}
                  onClick={() => navigate(`/sistemas/${system.id}`)}
                  className="hero-float"
                  sx={{
                    p: 2.5,
                    borderRadius: 3,
                    minHeight: 176,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    background: 'linear-gradient(160deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%), linear-gradient(160deg, #172a63 0%, #1e3a8a 60%, #1d4ed8 100%)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    color: '#fff',
                    boxShadow: '0 16px 48px rgba(30,58,138,0.55), inset 0 1px 0 rgba(255,255,255,0.25)',
                    cursor: 'pointer',
                    backdropFilter: 'blur(12px)',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                    animationDelay: `${i * 0.7}s`,
                    '&:hover': { transform: 'translateY(-6px) scale(1.02)', boxShadow: '0 24px 60px rgba(30,58,138,0.7)' },
                  }}
                >
                  <Box sx={{ mb: 1, filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))' }}>
                    <system.Logo size={40} />
                  </Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', lineHeight: 1.3 }}>{system.title}</Typography>
                  <Typography sx={{ fontSize: '0.75rem', opacity: 0.85, mt: 0.5 }}>{system.subtitle}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

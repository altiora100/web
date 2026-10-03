import { Box, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect } from 'react';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import { setPageMeta } from '../utils/meta';

export default function NotFound() {
  useEffect(() => {
    setPageMeta({
      title: 'Página no encontrada | Altiora',
      description: 'La página que buscas no existe. Vuelve al inicio y explora nuestros sistemas.',
    });
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#050816',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        backgroundImage:
          'linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)',
        backgroundSize: '44px 44px',
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <SearchOffIcon sx={{ fontSize: 64, color: '#3b82f6', mb: 2 }} />
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: '4rem',
            background: 'linear-gradient(90deg,#60a5fa,#818cf8,#22d3ee)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          404
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
          Esta ruta no existe
        </Typography>
        <Typography sx={{ color: '#94a3b8', mb: 4 }}>
          La página que buscas fue movida o nunca existió. Mejor explora nuestros sistemas.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            component={RouterLink}
            to="/"
            variant="contained"
            sx={{ textTransform: 'none', fontWeight: 700, background: 'linear-gradient(135deg,#3b82f6,#4f46e5)' }}
          >
            Volver al inicio
          </Button>
          <Button
            component={RouterLink}
            to="/demo/commercial"
            variant="outlined"
            sx={{ textTransform: 'none', fontWeight: 600, color: '#e2e8f0', borderColor: 'rgba(148,163,184,0.4)' }}
          >
            Ver una demo
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

import { Box, Typography, Button, Container } from '@mui/material';
import { scrollToSection } from '../utils/scroll';

export default function CallToAction() {
  return (
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
            onClick={() => scrollToSection('contacto')}
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
  );
}

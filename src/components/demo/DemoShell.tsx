import { Box, Typography, Button, Container, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import type { ReactNode } from 'react';

// Sistemas con demo disponible
export const DEMO_IDS = ['dental', 'commercial', 'barberia', 'hotel'];

export const DEMO_URLS: Record<string, string> = {
  dental: 'app.altiora.com/dent',
  commercial: 'app.altiora.com/negocio',
  barberia: 'app.altiora.com/barberia',
  hotel: 'app.altiora.com/hotel',
};

interface DemoShellProps {
  systemId: string;
  systemTitle: string;
  accent: string;
  url: string;
  children: ReactNode;
}

export default function DemoShell({ systemId, systemTitle, accent, url, children }: DemoShellProps) {
  const navigate = useNavigate();
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#050816', color: '#fff', py: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, flexWrap: 'wrap' }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(`/sistemas/${systemId}`)}
            sx={{ color: '#cbd5e1', textTransform: 'none', bgcolor: 'rgba(255,255,255,0.06)', '&:hover': { bgcolor: 'rgba(255,255,255,0.12)' } }}
          >
            Volver
          </Button>
          <Chip
            icon={<PlayCircleIcon sx={{ fontSize: 16 }} />}
            label="DEMO INTERACTIVA"
            sx={{ bgcolor: `${accent}22`, color: accent === '#16a34a' ? '#4ade80' : '#e2e8f0', border: `1px solid ${accent}66`, fontWeight: 800, fontSize: '0.7rem' }}
          />
          <Typography sx={{ color: '#94a3b8', fontSize: '0.85rem' }}>
            {systemTitle} · datos de ejemplo
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            variant="contained"
            onClick={() => {
              navigate('/');
              setTimeout(() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }), 150);
            }}
            sx={{ textTransform: 'none', background: 'linear-gradient(135deg,#3b82f6,#4f46e5)', boxShadow: '0 8px 28px rgba(59,130,246,0.4)' }}
          >
            Quiero este sistema
          </Button>
        </Box>

        {/* Ventana tipo navegador */}
        <Box
          sx={{
            borderRadius: 3,
            overflow: 'hidden',
            border: '1px solid rgba(148,163,184,0.25)',
            boxShadow: `0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04), 0 0 60px ${accent}22`,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 2, py: 1.2, bgcolor: '#0b1026', borderBottom: '1px solid rgba(148,163,184,0.15)' }}>
            <Box sx={{ display: 'flex', gap: 0.7 }}>
              {['#f87171', '#fbbf24', '#34d399'].map((c) => (
                <Box key={c} sx={{ width: 11, height: 11, borderRadius: '50%', bgcolor: c }} />
              ))}
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                mx: 2,
                px: 2,
                py: 0.5,
                borderRadius: 1.5,
                bgcolor: 'rgba(255,255,255,0.06)',
                color: '#94a3b8',
                fontSize: '0.78rem',
                textAlign: 'center',
                border: '1px solid rgba(148,163,184,0.15)',
              }}
            >
              🔒 {url}
            </Box>
            <Box sx={{ width: 52 }} />
          </Box>
          <Box>{children}</Box>
        </Box>

        <Typography sx={{ textAlign: 'center', color: '#64748b', fontSize: '0.8rem', mt: 3 }}>
          Vista previa recreada del sistema real · Funcionalidad completa disponible en la versión contratada
        </Typography>
      </Container>
    </Box>
  );
}

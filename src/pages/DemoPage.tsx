import { Box, Typography, Button, Container } from '@mui/material';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { useEffect } from 'react';
import DemoShell, { DEMO_URLS } from '../components/demo/DemoShell';
import DentalDemo from '../components/demo/DentalDemo';
import CommercialDemo from '../components/demo/CommercialDemo';
import BarberDemo from '../components/demo/BarberDemo';
import HotelDemo from '../components/demo/HotelDemo';
import { SYSTEMS } from '../data/content';
import { setPageMeta } from '../utils/meta';

const DEMOS: Record<string, { component: () => JSX.Element; accent: string }> = {
  dental: { component: DentalDemo, accent: '#2563eb' },
  commercial: { component: CommercialDemo, accent: '#3b82f6' },
  barberia: { component: BarberDemo, accent: '#b45309' },
  hotel: { component: HotelDemo, accent: '#047857' },
};

export default function DemoPage() {
  const { id } = useParams<{ id: string }>();
  const entry = id ? DEMOS[id] : undefined;
  const system = SYSTEMS.find((s) => s.id === id);

  useEffect(() => {
    if (system) {
      setPageMeta({
        title: `Demo ${system.title} | Altiora`,
        description: `Prueba la vista principal de ${system.title}: ${system.subtitle}. Datos de ejemplo.`,
      });
    }
  }, [system]);

  if (!entry || !system) {
    return (
      <Box sx={{ minHeight: '100vh', bgcolor: '#050816', color: '#fff', display: 'flex', alignItems: 'center' }}>
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
            Demo no disponible
          </Typography>
          <Typography sx={{ color: '#94a3b8', mb: 3 }}>
            Este sistema aún no tiene demo interactiva. Contáctanos y te mostramos una demostración personalizada.
          </Typography>
          <Button component={RouterLink} to="/" variant="contained" sx={{ textTransform: 'none' }}>
            Volver al inicio
          </Button>
        </Container>
      </Box>
    );
  }

  const Demo = entry.component;
  return (
    <DemoShell systemId={system.id} systemTitle={system.title} accent={entry.accent} url={DEMO_URLS[system.id]}>
      <Demo />
    </DemoShell>
  );
}

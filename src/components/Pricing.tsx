import { useState } from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent, Chip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SectionChip from './SectionChip';
import { PRICING, SYSTEMS } from '../data/content';
import { waLink } from '../constants';

const GUARANTEES = ['7 días de prueba gratis', 'Sin permanencia', 'Cancela cuando quieras'];

export default function Pricing() {
  const pricedSystems = SYSTEMS.filter((s) => PRICING[s.id]);
  const [tab, setTab] = useState(pricedSystems[0]?.id ?? '');
  const system = SYSTEMS.find((s) => s.id === tab);
  const plans = PRICING[tab] ?? [];
  const others = SYSTEMS.filter((s) => !PRICING[s.id]);

  return (
    <Box id="precios" sx={{ py: 10, bgcolor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <SectionChip label="Precios" />
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a', mb: 1.5 }}>
            Un plan para cada etapa
          </Typography>
          <Typography sx={{ color: '#64748b', maxWidth: 600, mx: 'auto' }}>
            Precios mensuales en COP, sin permanencia. Todos incluyen actualizaciones automáticas.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap', mb: 5 }}>
          {GUARANTEES.map((g) => (
            <Chip
              key={g}
              icon={<CheckCircleIcon sx={{ fontSize: 16 }} />}
              label={g}
              size="small"
              sx={{ bgcolor: '#ecfdf5', color: '#059669', fontWeight: 600, border: '1px solid #a7f3d0' }}
            />
          ))}
        </Box>

        {/* Selector de sistema */}
        <Box sx={{ display: 'flex', gap: 1.5, justifyContent: 'center', flexWrap: 'wrap', mb: 5 }}>
          {pricedSystems.map((s) => (
            <Button
              key={s.id}
              onClick={() => setTab(s.id)}
              startIcon={<s.Logo size={22} />}
              sx={{
                borderRadius: 999,
                textTransform: 'none',
                fontWeight: 700,
                px: 3,
                py: 1,
                border: '1px solid',
                borderColor: tab === s.id ? s.color : '#e2e8f0',
                bgcolor: tab === s.id ? s.bgLight : '#fff',
                color: tab === s.id ? s.color : '#64748b',
                '&:hover': { borderColor: s.color, bgcolor: s.bgLight },
              }}
            >
              {s.title}
            </Button>
          ))}
        </Box>

        <Grid container spacing={3} alignItems="stretch" key={tab}>
          {plans.map((plan) => (
            <Grid item xs={12} md={4} key={plan.name}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  border: '2px solid',
                  borderColor: plan.highlighted ? plan.color : 'divider',
                  position: 'relative',
                  overflow: 'visible',
                  boxShadow: plan.highlighted ? `0 20px 50px ${plan.color}22` : 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': { transform: 'translateY(-4px)' },
                }}
              >
                {plan.highlighted && (
                  <Chip
                    label="El favorito"
                    sx={{
                      position: 'absolute',
                      top: -14,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      bgcolor: plan.color,
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '0.72rem',
                    }}
                  />
                )}
                <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Typography sx={{ fontWeight: 800, fontSize: '1.05rem', color: plan.color }}>{plan.name}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5, my: 1 }}>
                    <Typography sx={{ fontWeight: 800, fontSize: '2rem', color: '#0f172a' }}>{plan.price}</Typography>
                    <Typography sx={{ color: '#64748b', fontSize: '0.85rem' }}>{plan.period} COP</Typography>
                  </Box>
                  <Typography sx={{ fontSize: '0.85rem', color: '#64748b', mb: 3 }}>{plan.description}</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2, mb: 4, flexGrow: 1 }}>
                    {plan.features.map((f) => (
                      <Box key={f} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                        <CheckCircleIcon sx={{ fontSize: 18, color: plan.color, mt: 0.1 }} />
                        <Typography sx={{ fontSize: '0.85rem', color: '#334155' }}>{f}</Typography>
                      </Box>
                    ))}
                  </Box>
                  <Button
                    variant={plan.highlighted ? 'contained' : 'outlined'}
                    fullWidth
                    href={waLink(`Hola Altiora, me interesa el plan ${plan.name} (${plan.price}/mes) de ${system?.title ?? ''}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      borderRadius: 2,
                      textTransform: 'none',
                      fontWeight: 700,
                      py: 1.3,
                      ...(plan.highlighted
                        ? { bgcolor: plan.color, '&:hover': { bgcolor: plan.color, filter: 'brightness(0.92)' } }
                        : { borderColor: plan.color, color: plan.color }),
                    }}
                  >
                    Solicitar cotización
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {system && (
          <Typography sx={{ textAlign: 'center', color: '#64748b', fontSize: '0.85rem', mt: 4 }}>
            Precios de <strong>{system.title}</strong>. ¿Buscas {others.map((o) => o.title).join(' o ')}? Son planes personalizados:{' '}
            <Box component="a" href={waLink('Hola Altiora, quiero una cotización para Barbería u Hoteles.')} target="_blank" rel="noopener noreferrer" sx={{ color: '#4f46e5', fontWeight: 700, cursor: 'pointer' }}>
              pide tu cotización aquí
            </Box>
            .
          </Typography>
        )}
      </Container>
    </Box>
  );
}

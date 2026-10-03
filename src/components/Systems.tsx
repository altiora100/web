import { Box, Typography, Button, Container, Grid, Card, CardContent, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SectionChip from './SectionChip';
import { SYSTEMS } from '../data/content';
import { DEMO_IDS } from './demo/DemoShell';

export default function Systems() {
  const navigate = useNavigate();
  return (
    <Box id="sistemas" sx={{ py: 10, bgcolor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <SectionChip label="Nuestros Sistemas" />
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a', mb: 1.5 }}>
            Soluciones diseñadas para ti
          </Typography>
          <Typography sx={{ color: '#64748b', maxWidth: 600, mx: 'auto' }}>
            {SYSTEMS.length} sistemas especializados que se adaptan a las necesidades de tu industria.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {SYSTEMS.map((system) => (
            <Grid item xs={12} sm={6} md={6} key={system.id}>
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
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      bgcolor: 'rgba(255,255,255,0.16)',
                      border: '2px solid rgba(255,255,255,0.45)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
                      flexShrink: 0,
                    }}
                  >
                    <system.Logo size={44} />
                  </Box>
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
                  <Box sx={{ display: 'flex', gap: 1.5, mt: 3 }}>
                    <Button
                      variant="outlined"
                      fullWidth
                      onClick={() => navigate(`/sistemas/${system.id}`)}
                      sx={{
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
                    {DEMO_IDS.includes(system.id) && (
                      <Button
                        variant="contained"
                        fullWidth
                        startIcon={<PlayCircleIcon />}
                        onClick={() => navigate(`/demo/${system.id}`)}
                        sx={{
                          borderRadius: 2,
                          textTransform: 'none',
                          fontWeight: 600,
                          background: system.bgGradient,
                          boxShadow: `0 4px 14px ${system.color}44`,
                        }}
                      >
                        Ver demo
                      </Button>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

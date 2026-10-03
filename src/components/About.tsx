import { Box, Typography, Container, Grid, Avatar } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SectionChip from './SectionChip';
import { ABOUT_TILES, ABOUT_VALUES } from '../data/content';

export default function About() {
  return (
    <Box id="quienes-somos" sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <SectionChip label="Quiénes Somos" />
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a', mb: 2 }}>
              Tecnología que transforma negocios
            </Typography>
            <Typography sx={{ color: '#64748b', mb: 3, lineHeight: 1.7 }}>
              En <strong>Altiora</strong> creemos que la tecnología debe ser una herramienta al servicio de las personas. Somos un equipo de desarrolladores y especialistas comprometidos en crear soluciones de software que simplifican la gestión empresarial.
            </Typography>
            <Typography sx={{ color: '#64748b', mb: 4, lineHeight: 1.7 }}>
              Nuestros sistemas están diseñados pensando en la experiencia del usuario: intuitivos, potentes y escalables. Desde clínicas odontológicas y comercios hasta barberías y hoteles, ayudamos a nuestros clientes a tomar mejores decisiones basadas en datos.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {ABOUT_VALUES.map((item) => (
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
                {ABOUT_TILES.map((item) => (
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
  );
}

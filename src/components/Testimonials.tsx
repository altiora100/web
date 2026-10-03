import { Box, Typography, Container, Grid, Card, CardContent, Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SectionChip from './SectionChip';
import { TESTIMONIALS } from '../data/content';

export default function Testimonials() {
  return (
    <Box id="testimonios" sx={{ py: 10, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <SectionChip label="Testimonios" />
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a', mb: 1.5 }}>
            Negocios que ya despegaron
          </Typography>
          <Typography sx={{ color: '#64748b', maxWidth: 600, mx: 'auto' }}>
            Lo que dicen quienes usan Altiora todos los días.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {TESTIMONIALS.map((t) => (
            <Grid item xs={12} md={4} key={t.name}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: `0 16px 36px ${t.color}18`, borderColor: t.color },
                }}
              >
                <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <FormatQuoteIcon sx={{ color: `${t.color}44`, fontSize: 36, mb: 1 }} />
                  <Box sx={{ display: 'flex', gap: 0.5, mb: 1.5 }}>
                    {[0, 1, 2, 3, 4].map((s) => (
                      <StarIcon key={s} sx={{ fontSize: 16, color: '#f59e0b' }} />
                    ))}
                  </Box>
                  <Typography sx={{ color: '#334155', lineHeight: 1.7, fontSize: '0.9rem', mb: 3, flexGrow: 1 }}>
                    "{t.quote}"
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Avatar sx={{ bgcolor: t.color, width: 44, height: 44, fontWeight: 700 }}>{t.initials}</Avatar>
                    <Box>
                      <Typography sx={{ fontWeight: 700, fontSize: '0.88rem' }}>{t.name}</Typography>
                      <Typography sx={{ fontSize: '0.78rem', color: '#64748b' }}>{t.business}</Typography>
                      <Typography sx={{ fontSize: '0.72rem', color: t.color, fontWeight: 600 }}>{t.system}</Typography>
                    </Box>
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

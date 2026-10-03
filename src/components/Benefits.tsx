import { Box, Typography, Container, Grid, Card, Avatar } from '@mui/material';
import SectionChip from './SectionChip';
import { BENEFITS } from '../data/content';

export default function Benefits() {
  return (
    <Box id="beneficios" sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <SectionChip label="Beneficios" />
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a', mb: 1.5 }}>
            ¿Por qué elegir Altiora?
          </Typography>
          <Typography sx={{ color: '#64748b', maxWidth: 600, mx: 'auto' }}>
            Ofrecemos más que software. Brindamos una experiencia completa de gestión.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {BENEFITS.map((benefit) => (
            <Grid item xs={12} sm={6} md={3} key={benefit.title}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  textAlign: 'center',
                  p: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 12px 30px ${benefit.color}12`,
                    borderColor: benefit.color,
                  },
                }}
              >
                <Avatar sx={{ bgcolor: `${benefit.color}12`, color: benefit.color, width: 56, height: 56, mx: 'auto', mb: 2 }}>
                  {benefit.icon}
                </Avatar>
                <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', mb: 1 }}>{benefit.title}</Typography>
                <Typography sx={{ fontSize: '0.83rem', color: '#64748b', lineHeight: 1.6 }}>
                  {benefit.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

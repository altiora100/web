import { Box, Typography, Button, Container, Grid, IconButton, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FOOTER_COMPANY_LINKS, FOOTER_LEGAL_LINKS, FOOTER_PRODUCT_LINKS } from '../data/content';

const linkSx = { fontSize: '0.83rem', cursor: 'pointer', '&:hover': { color: '#3b82f6' } } as const;

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#0f172a', color: '#94a3b8', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Box component="img" src="/logo.svg" alt="Altiora" sx={{ width: 32, height: 32, borderRadius: 1.5 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', fontFamily: '"Space Grotesk", sans-serif' }}>
                Altiora
              </Typography>
            </Box>
            <Typography sx={{ fontSize: '0.85rem', mb: 2, lineHeight: 1.7 }}>
              Soluciones tecnológicas que impulsan el crecimiento de tu negocio.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {[FacebookIcon, LinkedInIcon, InstagramIcon].map((Icon, i) => (
                <IconButton key={i} sx={{ color: '#64748b', '&:hover': { color: '#3b82f6' } }}>
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Box>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography sx={{ fontWeight: 700, fontSize: '0.85rem', color: '#fff', mb: 2 }}>Producto</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {FOOTER_PRODUCT_LINKS.map((item) => (
                <Typography key={item} sx={linkSx}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography sx={{ fontWeight: 700, fontSize: '0.85rem', color: '#fff', mb: 2 }}>Empresa</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {FOOTER_COMPANY_LINKS.map((item) => (
                <Typography key={item} sx={linkSx}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontWeight: 700, fontSize: '0.85rem', color: '#fff', mb: 2 }}>
              Suscríbete a nuestro newsletter
            </Typography>
            <Typography sx={{ fontSize: '0.83rem', mb: 2 }}>Recibe las últimas novedades y actualizaciones.</Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Box
                component="input"
                placeholder="tu@email.com"
                sx={{
                  flex: 1,
                  p: 1.5,
                  borderRadius: 1.5,
                  border: '1px solid #334155',
                  bgcolor: '#1e293b',
                  color: '#fff',
                  fontSize: '0.85rem',
                  outline: 'none',
                  '&:focus': { borderColor: '#3b82f6' },
                }}
              />
              <Button
                variant="contained"
                sx={{ borderRadius: 1.5, textTransform: 'none', fontWeight: 600, bgcolor: '#3b82f6', '&:hover': { bgcolor: '#2563eb' } }}
              >
                Suscribir
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ borderColor: '#1e293b', my: 4 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
          <Typography sx={{ fontSize: '0.8rem' }}>© 2024 Altiora. Todos los derechos reservados.</Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            {FOOTER_LEGAL_LINKS.map((item) => (
              <Typography key={item} sx={{ fontSize: '0.8rem', cursor: 'pointer', '&:hover': { color: '#3b82f6' } }}>
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

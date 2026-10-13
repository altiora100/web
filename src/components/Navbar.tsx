import { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  IconButton,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NAV_ITEMS } from '../data/content';
import { scrollToSection } from '../utils/scroll';
import { useNavigate, useLocation } from 'react-router-dom';
import { APP_URL } from '../constants';

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Sobre el hero oscuro va transparente con texto claro; al hacer scroll, fondo blanco.
  const overDark = !scrolled;
  const linkColor = overDark ? 'rgba(255,255,255,0.82)' : '#475569';
  const logoColor = overDark ? '#ffffff' : '#0f172a';
  const navBg = overDark ? 'rgba(5,8,22,0.55)' : 'rgba(255,255,255,0.94)';
  const borderColor = overDark ? 'rgba(255,255,255,0.14)' : theme.palette.divider;

  const handleNavigate = (id: string) => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(id), 150);
    } else {
      scrollToSection(id);
    }
  };

  const goHome = () => {
    if (location.pathname !== '/') navigate('/');
    else scrollToSection('inicio');
  };

  const drawer = (
    <Box sx={{ width: 280, pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, mb: 2 }}>
        <Typography variant="h6" fontWeight={700} color="primary">
          Altiora
        </Typography>
        <IconButton onClick={() => setMobileOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {NAV_ITEMS.map((item) => (
          <ListItem key={item.id} onClick={() => handleNavigate(item.id)} sx={{ cursor: 'pointer' }}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
      <Box sx={{ px: 2, mt: 2 }}>
        <Button
          variant="contained"
          fullWidth
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 600 }}
        >
          Iniciar Sesión
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <Box
        component="nav"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          bgcolor: navBg,
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid',
          borderColor,
          transition: 'background-color 0.25s ease, border-color 0.25s ease',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }} onClick={goHome}>
              <Box
                component="img"
                src="/logo.svg"
                alt="Altiora"
                sx={{ width: 32, height: 32, borderRadius: 2, boxShadow: '0 4px 14px rgba(59,130,246,0.35)' }}
              />
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{ color: logoColor, fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '-0.02em' }}
              >
                Altiora
              </Typography>
            </Box>

            {!isMobile ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {NAV_ITEMS.map((item) => (
                  <Typography
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    sx={{
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: linkColor,
                      '&:hover': { color: overDark ? '#ffffff' : '#1e3a8a' },
                      transition: 'color 0.2s',
                    }}
                  >
                    {item.label}
                  </Typography>
                ))}
                <Button
                  variant={overDark ? 'outlined' : 'contained'}
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 600,
                    px: 3,
                    ...(overDark
                      ? {
                          borderColor: 'rgba(255,255,255,0.4)',
                          color: '#fff',
                          '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.1)' },
                        }
                      : {}),
                  }}
                >
                  Iniciar Sesión
                </Button>
              </Box>
            ) : (
              <IconButton onClick={() => setMobileOpen(true)} sx={{ color: overDark ? '#fff' : 'inherit' }}>
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Container>
      </Box>

      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        {drawer}
      </Drawer>
    </>
  );
}

import { useState } from 'react';
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

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
        <Button variant="contained" fullWidth sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 600 }}>
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
          bgcolor: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }} onClick={goHome}>
              <Box
                component="img"
                src="/logo.svg"
                alt="Altiora"
                sx={{ width: 36, height: 36, borderRadius: 2, boxShadow: '0 4px 14px rgba(59,130,246,0.35)' }}
              />
              <Typography variant="h6" fontWeight={700} sx={{ color: '#0f172a', fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '-0.02em' }}>
                Altiora
              </Typography>
              <Box
                sx={{
                  ml: 0.5,
                  px: 1,
                  py: 0.2,
                  borderRadius: 1,
                  fontSize: '0.6rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  color: '#4f46e5',
                  bgcolor: '#eef2ff',
                  border: '1px solid #e0e7ff',
                }}
              >
                FUTURE
              </Box>
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
                      color: '#475569',
                      '&:hover': { color: '#1e3a8a' },
                      transition: 'color 0.2s',
                    }}
                  >
                    {item.label}
                  </Typography>
                ))}
                <Button variant="contained" sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 600, px: 3 }}>
                  Iniciar Sesión
                </Button>
              </Box>
            ) : (
              <IconButton onClick={() => setMobileOpen(true)}>
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

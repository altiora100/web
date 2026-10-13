import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { waLink } from '../constants';

export default function MobileCta() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  if (!isMobile) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1300,
        px: 2,
        py: 1.5,
        bgcolor: 'rgba(5,8,22,0.94)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(148,163,184,0.18)',
      }}
    >
      <Button
        fullWidth
        variant="contained"
        startIcon={<WhatsAppIcon />}
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          textTransform: 'none',
          fontWeight: 700,
          py: 1.2,
          bgcolor: '#22c55e',
          boxShadow: '0 6px 20px rgba(34,197,94,0.4)',
          '&:hover': { bgcolor: '#16a34a' },
        }}
      >
        Escríbenos por WhatsApp
      </Button>
    </Box>
  );
}

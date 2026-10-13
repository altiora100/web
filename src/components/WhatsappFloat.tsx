import { Box, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { waLink, WA_DEFAULT_TEXT } from '../constants';

// En móvil queda oculto: su lugar lo ocupa la barra fija de CTA (MobileCta).
export default function WhatsappFloat() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  if (isMobile) return null;

  return (
    <Tooltip title="Escríbenos por WhatsApp" placement="left">
      <Box
        component="a"
        href={waLink(WA_DEFAULT_TEXT)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1200,
          width: 56,
          height: 56,
          borderRadius: '50%',
          bgcolor: '#22c55e',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 30px rgba(34,197,94,0.45)',
          transition: 'transform 0.2s ease',
          '&:hover': { transform: 'scale(1.08)', bgcolor: '#16a34a' },
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 30 }} />
      </Box>
    </Tooltip>
  );
}

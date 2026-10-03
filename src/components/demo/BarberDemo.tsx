import { Box, Typography, Avatar } from '@mui/material';
import UsersIcon from '@mui/icons-material/People';
import ScissorsIcon from '@mui/icons-material/ContentCut';
import CalendarIcon from '@mui/icons-material/CalendarMonth';
import MoneyIcon from '@mui/icons-material/AttachMoney';

const CARDS = [
  { label: 'Clientes', value: 132, icon: <UsersIcon sx={{ fontSize: 20 }} /> },
  { label: 'Barberos', value: 5, icon: <ScissorsIcon sx={{ fontSize: 20 }} /> },
  { label: 'Citas hoy', value: 9, icon: <CalendarIcon sx={{ fontSize: 20 }} /> },
  { label: 'Ingresos del mes', value: '$1.850.000', icon: <MoneyIcon sx={{ fontSize: 20 }} /> },
];

const CITAS = [
  { hora: '09:00', cliente: 'Felipe Mora', barbero: 'Diego', servicio: 'Corte clásico', precio: '$25.000', estado: 'Confirmada', bg: '#dcfce7', color: '#15803d' },
  { hora: '10:00', cliente: 'Andrés Páez', barbero: 'Camilo', servicio: 'Barba + corte', precio: '$38.000', estado: 'En curso', color: '#fff', bg: '#7c3aed' },
  { hora: '11:30', cliente: 'Santiago Gil', barbero: 'Diego', servicio: 'Degradado', precio: '$28.000', estado: 'Pendiente', bg: '#fef3c7', color: '#92400e' },
  { hora: '14:00', cliente: 'Laura (acompañante)', barbero: 'Valentina', servicio: 'Diseño + color', precio: '$60.000', estado: 'Confirmada', bg: '#dcfce7', color: '#15803d' },
];

export default function BarberDemo() {
  return (
    <Box sx={{ display: 'flex', minHeight: 560, bgcolor: '#fafafa', color: '#09090b' }}>
      {/* Sidebar claro estilo shadcn como el sistema real */}
      <Box sx={{ width: 210, flexShrink: 0, bgcolor: '#fff', borderRight: '1px solid #e4e4e7', p: 2, display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', gap: 0.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, px: 0.5, py: 1, mb: 1 }}>
          <Box sx={{ width: 32, height: 32, borderRadius: 2, bgcolor: '#18181b', color: '#fafafa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ScissorsIcon sx={{ fontSize: 16 }} />
          </Box>
          <Box sx={{ lineHeight: 1.2 }}>
            <Typography sx={{ fontSize: '0.85rem', fontWeight: 600 }}>Barbería Demo</Typography>
            <Typography sx={{ fontSize: '0.65rem', color: '#71717a' }}>Reservas y barberos</Typography>
          </Box>
        </Box>
        {['Panel', 'Citas', 'Servicios', 'Barberos', 'Ingresos'].map((item, i) => (
          <Box
            key={item}
            sx={{
              px: 1.5,
              py: 1,
              borderRadius: 1.5,
              fontSize: '0.82rem',
              fontWeight: i === 0 ? 600 : 400,
              bgcolor: i === 0 ? '#f4f4f5' : 'transparent',
            }}
          >
            {item}
          </Box>
        ))}
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 0.5 }}>
          <Avatar sx={{ width: 30, height: 30, borderRadius: 2, bgcolor: '#18181b', fontSize: 12 }}>AD</Avatar>
          <Box>
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 600 }}>Admin Demo</Typography>
            <Typography sx={{ fontSize: '0.65rem', color: '#71717a' }}>rol: admin</Typography>
          </Box>
        </Box>
      </Box>

      {/* Contenido */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography sx={{ fontSize: '1.2rem', fontWeight: 700 }}>Dashboard</Typography>
        <Typography sx={{ fontSize: '0.8rem', color: '#71717a', mb: 2 }}>Resumen general de la barbería</Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4,1fr)' }, gap: 1.5, mb: 2 }}>
          {CARDS.map((c) => (
            <Box key={c.label} sx={{ bgcolor: '#fff', border: '1px solid #e4e4e7', borderRadius: 2, p: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1, color: '#71717a' }}>
                <Typography sx={{ fontSize: '0.72rem' }}>{c.label}</Typography>
                {c.icon}
              </Box>
              <Typography sx={{ fontSize: '1.35rem', fontWeight: 800 }}>{c.value}</Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ bgcolor: '#fff', border: '1px solid #e4e4e7', borderRadius: 2, p: 2.5 }}>
          <Typography sx={{ fontWeight: 600, fontSize: '0.95rem', mb: 1.5 }}>Citas de hoy</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {CITAS.map((c) => (
              <Box key={c.hora} sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 1.5, borderBottom: '1px solid #f4f4f5' }}>
                <Typography sx={{ minWidth: 52, textAlign: 'center', fontWeight: 800, fontSize: '0.85rem' }}>{c.hora}</Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography sx={{ fontSize: '0.83rem', fontWeight: 500 }}>{c.cliente} → {c.barbero}</Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: '#71717a' }}>{c.servicio} — {c.precio}</Typography>
                </Box>
                <Box sx={{ px: 1.5, py: 0.5, borderRadius: 999, bgcolor: c.bg, color: c.color, fontSize: '0.7rem', fontWeight: 600 }}>
                  {c.estado}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

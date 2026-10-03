import { Box, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Chip } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';
import ReceiptIcon from '@mui/icons-material/Receipt';
import EventIcon from '@mui/icons-material/Event';
import { DentalLogo } from '../logos';

const STATS = [
  { label: 'Citas hoy', value: 6, bg: '#eef2ff', color: '#4f46e5', icon: <CalendarMonthIcon sx={{ fontSize: 22 }} /> },
  { label: 'Pacientes en total', value: 248, bg: '#ecfdf5', color: '#059669', icon: <PeopleIcon sx={{ fontSize: 22 }} /> },
  { label: 'Facturas pendientes', value: 3, bg: '#fffbeb', color: '#d97706', icon: <ReceiptIcon sx={{ fontSize: 22 }} /> },
];

const CITAS = [
  { hora: '09:00', paciente: 'María González', motivo: 'Limpieza dental', estado: 'Confirmada', color: 'success' },
  { hora: '10:30', paciente: 'Jean Córdoba', motivo: 'Ortodoncia - control', estado: 'En curso', color: 'info' },
  { hora: '12:00', paciente: 'Ana Torres', motivo: 'Endodoncia pieza 36', estado: 'Pendiente', color: 'warning' },
  { hora: '15:00', paciente: 'Carlos Ruiz', motivo: 'Extracción cordal', estado: 'Confirmada', color: 'success' },
] as const;

const PACIENTES = [
  { nombre: 'María González', tel: '300 123 4567' },
  { nombre: 'Jean Córdoba', tel: '310 987 6543' },
  { nombre: 'Ana Torres', tel: '320 456 7890' },
  { nombre: 'Carlos Ruiz', tel: '315 234 5678' },
];

const initials = (n: string) => n.split(' ').map((w) => w[0]).slice(0, 2).join('');

export default function DentalDemo() {
  return (
    <Box sx={{ display: 'flex', minHeight: 560, bgcolor: '#f4f6f9', color: '#0f172a' }}>
      {/* Sidebar como el sistema real */}
      <Box sx={{ width: 210, flexShrink: 0, bgcolor: '#fff', borderRight: '1px solid #e2e8f0', p: 2, display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', gap: 0.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, px: 1, py: 1, mb: 1 }}>
          <DentalLogo size={30} variant="color" />
          <Box sx={{ lineHeight: 1.2 }}>
            <Typography sx={{ fontSize: '0.95rem', fontWeight: 600, color: '#1e3a8a' }}>Altiora</Typography>
            <Typography sx={{ fontSize: '0.62rem', color: '#64748b' }}>Gestión Clínica</Typography>
          </Box>
        </Box>
        {['Panel', 'Citas', 'Pacientes', 'Odontograma', 'Facturación', 'Reportes'].map((item, i) => (
          <Box
            key={item}
            sx={{
              px: 2,
              py: 1,
              borderRadius: 2,
              fontSize: '0.82rem',
              fontWeight: i === 0 ? 600 : 400,
              bgcolor: i === 0 ? '#1e3a8a' : 'transparent',
              color: i === 0 ? '#fff' : '#0f172a',
              boxShadow: i === 0 ? '0 2px 10px rgba(30,58,138,0.25)' : 'none',
            }}
          >
            {item}
          </Box>
        ))}
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1 }}>
          <Avatar sx={{ width: 30, height: 30, borderRadius: 2, bgcolor: '#2563eb', fontSize: 12, fontWeight: 600 }}>DC</Avatar>
          <Box>
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 500 }}>Dra. Carolina</Typography>
            <Typography sx={{ fontSize: '0.65rem', color: '#64748b' }}>doctor@clinica.com</Typography>
          </Box>
        </Box>
      </Box>

      {/* Contenido */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography sx={{ fontSize: '1.2rem', fontWeight: 700 }}>Clínica Dental Demo</Typography>
        <Typography sx={{ fontSize: '0.8rem', color: '#64748b', mb: 2 }}>Resumen de hoy · NIT 1032123456</Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3,1fr)' }, gap: 1.5, mb: 2 }}>
          {STATS.map((s) => (
            <Box key={s.label} sx={{ bgcolor: '#fff', borderRadius: 2, p: 2, display: 'flex', alignItems: 'center', gap: 1.5, border: '1px solid #eef2f6' }}>
              <Avatar sx={{ bgcolor: s.bg, color: s.color, width: 42, height: 42 }}>{s.icon}</Avatar>
              <Box>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 800 }}>{s.value}</Typography>
                <Typography sx={{ fontSize: '0.72rem', color: '#64748b' }}>{s.label}</Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 1.5 }}>
          <Box sx={{ bgcolor: '#fff', borderRadius: 2, p: 2, border: '1px solid #eef2f6' }}>
            <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', mb: 1 }}>Citas de hoy</Typography>
            <List dense disablePadding>
              {CITAS.map((c) => (
                <ListItem key={c.hora} divider sx={{ px: 0 }}>
                  <ListItemText
                    primary={<Typography sx={{ fontSize: '0.8rem', fontWeight: 500 }}>{c.hora} — {c.paciente}</Typography>}
                    secondary={<Typography sx={{ fontSize: '0.72rem' }}>{c.motivo}</Typography>}
                  />
                  <Chip size="small" label={c.estado} color={c.color as 'success'} sx={{ fontSize: 10, height: 22 }} />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={{ bgcolor: '#fff', borderRadius: 2, p: 2, border: '1px solid #eef2f6' }}>
            <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', mb: 1 }}>Pacientes recientes</Typography>
            <List dense disablePadding>
              {PACIENTES.map((p) => (
                <ListItem key={p.nombre} divider sx={{ px: 0 }}>
                  <ListItemAvatar>
                    <Avatar sx={{ width: 34, height: 34, borderRadius: 2, bgcolor: '#eff6ff', color: '#2563eb', fontSize: 13, fontWeight: 600 }}>
                      {initials(p.nombre)}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Typography sx={{ fontSize: '0.8rem', fontWeight: 500 }}>{p.nombre}</Typography>}
                    secondary={<Typography sx={{ fontSize: '0.72rem' }}>{p.tel}</Typography>}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2, color: '#94a3b8' }}>
          <EventIcon sx={{ fontSize: 14 }} />
          <Typography sx={{ fontSize: '0.72rem' }}>Odontograma digital · recordatorios por WhatsApp · presupuestos y abonos</Typography>
        </Box>
      </Box>
    </Box>
  );
}

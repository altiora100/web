import { Box, Typography, Avatar } from '@mui/material';
import BedIcon from '@mui/icons-material/KingBed';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MoneyIcon from '@mui/icons-material/AttachMoney';
import { HotelLogo } from '../logos';

type RoomState = 'libre' | 'ocupada' | 'limpieza' | 'reservada';

const ROOMS: { n: string; estado: RoomState; huesped?: string }[] = [
  { n: '101', estado: 'ocupada', huesped: 'Familia Rojas' },
  { n: '102', estado: 'libre' },
  { n: '103', estado: 'ocupada', huesped: 'J. Córdoba' },
  { n: '104', estado: 'limpieza' },
  { n: '105', estado: 'reservada', huesped: 'M. Torres' },
  { n: '106', estado: 'ocupada', huesped: 'Pareja Gil' },
  { n: '107', estado: 'libre' },
  { n: '108', estado: 'reservada', huesped: 'A. Páez' },
  { n: '109', estado: 'ocupada', huesped: 'S. Mora' },
  { n: '110', estado: 'limpieza' },
  { n: '201', estado: 'libre' },
  { n: '202', estado: 'ocupada', huesped: 'L. Méndez' },
];

const STATE_STYLE: Record<RoomState, { bg: string; color: string; label: string }> = {
  libre: { bg: '#ecfdf5', color: '#047857', label: 'Libre' },
  ocupada: { bg: '#eff6ff', color: '#2563eb', label: 'Ocupada' },
  limpieza: { bg: '#fffbeb', color: '#b45309', label: 'Limpieza' },
  reservada: { bg: '#f5f3ff', color: '#7c3aed', label: 'Reservada' },
};

const MOVIMIENTOS = [
  { tipo: 'in' as const, hora: '15:00', huesped: 'Marta Torres', hab: '105', detalle: '2 noches · $320.000' },
  { tipo: 'in' as const, hora: '16:30', huesped: 'Andrés Páez', hab: '108', detalle: '1 noche · $150.000' },
  { tipo: 'out' as const, hora: '11:00', huesped: 'Familia Rojas', hab: '101', detalle: 'Check-out · consumos $45.000' },
  { tipo: 'out' as const, hora: '12:00', huesped: 'Sandra Mora', hab: '109', detalle: 'Check-out · sin consumos' },
];

export default function HotelDemo() {
  return (
    <Box sx={{ display: 'flex', minHeight: 620, bgcolor: '#f4f6f9', color: '#0f172a' }}>
      {/* Sidebar */}
      <Box sx={{ width: 210, flexShrink: 0, bgcolor: '#fff', borderRight: '1px solid #e2e8f0', p: 2, display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', gap: 0.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, px: 0.5, py: 1, mb: 1 }}>
          <Box sx={{ width: 34, height: 34, borderRadius: 2, background: 'linear-gradient(135deg,#065f46,#10b981)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HotelLogo size={20} />
          </Box>
          <Box sx={{ lineHeight: 1.2 }}>
            <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, color: '#065f46' }}>Altiora</Typography>
            <Typography sx={{ fontSize: '0.62rem', color: '#64748b' }}>Gestión Hotelera</Typography>
          </Box>
        </Box>
        {['Panel', 'Reservas', 'Habitaciones', 'Huéspedes', 'Reportes'].map((item, i) => (
          <Box
            key={item}
            sx={{
              px: 2,
              py: 1,
              borderRadius: 2,
              fontSize: '0.82rem',
              fontWeight: i === 0 ? 600 : 400,
              bgcolor: i === 0 ? '#047857' : 'transparent',
              color: i === 0 ? '#fff' : '#0f172a',
              boxShadow: i === 0 ? '0 2px 10px rgba(4,120,87,0.3)' : 'none',
            }}
          >
            {item}
          </Box>
        ))}
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 0.5 }}>
          <Avatar sx={{ width: 30, height: 30, borderRadius: 2, bgcolor: '#047857', fontSize: 12 }}>RC</Avatar>
          <Box>
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 500 }}>Recepción</Typography>
            <Typography sx={{ fontSize: '0.65rem', color: '#64748b' }}>turno mañana</Typography>
          </Box>
        </Box>
      </Box>

      {/* Contenido */}
      <Box sx={{ flexGrow: 1, p: 3, overflowY: 'auto', maxHeight: 640 }}>
        <Typography sx={{ fontSize: '1.2rem', fontWeight: 700 }}>Hotel Paraíso Demo</Typography>
        <Typography sx={{ fontSize: '0.8rem', color: '#64748b', mb: 2 }}>Recepción · ocupación de hoy</Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4,1fr)' }, gap: 1.5, mb: 2 }}>
          {[
            { label: 'Ocupación hoy', value: '78%', icon: <BedIcon sx={{ fontSize: 20 }} />, bg: '#ecfdf5', color: '#047857' },
            { label: 'Check-ins hoy', value: 12, icon: <LoginIcon sx={{ fontSize: 20 }} />, bg: '#eff6ff', color: '#2563eb' },
            { label: 'Check-outs hoy', value: 8, icon: <LogoutIcon sx={{ fontSize: 20 }} />, bg: '#fffbeb', color: '#b45309' },
            { label: 'Ingresos del mes', value: '$18.6M', icon: <MoneyIcon sx={{ fontSize: 20 }} />, bg: '#f5f3ff', color: '#7c3aed' },
          ].map((k) => (
            <Box key={k.label} sx={{ bgcolor: '#fff', border: '1px solid #eef2f6', borderRadius: 2, p: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Avatar sx={{ bgcolor: k.bg, color: k.color, width: 40, height: 40 }}>{k.icon}</Avatar>
              <Box>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 800 }}>{k.value}</Typography>
                <Typography sx={{ fontSize: '0.7rem', color: '#64748b' }}>{k.label}</Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr' }, gap: 1.5 }}>
          <Box sx={{ bgcolor: '#fff', border: '1px solid #eef2f6', borderRadius: 2, p: 2 }}>
            <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', mb: 0.5 }}>Mapa de ocupación</Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1.5 }}>
              {(Object.keys(STATE_STYLE) as RoomState[]).map((s) => (
                <Box key={s} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: STATE_STYLE[s].color }} />
                  <Typography sx={{ fontSize: '0.68rem', color: '#64748b' }}>{STATE_STYLE[s].label}</Typography>
                </Box>
              ))}
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1 }}>
              {ROOMS.map((r) => (
                <Box
                  key={r.n}
                  title={r.huesped ?? STATE_STYLE[r.estado].label}
                  sx={{
                    p: 1.2,
                    borderRadius: 1.5,
                    bgcolor: STATE_STYLE[r.estado].bg,
                    border: `1px solid ${STATE_STYLE[r.estado].color}33`,
                    textAlign: 'center',
                  }}
                >
                  <Typography sx={{ fontWeight: 800, fontSize: '0.85rem', color: STATE_STYLE[r.estado].color }}>{r.n}</Typography>
                  <Typography sx={{ fontSize: '0.62rem', color: STATE_STYLE[r.estado].color, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {r.huesped ?? STATE_STYLE[r.estado].label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ bgcolor: '#fff', border: '1px solid #eef2f6', borderRadius: 2, p: 2 }}>
            <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', mb: 1 }}>Movimientos de hoy</Typography>
            {MOVIMIENTOS.map((m) => (
              <Box key={m.hora + m.hab} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, py: 1.2, borderBottom: '1px solid #f1f5f9' }}>
                <Avatar sx={{ width: 34, height: 34, bgcolor: m.tipo === 'in' ? '#ecfdf5' : '#fffbeb', color: m.tipo === 'in' ? '#047857' : '#b45309' }}>
                  {m.tipo === 'in' ? <LoginIcon sx={{ fontSize: 18 }} /> : <LogoutIcon sx={{ fontSize: 18 }} />}
                </Avatar>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography sx={{ fontSize: '0.8rem', fontWeight: 500 }}>
                    {m.tipo === 'in' ? 'Check-in' : 'Check-out'} · {m.huesped}
                  </Typography>
                  <Typography sx={{ fontSize: '0.7rem', color: '#64748b' }}>Hab. {m.hab} · {m.detalle}</Typography>
                </Box>
                <Typography sx={{ fontSize: '0.78rem', fontWeight: 700 }}>{m.hora}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

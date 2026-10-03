import { Box, Typography, Avatar } from '@mui/material';
import DollarIcon from '@mui/icons-material/AttachMoney';
import TrendIcon from '@mui/icons-material/TrendingUp';
import UsersIcon from '@mui/icons-material/People';
import WarnIcon from '@mui/icons-material/WarningAmber';
import SearchIcon from '@mui/icons-material/Search';
import SparklesIcon from '@mui/icons-material/AutoAwesome';
import { CommercialLogo } from '../logos';

const NAV = [
  { group: 'Principal', items: ['Panel'] },
  { group: 'Punto de Venta', items: ['Punto de Venta'] },
  { group: 'Documentos', items: ['Documentos'] },
  { group: 'Inventario', items: ['Inventario', 'Categorías', 'Movimientos'] },
  { group: 'Restaurante', items: ['Mesas', 'Cocina', 'Delivery'] },
  { group: 'Finanzas', items: ['Gastos', 'Caja'] },
];

const VENTAS = [
  { cliente: 'Mesa 12', total: '$86.000', hace: 'hace 5m' },
  { cliente: 'Laura Méndez', total: '$124.500', hace: 'hace 18m' },
  { cliente: 'Consumidor final', total: '$42.000', hace: 'hace 32m' },
  { cliente: 'Carlos Ruiz', total: '$210.000', hace: 'hace 1h' },
  { cliente: 'Mesa 4', total: '$97.500', hace: 'hace 2h' },
];

const TOP = [
  { nombre: 'Bandeja paisa', valor: 1840000, pct: 100 },
  { nombre: 'Café + pandebono', valor: 1230000, pct: 67 },
  { nombre: 'Jugo natural', valor: 860000, pct: 47 },
  { nombre: 'Empanada (x5)', valor: 540000, pct: 29 },
];

const ALERTAS = [
  { nombre: 'Queso costeño', stock: '2 kg', minimo: 'mín. 5 kg' },
  { nombre: 'Café molido', stock: '1 bolsa', minimo: 'mín. 4 bolsas' },
  { nombre: 'Vasos 12oz', stock: '40 und', minimo: 'mín. 200 und' },
];

// Serie 30 días determinista para la gráfica de área
const SERIE = [42, 55, 48, 61, 58, 70, 66, 74, 69, 80, 77, 88, 84, 92, 90, 98, 95, 104, 100, 110, 108, 118, 114, 122, 120, 130, 128, 136, 142, 150];

function AreaChart() {
  const W = 600;
  const H = 180;
  const max = Math.max(...SERIE);
  const pts = SERIE.map((v, i) => [(i / (SERIE.length - 1)) * W, H - (v / max) * (H - 20) - 10] as const);
  const line = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 180 }}>
      <defs>
        <linearGradient id="posArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6366f1" stopOpacity={0.25} />
          <stop offset="100%" stopColor="#6366f1" stopOpacity={0.02} />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((f) => (
        <line key={f} x1={0} y1={H * f} x2={W} y2={H * f} stroke="#e4e4e7" strokeWidth={1} />
      ))}
      <path d={`${line} L${W},${H} L0,${H} Z`} fill="url(#posArea)" />
      <path d={line} fill="none" stroke="#6366f1" strokeWidth={2.5} />
    </svg>
  );
}

const kpiIcon = (bg: string, color: string, icon: React.ReactNode) => (
  <Box sx={{ width: 40, height: 40, borderRadius: 2, bgcolor: bg, color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</Box>
);

export default function CommercialDemo() {
  return (
    <Box sx={{ display: 'flex', minHeight: 620, bgcolor: '#fafafa', color: '#09090b' }}>
      {/* Sidebar claro como altiora-pos */}
      <Box sx={{ width: 220, flexShrink: 0, bgcolor: '#fff', borderRight: '1px solid #e4e4e7', p: 2, display: { xs: 'none', md: 'flex' }, flexDirection: 'column', gap: 0.5, overflowY: 'auto', maxHeight: 640 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, px: 0.5, py: 1 }}>
          <CommercialLogo size={30} />
          <Box sx={{ lineHeight: 1.2 }}>
            <Typography sx={{ fontSize: '0.95rem', fontWeight: 600, color: '#1e40af' }}>Altiora</Typography>
            <Typography sx={{ fontSize: '0.62rem', color: '#71717a' }}>Gestión Comercial</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 1.5, py: 1, borderRadius: 1.5, fontSize: '0.8rem', color: '#52525b', bgcolor: '#f4f4f5', mt: 1 }}>
          <SearchIcon sx={{ fontSize: 16 }} /> Buscar
          <Box sx={{ ml: 'auto', fontSize: '0.62rem', color: '#a1a1aa' }}>Ctrl+K</Box>
        </Box>
        {NAV.map((g) => (
          <Box key={g.group} sx={{ mt: 1 }}>
            <Typography sx={{ fontSize: '0.62rem', fontWeight: 600, color: '#a1a1aa', px: 1.5, mb: 0.3 }}>{g.group}</Typography>
            {g.items.map((item) => {
              const active = item === 'Panel';
              return (
                <Box key={item} sx={{ px: 1.5, py: 0.9, borderRadius: 1.5, fontSize: '0.8rem', fontWeight: active ? 600 : 400, bgcolor: active ? '#f4f4f5' : 'transparent' }}>
                  {item}
                </Box>
              );
            })}
          </Box>
        ))}
        <Box sx={{ mt: 'auto', pt: 1, borderTop: '1px solid #f4f4f5', display: 'flex', flexDirection: 'column', gap: 0.3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 1.5, py: 0.8, fontSize: '0.8rem' }}>
            <SparklesIcon sx={{ fontSize: 16, color: '#6366f1' }} /> Altiora AI
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 0.5 }}>
            <Avatar sx={{ width: 30, height: 30, bgcolor: '#18181b', fontSize: 12 }}>AD</Avatar>
            <Box>
              <Typography sx={{ fontSize: '0.75rem', fontWeight: 600 }}>Admin Demo</Typography>
              <Typography sx={{ fontSize: '0.65rem', color: '#71717a' }}>admin@negocio.com</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Contenido: dashboard Panel */}
      <Box sx={{ flexGrow: 1, p: 2.5, overflowY: 'auto', maxHeight: 640 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', lg: 'repeat(4,1fr)' }, gap: 1.5, mb: 2 }}>
          <Box sx={{ bgcolor: '#fff', border: '1px solid #e4e4e7', borderRadius: 3, p: 2.5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {kpiIcon('#eff6ff', '#2563eb', <DollarIcon sx={{ fontSize: 20 }} />)}
              <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: '#059669' }}>↗ +12%</Typography>
            </Box>
            <Typography sx={{ fontSize: '1.4rem', fontWeight: 800, mt: 2 }}>$1.245.000</Typography>
            <Typography sx={{ fontSize: '0.78rem', color: '#71717a' }}>Ventas Hoy</Typography>
            <Typography sx={{ fontSize: '0.7rem', color: '#a1a1aa', mt: 1.5 }}>vs ayer</Typography>
          </Box>
          <Box sx={{ bgcolor: '#fff', border: '1px solid #e4e4e7', borderRadius: 3, p: 2.5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {kpiIcon('#eef2ff', '#4f46e5', <TrendIcon sx={{ fontSize: 20 }} />)}
              <Box sx={{ width: 70, height: 26 }}>
                <svg viewBox="0 0 70 26" style={{ width: '100%', height: '100%' }}>
                  <path d="M0,22 L10,19 L20,20 L30,15 L40,16 L50,10 L60,11 L70,4" fill="none" stroke="#6366f1" strokeWidth={1.5} />
                </svg>
              </Box>
            </Box>
            <Typography sx={{ fontSize: '1.4rem', fontWeight: 800, mt: 2 }}>$28.400.000</Typography>
            <Typography sx={{ fontSize: '0.78rem', color: '#71717a' }}>Ingresos del Mes</Typography>
            <Typography sx={{ fontSize: '0.7rem', color: '#a1a1aa', mt: 1.5 }}>Promedio $946.000/día</Typography>
          </Box>
          <Box sx={{ bgcolor: '#fff', border: '1px solid #e4e4e7', borderRadius: 3, p: 2.5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {kpiIcon('#ecfdf5', '#059669', <UsersIcon sx={{ fontSize: 20 }} />)}
            </Box>
            <Typography sx={{ fontSize: '1.4rem', fontWeight: 800, mt: 2 }}>47</Typography>
            <Typography sx={{ fontSize: '0.78rem', color: '#71717a' }}>Transacciones Hoy</Typography>
            <Typography sx={{ fontSize: '0.7rem', color: '#a1a1aa', mt: 1.5 }}>Ventas realizadas</Typography>
          </Box>
          <Box sx={{ bgcolor: '#fff', border: '1px solid #e4e4e7', borderRadius: 3, p: 2.5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {kpiIcon('#fffbeb', '#d97706', <WarnIcon sx={{ fontSize: 20 }} />)}
            </Box>
            <Typography sx={{ fontSize: '1.4rem', fontWeight: 800, mt: 2 }}>4</Typography>
            <Typography sx={{ fontSize: '0.78rem', color: '#71717a' }}>Stock Bajo</Typography>
            <Typography sx={{ fontSize: '0.7rem', color: '#a1a1aa', mt: 1.5 }}>Productos bajo el mínimo</Typography>
          </Box>
        </Box>

        <Box sx={{ bgcolor: '#fff', border: '1px solid #e4e4e7', borderRadius: 3, p: 2.5, mb: 2 }}>
          <Typography sx={{ fontWeight: 600, fontSize: '0.95rem' }}>Ingresos</Typography>
          <Typography sx={{ fontSize: '0.78rem', color: '#71717a', mb: 1 }}>Ingresos diarios — últimos 30 días</Typography>
          <AreaChart />
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: 'repeat(3,1fr)' }, gap: 1.5 }}>
          <Box sx={{ bgcolor: '#fff', border: '1px solid #e4e4e7', borderRadius: 3, p: 2.5 }}>
            <Typography sx={{ fontWeight: 600, fontSize: '0.9rem' }}>Últimas Ventas</Typography>
            <Typography sx={{ fontSize: '0.75rem', color: '#71717a', mb: 1.5 }}>Las más recientes</Typography>
            {VENTAS.map((v) => (
              <Box key={v.cliente + v.total} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, py: 1.2, borderBottom: '1px solid #f4f4f5' }}>
                <Avatar sx={{ width: 30, height: 30, bgcolor: '#f4f4f5', color: '#71717a', fontSize: 13 }}>{v.cliente.charAt(0)}</Avatar>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography sx={{ fontSize: '0.8rem', fontWeight: 500 }}>{v.cliente}</Typography>
                  <Typography sx={{ fontSize: '0.7rem', color: '#a1a1aa' }}>{v.hace}</Typography>
                </Box>
                <Typography sx={{ fontSize: '0.8rem', fontWeight: 700 }}>{v.total}</Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ bgcolor: '#fff', border: '1px solid #e4e4e7', borderRadius: 3, p: 2.5 }}>
            <Typography sx={{ fontWeight: 600, fontSize: '0.9rem' }}>Top Productos</Typography>
            <Typography sx={{ fontSize: '0.75rem', color: '#71717a', mb: 1.5 }}>Por ingresos del mes</Typography>
            {TOP.map((p) => (
              <Box key={p.nombre} sx={{ mb: 1.5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                  <Typography sx={{ fontSize: '0.78rem', fontWeight: 500 }}>{p.nombre}</Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: '#71717a' }}>${(p.valor / 1000).toFixed(0)}k</Typography>
                </Box>
                <Box sx={{ height: 7, borderRadius: 99, bgcolor: '#f4f4f5' }}>
                  <Box sx={{ width: `${p.pct}%`, height: '100%', borderRadius: 99, background: 'linear-gradient(90deg,#3b82f6,#6366f1)' }} />
                </Box>
              </Box>
            ))}
          </Box>
          <Box sx={{ bgcolor: '#fff', border: '1px solid #e4e4e7', borderRadius: 3, p: 2.5 }}>
            <Typography sx={{ fontWeight: 600, fontSize: '0.9rem' }}>Alertas de Stock</Typography>
            <Typography sx={{ fontSize: '0.75rem', color: '#71717a', mb: 1.5 }}>Requieren reposición</Typography>
            {ALERTAS.map((a) => (
              <Box key={a.nombre} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, py: 1.2, borderBottom: '1px solid #f4f4f5' }}>
                <WarnIcon sx={{ fontSize: 18, color: '#d97706' }} />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography sx={{ fontSize: '0.8rem', fontWeight: 500 }}>{a.nombre}</Typography>
                  <Typography sx={{ fontSize: '0.7rem', color: '#a1a1aa' }}>{a.minimo}</Typography>
                </Box>
                <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: '#b45309' }}>{a.stock}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

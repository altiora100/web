import { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Chip,
  Alert,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ApiIcon from '@mui/icons-material/Api';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SendIcon from '@mui/icons-material/Send';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import SectionChip from './SectionChip';

const WHATSAPP_NUMBER = '573001234567';
const CONTACT_EMAIL = 'altiora100@gmail.com';

const SERVICES = [
  { icon: <CodeIcon />, title: 'Sistemas a medida', desc: 'ERP, inventarios, reservas y gestión interna tal como operas.' },
  { icon: <WebIcon />, title: 'Apps y webs', desc: 'Portales, tiendas online y aplicaciones web ultrarrápidas.' },
  { icon: <PhoneIphoneIcon />, title: 'Apps móviles', desc: 'Experiencias móviles para clientes y equipos en campo.' },
  { icon: <ApiIcon />, title: 'Integraciones y APIs', desc: 'Conectamos tu software con pagos, facturación y terceros.' },
  { icon: <AutoFixHighIcon />, title: 'Automatizaciones', desc: 'Elimina tareas repetitivas con flujos y reportes automáticos.' },
  { icon: <SupportAgentIcon />, title: 'Soporte y evolución', desc: 'Acompañamiento continuo y nuevas funciones por fases.' },
];

const PROJECT_TYPES = ['Sistema a medida', 'App web', 'App móvil', 'Integración / API', 'Automatización', 'Otro'];
const BUDGETS = ['< $2M COP', '$2M - $5M COP', '$5M - $15M COP', '$15M+ COP', 'A convenir'];

const inputDarkSx = {
  width: '100%',
  p: 1.5,
  borderRadius: 1.5,
  border: '1px solid rgba(148,163,184,0.25)',
  bgcolor: 'rgba(255,255,255,0.05)',
  color: '#f1f5f9',
  fontSize: '0.875rem',
  outline: 'none',
  fontFamily: 'inherit',
  '&:focus': { borderColor: '#22d3ee' },
  '&::placeholder': { color: '#64748b' },
} as const;

export default function CustomDevelopment() {
  const [form, setForm] = useState({ name: '', email: '', type: PROJECT_TYPES[0], budget: BUDGETS[1], description: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const rawBody = `Hola Altiora, necesito un desarrollo:\n\n- Nombre: ${form.name}\n- Email: ${form.email}\n- Tipo: ${form.type}\n- Presupuesto: ${form.budget}\n- Detalle: ${form.description}`;
  const waText = encodeURIComponent(rawBody);
  const mailBody = encodeURIComponent(rawBody);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.description.trim()) {
      setError('Completa nombre, email y la descripción de lo que necesitas.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError('Escribe un email válido.');
      return;
    }
    setError('');
    setSent(true);
  };

  return (
    <Box
      id="desarrollo-medida"
      sx={{
        py: 10,
        position: 'relative',
        overflow: 'hidden',
        bgcolor: '#050816',
        color: '#fff',
        backgroundImage:
          'linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)',
        backgroundSize: '44px 44px',
      }}
    >
      <Box sx={{ position: 'absolute', top: -140, right: '5%', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,70,229,0.35) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: -160, left: '-5%', width: 520, height: 420, borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.22) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <SectionChip label="Desarrollo a Medida" />
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 1.5, letterSpacing: '-0.02em' }}>
            ¿Necesitas algo único?{' '}
            <Box component="span" sx={{ background: 'linear-gradient(90deg,#60a5fa,#818cf8,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Lo construimos para ti
            </Box>
          </Typography>
          <Typography sx={{ color: '#94a3b8', maxWidth: 640, mx: 'auto', lineHeight: 1.7 }}>
            Además de nuestros 4 sistemas listos, ofrecemos desarrollo de soluciones de software y software a la medida.
            Cuéntanos qué necesitas y te cotizamos por fases, sin compromiso.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {SERVICES.map((s) => (
                <Grid item xs={12} sm={6} key={s.title}>
                  <Card
                    elevation={0}
                    sx={{ height: '100%', borderRadius: 3, bgcolor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(148,163,184,0.18)', backdropFilter: 'blur(10px)', transition: 'all .25s', '&:hover': { borderColor: '#22d3ee', transform: 'translateY(-3px)' } }}
                  >
                    <CardContent>
                      <Box sx={{ color: '#22d3ee', mb: 1 }}>{s.icon}</Box>
                      <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', mb: 0.5 }}>{s.title}</Typography>
                      <Typography sx={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.6 }}>{s.desc}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ display: 'flex', gap: 1, mt: 3, flexWrap: 'wrap' }}>
              {['Descubrimiento', 'Prototipo', 'Desarrollo', 'Lanzamiento'].map((step, i) => (
                <Chip key={step} label={`${i + 1}. ${step}`} sx={{ bgcolor: 'rgba(59,130,246,0.12)', color: '#bfdbfe', border: '1px solid rgba(59,130,246,0.3)' }} />
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card elevation={0} sx={{ borderRadius: 3, bgcolor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(148,163,184,0.22)', backdropFilter: 'blur(14px)', boxShadow: '0 24px 60px rgba(59,130,246,0.15)' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography sx={{ fontWeight: 800, fontSize: '1.1rem', mb: 0.5 }}>Cotiza tu desarrollo</Typography>
                <Typography sx={{ fontSize: '0.85rem', color: '#94a3b8', mb: 3 }}>
                  Describe lo que necesitas y te contactamos en menos de 24h.
                </Typography>

                {sent ? (
                  <Box>
                    <Alert severity="success" sx={{ mb: 2, bgcolor: 'rgba(16,185,129,0.12)', color: '#a7f3d0', border: '1px solid rgba(16,185,129,0.35)' }}>
                      ¡Gracias {form.name}! Ya tenemos tu idea. Elígela cómo enviarla:
                    </Alert>
                    <Box sx={{ p: 2, borderRadius: 2, bgcolor: 'rgba(0,0,0,0.3)', border: '1px solid rgba(148,163,184,0.2)', mb: 2, fontSize: '0.85rem', color: '#cbd5e1' }}>
                      <strong>{form.type}</strong> · {form.budget}
                      <br />
                      {form.description}
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                      <Button
                        variant="contained"
                        startIcon={<WhatsAppIcon />}
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`}
                        target="_blank"
                        sx={{ textTransform: 'none', bgcolor: '#16a34a', '&:hover': { bgcolor: '#15803d' } }}
                      >
                        Enviar por WhatsApp
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<EmailIcon />}
                        href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Cotización desarrollo: ' + form.type)}&body=${mailBody}`}
                        sx={{ textTransform: 'none', color: '#e2e8f0', borderColor: 'rgba(148,163,184,0.4)' }}
                      >
                        Enviar por Email
                      </Button>
                      <Button onClick={() => setSent(false)} sx={{ textTransform: 'none', color: '#94a3b8' }}>
                        Editar
                      </Button>
                    </Box>
                  </Box>
                ) : (
                  <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {error && <Alert severity="error" sx={{ bgcolor: 'rgba(239,68,68,0.12)', color: '#fecaca' }}>{error}</Alert>}
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 600, fontSize: '0.8rem', mb: 0.5, color: '#cbd5e1' }}>Nombre</Typography>
                        <Box component="input" placeholder="Tu nombre" value={form.name} onChange={set('name')} sx={inputDarkSx} />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 600, fontSize: '0.8rem', mb: 0.5, color: '#cbd5e1' }}>Email</Typography>
                        <Box component="input" placeholder="tu@email.com" value={form.email} onChange={set('email')} sx={inputDarkSx} />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 600, fontSize: '0.8rem', mb: 0.5, color: '#cbd5e1' }}>¿Qué necesitas?</Typography>
                        <Box component="select" value={form.type} onChange={set('type')} sx={{ ...inputDarkSx, '& option': { color: '#0f172a' } }}>
                          {PROJECT_TYPES.map((t) => (
                            <Box component="option" key={t} value={t}>{t}</Box>
                          ))}
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: 600, fontSize: '0.8rem', mb: 0.5, color: '#cbd5e1' }}>Presupuesto aprox.</Typography>
                        <Box component="select" value={form.budget} onChange={set('budget')} sx={{ ...inputDarkSx, '& option': { color: '#0f172a' } }}>
                          {BUDGETS.map((b) => (
                            <Box component="option" key={b} value={b}>{b}</Box>
                          ))}
                        </Box>
                      </Grid>
                    </Grid>
                    <Box>
                      <Typography sx={{ fontWeight: 600, fontSize: '0.8rem', mb: 0.5, color: '#cbd5e1' }}>Describe tu idea</Typography>
                      <Box
                        component="textarea"
                        rows={4}
                        placeholder="Ej: Necesito un sistema para controlar citas, inventario y pagos de mi negocio con 3 sucursales…"
                        value={form.description}
                        onChange={set('description')}
                        sx={{ ...inputDarkSx, resize: 'vertical' }}
                      />
                    </Box>
                    <Button
                      type="submit"
                      variant="contained"
                      endIcon={<SendIcon />}
                      sx={{ alignSelf: 'flex-start', px: 4, background: 'linear-gradient(135deg,#3b82f6,#4f46e5)', boxShadow: '0 8px 28px rgba(59,130,246,0.4)' }}
                    >
                      Solicitar cotización
                    </Button>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

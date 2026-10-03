import { useState } from 'react';
import { Box, Typography, Button, Container, Grid, Card, Avatar, Alert, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SectionChip from './SectionChip';
import { CONTACT_INFO, SYSTEMS } from '../data/content';

const DESTINO = 'altiora100@gmail.com';

const inputSx = {
  width: '100%',
  p: 1.5,
  borderRadius: 1.5,
  border: '1px solid #e2e8f0',
  fontSize: '0.875rem',
  outline: 'none',
  fontFamily: 'inherit',
  backgroundColor: '#fff',
  color: '#0f172a',
  '&:focus': { borderColor: '#2563eb' },
  '&::placeholder': { color: '#94a3b8' },
  '&:disabled': { bgcolor: '#f8fafc', color: '#94a3b8' },
  boxSizing: 'border-box',
} as const;

const labelSx = { fontWeight: 600, fontSize: '0.8rem', mb: 0.5, color: '#475569' } as const;

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', email: '', empresa: '', sistema: SYSTEMS[0]?.id ?? '', mensaje: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre.trim() || !form.email.trim() || !form.mensaje.trim()) {
      setErrorMsg('Completa nombre, email y mensaje.');
      setStatus('error');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      setErrorMsg('Escribe un email válido.');
      setStatus('error');
      return;
    }
    setErrorMsg('');
    setStatus('sending');
    try {
      const sistemaNombre = SYSTEMS.find((s) => s.id === form.sistema)?.title ?? form.sistema;
      const res = await fetch(`https://formsubmit.co/ajax/${DESTINO}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Contacto web: ${form.nombre} — ${sistemaNombre}`,
          _template: 'table',
          Nombre: form.nombre.trim(),
          Email: form.email.trim(),
          Empresa: form.empresa.trim() || '—',
          'Sistema de interés': sistemaNombre,
          Mensaje: form.mensaje.trim(),
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('success');
    } catch {
      setErrorMsg('No se pudo enviar. Escríbenos a altiora100@gmail.com o por WhatsApp.');
      setStatus('error');
    }
  };

  const sending = status === 'sending';

  return (
    <Box id="contacto" sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <SectionChip label="Contacto" />
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a', mb: 2 }}>
              Hablemos
            </Typography>
            <Typography sx={{ color: '#64748b', mb: 4, lineHeight: 1.7 }}>
              ¿Tienes preguntas? Estamos aquí para ayudarte. Contáctanos y te responderemos en menos de 24 horas.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              {CONTACT_INFO.map((item) => (
                <Box key={item.label} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Avatar sx={{ bgcolor: '#eff6ff', color: '#2563eb', width: 44, height: 44 }}>{item.icon}</Avatar>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.9rem' }}>{item.label}</Typography>
                    <Typography sx={{ fontSize: '0.8rem', color: '#94a3b8' }}>{item.sub}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Card elevation={0} sx={{ p: 4, borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
              {status === 'success' ? (
                <Box sx={{ textAlign: 'center', py: 4 }}>
                  <CheckCircleIcon sx={{ fontSize: 56, color: '#059669', mb: 2 }} />
                  <Typography sx={{ fontWeight: 800, fontSize: '1.2rem', mb: 1 }}>¡Mensaje enviado!</Typography>
                  <Typography sx={{ color: '#64748b', mb: 3, fontSize: '0.9rem' }}>
                    Gracias {form.nombre}, te responderemos a {form.email} lo antes posible.
                  </Typography>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      setForm({ nombre: '', email: '', empresa: '', sistema: SYSTEMS[0]?.id ?? '', mensaje: '' });
                      setStatus('idle');
                    }}
                    sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 600 }}
                  >
                    Enviar otro mensaje
                  </Button>
                </Box>
              ) : (
                <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                  {status === 'error' && <Alert severity="error">{errorMsg}</Alert>}
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Typography sx={labelSx}>Nombre *</Typography>
                      <Box component="input" placeholder="Tu nombre" value={form.nombre} onChange={set('nombre')} disabled={sending} sx={inputSx} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography sx={labelSx}>Email *</Typography>
                      <Box component="input" placeholder="tu@email.com" type="email" value={form.email} onChange={set('email')} disabled={sending} sx={inputSx} />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Typography sx={labelSx}>Empresa</Typography>
                      <Box component="input" placeholder="Nombre de tu empresa" value={form.empresa} onChange={set('empresa')} disabled={sending} sx={inputSx} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography sx={labelSx}>Sistema de interés</Typography>
                      <Box component="select" value={form.sistema} onChange={set('sistema')} disabled={sending} sx={{ ...inputSx, '& option': { color: '#0f172a' } }}>
                        {SYSTEMS.map((s) => (
                          <Box component="option" key={s.id} value={s.id}>
                            {s.title}
                          </Box>
                        ))}
                      </Box>
                    </Grid>
                  </Grid>
                  <Box>
                    <Typography sx={labelSx}>Mensaje *</Typography>
                    <Box
                      component="textarea"
                      placeholder="¿En qué podemos ayudarte?"
                      rows={4}
                      value={form.mensaje}
                      onChange={set('mensaje')}
                      disabled={sending}
                      sx={{ ...inputSx, resize: 'vertical' }}
                    />
                  </Box>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={sending}
                    endIcon={sending ? <CircularProgress size={18} color="inherit" /> : <SendIcon />}
                    sx={{
                      alignSelf: 'flex-start',
                      borderRadius: 2,
                      textTransform: 'none',
                      fontWeight: 600,
                      px: 4,
                      background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
                      '&:hover': { background: 'linear-gradient(135deg, #172a63 0%, #1d4ed8 100%)' },
                    }}
                  >
                    {sending ? 'Enviando…' : 'Enviar Mensaje'}
                  </Button>
                </Box>
              )}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

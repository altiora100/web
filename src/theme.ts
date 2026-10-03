import { createTheme } from '@mui/material';

// Paleta corporativa tomada del sistema de gestión:
// primary #1e3a8a (navy), accent #3b82f6 (logo), secondary #4f46e5 (indigo)
export const BRAND = {
  navy: '#1e3a8a',
  blue: '#3b82f6',
  indigo: '#4f46e5',
  cyan: '#06b6d4',
  darkBg: '#050816',
  darkSurface: '#0b1026',
};

export const theme = createTheme({
  palette: {
    primary: { main: BRAND.navy, dark: '#172a63', light: BRAND.blue, contrastText: '#ffffff' },
    secondary: { main: BRAND.indigo, dark: '#4338ca', light: '#818cf8', contrastText: '#ffffff' },
    info: { main: BRAND.cyan },
    background: { default: '#ffffff', paper: '#ffffff' },
    text: { primary: '#0f172a', secondary: '#64748b' },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontFamily: '"Space Grotesk", "Inter", sans-serif' },
    h2: { fontFamily: '"Space Grotesk", "Inter", sans-serif' },
    h3: { fontFamily: '"Space Grotesk", "Inter", sans-serif' },
    h4: { fontFamily: '"Space Grotesk", "Inter", sans-serif' },
    h5: { fontFamily: '"Space Grotesk", "Inter", sans-serif' },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 600, borderRadius: 10 },
        contained: { boxShadow: 'none' },
      },
    },
    MuiCard: {
      styleOverrides: { root: { borderRadius: 16 } },
    },
    MuiChip: {
      styleOverrides: { root: { fontWeight: 600 } },
    },
  },
});

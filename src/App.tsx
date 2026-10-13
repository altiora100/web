import { Box, ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { theme } from './theme';
import { setPageMeta, initAnalytics, trackPageview } from './utils/meta';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Systems from './components/Systems';
import CustomDevelopment from './components/CustomDevelopment';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Benefits from './components/Benefits';
import Faq from './components/Faq';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsappFloat from './components/WhatsappFloat';
import MobileCta from './components/MobileCta';
import SystemDetail from './pages/SystemDetail';
import DemoPage from './pages/DemoPage';
import NotFound from './pages/NotFound';

function RouteTracker() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageview(pathname);
  }, [pathname]);
  return null;
}

function Landing() {
  useEffect(() => {
    setPageMeta({
      title: 'Altiora - Software de gestión + Desarrollo a medida',
      description:
        'Sistemas de gestión para odontología, comercio, barberías y hoteles. Prueba las demos interactivas y cotiza tu desarrollo a medida.',
    });
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Systems />
      <CustomDevelopment />
      <Testimonials />
      <Pricing />
      <Benefits />
      <Faq />
      <CallToAction />
      <Contact />
      <Footer />
    </Box>
  );
}

function App() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <RouteTracker />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sistemas/:id" element={<SystemDetail />} />
          <Route path="/demo/:id" element={<DemoPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsappFloat />
        <MobileCta />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

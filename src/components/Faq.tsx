import { useState } from 'react';
import { Box, Typography, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SectionChip from './SectionChip';
import { FAQS } from '../data/content';

export default function Faq() {
  const [open, setOpen] = useState<number | false>(0);

  return (
    <Box id="faq" sx={{ py: 10, bgcolor: '#ffffff' }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <SectionChip label="Preguntas Frecuentes" />
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a', mb: 1.5 }}>
            ¿Tienes dudas?
          </Typography>
          <Typography sx={{ color: '#64748b' }}>Respuestas directas a lo que más nos preguntan.</Typography>
        </Box>

        {FAQS.map((faq, i) => (
          <Accordion
            key={faq.q}
            expanded={open === i}
            onChange={(_, isOpen) => setOpen(isOpen ? i : false)}
            elevation={0}
            sx={{
              mb: 1.5,
              border: '1px solid',
              borderColor: open === i ? '#4f46e5' : 'divider',
              borderRadius: '12px !important',
              '&:before': { display: 'none' },
              transition: 'border-color 0.2s',
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#4f46e5' }} />}>
              <Typography sx={{ fontWeight: 700, fontSize: '0.92rem', color: '#0f172a' }}>{faq.q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: '0.87rem', color: '#64748b', lineHeight: 1.7 }}>{faq.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}

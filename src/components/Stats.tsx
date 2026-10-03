import { Box, Typography, Container } from '@mui/material';
import { STATS } from '../data/content';

export default function Stats() {
  return (
    <Box sx={{ py: 4, bgcolor: '#ffffff', borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 3 }}>
          {STATS.map((stat) => (
            <Box key={stat.label} sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#1e3a8a' }}>
                {stat.value}
              </Typography>
              <Typography variant="body2" sx={{ color: '#64748b', mt: 0.5 }}>
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

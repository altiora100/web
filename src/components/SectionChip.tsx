import { Chip } from '@mui/material';

interface SectionChipProps {
  label: string;
}

export default function SectionChip({ label }: SectionChipProps) {
  return (
    <Chip
      label={label}
      size="small"
      sx={{ mb: 2, bgcolor: '#eff6ff', color: '#1e3a8a', fontWeight: 600, fontSize: '0.75rem' }}
    />
  );
}

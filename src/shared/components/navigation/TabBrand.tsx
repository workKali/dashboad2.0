import { Tab, styled } from '@mui/material';

export const TabBrand = styled(Tab)(({ theme }) => ({
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  fontSize: '0.75rem',
  whiteSpace: 'nowrap',
  transition: 'color 150ms',
  position: 'relative',
  flexShrink: 0,
  padding: '0 16px',
  minHeight: '44px',
  textTransform: 'capitalize',
  borderBottom: '2px solid transparent',
  color: '#2dd4bf',
  fontWeight: 400,

  '&:hover': {
    color: 'var(--brand-gray)',
  },

  '&.Mui-selected': {
    color: '#16a34a',
    fontWeight: 600,
  },
}));
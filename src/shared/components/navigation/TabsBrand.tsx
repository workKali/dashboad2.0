import { Tabs, styled } from '@mui/material';

export const TabsBrand = styled(Tabs)(() => ({
  minHeight: '44px',

  '& .MuiTabs-indicator': {
    backgroundColor: '#16a34a', // success-600
    height: '2px',
  },
}));
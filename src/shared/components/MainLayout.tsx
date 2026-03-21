'use client';

import { useState } from 'react';
import { Box, CssBaseline, Drawer } from '@mui/material';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

const drawerWidth = 200;

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className='bg-green-400 flex sm:grid sm:grid-cols-[200px_1fr]'>
      <nav>
        <NavTemplate mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      </nav>

      <div className='w-full'>
        <header>
          <Header onMenuClick={handleDrawerToggle} />
        </header>

        <main className='max-w-375 mx-auto'>
          {children}
        </main>
      </div>
    </div>
  );
};

const NavTemplate = ({ mobileOpen, handleDrawerToggle }: { mobileOpen: boolean, handleDrawerToggle: () => void }) => {
  return (
    <>
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        <Sidebar />
      </Drawer>

      {/* Desktop Drawer */}
      <div className='hidden sm:block'>
        <Sidebar />
      </div>
    </>
  )
}

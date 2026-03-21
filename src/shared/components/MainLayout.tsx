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
    <div className='flex h-screen overflow-hidden sm:grid sm:grid-cols-[200px_1fr]'>
      <nav className="h-full overflow-y-auto">
        <NavTemplate mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      </nav>

      <div className='flex flex-col h-full overflow-hidden'>
        <header className="shrink-0">
          <Header onMenuClick={handleDrawerToggle} />
        </header>

        <main className='flex-1 overflow-y-auto'>
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

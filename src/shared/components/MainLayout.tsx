'use client';

import { useState } from 'react';
import { Drawer } from '@mui/material';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className='flex h-screen overflow-hidden'>
      {/* Desktop Sidebar */}
      {/* <nav className="hidden md:block w-[200px] bg-white ">
        <Sidebar />
      </nav> */}

      {/* Mobile Sidebar Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        className="md:hidden"
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 200,
          },
        }}
      >
        <Sidebar />
      </Drawer>

      {/* Main Content */}
      <div className='flex flex-col flex-1 overflow-hidden'>
        {/* <header className="shrink-0">
          <Header onMenuClick={handleDrawerToggle} showMenuButton={true} />
        </header> */}

        <main className='flex-1 overflow-y-auto bg-gray-50'>
          {children}
        </main>
      </div>
    </div>
  );
};


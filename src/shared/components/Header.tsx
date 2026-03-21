'use client'
import React from 'react';
import { Menu as MenuIcon } from '@mui/icons-material';
import { DropDownUser } from './DropDownUser';

interface HeaderProps {
  onMenuClick?: () => void;
  showMenuButton?: boolean;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onMenuClick = () => { },
  showMenuButton = true,
}) => {
  return (
    <div className='sticky top-0 z-50'>
      <div className='flex items-center justify-between bg-white border-b border-gray-200 px-6 h-12'>
        {/* 🟢 Left side */}
        {showMenuButton && (
          <button
            onClick={onMenuClick}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded md:hidden"
            aria-label="open drawer"
          >
            <MenuIcon />
          </button>
        )}

        {/* 🔵 Right side */}
        <div className="ml-auto">
          <DropDownUser />
        </div>
      </div>
    </div>
  );
};

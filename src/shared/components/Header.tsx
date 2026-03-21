'use client'
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  Menu as MenuIcon,
} from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

interface HeaderProps {
  onMenuClick?: () => void;
  showMenuButton?: boolean;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onMenuClick = () => { },
  showMenuButton = true,
  className = "",
}) => {
  return (
    <div className='sticky'>
      <Toolbar variant='dense' sx={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e9ec',
        padding: '0 24px',
        minHeight: '46px'
      }}>
        {/* <div className='flex justify-between items-center border-b border-[#e5e9ec] px-6 min-h-12 bg-white sm:w-[calc(100%-200px)] sm:ml-50'> */}
        {/* 🟢 Left side */}
        {showMenuButton && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onMenuClick}
            sx={{ display: { sm: 'none', color: '#000' } }}
            className="mr-2"
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* 🔵 Right side */}
        <div className="ml-auto">
          <DropDownUser />
        </div>
      </Toolbar>
    </div>
  );
};

const DropDownUser = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSelect = (value: string) => {
    handleClose()
  }

  return (
    <>
      <Button
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
        className="flex items-center gap-1.5 normal-case"
        sx={{
          textTransform: 'none',
          fontSize: '12px',
          fontWeight: 500,
          color: '#1a4040',
        }}
      >
        Cliente Perú
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem sx={{
          fontSize: '12px',
        }} onClick={() => handleSelect('peru')}>
          Cliente Perú
        </MenuItem>
        <MenuItem sx={{
          fontSize: '12px',
        }} onClick={() => handleSelect('mexico')}>
          Cliente México
        </MenuItem>
        <MenuItem sx={{
          fontSize: '12px',
        }} onClick={() => handleSelect('chile')}>
          Cliente Chile
        </MenuItem>
      </Menu>
    </>
  )
}

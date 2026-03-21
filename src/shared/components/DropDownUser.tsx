'use client'

import React, { useState } from 'react'
import { Menu, MenuItem } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

interface DropDownUserProps {
  className?: string
}

export const DropDownUser: React.FC<DropDownUserProps> = ({ className = "" }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSelect = () => {
    handleClose()
  }

  return (
    <>
      <button
        onClick={handleClick}
        className={`flex items-center gap-1.5 text-xs font-medium text-gray-700 hover:text-gray-900 transition-colors ${className}`}
      >
        Cliente Perú
        <ExpandMoreIcon className="w-4 h-4" />
      </button>

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
        className="mt-1"
      >
        <MenuItem 
          className="text-xs py-2 px-3 hover:bg-gray-50" 
          onClick={handleSelect}
        >
          Cliente Perú
        </MenuItem>
        <MenuItem 
          className="text-xs py-2 px-3 hover:bg-gray-50" 
          onClick={handleSelect}
        >
          Cliente México
        </MenuItem>
        <MenuItem 
          className="text-xs py-2 px-3 hover:bg-gray-50" 
          onClick={handleSelect}
        >
          Cliente Chile
        </MenuItem>
      </Menu>
    </>
  )
}

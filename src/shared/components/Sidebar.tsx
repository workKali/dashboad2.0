'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { SidebarNavItem } from './SidebarNavItem';

const navigationItems = [
  {
    id: "/dashboard",
    label: "Analítica de Datos",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    id: "climap",
    label: "CliMap",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: "nueva-consulta",
    label: "Nueva Consulta",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    id: "solicitudes",
    label: "Solicitudes de Riesgo",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
];

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className = "" }) => {
  const pathname = usePathname();

  const handleNavItemClick = (itemId: string) => {
    // Navigation logic will be handled by Next.js router
    console.log('Navigate to:', itemId);
  };

  return (
    <div className={`shrink-0 bg-white border-r border-gray-200 flex flex-col sticky top-0 h-screen z-300 ${className}`}>
      <div className='px-4 py-5'>
        <Logo className="max-w-55" />
      </div>

      <nav className="flex-1 py-3">
        {navigationItems.map(({ id, label, icon }) => {
          const isActive = pathname === id;

          return (
            <SidebarNavItem
              key={id}
              id={id}
              label={label}
              icon={icon}
              isActive={isActive}
              onClick={() => handleNavItemClick(id)}
            />
          );
        })}
      </nav>
    </div>
  );
};

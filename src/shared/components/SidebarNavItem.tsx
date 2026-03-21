import React from 'react';

interface SidebarNavItemProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export const SidebarNavItem: React.FC<SidebarNavItemProps> = ({
  id,
  label,
  icon,
  isActive = false,
  onClick = () => {},
}) => {
  return (
    <div
      key={id}
      onClick={onClick}
      className={`
        flex items-center gap-2.5 px-4.5 py-2 mx-2 rounded-lg cursor-pointer 
        transition-colors duration-150
        ${isActive 
          ? 'bg-teal-700 text-white' 
          : 'text-teal-700'
        }
      `}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = '#f0f7f7';
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = 'transparent';
        }
      }}
    >
      <span 
        className={`shrink-0 ${isActive ? 'text-white' : 'text-teal-700'}`}
      >
        {icon}
      </span>
      <span
        className={`
          text-xs leading-tight
          ${isActive ? 'font-semibold' : 'font-normal'}
        `}
        style={{ fontSize: '11.5px', lineHeight: 1.3 }}
      >
        {label}
      </span>
    </div>
  );
};

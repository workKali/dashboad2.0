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
          ? 'bg-teal-700 text-white hover:bg-teal-800' 
          : 'text-teal-700 hover:bg-gray-100'
        }
      `}
    >
      <span className="shrink-0">
        {icon}
      </span>
      <span className="text-xs leading-tight font-normal">
        {label}
      </span>
    </div>
  );
};

'use client';

import { ToggleGroup } from "@/shared/components";

export default function Home() {
  const toggleOptions = [
    { value: 'montos', label: 'Montos' },
    { value: 'has', label: 'Hás' }
  ];

  const handleToggleChange = (value: string) => {
    console.log('Selected:', value);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <ToggleGroup 
        options={toggleOptions}
        defaultValue="montos"
        onChange={handleToggleChange}
      />
    </div>
  );
}

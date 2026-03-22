'use client';

import ToggleGroup from "@/shared/components/ui/ToggleGroup";
import StatusIndicator from "@/features/dashboard/components/StatusIndicator";

export default function Home() {
  const toggleOptions = [
    { value: 'montos', label: 'Montos' },
    { value: 'has', label: 'Hás' }
  ];

  const handleToggleChange = (value: string) => {
    console.log('Selected:', value);
  };

  return (
    <div className="flex flex-col items-center h-screen bg-gray-400 gap-4">
      <ToggleGroup
        options={toggleOptions}
        defaultValue="montos"
        onChange={handleToggleChange}
      />
      <StatusIndicator>EN VIVO</StatusIndicator>
      <StatusIndicator variant='approved' size='sm'>Estado: Aprobado</StatusIndicator>
    </div>
  );
}

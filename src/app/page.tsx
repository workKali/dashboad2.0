'use client';

import ToggleGroup from "@/shared/components/ui/ToggleGroup";
import StatusIndicator from "@/shared/components/ui/StatusIndicator/StatusIndicator";

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
      <StatusIndicator status="live" text="EN VIVO" size="md" />
      <StatusIndicator status="live" text="EN VIVO" size="sm" />
    </div>
  );
}

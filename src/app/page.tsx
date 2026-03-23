'use client';

import ToggleGroup from "@/shared/components/ui/ToggleGroup";
import ButtonInfo from "@/features/dashboard/components/ButtonInfo";

export default function Home() {
  const toggleOptions = [
    { value: 'montos', label: 'Montos' },
    { value: 'has', label: 'Hás' }
  ];

  const handleToggleChange = (value: string) => {
    console.log('Selected:', value);
  };

  return (
    <div className="flex flex-col items-center h-screen  gap-4">
      <ToggleGroup
        options={toggleOptions}
        defaultValue="montos"
        onChange={handleToggleChange}
      />

      <ButtonInfo variant='high-risk' badge={10} badgeColor='deforestation'>Ver fincas con deficit hidrico</ButtonInfo>
    </div>
  );
}

'use client';

import ToggleGroup from "@/shared/components/ui/ToggleGroup";
import Badge from "@/shared/components/ui/Badge";
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

      <Badge color='low'>Bajo</Badge>
      <Badge color='medium'>Medio</Badge>
      <Badge color='high'>Alto</Badge>

      <Badge size='xs'>mora</Badge>
      <Badge size='xs' color='high'>$42.M</Badge>

      <Badge color='low' rounded='full' size='sm'>7 Fincas con alerta</Badge>
      <Badge color='medium'>mora</Badge>


      <ButtonInfo variant='high-risk' badge={10} badgeColor='deforestation'>Ver fincas con deficit hidrico</ButtonInfo>
    </div>
  );
}

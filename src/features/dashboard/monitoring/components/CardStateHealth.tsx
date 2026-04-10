import CardInfo from '@/features/dashboard/components/ui/CardInfo';
import { Badge } from '@/shared/components/ui/Badge';
import DotText from './DotText';

const CardStateHealth = () => {
    return (
        <CardInfo topBorder="bg-green-600" className="gap-1">
            <p className="text-base font-semibold text-secondary uppercase tracking-[0.06em] m-0">Estado de Salud</p>

            <HealthStatus label="Óptimo" color="optimum" value="39%" />
            <HealthStatus label="Bueno" color="low" value="17%" />
            <HealthStatus label="Requiere atención" color="medium" value="17%" />
        </CardInfo>
    );
};

export default CardStateHealth;


interface HealthStatusProps {
    label: string;
    color: 'optimum' | 'low' | 'medium';
    value: string;
}

const HealthStatus = ({ label, color, value }: HealthStatusProps) => {
    return (
        <div className="flex items-center justify-between">
            <DotText label={label} color={color} />
            <Badge variant={color} size="sm">
                {value}
            </Badge>
        </div>
    );
};
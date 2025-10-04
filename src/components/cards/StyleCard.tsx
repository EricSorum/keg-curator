import { Card } from '../ui/card';
import { StyleType } from '@/models/StyleType';

interface StyleCardProps {
  style: StyleType
}
export default function StyleCard({style}: StyleCardProps) {
  return (
    <Card className="transition-colors duration-300 hover:border-amber-200 hover:shadow-md
    flex flex-col content-center align-center p-2 rounded-md">
      <div className="text-center font-serif">
        <p className="text-md tracking-tight">
          {style.label}
        </p>
      </div>
    </Card>
  );
};

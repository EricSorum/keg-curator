import { Card } from '../ui/card';
import { Counter } from '../ui/counter';
import { useState } from 'react';
import { StyleType } from '@/models/StyleType';

interface StyleCardProps {
  style: StyleType
}

export default function StyleCard({style}: StyleCardProps) {
  const [quantity, updateQuantity] = useState(style.quantity) 

  return (
    <Card className="transition-colors duration-300 hover:border-amber-200 hover:shadow-md
    flex flex-col content-center align-center p-2 rounded-md">
      <div className="text-center flex justify-between items-center w-100 font-serif">
        <div className="text-md tracking-tight">
          {style.label} - 
        </div>
          <Counter number={quantity} setNumber={updateQuantity}/>
        </div>
    </Card>
  );
};

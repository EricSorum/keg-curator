import { Card } from '../ui/card';
import { StyleType } from '@/models/StyleType';
import { Counter } from '../ui/counter';
import { useState } from 'react';

interface StyleCardProps {
  style: StyleType
}

// need to add the results state and the setNumber prop needs to a function that updates that

export default function StyleCard({style}: StyleCardProps) {
  const [quantity, updateQuantity] = useState(style.quantity) 
  return (
    <Card className="transition-colors duration-300 hover:border-amber-200 hover:shadow-md
    flex flex-col content-center align-center p-2 rounded-md">
      <div className="text-center font-serif">
        <p className="text-md tracking-tight">
          {style.label} - 
          
          <Counter number={quantity} setNumber={updateQuantity}/>
          

        </p>
      </div>
    </Card>
  );
};

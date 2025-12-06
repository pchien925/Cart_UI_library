// src/components/organisms/CartItemCard.tsx
import React from 'react';
import { Card } from '../atoms/Card';
import { Button } from '../atoms/Button';
import type { CartItem } from '../../types';

interface CartItemCardProps {
  item: CartItem;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

export const CartItemCard: React.FC<CartItemCardProps> = ({
  item,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  const handleQuantityChange = (delta: number) => {
    onUpdateQuantity(item.id, item.quantity + delta);
  };

  return (
    <Card className="flex items-center space-x-4 mb-4">
      {/* Giả lập Image */}
      <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0">
        <span className="text-sm block text-center pt-5">Ảnh SP</span>
      </div>

      <div className="flex-grow">
        <h4 className="font-bold text-lg">{item.name}</h4>
        <p className="text-gray-600">
          Giá: ${item.price.toFixed(2)}
        </p>
      </div>

      <div className="flex items-center space-x-2 flex-shrink-0">
        <Button
          variant="secondary"
          className="p-1 w-8 h-8"
          onClick={() => handleQuantityChange(-1)}
          disabled={item.quantity <= 1}
        >
          -
        </Button>
        <span className="w-8 text-center border p-1 rounded">
          {item.quantity}
        </span>
        <Button
          variant="secondary"
          className="p-1 w-8 h-8"
          onClick={() => handleQuantityChange(1)}
        >
          +
        </Button>
      </div>
      
      <div className="flex-shrink-0">
        <p className="font-bold text-xl text-blue-600">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      <Button
        variant="danger"
        className="p-1 text-sm flex-shrink-0"
        onClick={() => onRemoveItem(item.id)}
      >
        Xóa
      </Button>
    </Card>
  );
};
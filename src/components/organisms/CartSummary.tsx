// src/components/organisms/CartSummary.tsx
import React, { useMemo } from 'react';
import { Card } from '../atoms/Card';
import { Button } from '../atoms/Button';
import type { CartItem } from '../../types';

interface CartSummaryProps {
  items: CartItem[];
  onCheckout: () => void;
}

export const CartSummary: React.FC<CartSummaryProps> = ({ items, onCheckout }) => {
  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [items]);

  const shipping = 10.00; // Giả định phí vận chuyển
  const total = subtotal + shipping;

  return (
    <Card className="p-6">
      <h3 className="text-2xl font-bold mb-4 border-b pb-2">Tổng kết Đơn hàng</h3>
      <div className="space-y-2 text-gray-700">
        <div className="flex justify-between">
          <span>Tạm tính ({items.length} sản phẩm):</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Vận chuyển:</span>
          <span className="font-medium">${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between pt-4 border-t border-dashed">
          <span className="text-xl font-bold">Tổng cộng:</span>
          <span className="text-2xl font-bold text-blue-600">${total.toFixed(2)}</span>
        </div>
      </div>
      <Button
        variant="primary"
        className="mt-6 w-full text-lg"
        onClick={onCheckout}
        disabled={items.length === 0}
      >
        Thanh toán
      </Button>
    </Card>
  );
};
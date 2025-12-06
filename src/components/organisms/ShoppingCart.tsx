// src/components/organisms/ShoppingCart.tsx
import React, { useCallback, useState } from 'react';
import { CartItemCard } from './CartItemCard';
import { CartSummary } from './CartSummary';
import type { CartItem } from '../../types';

// Dữ liệu mẫu ban đầu
const initialCart: CartItem[] = [
  { id: '1', name: 'Laptop Gaming X', price: 1200.00, quantity: 1 },
  { id: '2', name: 'Màn hình 4K', price: 450.50, quantity: 2 },
  { id: '3', name: 'Bàn phím cơ', price: 80.00, quantity: 1 },
];

export const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  }, []);

  const removeItem = useCallback((id: string) => {
    // Thường sẽ mở Modal xác nhận trước khi xóa (bỏ qua ở đây để code gọn)
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  }, []);
  
  const handleCheckout = () => {
    alert('Thanh toán đã được xử lý!');
    // Thực hiện logic chuyển hướng hoặc gọi API thanh toán
  };

  const isEmpty = cartItems.length === 0;

  return (
    <div className="p-8 max-w-6xl mx-auto bg-gray-50">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
        🛒 Thư viện Giỏ hàng (Cart UI Library)
      </h1>
      
      {isEmpty ? (
        <div className="text-center p-10 border-2 border-dashed rounded-lg bg-white">
          <p className="text-xl text-gray-500">Giỏ hàng của bạn đang trống.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cột danh sách sản phẩm */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Các mặt hàng</h2>
            {cartItems.map(item => (
              <CartItemCard
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeItem}
              />
            ))}
          </div>

          {/* Cột tóm tắt */}
          <div className="lg:col-span-1">
            <CartSummary items={cartItems} onCheckout={handleCheckout} />
          </div>
        </div>
      )}
    </div>
  );
};
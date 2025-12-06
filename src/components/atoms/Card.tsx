import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-white shadow-md rounded-lg p-4 transition duration-300 ${className}`}
    >
      {children}
    </div>
  );
};
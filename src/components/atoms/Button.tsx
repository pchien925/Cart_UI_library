import React from 'react';
import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const getVariantStyle = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return 'bg-blue-600 text-white hover:bg-blue-700';
    case 'secondary':
      return 'bg-gray-200 text-gray-800 hover:bg-gray-300';
    case 'danger':
      return 'bg-red-600 text-white hover:bg-red-700';
    default:
      return 'bg-gray-500 text-white hover:bg-gray-600';
  }
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyle = 'py-2 px-4 rounded transition duration-150 ease-in-out font-semibold';
  return (
    <button
      className={`${baseStyle} ${getVariantStyle(variant)} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
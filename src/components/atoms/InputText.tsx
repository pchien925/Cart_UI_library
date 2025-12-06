import React from 'react';
import type { InputHTMLAttributes } from 'react';

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const InputText: React.FC<InputTextProps> = ({ label, error, className = '', ...props }) => {
  const baseStyle = 'p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full';
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        type="text"
        className={`${baseStyle} ${error ? 'border-red-500' : 'border-gray-300'} ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};
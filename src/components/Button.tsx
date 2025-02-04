import React from 'react';
import { ButtonProps } from '../types/button';
import './Button.css';

/**
 * A customizable button component with different styles and sizes.
 */
export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  size = 'medium',
}) => {
  return (
    <button className={`button ${variant} ${size}`} onClick={onClick}>
      {label}
    </button>
  );
};

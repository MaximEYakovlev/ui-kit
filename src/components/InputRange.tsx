import React from 'react';
import { InputRangeProps } from '../types/inputRange';
import './InputRange.css';

/**
 * A customizable range input component.
 */
export const InputRange: React.FC<InputRangeProps> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
}) => {
  return (
    <input
      type="range"
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={(e) => onChange(Number(e.target.value))}
      className="input-range"
    />
  );
};

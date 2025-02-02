import React from "react";

/**
 * Props for the InputRange component.
 */
export interface InputRangeProps {
    /** Current value of the range input */
    value: number;
    /** Callback function when the value changes */
    onChange: (value: number) => void;
    /** Minimum value */
    min?: number;
    /** Maximum value */
    max?: number;
    /** Step value */
    step?: number;
}

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
            className="w-full cursor-pointer"
        />
    );
};



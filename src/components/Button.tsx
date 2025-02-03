import React from "react";
import { ButtonProps } from "../types/button";

/**
 * A customizable button component with different styles and sizes.
 */
export const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    variant = "primary",
    size = "medium"
}) => {
    const baseStyle = "rounded-lg font-semibold focus:outline-none transition-all";
    const variantStyles = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-gray-300 text-black hover:bg-gray-400",
    };
    const sizeStyles = {
        small: "px-2 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg",
    };

    return (
        <button
            className={`${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

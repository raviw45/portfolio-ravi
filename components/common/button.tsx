"use client";

import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

const Button = ({
  children,
  icon,
  variant = "primary",
  size = "md",
  fullWidth = false,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) => {
  // Base styles
  const baseStyles =
    "rounded-md font-medium flex items-center justify-center transition-all duration-300 ease-in-out";

  // Variant styles
  const variantStyles = {
    primary:
      "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg",
    secondary:
      "bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200",
    outline:
      "border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20",
  };

  // Size styles
  const sizeStyles = {
    sm: "text-sm px-3 py-1.5 gap-1.5",
    md: "text-base px-4 py-2 gap-2",
    lg: "text-lg px-5 py-2.5 gap-2.5",
  };

  // Width styles
  const widthStyles = fullWidth ? "w-full" : "";

  // Disabled styles
  const disabledStyles = disabled
    ? "opacity-60 cursor-not-allowed"
    : "hover:scale-[1.02] active:scale-[0.98]";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${widthStyles}
        ${disabledStyles}
        ${className}
      `}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;

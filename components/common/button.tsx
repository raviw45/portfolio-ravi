import React from "react";

interface IndigoButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Button: React.FC<IndigoButtonProps> = ({
  icon,
  children,
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 dark:hover:bg-indigo-500 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500";

  return (
    <button className={`${baseClasses} ${className}`} {...props}>
      {icon && <span className="text-white">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;

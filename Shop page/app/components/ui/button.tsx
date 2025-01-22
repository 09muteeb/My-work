import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode; // Content inside the button
  onClick?: () => void; // Click handler
  variant?: "primary" | "secondary" | "ghost" | "white-gray"; // Button styles (added white-gray)
  className?: string; // Additional classes
  [key: string]: any; // Any additional props (e.g., type, aria-label)
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  className,
  ...props
}) => {
  let baseClasses = "px-4 py-2 rounded-md focus:outline-none transition";

  // Determine button style based on the variant
  switch (variant) {
    case "primary":
      baseClasses += " bg-blue-500 text-white hover:bg-blue-600";
      break;
    case "secondary":
      baseClasses += " bg-gray-200 text-black hover:bg-gray-300";
      break;
    case "ghost":
      baseClasses += " bg-transparent text-black hover:bg-gray-100";
      break;
    case "white-gray":
      baseClasses += " bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-800"; // New white-gray variant
      break;
    default:
      break;
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

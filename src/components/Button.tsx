import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "simple" | "plane";
}

const variantClasses = {
  "primary": "bg-orange-500 text-white px-4 py-1 rounded-md",
  "secondary": "bg-pink-500 text-white px-4 py-1 rounded-md",
  "simple": "bg-white text-black border p-1 rounded-md",
  "plane": "p-1"
}

const defaultClasses = "cursor-pointer"

export function Button({children, className = "", variant = "primary", ...props}: ButtonProps) {
    return (
      <button {...props} className={`
        ${variantClasses[variant]}
        ${defaultClasses}
        ${className}
      `}>
            {children}
        </button>
    )
}
import React from "react";

interface InputBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "number" | "password";
  className?: string;
  placeholder?: string;
}
export function InputBox({ className, placeholder, type, ...props }: InputBoxProps) {
  return (
    <input type={type} placeholder={placeholder} className={`p-3 border rounded-lg ${className}`} {...props} />
  )
}
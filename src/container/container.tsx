"use client";

import React from "react";

export function Container({ children, className }: { children: React.ReactNode; className?: string; }) {
  return (
    <div className={`mx-auto max-w-6xl my-10 justify-center ${className}`}>
      {children}
    </div>
  )
}
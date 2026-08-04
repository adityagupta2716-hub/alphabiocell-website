"use client";

import React from "react";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  return (
    <div id="scroll-container">
      {children}
    </div>
  );
}

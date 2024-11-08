// src/components/ui/card.tsx
import React from 'react';

export const Card = ({ children }) => (
  <div className="p-4 shadow-md border border-gray-200 rounded-lg">
    {children}
  </div>
);

export const CardContent = ({ children }) => (
  <div className="p-2">
    {children}
  </div>
);

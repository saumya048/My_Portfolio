import React from "react";

export function Card({ children }) {
  return <div className="p-4 bg-gray-800 rounded-lg">{children}</div>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}

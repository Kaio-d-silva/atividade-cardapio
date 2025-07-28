import React from "react";

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
}: {
  children: React.ReactNode | string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}) {
  return (
    <button
      type={type}
      className={`w-full py-2 rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
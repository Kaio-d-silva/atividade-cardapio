import React from "react";
import "../estilos/index.css";

export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
        {children}
      </div>
    </div>
  );
}
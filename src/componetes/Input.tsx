import React, { ChangeEventHandler, InputHTMLAttributes } from "react";

export interface InputProps {
    value: React.InputHTMLAttributes<HTMLInputElement>["value"];
    placeholder?: string;
    type: InputHTMLAttributes<HTMLInputElement>["type"] | "text";
    onChange: ChangeEventHandler<HTMLInputElement>;
    errorMessage?: string;
}

export default function Input(props: InputProps) {

    const { value, placeholder, type, onChange, errorMessage } = props;
    return (
        <div className="w-full mb-4">
          <input
            type={type}
            placeholder={placeholder || "Digite aqui..."}
            value={value}
            onChange={onChange}
            className={`w-full p-2 border rounded ${
                errorMessage
                ? "border-red-500"
                : value
                ? "border-blue-500"
                : "border-gray-300"
            }`}
          />
          {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
}
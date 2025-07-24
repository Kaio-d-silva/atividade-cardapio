import React, { useState } from "react";
import useForm from "../hooks/userForme";
import { useNavigate } from "react-router-dom";
import "../estilos/index.css";
import Input from "./Input"

interface SnackbarState {
  message: string;
  type?: "success" | "error" | "warning" | "info"; // Torna o tipo opcional
  duration: number;
}

export default function App() {
  const { values, errors, handleChange, validate } = useForm({
    email: "",
    senha: "",
  });

  const [snackbar, setSnackbar] = useState<SnackbarState>({
    message: "",
    type: "success",
    duration: 0,
  });

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        {/* <div className="w-full mb-4">
          <input
            type="text"
            placeholder="Email"
            value={values.email}
            onChange={handleChange("email")}
            className={`w-full p-2 border rounded ${
              errors.email
                ? "border-red-500"
                : values.email
                ? "border-blue-500"
                : "border-gray-300"
            }`}
          />
          {errors.email && <p>{errors.email}</p>}
        </div> */}
        <Input
        type = "text"
        placeholder = "Email" 
        value = {values.email}
        onChange = {handleChange("email")}
        errorMessage= {errors.email}
        />


        {/* <div className="w-full mb-4">
          <input
            type="password"
            placeholder="Senha"
            value={values.senha}
            onChange={handleChange("senha")}
            className={`w-full p-2 border rounded ${
              errors.senha
                ? "border-red-500"
                : values.senha
                ? "border-blue-500"
                : "border-gray-300"
            }`}
          />
          {errors.senha && <p>{errors.senha}</p>}
        </div> */}
        <Input
        type="password"
        placeholder="Senha"
        value={values.senha}
        onChange={handleChange("senha")}
        errorMessage={errors.senha}
        />
        <button
          type="button"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          onClick={() => {navigate("/")}}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
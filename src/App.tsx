import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./componetes/Home";
import DetalhesPrato from "./componetes/DetalhesPrato";
import FormularioPrato from "./componetes/FormularioPrato";
import Login from "./componetes/Login";
import { AuthProvider } from "./context/authContext";
import Carrinho from "./componetes/Carrinho"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthProvider><Home/></AuthProvider>} />
        <Route path="/login" element={<Login />} />
        <Route path="/detalhes-prato/:id" element={<DetalhesPrato />} />
        <Route path="/cadastro-prato" element={<FormularioPrato />} />
        <Route path="/editar-prato/:id" element={<FormularioPrato isEditing= {true} />} />
        <Route path="/carrinho" element={<Carrinho/>} />

      </Routes>
    </Router>
  );
}

export default App;

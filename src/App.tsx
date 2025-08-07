import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./componetes/Home";
import DetalhesPrato from "./componetes/DetalhesPrato";
import FormularioPrato from "./componetes/FormularioPrato";
import Login from "./componetes/Login";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthProvider><Home /></AuthProvider>} />
        <Route path="/detalhes-prato/:id" element={<DetalhesPrato />} />
        <Route path="/cadastro-prato" element={<FormularioPrato />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
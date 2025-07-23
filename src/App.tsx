import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./componetes/Home";
import DetalhesPrato from "./componetes/DetalhesPrato";
import FormularioPrato from "./componetes/FormularioPrato";
import Login from "./componetes/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/detalhes-prato/:id" element={<DetalhesPrato />} />
        <Route path="/cadastro-prato" element={<FormularioPrato />} />
      </Routes>
    </Router>
  );
}

export default App;

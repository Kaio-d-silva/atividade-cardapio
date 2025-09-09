import React from "react";
import adicionarPrato from "../assets/imagem_adicionar_prato.jpg";
import { Link } from "react-router-dom";
import "../estilos/card-novo-prato";

const CardNovoPrato = () => {

  return (
    <Link to="/cadastro-prato" className="link-card">
      <div className="prato-card">
        <img src={adicionarPrato} alt="Imagem do prato" />
        <h2>Clique aqui para adicionar um novo prato</h2>
      </div>
    </Link>
  );
};

export default CardNovoPrato;

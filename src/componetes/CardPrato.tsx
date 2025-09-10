import React, { FC } from "react";
import "../estilos/card-prato.css";
import { useNavigate } from "react-router-dom";
import api from "../http/api";
import ActionsPrato from "./ActionsPrato";

interface CardPratoProps {
  id: number;
  nome: string;
  cozinha: string;
  descricao_resumida: string;
  imagem: string;
  usuario: any;
}

const CardPrato: FC<CardPratoProps> = (props) => {
  return (
    <>
      <div className="prato-card">
        {props.usuario?.role === "Gerente" && (
          <div className="menu-container">
            <button className="menu-button" onClick={() => {}}>
              &#x22EE;
            </button>
            <div className="dropdown-menu">
              <ActionsPrato pratoId={props.id} api={api} />
            </div>
          </div>
        )}
        <img src={props.imagem} alt="Feijoada brasileira" />
        <h2 className="nome-prato">{props.nome}</h2>
        <p className="cozinha-prato">{props.cozinha}</p>
        <p className="descricao-curta-prato">{props.descricao_resumida}</p>
        <a href="#" className="btn">
          Ver Detalhes
        </a>
      </div>
    </>
  );
};

export default CardPrato;

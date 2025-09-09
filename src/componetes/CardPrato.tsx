import React, { FC } from "react";
import "../estilos/card-prato.css";
import { useNavigate } from "react-router-dom";
import api from "../http/api";

interface CardPratoProps {
  id : number
  nome : string
  cozinha : string
  descricao_resumida : string
  imagem : string
  usuario: any
}

const CardPrato: FC<CardPratoProps> = (props) => {
  const navigate = useNavigate()

  const deletePrato = async (id: number) => {
    try {
      console.log("Excluindo prato com ID:", id);
      await api.delete(`/pratos/${id}`);
      console.log("Prato excluído com sucesso");
      // Aqui você pode atualizar o estado ou fazer outra ação após a exclusão
    } catch (error) {
      console.error("Erro ao excluir prato:", error);
    }
  };

  return (
    <>
      <div className="prato-card">
        {props.usuario?.role === 'Gerente' && (<div className="menu-container">
          <button className="menu-button" onClick={() => {}}>
            &#x22EE;
          </button>
          <div className="dropdown-menu">
            <button
            className="dropdown-item"
            onClick={() => navigate(`/editar-prato/${props.id}`)}>
              Editar
            </button>
            
            <button 
            className="dropdown-item"
            onClick={() => {deletePrato(props.id)}}>
              Excluir
            </button>
            <button
            className="dropdown-item"
            onClick={() => navigate(`/detalhes-prato/${props.id}`)}
            >
              Ver Detalhes
            </button>
          </div>
        </div>)}
        <img
          src={props.imagem}
          alt="Feijoada brasileira"
        />
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

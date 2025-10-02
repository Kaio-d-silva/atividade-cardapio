import React, { use, useEffect, useState } from "react";
import "../estilos/detalhes-prato.css"; // Importando o CSS específico para o componente
import { useNavigate, useParams } from "react-router-dom";
import api from "../http/api";


interface DetalhesPratoProps {  
  nome: string;
  cozinha: string;
  descricao_resumida: string;
  descricao_detalhada: string;
  imagem: string;
  valor: number;
}

function DetalhesPrato() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>(); 
  const [prato, setPrato] = useState<DetalhesPratoProps>({
    nome: "",
    cozinha: "",
    descricao_resumida: "",
    descricao_detalhada: "",
    imagem: "",
    valor: 0
  });

  useEffect(() => {
    const fetchPratoDetails = async () => {
      const prato = await api.get(`/pratos/${id}`);
      setPrato(prato.data);
    }
    fetchPratoDetails();
  }, [id]);


  return (
    <>
      <div className="detalhes-prato">
        <div className="detalhes-prato-card">
          <div className="detalhes-prato-card-header">
            <img
              src={prato.imagem}
              alt="imagem prato"
            />
            <div className="detalhes-prato-card-header-texto">
              <h1>{prato.nome}</h1>
              <p>
                <strong>Cozinha:</strong>{ prato.cozinha }
              </p>
              <p>
                <strong>Valor:</strong> R${prato.valor}
              </p>
            </div>
          </div>
          <p>
            <strong>Descrição da sua experiência Gastronômica:</strong> {prato.descricao_detalhada}
          </p>
          <button onClick={() => {navigate('/')}}>Voltar</button>
          <button> Adicionar ao carrinho </button>
        </div>
      </div>
    </>
  );
}

export default DetalhesPrato;

import React, { useContext, useEffect } from "react";
import "../estilos/home.css";
import terraDasAguas from "../assets/terra_das_aguas_edit.jpg";
import { AuthContext } from "../context/authContext";
import api from "../http/api";
import HomeGerente from "./HomeAdmin";
import { HomeCliente } from "./HomeCliente";
import { BotaoCarrinho } from "./BotaoCarrinho";

export interface Prato {
  id : number
  nome : string
  cozinha : string
  descricao_resumida : string
  descricao_detalhada : string
  imagem : string
  valor : number
} 


function Home() {

  const [pratos, setPrato] = React.useState<Prato[]>([{
    id: 0,
    nome: "",
    cozinha: "",
    descricao_resumida: "",
    descricao_detalhada: "",
    imagem: "",
    valor: 0,
  }]);

  useEffect(() => {
    const fetchPrato = async () => {
      try {
        const response = await api.get("/pratos");
        setPrato(response.data);
      } catch (error) {
        console.error("Erro ao buscar prato:", error);
      }
    };

    fetchPrato();
  }, [pratos]);

  const authContext = useContext(AuthContext)

  if(!authContext){
    throw new Error("AuthContext não esta disponivel ")
  }

  const { usuario } = authContext

  return (
    <div className="home">
      <div className="banner">
        <img src={terraDasAguas} alt="" />
      </div>
      <h1>Bem vindo ao Restaurante Terra das Aguas SENAC - MS</h1>
      <div className="container-carrinho">
      {pratos && usuario?.role !== "Gerente" &&
          <BotaoCarrinho/>
        }
      </div>
      <div className="lista-pratos">
        

        {pratos && usuario?.role !== "Gerente" && 
        <HomeCliente
        pratos={pratos}
        usuario={usuario}

        />}
        {pratos && usuario?.role === "Gerente" && (
          <HomeGerente
          pratos={pratos}
          api={api}
          />
        )}

      </div>
    </div>
  );
}

export default Home;

import React, { useContext, useEffect } from "react";
import "../estilos/home.css";
import terraDasAguas from "../assets/terra_das_aguas_edit.jpg";
import CardPrato from "./CardPrato";
import CardNovoPrato from "./CardNovoPrato";
import { AuthContext } from "../context/authContext";
import api from "../http/api";
import HomeGerente from "./HomeAdmin";

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

  const { usuario, verificarLogin } = authContext

  return (
    <div className="home">
      <div className="banner">
        <img src={terraDasAguas} alt="" />
      </div>
      <h1>Bem vindo ao Restaurante Terra das Aguas SENAC - MS</h1>
    
      <div className="lista-pratos">
        <CardNovoPrato />
        {pratos && usuario?.role !== "Gerente" && 
          pratos
          .map((item: Prato) => (

          <CardPrato 
            key={item.id}
            id={item.id}
            nome={item.nome} 
            cozinha={item.cozinha} 
            descricao_resumida={item.descricao_resumida} 
            imagem={item.imagem} 
            usuario={usuario}
          />
        ))}
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

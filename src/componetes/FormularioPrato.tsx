import React from "react";
import "../estilos/FormularioPrato.css"; // Importando o CSS específico para o componente
import api from "../http/api";
import Input from "./Input";
import useForm from "../hooks/userForm";

interface FormularioPratoProps {
  isEditing?: boolean; 
}

const FormularioPrato: React.FC = (props: FormularioPratoProps) => {
 
 
  const { values, errors, handleChange } = useForm({
    nome: "",
    cozinha: "",
    descricaoResumida: "",
    descricaoDetalhada: "",
    imagem: "",
    valor: 0
  });


  const [prato, setPrato] = React.useState({
    nome: "",
    cozinha: "",
    descricaoResumida: "",
    descricaoDetalhada: "",
    imagem: "",
    valor: 0
  });
  
  
  const criarPrato = async () => {
    try {
      console.log("Criando prato:", values);
      const response = await api.post("/pratos", {
        nome: values.nome,
        cozinha: values.cozinha,
        descricao_resumida: values.descricaoResumida,
        descricao_detalhada: values.descricaoDetalhada,
        imagem: values.imagem,
        valor: values.valor
      })
      console.log("Prato criado com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao criar prato:", error);  
    }}
    

  return (
    <>
      <div className="form-container">
        <h1>Cadastro de Pratos</h1>
        <p>Bem-vindo ao sistema de cadastro de pratos!</p>
        <Input
          placeholder="Digite o nome do prato"
          errorMessage={errors.nome}
          value={values.nome}
          type="text"
          onChange={handleChange("nome")}
        />
        <Input
          placeholder="Digite o tipo de cozinha do prato"
          errorMessage={errors.cozinha}
          value={values.cozinha}
          type="text"
          onChange={handleChange("cozinha")}

        />
        <Input
          placeholder="Digite a descrição resumida do prato"
          errorMessage={errors.descricaoResumida}
          value={values.descricaoResumida}
          type="text"
          onChange={handleChange("descricaoResumida")}
        />
        <Input
          placeholder="Digite a descrição detalhada do prato"
          errorMessage={errors.descricaoDetalhada}
          value={values.descricaoDetalhada}
          type="text"
          onChange={handleChange("descricaoDetalhada")}
        />
        <Input
          placeholder="Digite a URL da imagem do prato"
          errorMessage={errors.imagem}
          value={values.imagem}
          type="text"
          onChange={handleChange("imagem")}
        />
        <Input
          placeholder="Digite o valor do prato"
          errorMessage={errors.valor}
          value={values.valor.toString()}
          type="number"
          onChange={handleChange("valor")}
        />
        <button 
        type="submit"
        onClick={() => {criarPrato()}}
        >
          Cadastrar Prato</button>
      </div>
    </>
  );
};

export default FormularioPrato;

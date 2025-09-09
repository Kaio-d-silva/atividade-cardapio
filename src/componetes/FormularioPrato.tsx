import React, { useEffect, useState } from "react";
import "../estilos/formulario-prato.css"; // Importando o CSS específico para o componente
import api from "../http/api";
import Input from "./Input";
import useForm from "../hooks/userForm";
import { useParams } from "react-router-dom";
import Snackbar, { SnackbarState } from "./Snackbar";

interface FormularioPratoProps {
  isEditing?: boolean;
}

const FormularioPrato = ({ isEditing = false }: FormularioPratoProps) => {
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    message: "",
    type: "success",
    duration: 0,
  })
  const { values, errors, handleChange, setData } = useForm({
    nome: "",
    cozinha: "",
    descricao_resumida: "",
    descricao_detalhada: "",
    imagem: "",
    valor: 0
  });


  const criarPrato = async () => {
    try {
      console.log("Criando prato:", values);
      const response = await api.post("/pratos", {
        nome: values.nome,
        cozinha: values.cozinha,
        descricao_resumida: values.descricao_resumida,
        descricao_detalhada: values.descricao_detalhada,
        imagem: values.imagem,
        valor: values.valor
      })
      setSnackbar({
        message: "Prato criado com sucesso!",
        type: "success",
        duration: 3000,
      });
    } catch (error) {
      setSnackbar({
        message: "Erro ao criar prato. Tente novamente.",
        type: "error",
        duration: 3000,
      });
    }
  }

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!isEditing || !id) return;
    const fetchPrato = async () => {
      try {
        const response = await api.get(`/pratos/${id}`)
        const pratoEditado = {
          id: response.data.id,
          nome: response.data.nome,
          cozinha: response.data.cozinha,
          descricao_resumida: response.data.descricao_resumida,
          descricao_detalhada: response.data.descricao_detalhada,
          imagem: response.data.imagem,
          valor: response.data.valor
        }
        setData(pratoEditado);


      } catch (error) {
        console.error("Erro ao buscar prato:", error);
      }

    }
    fetchPrato()
  }, [isEditing, id]);

  const editarPrato = async () => {
    try {
      const response = await api.put(`/pratos/${id}`, {
        nome: values.nome,
        cozinha: values.cozinha,
        descricao_resumida: values.descricao_resumida,
        descricao_detalhada: values.descricao_detalhada,
        imagem: values.imagem,
        valor: values.valor
      })
      console.log("Prato editado com sucesso:", response.data);
      setSnackbar({
        message: "Prato editado com sucesso!",
        type: "success",
        duration: 3000,
      });
    } catch (error) {
      console.error("Erro ao editar prato:", error);
      setSnackbar({
        message: "Erro ao editar prato.",
        type: "error",
        duration: 3000,
      });
    }
  }


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
          value={values.descricao_resumida}
          type="text"
          onChange={handleChange("descricao_resumida")}
        />
        <Input
          placeholder="Digite a descrição detalhada do prato"
          errorMessage={errors.descricao_detalhada}
          value={values.descricao_detalhada}
          type="text"
          onChange={handleChange("descricao_detalhada")}
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
        {!isEditing && (<button
          type="submit"
          onClick={() => { criarPrato() }}>
          Cadastrar Prato</button>)}
        {isEditing && (
          <button
            type="submit"
            onClick={() => { editarPrato() }}>
            Editar Prato</button>)}
        <Snackbar
          message={snackbar.message}
          type={snackbar.type}
          duration={snackbar.duration}
          onClose={() =>
            setSnackbar({ message: '', type: 'success', duration: 0 })
          }
        />
      </div>
    </>
  );
};

export default FormularioPrato;

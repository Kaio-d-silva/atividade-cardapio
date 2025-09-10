import { AxiosInstance } from "axios";
import { useNavigate } from "react-router-dom";

interface ActionsPratoProps {
  pratoId: number;
  api: AxiosInstance;
}

const ActionsPrato = (props: ActionsPratoProps) => {
  const navigate = useNavigate();

  const deletePrato = async (id: number) => {
    try {
      await props.api.delete(`/pratos/${id}`);
    } catch (error) {
      console.error("Erro ao excluir prato:", error);
    }
  };
  return (
    <>
      <button
        className="dropdown-item"
        onClick={() => navigate(`/editar-prato/${props.pratoId}`)}
      >
        Editar
      </button>

      <button
        className="dropdown-item"
        onClick={() => {
          deletePrato(props.pratoId);
        }}
      >
        Excluir
      </button>
      <button
        className="dropdown-item"
        onClick={() => navigate(`/detalhes-prato/${props.pratoId}`)}
      >Detalhes Prato</button>
    </>
  );
};

export default ActionsPrato;

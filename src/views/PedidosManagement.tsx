import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TabelaJS from '../components/TabelaJS';
import api from '../http/api';

interface Pedido {
  id: number;
  itens: string[];
  status: string;
}

const PedidosManagement: React.FC = () => {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<Pedido[]>('/pedidos');
        console.log(response);
        if (!response.status.toString().startsWith('2')) {
          throw new Error('Erro ao buscar os pedidos');
        }
        const data: Pedido[] = response.data;
        setPedidos(data);
      } catch (error) {
        console.error('Erro ao buscar os pedidos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (user: Pedido) => {
    navigate(`/pedidos/edit/${user.id}`);
  };

  const handleDelete = (user: Pedido) => {
    console.log(`Deletar prato com ID: ${user.id}`);
    setPedidos((prevUsers) => prevUsers.filter((u) => u.id !== user.id));
  };

  const handleView = (user: Pedido) => {
    navigate(`/pedidos/details/${user.id}`);
  };

  const columns: (keyof Pedido | 'Ações')[] = [
    'id',
    'itens',
    'status',
    'Ações',
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Gestão de Pratos</h2>
        <button
          type="button"
          onClick={() => navigate('/admin/novo-prato')}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Novo pedido
        </button>
      </div>
      {loading ? (
        <p className="text-center">Carregando pedidos...</p>
      ) : (
        <TabelaJS
          columns={columns}
          data={pedidos}
          actions={{
            edit: handleEdit,
            delete: handleDelete,
            view: handleView,
          }}
        />
      )}
    </div>
  );
};

export default PedidosManagement;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TabelaJS from '../components/TabelaJS';
import api from '../http/api';

interface Prato {
  id: number;
  nome: string;
  descricao_detalhada: string;
  descricao_resumida: string;
  cozinha: string;
  valor: number;
}

const PratosManagement: React.FC = () => {
  const [pratos, setPratos] = useState<Prato[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<Prato[]>('/pratos/');
        if (!response.status.toString().startsWith('2')) {
          throw new Error('Erro ao buscar os pratos');
        }
        const data: Prato[] = response.data;
        setPratos(data);
      } catch (error) {
        console.error('Erro ao buscar os pratos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (user: Prato) => {
    navigate(`/pratos/edit/${user.id}`);
  };

  const handleDelete = (user: Prato) => {
    console.log(`Deletar prato com ID: ${user.id}`);
    setPratos((prevUsers) => prevUsers.filter((u) => u.id !== user.id));
  };

  const handleView = (user: Prato) => {
    navigate(`/pratos/details/${user.id}`);
  };

  const columns: (keyof Prato | 'Ações')[] = [
    'nome',
    'descricao_detalhada',
    'descricao_resumida',
    'cozinha',
    'valor',
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
          Novo Prato
        </button>
      </div>
      {loading ? (
        <p className="text-center">Carregando Pratos...</p>
      ) : (
        <TabelaJS
          columns={columns}
          data={pratos}
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

export default PratosManagement;

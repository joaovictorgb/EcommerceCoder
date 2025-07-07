import { notFound } from 'next/navigation';

// Simulação de dados
const tarefas = {
  '1': {
    id: '1',
    titulo: 'Implementar autenticação',
    descricao: 'Criar sistema de login e registro usando Next-Auth',
    status: 'pendente'
  },
  '2': {
    id: '2',
    titulo: 'Criar página de produtos',
    descricao: 'Desenvolver interface para listagem de produtos com filtros',
    status: 'em_andamento'
  },
  '3': {
    id: '3',
    titulo: 'Desenvolver carrinho de compras',
    descricao: 'Implementar funcionalidade de adicionar/remover itens do carrinho',
    status: 'pendente'
  }
};

export default function TarefaDetalhes({ params }: { params: { id: string } }) {
  const tarefa = tarefas[params.id];

  if (!tarefa) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-4">{tarefa.titulo}</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Descrição:</h2>
            <p className="text-gray-600">{tarefa.descricao}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Status:</h2>
            <span className={`inline-block px-2 py-1 rounded ${
              tarefa.status === 'pendente' 
                ? 'bg-yellow-100 text-yellow-800' 
                : 'bg-blue-100 text-blue-800'
            }`}>
              {tarefa.status === 'pendente' ? 'Pendente' : 'Em andamento'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 
import React from 'react';
import Link from 'next/link';

const tarefas = [
  {
    id: '1',
    titulo: 'Implementar autenticação',
    status: 'pendente'
  },
  {
    id: '2',
    titulo: 'Criar página de produtos',
    status: 'em_andamento'
  },
  {
    id: '3',
    titulo: 'Desenvolver carrinho de compras',
    status: 'pendente'
  }
];

export default function TarefasPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Tarefas</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <ul className="space-y-2">
          {tarefas.map((tarefa) => (
            <li key={tarefa.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
              <div className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  className="form-checkbox" 
                  checked={tarefa.status === 'em_andamento'}
                  readOnly
                />
                <span>{tarefa.titulo}</span>
              </div>
              <Link 
                href={`/tarefas/${tarefa.id}`}
                className="text-blue-500 hover:text-blue-700 transition-colors"
              >
                Ver detalhes
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 
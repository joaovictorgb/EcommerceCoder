"use client";

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Rodape from '@/components/Footer/Rodape';
import { Produto } from '@/components/Products/ProdutoCard';
import Image from 'next/image';

// Simulação de dados - em um caso real, isso viria de uma API
const produtos: Record<string, Produto> = {
  '1': {
    id: '1',
    nome: 'Smartphone Premium',
    preco: 2499.99,
    descricao: 'O mais avançado smartphone com câmera de última geração, tela AMOLED de 6.7" e processador ultra-rápido.',
    imagem: '/produtos/produto1.jpg',
    especificacoes: [
      'Tela 6.7" AMOLED',
      'Câmera 108MP',
      'Processador Octa-core',
      '256GB Armazenamento',
      'Bateria 5000mAh'
    ]
  },
  '2': {
    id: '2',
    nome: 'Notebook Profissional',
    preco: 4999.99,
    descricao: 'Notebook de alto desempenho para profissionais, com tela 4K e placa de vídeo dedicada.',
    imagem: '/produtos/produto2.jpg',
    especificacoes: [
      'Processador Intel i7',
      '16GB RAM',
      'SSD 512GB',
      'Tela 15.6" 4K',
      'Windows 11 Pro'
    ]
  }
};

export default function ProdutoDetalhes() {
  const params = useParams();
  const [quantidade, setQuantidade] = useState(1);
  const [tabAtiva, setTabAtiva] = useState('descricao');
  
  const produto = produtos[params.id as string];

  if (!produto) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Produto não encontrado</h2>
          <p className="text-gray-600">O produto que você está procurando não existe.</p>
        </div>
      </div>
    );
  }

  const handleAdicionarAoCarrinho = () => {
    // Implementar lógica do carrinho
    console.log('Adicionar ao carrinho:', { produto, quantidade });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Imagem do Produto */}
            <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={produto.imagem}
                alt={produto.nome}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Informações do Produto */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-gray-900">{produto.nome}</h1>
              
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-gray-900">
                  R$ {produto.preco.toFixed(2)}
                </span>
                <span className="text-sm text-gray-500">
                  Em até 12x sem juros
                </span>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {produto.descricao}
              </p>
              
              <div className="flex items-center gap-4">
                <label className="font-medium text-gray-700">Quantidade:</label>
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => setQuantidade(Math.max(1, quantidade - 1))}
                    className="px-4 py-2 hover:bg-gray-100 text-gray-900"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantidade}
                    onChange={(e) => setQuantidade(Math.max(1, parseInt(e.target.value)))}
                    className="w-16 text-center border-x py-2 text-gray-900"
                  />
                  <button
                    onClick={() => setQuantidade(quantidade + 1)}
                    className="px-4 py-2 hover:bg-gray-100 text-gray-900"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <button
                onClick={handleAdicionarAoCarrinho}
                className="w-full bg-blue-600 text-gray-900 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
              >
                Adicionar ao Carrinho
              </button>

              <div className="border-t pt-6 mt-6">
                <div className="flex gap-4 border-b">
                  <button
                    onClick={() => setTabAtiva('descricao')}
                    className={`pb-2 px-4 ${
                      tabAtiva === 'descricao'
                        ? 'border-b-2 border-blue-600 text-gray-900'
                        : 'text-gray-600'
                    }`}
                  >
                    Descrição
                  </button>
                  <button
                    onClick={() => setTabAtiva('especificacoes')}
                    className={`pb-2 px-4 ${
                      tabAtiva === 'especificacoes'
                        ? 'border-b-2 border-blue-600 text-gray-900'
                        : 'text-gray-600'
                    }`}
                  >
                    Especificações
                  </button>
                </div>
                
                <div className="pt-4">
                  {tabAtiva === 'descricao' ? (
                    <p className="text-gray-600 leading-relaxed">
                      {produto.descricao}
                    </p>
                  ) : (
                    <ul className="space-y-2">
                      {produto.especificacoes?.map((spec, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Rodape />
    </div>
  );
} 
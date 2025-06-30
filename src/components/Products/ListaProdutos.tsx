'use client';

import ProdutoCard, { Produto } from './ProdutoCard';

interface ListaProdutosProps {
  aoAdicionarAoCarrinho: (produto: Produto) => void;
}

// Produtos fixos para demonstração
const produtos: Produto[] = [
  {
    id: 1,
    nome: 'Notebook Pro',
    preco: 4999.99,
    imagem: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca4?w=500&q=80',
    descricao: 'Notebook de última geração com processador de alta performance.',
  },
  {
    id: 2,
    nome: 'Smartphone X',
    preco: 2499.99,
    imagem: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80',
    descricao: 'Smartphone com câmera de alta resolução e bateria de longa duração.',
  },
  {
    id: 3,
    nome: 'Fone de Ouvido Wireless',
    preco: 299.99,
    imagem: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    descricao: 'Fone de ouvido sem fio com cancelamento de ruído ativo.',
  },
  {
    id: 4,
    nome: 'Relógio Inteligente',
    preco: 899.99,
    imagem: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
    descricao: 'Relógio inteligente com monitor cardíaco e GPS integrado.',
  },
];

export default function ListaProdutos({ aoAdicionarAoCarrinho }: ListaProdutosProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-light text-center mb-2">Nossa Coleção</h2>
        <p className="text-gray-500 text-center mb-12">Produtos selecionados para você</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {produtos.map((produto) => (
            <ProdutoCard
              key={produto.id}
              produto={produto}
              aoAdicionarAoCarrinho={aoAdicionarAoCarrinho}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 
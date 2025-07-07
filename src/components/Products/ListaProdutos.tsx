'use client';

import React from 'react';
import ProdutoCard from './ProdutoCard';

// Dados simulados de produtos
const produtos = [
  {
    id: '1',
    nome: 'Smartphone Premium',
    preco: 2499.99,
    descricao: 'O mais avançado smartphone com câmera de última geração',
    imagem: '/produtos/produto1.jpg'
  },
  {
    id: '2',
    nome: 'Notebook Profissional',
    preco: 4999.99,
    descricao: 'Notebook de alto desempenho para profissionais',
    imagem: '/produtos/produto2.jpg'
  },
  {
    id: '3',
    nome: 'Smartwatch Elite',
    preco: 899.99,
    descricao: 'Monitore sua saúde com estilo',
    imagem: '/produtos/produto3.jpg'
  },
  {
    id: '4',
    nome: 'Fones Bluetooth',
    preco: 299.99,
    descricao: 'Som cristalino e cancelamento de ruído',
    imagem: '/produtos/produto4.jpg'
  }
];

export default function ListaProdutos() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {produtos.map((produto) => (
        <ProdutoCard key={produto.id} produto={produto} />
      ))}
    </div>
  );
} 
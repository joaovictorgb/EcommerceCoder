'use client';

import { useState } from 'react';
import Cabecalho from '@/components/Header/Cabecalho';
import Destaque from '@/components/Banner/Destaque';
import ListaProdutos from '@/components/Products/ListaProdutos';
import Carrinho from '@/components/Cart/Carrinho';
import Rodape from '@/components/Footer/Rodape';
import { Produto } from '@/components/Products/ProdutoCard';
import Link from 'next/link';

// Interface que estende Produto para incluir quantidade
interface ItemCarrinho extends Produto {
  quantidade: number;
}

/**
 * Página principal da aplicação
 * Gerencia o estado do carrinho e a integração entre os componentes
 */
export default function Home() {
  // Estados
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [itensCarrinho, setItensCarrinho] = useState<ItemCarrinho[]>([]);

  /**
   * Adiciona um produto ao carrinho
   * Se o produto já existe, incrementa a quantidade
   */
  const aoAdicionarAoCarrinho = (produto: Produto) => {
    setItensCarrinho((itensAnteriores) => {
      const itemExistente = itensAnteriores.find((item) => item.id === produto.id);
      if (itemExistente) {
        return itensAnteriores.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
      return [...itensAnteriores, { ...produto, quantidade: 1 }];
    });
    // Abre o carrinho automaticamente quando um produto é adicionado
    setCarrinhoAberto(true);
  };

  /**
   * Atualiza a quantidade de um item no carrinho
   * Se a quantidade for menor que 1, remove o item
   */
  const aoAtualizarQuantidade = (produtoId: number, quantidade: number) => {
    if (quantidade < 1) {
      aoRemoverItem(produtoId);
      return;
    }
    setItensCarrinho((itensAnteriores) =>
      itensAnteriores.map((item) =>
        item.id === produtoId ? { ...item, quantidade } : item
      )
    );
  };

  /**
   * Remove um item do carrinho
   */
  const aoRemoverItem = (produtoId: number) => {
    setItensCarrinho((itensAnteriores) =>
      itensAnteriores.filter((item) => item.id !== produtoId)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Destaque />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Produtos em Destaque</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra nossa seleção especial de produtos premium, cuidadosamente escolhidos para você.
          </p>
        </div>
        
        {/* Grade de categorias */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {['Eletrônicos', 'Moda', 'Casa'].map((categoria) => (
            <div key={categoria} className="relative overflow-hidden rounded-lg shadow-lg group">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-blue-500 to-purple-500">
                <div className="p-6 flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:scale-110 transition-transform duration-300">
                    {categoria}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lista de produtos */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <ListaProdutos />
        </div>

        {/* Seção de benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              titulo: 'Entrega Rápida',
              descricao: 'Receba seus produtos em até 2 dias úteis'
            },
            {
              titulo: 'Pagamento Seguro',
              descricao: 'Suas transações sempre protegidas'
            },
            {
              titulo: 'Suporte 24/7',
              descricao: 'Estamos sempre prontos para ajudar'
            }
          ].map((beneficio) => (
            <div key={beneficio.titulo} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{beneficio.titulo}</h3>
              <p className="text-gray-600">{beneficio.descricao}</p>
            </div>
          ))}
        </div>
      </main>
      <Rodape />
    </div>
  );
}

'use client';

import React from 'react';
import Image from 'next/image';
import { Produto } from '../Products/ProdutoCard';

// Interface que estende Produto para incluir quantidade
interface ItemCarrinho extends Produto {
  quantidade: number;
}

// Props do componente Carrinho
interface CarrinhoProps {
  aberto?: boolean;
  aoFechar?: () => void;
  itens: (Produto & { quantidade: number })[];
  aoAtualizarQuantidade?: (id: string, quantidade: number) => void;
  aoRemoverItem?: (id: string) => void;
}

/**
 * Hook personalizado para calcular o total do carrinho
 * @param itens - Lista de itens no carrinho
 * @returns Total calculado
 */
const useCalcularTotal = (itens: ItemCarrinho[]) => {
  return itens.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0
  );
};

/**
 * Componente que exibe o carrinho de compras
 * @param aberto - Estado que controla se o carrinho está visível
 * @param aoFechar - Função chamada para fechar o carrinho
 * @param itens - Lista de itens no carrinho
 * @param aoAtualizarQuantidade - Função chamada ao atualizar a quantidade de um item
 * @param aoRemoverItem - Função chamada ao remover um item do carrinho
 */
export default function Carrinho({
  aberto = false,
  aoFechar,
  itens,
  aoAtualizarQuantidade,
  aoRemoverItem
}: CarrinhoProps) {
  const total = useCalcularTotal(itens);

  return (
    <div className={`
      fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-lg transform transition-transform duration-300
      ${aberto ? 'translate-x-0' : 'translate-x-full'}
    `}>
      <div className="flex flex-col h-full">
        {/* Cabeçalho */}
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Carrinho</h2>
            <button
              onClick={aoFechar}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Lista de Itens */}
        <div className="flex-1 overflow-y-auto p-4">
          {itens.length === 0 ? (
            <p className="text-center text-gray-600">Seu carrinho está vazio</p>
          ) : (
            <ul className="space-y-4">
              {itens.map((item) => (
                <li key={item.id} className="flex gap-4 bg-gray-50 p-4 rounded-lg">
                  <div className="w-20 h-20 relative rounded overflow-hidden bg-gray-100">
                    <Image
                      src={item.imagem}
                      alt={item.nome}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.nome}</h3>
                    <p className="text-gray-900 font-medium">
                      R$ {item.preco.toFixed(2)}
                    </p>
                    
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => aoAtualizarQuantidade?.(item.id, item.quantidade - 1)}
                        className="px-2 py-1 bg-gray-100 text-gray-900 rounded hover:bg-gray-200"
                      >
                        -
                      </button>
                      <span className="text-gray-900">{item.quantidade}</span>
                      <button
                        onClick={() => aoAtualizarQuantidade?.(item.id, item.quantidade + 1)}
                        className="px-2 py-1 bg-gray-100 text-gray-900 rounded hover:bg-gray-200"
                      >
                        +
                      </button>
                      
                      <button
                        onClick={() => aoRemoverItem?.(item.id)}
                        className="ml-auto text-gray-500 hover:text-red-500"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Rodapé com Total e Checkout */}
        <div className="p-4 border-t bg-gray-50">
          <div className="mb-4">
            <div className="flex justify-between text-gray-900 font-medium">
              <span>Total</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>
          </div>
          
          <button
            className="w-full bg-blue-600 text-gray-900 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            disabled={itens.length === 0}
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
} 
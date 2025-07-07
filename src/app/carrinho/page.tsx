"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Rodape from '@/components/Footer/Rodape';

// Simulação de itens no carrinho
const itensIniciais = [
  {
    id: '1',
    nome: 'Smartphone Premium',
    preco: 2499.99,
    quantidade: 1,
    imagem: '/produtos/produto1.jpg'
  },
  {
    id: '2',
    nome: 'Notebook Profissional',
    preco: 4999.99,
    quantidade: 1,
    imagem: '/produtos/produto2.jpg'
  }
];

export default function CarrinhoPage() {
  const [itens, setItens] = useState(itensIniciais);

  const atualizarQuantidade = (id: string, novaQuantidade: number) => {
    setItens(itens.map(item =>
      item.id === id ? { ...item, quantidade: Math.max(1, novaQuantidade) } : item
    ));
  };

  const removerItem = (id: string) => {
    setItens(itens.filter(item => item.id !== id));
  };

  const total = itens.reduce((soma, item) => soma + (item.preco * item.quantidade), 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Carrinho de Compras</h1>
          <p className="text-gray-600">
            {itens.length} {itens.length === 1 ? 'item' : 'itens'} no seu carrinho
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de Produtos */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              {itens.length > 0 ? (
                <ul className="divide-y">
                  {itens.map((item) => (
                    <li key={item.id} className="py-6 first:pt-0 last:pb-0">
                      <div className="flex gap-6">
                        <div className="w-24 h-24 relative rounded-lg overflow-hidden bg-gray-100">
                          <Image
                            src={item.imagem}
                            alt={item.nome}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="text-lg font-medium text-gray-900">
                              {item.nome}
                            </h3>
                            <button
                              onClick={() => removerItem(item.id)}
                              className="text-gray-400 hover:text-red-500"
                            >
                              Remover
                            </button>
                          </div>
                          
                          <p className="text-gray-900 font-medium mt-1">
                            R$ {item.preco.toFixed(2)}
                          </p>
                          
                          <div className="flex items-center gap-4 mt-4">
                            <div className="flex items-center border rounded-lg">
                              <button
                                onClick={() => atualizarQuantidade(item.id, item.quantidade - 1)}
                                className="px-3 py-1 hover:bg-gray-100 text-gray-900"
                              >
                                -
                              </button>
                              <input
                                type="number"
                                min="1"
                                value={item.quantidade}
                                onChange={(e) => atualizarQuantidade(item.id, parseInt(e.target.value))}
                                className="w-12 text-center border-x py-1 text-gray-900"
                              />
                              <button
                                onClick={() => atualizarQuantidade(item.id, item.quantidade + 1)}
                                className="px-3 py-1 hover:bg-gray-100 text-gray-900"
                              >
                                +
                              </button>
                            </div>
                            
                            <p className="text-gray-900">
                              Total: R$ {(item.preco * item.quantidade).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 mb-4">Seu carrinho está vazio</p>
                  <Link
                    href="/produtos"
                    className="text-gray-900 hover:text-gray-700 font-medium"
                  >
                    Continuar Comprando
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Resumo do Pedido */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Resumo do Pedido</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Frete</span>
                  <span>Grátis</span>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between font-bold text-lg text-gray-900">
                    <span>Total</span>
                    <span>R$ {total.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Em até 12x sem juros
                  </p>
                </div>
              </div>

              <button
                className="w-full bg-blue-600 text-gray-900 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg mt-6"
                disabled={itens.length === 0}
              >
                Finalizar Compra
              </button>

              <Link
                href="/produtos"
                className="block text-center text-gray-900 hover:text-gray-700 font-medium mt-4"
              >
                Continuar Comprando
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Rodape />
    </div>
  );
} 
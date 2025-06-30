'use client';

import { Produto } from '../Products/ProdutoCard';
import Image from 'next/image';

// Interface que estende Produto para incluir quantidade
interface ItemCarrinho extends Produto {
  quantidade: number;
}

// Props do componente Carrinho
interface CarrinhoProps {
  aberto: boolean;
  aoFechar: () => void;
  itens: ItemCarrinho[];
  aoAtualizarQuantidade: (produtoId: number, quantidade: number) => void;
  aoRemoverItem: (produtoId: number) => void;
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
  aberto,
  aoFechar,
  itens,
  aoAtualizarQuantidade,
  aoRemoverItem,
}: CarrinhoProps) {
  const total = useCalcularTotal(itens);

  if (!aberto) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white">
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg font-medium uppercase tracking-wider">Carrinho</h2>
            <button
              onClick={aoFechar}
              className="text-gray-400 hover:text-black transition-colors p-2"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {itens.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <p className="text-gray-500 mb-4">
                  Seu carrinho está vazio
                </p>
                <button
                  onClick={aoFechar}
                  className="text-sm text-black underline hover:no-underline"
                >
                  Continuar Comprando
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {itens.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 pb-6 border-b border-gray-100"
                  >
                    <div className="relative aspect-square w-24 bg-gray-100">
                      <Image
                        src={item.imagem}
                        alt={item.nome}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="text-sm font-medium">{item.nome}</h3>
                        <button
                          onClick={() => aoRemoverItem(item.id)}
                          className="text-gray-400 hover:text-black transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        R$ {item.preco.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() =>
                            aoAtualizarQuantidade(item.id, item.quantidade - 1)
                          }
                          className="w-6 h-6 flex items-center justify-center border border-gray-200 hover:border-black transition-colors"
                        >
                          -
                        </button>
                        <span className="text-sm w-4 text-center">{item.quantidade}</span>
                        <button
                          onClick={() =>
                            aoAtualizarQuantidade(item.id, item.quantidade + 1)
                          }
                          className="w-6 h-6 flex items-center justify-center border border-gray-200 hover:border-black transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-gray-100 pt-6 mt-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm uppercase tracking-wider">Total</span>
              <span className="text-lg font-medium">
                R$ {total.toFixed(2)}
              </span>
            </div>
            <button
              disabled={itens.length === 0}
              className="w-full bg-black text-white py-4 text-sm uppercase tracking-wider hover:bg-gray-900 transition-colors disabled:bg-gray-200 disabled:cursor-not-allowed"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 
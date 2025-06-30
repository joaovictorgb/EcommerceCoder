'use client';

import Image from 'next/image';

// Props do componente Cabecalho
interface CabecalhoProps {
  quantidadeItensCarrinho: number;
  aoClicarCarrinho: () => void;
}

/**
 * Componente que exibe o cabeçalho da aplicação
 * @param quantidadeItensCarrinho - Quantidade de itens no carrinho
 * @param aoClicarCarrinho - Função chamada ao clicar no ícone do carrinho
 */
export default function Cabecalho({ 
  quantidadeItensCarrinho, 
  aoClicarCarrinho 
}: CabecalhoProps) {
  return (
    <header className="w-full bg-white fixed top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-light tracking-wider text-black">
            ECOMMERCE<span className="font-bold">CODER</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-12">
          <a href="#" className="text-gray-800 hover:text-black transition-colors text-sm uppercase tracking-wider">
            Início
          </a>
          <a href="#" className="text-gray-800 hover:text-black transition-colors text-sm uppercase tracking-wider">
            Produtos
          </a>
          <a href="#" className="text-gray-800 hover:text-black transition-colors text-sm uppercase tracking-wider">
            Sobre
          </a>
          <a href="#" className="text-gray-800 hover:text-black transition-colors text-sm uppercase tracking-wider">
            Contato
          </a>
        </nav>

        <button 
          onClick={aoClicarCarrinho}
          className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Carrinho de Compras"
        >
          <Image 
            src="/cart-icon.svg" 
            alt="" 
            width={20} 
            height={20} 
            className="text-black"
          />
          {quantidadeItensCarrinho > 0 && (
            <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {quantidadeItensCarrinho}
            </span>
          )}
        </button>
      </div>
    </header>
  );
} 
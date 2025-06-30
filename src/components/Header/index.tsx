'use client';

import Image from 'next/image';
import { useState } from 'react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export default function Header({ cartItemsCount, onCartClick }: HeaderProps) {
  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-blue-600">EcommerceCoder</h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Produtos</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Sobre</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Contato</a>
        </nav>

        <button 
          onClick={onCartClick}
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
        >
          <div className="relative">
            <Image src="/cart-icon.svg" alt="Carrinho" width={24} height={24} />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemsCount}
              </span>
            )}
          </div>
        </button>
      </div>
    </header>
  );
} 
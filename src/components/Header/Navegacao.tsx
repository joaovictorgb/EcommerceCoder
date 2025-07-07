"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

export default function Navegacao() {
  const pathname = usePathname();
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo e Nome */}
          <Link 
            href="/" 
            className="flex items-center space-x-3"
          >
            <Image
              src="/vercel.svg"
              alt="Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-gray-900">
              EcommerceCoder
            </span>
          </Link>

          {/* Links de Navegação - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`${
                pathname === '/' 
                  ? 'text-gray-900 font-medium' 
                  : 'text-gray-600 hover:text-gray-900'
              } transition-colors`}
            >
              Início
            </Link>
            <Link 
              href="/produtos" 
              className={`${
                pathname === '/produtos' 
                  ? 'text-gray-900 font-medium' 
                  : 'text-gray-600 hover:text-gray-900'
              } transition-colors`}
            >
              Produtos
            </Link>
          </div>

          {/* Carrinho e Menu Mobile */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/carrinho" 
              className="relative text-gray-600 hover:text-gray-900 transition-colors p-2"
            >
              <Image
                src="/cart-icon.svg"
                alt="Carrinho"
                width={24}
                height={24}
              />
              <span className="absolute -top-1 -right-1 bg-red-500 text-gray-900 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Botão Menu Mobile */}
            <button
              onClick={() => setMenuAberto(!menuAberto)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none text-gray-900"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuAberto ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {menuAberto && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className={`${
                  pathname === '/' 
                    ? 'text-gray-900 font-medium' 
                    : 'text-gray-600'
                } px-4 py-2 hover:bg-gray-100 rounded-lg`}
                onClick={() => setMenuAberto(false)}
              >
                Início
              </Link>
              <Link 
                href="/produtos" 
                className={`${
                  pathname === '/produtos' 
                    ? 'text-gray-900 font-medium' 
                    : 'text-gray-600'
                } px-4 py-2 hover:bg-gray-100 rounded-lg`}
                onClick={() => setMenuAberto(false)}
              >
                Produtos
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 
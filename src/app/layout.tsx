import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navegacao from '@/components/Header/Navegacao';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EcommerceCoder',
  description: 'Aplicação de exemplo para o curso de React',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navegacao />
        {children}
      </body>
    </html>
  );
}

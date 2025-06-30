'use client';

import { useState } from 'react';
import Cabecalho from '@/components/Header/Cabecalho';
import Destaque from '@/components/Banner/Destaque';
import ListaProdutos from '@/components/Products/ListaProdutos';
import Carrinho from '@/components/Cart/Carrinho';
import Rodape from '@/components/Footer/Rodape';
import { Produto } from '@/components/Products/ProdutoCard';

// Interface que estende Produto para incluir quantidade
interface ItemCarrinho extends Produto {
  quantidade: number;
}

/**
 * Página principal da aplicação
 * Gerencia o estado do carrinho e a integração entre os componentes
 */
export default function PaginaInicial() {
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
    <div className="min-h-screen flex flex-col">
      <Cabecalho
        quantidadeItensCarrinho={itensCarrinho.reduce((soma, item) => soma + item.quantidade, 0)}
        aoClicarCarrinho={() => setCarrinhoAberto(true)}
      />
      <Destaque />
      <ListaProdutos aoAdicionarAoCarrinho={aoAdicionarAoCarrinho} />
      <Carrinho
        aberto={carrinhoAberto}
        aoFechar={() => setCarrinhoAberto(false)}
        itens={itensCarrinho}
        aoAtualizarQuantidade={aoAtualizarQuantidade}
        aoRemoverItem={aoRemoverItem}
      />
      <Rodape />
    </div>
  );
}

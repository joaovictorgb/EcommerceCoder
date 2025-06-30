import Image from 'next/image';

// Interface que define a estrutura de um produto
export interface Produto {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
  descricao: string;
}

// Props do componente ProdutoCard
interface ProdutoCardProps {
  produto: Produto;
  aoAdicionarAoCarrinho: (produto: Produto) => void;
}

/**
 * Componente que exibe um card de produto individual
 * @param produto - Dados do produto a ser exibido
 * @param aoAdicionarAoCarrinho - Função chamada quando o produto é adicionado ao carrinho
 */
export default function ProdutoCard({ produto, aoAdicionarAoCarrinho }: ProdutoCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    aoAdicionarAoCarrinho(produto);
  };

  return (
    <div className="group bg-white p-4 hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-square w-full overflow-hidden bg-gray-100 mb-4">
        <Image
          src={produto.imagem}
          alt={produto.nome}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          priority={produto.id <= 4} // Prioriza o carregamento dos primeiros 4 produtos
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300">
          <button
            onClick={handleClick}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-2 text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors transform -translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-300"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="font-medium text-sm uppercase tracking-wider text-black">
          {produto.nome}
        </h3>
        <p className="text-xs text-gray-600 line-clamp-2 min-h-[2.5rem]">
          {produto.descricao}
        </p>
        <div className="pt-2 border-t border-gray-100">
          <span className="text-sm font-medium text-black">
            R$ {produto.preco.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
} 
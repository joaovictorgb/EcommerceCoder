import Image from 'next/image';
import Link from 'next/link';

// Interface que define a estrutura de um produto
export interface Produto {
  id: string;
  nome: string;
  preco: number;
  descricao: string;
  imagem: string;
  especificacoes?: string[];
}

// Props do componente ProdutoCard
interface ProdutoCardProps {
  produto: Produto;
}

/**
 * Componente que exibe um card de produto individual
 * @param produto - Dados do produto a ser exibido
 */
export default function ProdutoCard({ produto }: ProdutoCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <Link href={`/produtos/${produto.id}`} className="block">
        <div className="relative aspect-square">
          <Image
            src={produto.imagem}
            alt={produto.nome}
            layout="fill"
            objectFit="cover"
            className="hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {produto.nome}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {produto.descricao}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">
              R$ {produto.preco.toFixed(2)}
            </span>
            
            <button className="px-4 py-2 bg-blue-600 text-gray-900 rounded-lg hover:bg-blue-700 transition-colors">
              Ver Detalhes
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
} 
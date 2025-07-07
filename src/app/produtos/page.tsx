import ListaProdutos from '@/components/Products/ListaProdutos';
import Rodape from '@/components/Footer/Rodape';

export default function ProdutosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        {/* Cabeçalho da página */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nossos Produtos</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore nossa coleção completa de produtos de alta qualidade
          </p>
        </div>

        {/* Filtros e Ordenação */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <select className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900">
                <option value="">Todas as Categorias</option>
                <option value="eletronicos">Eletrônicos</option>
                <option value="moda">Moda</option>
                <option value="casa">Casa</option>
              </select>
              
              <select className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900">
                <option value="">Faixa de Preço</option>
                <option value="0-50">Até R$ 50</option>
                <option value="50-100">R$ 50 - R$ 100</option>
                <option value="100+">Acima de R$ 100</option>
              </select>
            </div>

            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="px-4 py-2 border rounded-lg w-full md:w-auto focus:ring-2 focus:ring-blue-500 outline-none text-gray-900"
              />
              
              <select className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900">
                <option value="relevancia">Relevância</option>
                <option value="menor-preco">Menor Preço</option>
                <option value="maior-preco">Maior Preço</option>
                <option value="mais-vendidos">Mais Vendidos</option>
              </select>
            </div>
          </div>
        </div>

        {/* Lista de Produtos */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <ListaProdutos />
        </div>

        {/* Paginação */}
        <div className="flex justify-center mt-8">
          <nav className="flex items-center gap-2">
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 text-gray-900">Anterior</button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`px-4 py-2 rounded-lg ${
                  page === 1
                    ? 'bg-blue-600 text-gray-900'
                    : 'hover:bg-gray-100 text-gray-900'
                }`}
              >
                {page}
              </button>
            ))}
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 text-gray-900">Próxima</button>
          </nav>
        </div>
      </main>
      <Rodape />
    </div>
  );
} 
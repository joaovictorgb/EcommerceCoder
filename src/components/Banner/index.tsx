import Image from 'next/image';

export default function Banner() {
  return (
    <div className="relative w-full h-[500px] mt-16">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h2 className="text-5xl font-bold mb-4">
              Bem-vindo ao EcommerceCoder
            </h2>
            <p className="text-xl mb-8">
              Descubra nossa seleção exclusiva de produtos com os melhores preços do mercado.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Ver Ofertas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 
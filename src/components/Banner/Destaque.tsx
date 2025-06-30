/**
 * Componente que exibe o banner de destaque da página inicial
 * Utiliza um gradiente de cores e texto chamativo para atrair a atenção do usuário
 */
export default function Destaque() {
  return (
    <div className="relative w-full h-[600px] mt-16">
      <div className="absolute inset-0 bg-[#111]">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <span className="text-sm uppercase tracking-widest text-gray-400 mb-4 block">
              Nova Coleção
            </span>
            <h2 className="text-6xl font-light tracking-tight mb-6">
              Tecnologia com<br />
              <span className="font-medium">Design Minimalista</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Descubra nossa seleção exclusiva de produtos que combinam
              tecnologia avançada com design atemporal.
            </p>
            <button className="bg-white text-black px-12 py-4 text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Explorar Coleção
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 
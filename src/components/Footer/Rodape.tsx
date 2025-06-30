/**
 * Componente que exibe o rodapé da aplicação
 * Contém informações de contato, links úteis e direitos autorais
 */
export default function Rodape() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-6">
              EcommerceCoder
            </h3>
            <p className="text-sm text-gray-500">
              Design minimalista e tecnologia avançada para seu dia a dia.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6">
              Navegação
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6">
              Legal
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6">
              Contato
            </h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>contato@ecommercecoder.com</li>
              <li>(11) 1234-5678</li>
              <li>
                Rua do Código, 123<br />
                São Paulo - SP
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-8 text-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} EcommerceCoder. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
} 
import { Mail } from 'lucide-react';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" style={{ width: '150px', height: '150px' }} />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('anasayfa')} className="text-gray-600 hover:text-orange-600 transition-colors">
              Ana Sayfa
            </button>
            <button onClick={() => scrollToSection('hakkimizda')} className="text-gray-600 hover:text-orange-600 transition-colors">
              Hakkımızda
            </button>
            <button onClick={() => scrollToSection('hizmetler')} className="text-gray-600 hover:text-orange-600 transition-colors">
              Hizmetler
            </button>
            <button onClick={() => scrollToSection('referanslar')} className="text-gray-600 hover:text-orange-600 transition-colors">
              Referanslar
            </button>
            <button onClick={() => scrollToSection('iletisim')} className="text-gray-600 hover:text-orange-600 transition-colors">
              İletişim
            </button>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="https://wa.me/905434471814" target="_blank" rel="noopener noreferrer" className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.411-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.359 1.236-3.203 2.162C5.904 10.487 5.631 11.64 5.631 12.793c0 .563.111 1.123.332 1.65L5.4 21.558l3.14-1.297a9.883 9.883 0 004.743 1.206h.006c5.411 0 9.817-4.406 9.817-9.817 0-2.593-.965-5.029-2.716-6.756-1.751-1.727-4.187-2.681-6.756-2.681"/>
              </svg>
              <span className="text-sm">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

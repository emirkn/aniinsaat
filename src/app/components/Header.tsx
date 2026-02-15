import { Phone, Mail } from 'lucide-react';

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
            <a href="tel:+905326281506" className="flex items-center text-gray-600 hover:text-orange-600 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">0532 628 15 06</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

import { Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" style={{ width: '150px', height: '150px' }} className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" />
          </div>
          
          {/* Desktop Navigation */}
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

          {/* Desktop WhatsApp */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="https://wa.me/905434471814" target="_blank" rel="noopener noreferrer" className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
              <img src="/whatsapp-svgrepo-com.svg" alt="WhatsApp" className="w-4 h-4 mr-2" />
              <span className="text-sm text-black">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection('anasayfa')}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors"
            >
              Ana Sayfa
            </button>
            <button
              onClick={() => scrollToSection('hakkimizda')}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors"
            >
              Hakkımızda
            </button>
            <button
              onClick={() => scrollToSection('hizmetler')}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors"
            >
              Hizmetler
            </button>
            <button
              onClick={() => scrollToSection('referanslar')}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors"
            >
              Referanslar
            </button>
            <button
              onClick={() => scrollToSection('iletisim')}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors"
            >
              İletişim
            </button>
            {/* Mobile WhatsApp */}
            <a
              href="https://wa.me/905434471814"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left px-4 py-2 bg-green-500 hover:bg-green-600 text-black rounded transition-colors mt-2"
            >
              WhatsApp
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

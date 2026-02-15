import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ANİ İNŞAAT</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Alçı, boya, alçıpan ve kartonpiyer uygulamalarında kaliteli işçilik ve profesyonel hizmet anlayışıyla yanınızdayız.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Hızlı Menü</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('anasayfa')}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Ana Sayfa
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('hakkimizda')}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Hakkımızda
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('hizmetler')}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Hizmetler
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('referanslar')}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Referanslar
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('iletisim')}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  İletişim
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">İletişim</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Phone className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-orange-400" />
                <span className="text-gray-300"><a href="tel:+905326281506" className="hover:text-orange-400">0532 628 15 06</a></span>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-orange-400" />
                <span className="text-gray-300"><a href="mailto:aniinsaat36@gmail.com" className="hover:text-orange-400">aniinsaat36@gmail.com</a></span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-orange-400" />
                <span className="text-gray-300">Osmangazi mah. Turgutreis Cad. No.79 Darıca/Kocaeli</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 ANİ İNŞAAT SANAYİ VE TİCARET LİMİTED ŞİRKETİ. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}

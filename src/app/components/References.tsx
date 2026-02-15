import { Building2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const references = [
  { name: 'MAYA Projesi', type: 'Konut Projesi' },
  { name: 'B/S/H', type: 'Ticari Proje' },
  { name: 'DECART İnşaat', type: 'İnşaat Projesi' },
  { name: 'FORD', type: 'Kurumsal Proje' }
];

const projectImages = [
  { id: 1, src: '/WhatsApp Image 2026-02-13 at 12.18.58 AM.jpeg' },
  { id: 2, src: '/WhatsApp Image 2026-02-13 at 12.18.59 AM.jpeg' },
  { id: 3, src: '/WhatsApp Image 2026-02-13 at 12.19.00 AM (1).jpeg' },
  { id: 4, src: '/WhatsApp Image 2026-02-13 at 12.19.00 AM (2).jpeg' },
  { id: 5, src: '/WhatsApp Image 2026-02-13 at 12.19.00 AM (3).jpeg' },
  { id: 6, src: '/WhatsApp Image 2026-02-13 at 12.19.00 AM (4).jpeg' },
  { id: 7, src: '/WhatsApp Image 2026-02-13 at 12.19.00 AM (5).jpeg' },
  { id: 8, src: '/WhatsApp Image 2026-02-13 at 12.19.00 AM (6).jpeg' },
  { id: 9, src: '/WhatsApp Image 2026-02-13 at 12.19.00 AM.jpeg' },
  { id: 10, src: '/WhatsApp Image 2026-02-13 at 12.19.01 AM (1).jpeg' },
  { id: 11, src: '/WhatsApp Image 2026-02-13 at 12.19.01 AM (2).jpeg' },
  { id: 12, src: '/WhatsApp Image 2026-02-13 at 12.19.01 AM (3).jpeg' },
  { id: 13, src: '/WhatsApp Image 2026-02-13 at 12.19.01 AM (4).jpeg' },
  { id: 14, src: '/WhatsApp Image 2026-02-13 at 12.19.01 AM (6).jpeg' },
  { id: 15, src: '/WhatsApp Image 2026-02-13 at 12.19.02 AM (1).jpeg' },
  { id: 16, src: '/WhatsApp Image 2026-02-13 at 12.19.02 AM (2).jpeg' },
  { id: 17, src: '/WhatsApp Image 2026-02-13 at 12.19.02 AM (3).jpeg' },
  { id: 18, src: '/WhatsApp Image 2026-02-13 at 12.19.02 AM (4).jpeg' },
  { id: 19, src: '/WhatsApp Image 2026-02-13 at 12.19.02 AM (5).jpeg' },
  { id: 20, src: '/WhatsApp Image 2026-02-13 at 12.19.02 AM (6).jpeg' },
  { id: 21, src: '/WhatsApp Image 2026-02-13 at 12.19.02 AM (7).jpeg' },
  { id: 22, src: '/WhatsApp Image 2026-02-13 at 12.19.02 AM.jpeg' },
  { id: 23, src: '/WhatsApp Image 2026-02-13 at 12.19.03 AM.jpeg' }
];

export function References() {
  return (
    <section id="referanslar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Referanslarımız
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Güçlü referanslarımız ve başarılı projelerimizle sektörde öncü konumdayız
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {references.map((reference, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-orange-600 hover:shadow-md transition-all group text-center"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-gray-200 group-hover:border-orange-600 transition-colors">
                <Building2 className="w-8 h-8 text-gray-600 group-hover:text-orange-600 transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {reference.name}
              </h3>
              <p className="text-sm text-gray-500">
                {reference.type}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gray-50 px-8 py-4 rounded-lg">
            <p className="text-gray-600 text-sm">
              Ve daha birçok başarılı proje...
            </p>
          </div>
        </div>

        {/* Proje Görselleri Galerisi */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Proje Görselleri
            </h3>
            <p className="text-gray-600">
              Başarılı projelerimizin görselleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectImages.map((image) => (
              <div
                key={image.id}
                className="bg-gray-100 rounded-lg overflow-hidden border border-gray-300 hover:border-orange-600 transition-all hover:shadow-lg group"
              >
                <div className="aspect-square flex items-center justify-center bg-gray-50">
                  <img
                    src={image.src}
                    alt={`Proje ${image.id}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Toplam {projectImages.length} proje görseli
          </p>
        </div>
      </div>
    </section>
  );
}

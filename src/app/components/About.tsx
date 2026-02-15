import { Target, Eye } from 'lucide-react';

export function About() {
  return (
    <section id="hakkimizda" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Hakkımızda
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              ANİ İNŞAAT SANAYİ VE TİCARET LİMİTED ŞİRKETİ, inşaat sektöründe alçı, boya, alçıpan ve kartonpiyer uygulamaları konusunda uzmanlaşmış, profesyonel bir firmadır.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Konut ve ticari projelerimizde kaliteli işçilik, zamanında teslimat ve müşteri memnuniyetini ön planda tutarak hizmet vermekteyiz. Deneyimli ekibimiz ve güçlü referanslarımızla sektörde güvenilir bir iş ortağı olarak konumlanmış bulunuyoruz.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Target className="w-6 h-6 text-orange-600 mr-2" />
                  <h3 className="text-lg font-bold text-gray-800">Misyonumuz</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  İnşaat sektöründe kaliteli ve güvenilir hizmet sunarak, müşterilerimizin ihtiyaçlarına en uygun çözümleri üretmek.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Eye className="w-6 h-6 text-orange-600 mr-2" />
                  <h3 className="text-lg font-bold text-gray-800">Vizyonumuz</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  İnşaat sektöründe öncü ve tercih edilen bir marka haline gelerek, sektöre değer katmak.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/pedro-miranda-3QzMBrvCeyQ-unsplash.jpg"
                alt="Construction team"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg mt-8">
              <img 
                src="/h-co-3coKbdfnAFg-unsplash.jpg"
                alt="Interior design"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

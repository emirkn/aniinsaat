import { Paintbrush, Grid3x3, Crown } from 'lucide-react';

const services = [
  {
    icon: Paintbrush,
    title: 'Alçı & Boya',
    description: 'Pürüzsüz yüzeyler, estetik ve uzun ömürlü uygulamalar',
    features: [
      'İç mekan alçı sıva',
      'Profesyonel boya uygulaması',
      'Duvar hazırlık işleri',
      'Dekoratif boya teknikleri'
    ]
  },
  {
    icon: Grid3x3,
    title: 'Alçıpan',
    description: 'Bölme duvar, asma tavan ve dekoratif çözümler',
    features: [
      'Bölme duvar sistemleri',
      'Asma tavan uygulamaları',
      'Dekoratif tavan tasarımları',
      'Ses ve ısı yalıtımı'
    ]
  },
  {
    icon: Crown,
    title: 'Kartonpiyer',
    description: 'Klasik ve modern iç mekan tasarımları',
    features: [
      'Kartonpiyer pervaz',
      'Tavan göbeği uygulamaları',
      'Dekoratif süsleme',
      'Klasik ve modern desenler'
    ]
  }
];

export function Services() {
  return (
    <section id="hizmetler" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Uzman kadromuz ile geniş bir yelpazede kaliteli hizmet sunuyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

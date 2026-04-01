import { Paintbrush, Wrench, Hammer, Palette, Home, PaintRoller, Ruler, Layers } from 'lucide-react';

const services = [
  {
    icon: PaintRoller,
    title: 'Alçı Ve Boya Uygulamaları',
    description: 'Alçı ve boya uygulama çözümleri'
  },
  {
    icon: Ruler,
    title: 'Alçıpan Uygulamaları',
    description: 'Bölme duvar ve tavan alçıpan çözümleri'
  },
  {
    icon: Layers,
    title: 'Kartonpiyer Uygulamaları',
    description: 'Tavan ve duvar kartonpiyer dekorları'
  },
  {
    icon: Home,
    title: 'Dış Cephe Uygulamaları',
    description: 'Profesyonel dış cephe çözümleri'
  },
  {
    icon: Hammer,
    title: 'Kara Sıva Uygulamaları',
    description: 'Kaliteli kara sıva işleri'
  },
  {
    icon: Wrench,
    title: 'Mantolama Uygulamaları',
    description: 'ısı ve ses yalıtımı sistemleri'
  },
  {
    icon: Paintbrush,
    title: 'Fileli Kalekim Uygulamaları',
    description: 'Dekoratif fileli kalekim tasarımları'
  },
  {
    icon: Palette,
    title: 'Dekoratif Boya Uygulamaları',
    description: 'Modern ve klasik boya teknikleri'
  },

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 lg:p-7 xl:p-8 rounded-lg shadow-sm hover:shadow-lg transition-all group text-center min-h-[260px]"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

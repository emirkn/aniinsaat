import { Award, Clock, Users, Shield, Target } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Kaliteli ve Temiz İşçilik',
    description: 'Her projede en yüksek kalite standartlarını uyguluyoruz'
  },
  {
    icon: Clock,
    title: 'Zamanında Teslim',
    description: 'Projelerinizi belirlenen sürede tamamlıyoruz'
  },
  {
    icon: Users,
    title: 'Deneyimli ve Profesyonel Ekip',
    description: 'Uzman kadromuzla her işte mükemmellik hedefliyoruz'
  },
  {
    icon: Shield,
    title: 'Referanslı ve Güvenilir Firma',
    description: 'Güçlü referanslarımız güvenilirliğimizin kanıtıdır'
  },
  {
    icon: Target,
    title: 'Proje Bazlı Çözüm Anlayışı',
    description: 'Her proje için özel çözümler geliştiriyoruz'
  }
];

export function WhyUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Neden Ani İnşaat?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sektördeki deneyimimiz ve müşteri memnuniyetine verdiğimiz önem ile fark yaratıyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

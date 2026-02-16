import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('iletisim');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="anasayfa" className="relative w-full min-h-screen sm:min-h-[600px] md:min-h-[700px] lg:min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1767514536631-b8a259fbb8bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBwbGFzdGVyJTIwd29yayUyMGludGVyaW9yfGVufDF8fHx8MTc3MDgwNDYwNnww&ixlib=rb-4.1.0&q=80&w=1080')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
          Detaylarda Ustalık, İşçilikte Güven
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto">
          Alçı, boya, alçıpan ve kartonpiyer uygulamalarında kaliteli işçilik ve zamanında teslim.
        </p>
        <button 
          onClick={scrollToContact}
          className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base"
        >
          İletişime Geç
          <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </section>
  );
}

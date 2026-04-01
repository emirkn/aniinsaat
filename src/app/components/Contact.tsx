import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = '905434471814';
    const text = `Merhaba, ben ${formData.name}. E-posta: ${formData.email}. Telefon: ${formData.phone || 'Belirtilmedi'}. Mesaj: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="iletisim" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            İletişim
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Projeleriniz için bize ulaşın, size en kısa sürede dönüş yapalım
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">İletişim Bilgileri</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800 mb-1">Telefon</h4>
                  <p className="text-gray-600"><a href="tel:+905434471814" className="hover:text-orange-600">0543 447 18 14</a></p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800 mb-1">E-posta</h4>
                  <p className="text-gray-600"><a href="mailto:aniinsaat36@gmail.com" className="hover:text-orange-600">aniinsaat36@gmail.com</a></p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800 mb-1">Adres</h4>
                  <p className="text-gray-600">
                    Osmangazi mah. Turgutreis Cad. No.79 Darıca/Kocaeli
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-800 mb-3">Çalışma Saatleri</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Pazartesi - Cuma</span>
                  <span className="font-medium">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Cumartesi</span>
                  <span className="font-medium">09:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Pazar</span>
                  <span className="font-medium">Kapalı</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Bize Ulaşın</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Ad Soyad *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  placeholder="Adınız ve soyadınız"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  E-posta *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  placeholder="ornek@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  placeholder="+90 5XX XXX XX XX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Mesajınız *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent resize-none"
                  placeholder="Projeniz hakkında bize bilgi verin..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Mesaj Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

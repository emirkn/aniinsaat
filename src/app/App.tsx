import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyUs } from './components/WhyUs';
import { About } from './components/About';
import { Services } from './components/Services';
import { References } from './components/References';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <WhyUs />
        <About />
        <Services />
        <References />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

import Navbar from '../src/components/common/Navbar';
import Footer from '../src/components/common/Footer';
import Hero from '../src/components/home/Hero';
import Stats from '../src/components/home/Stats';
import ProductGrid from '../src/components/home/ProductGrid';
import Features from '../src/components/home/Features';
import QualityBanner from '../src/components/home/QualityBanner';
import Newsletter from '../src/components/home/Newsletter';


export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ProductGrid />
        <Features />
        <QualityBanner />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

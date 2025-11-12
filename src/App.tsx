import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Specifications } from './components/Specifications';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <Features />
      <Specifications />
      <Gallery />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

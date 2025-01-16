import Navigation from '@/sections/Navigation';
import Hero from '@/sections/Hero';
import Features from '@/sections/Features';
import Testimonials from '@/sections/Testimonials';
import CallToAction from '@/sections/CTA';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden bg-pattern bg-pattern-top">
        <Navigation />
        <main>
          <Hero />
          <div className="relative bg-pattern bg-pattern-bottom">
            <Features />
            <Testimonials />
          </div>
          <CallToAction />
        </main>
        <Footer />
      </div>
    </div>
  );
}

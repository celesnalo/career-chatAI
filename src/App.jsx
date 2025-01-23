import { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Impact from './components/Impact';
import Team from './components/Team';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Loading fallback for Three.js components */}
      <Suspense fallback={
        <div className="fixed inset-0 bg-[#1a237e] flex items-center justify-center">
          <div className="text-white text-xl">Loading...</div>
        </div>
      }>
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Impact />
        <Team />
        <Footer />
      </Suspense>
    </main>
  );
}

export default App;
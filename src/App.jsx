import React, { useRef } from 'react';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Impact from './components/Impact';
import Team from './components/Team';
import Footer from './components/Footer';
import About from './components/About';

function ErrorFallback({ error }) {
  return (
    <div className="fixed inset-0 bg-red-100 flex items-center justify-center">
      <div className="text-red-600 text-xl">Something went wrong: {error.message}</div>
    </div>
  );
}

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);

  // Smooth scrolling functions
  const scrollToHero = () => heroRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToAbout = () => aboutRef.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main className="relative min-h-screen overflow-x-hidden overflow-y-auto">
        <Suspense fallback={
          <div className="fixed inset-0 bg-[#1a237e] flex items-center justify-center">
            <div className="text-white text-xl">Loading...</div>
          </div>
        }>
          <Navbar scrollToHero={scrollToHero} scrollToAbout={scrollToAbout} />
          <Hero ref={heroRef} aboutRef={aboutRef} />
          <About ref={aboutRef} />
          <Features />
          <Impact />
          <Team />
          <Footer />
        </Suspense>
      </main>
    </ErrorBoundary>
  );
}

export default App;
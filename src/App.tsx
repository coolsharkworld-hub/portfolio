import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import StarryBackground from './components/StarryBackground';
import OceanBackground from './components/OceanBackground';
import WaveTransition from './components/WaveTransition';
import Navbar from './components/Navbar';
import Certifications from './components/Certifications';
import Projects from './components/Projects';

function App() {
  const [scrollDepth, setScrollDepth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
        if (isVisible) {
          section.classList.add('visible');
        }
      });

      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const depth = Math.min(scrollY / maxScroll, 1);
      setScrollDepth(depth);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getSkyToOceanGradient = () => {
    const heroHeight = typeof window !== 'undefined' ? window.innerHeight : 1000;
    const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;

    if (scrollY < heroHeight * 0.7) {
      return 'from-slate-950 via-slate-900 to-slate-950';
    } else if (scrollY < heroHeight * 1.5) {
      return 'from-slate-950 via-blue-950 to-slate-900';
    } else if (scrollY < heroHeight * 2.5) {
      return 'from-blue-950 via-blue-900 to-slate-900';
    } else {
      const depthFactor = Math.min((scrollY - heroHeight * 2.5) / (heroHeight * 2), 1);
      return depthFactor > 0.5
        ? 'from-slate-950 via-slate-950 to-black'
        : 'from-blue-900 via-slate-900 to-slate-950';
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b ${getSkyToOceanGradient()} overflow-x-hidden scroll-smooth relative`}>
      <div
        className="fixed inset-0 pointer-events-none z-[1] transition-opacity duration-1000"
        style={{
          background: `radial-gradient(ellipse at center,
            rgba(30, 58, 95, ${scrollDepth * 0.3}) 0%,
            rgba(15, 23, 42, ${scrollDepth * 0.4}) 50%,
            rgba(2, 6, 23, ${scrollDepth * 0.5}) 100%)`
        }}
      />

      <StarryBackground />
      <WaveTransition />
      <OceanBackground />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;

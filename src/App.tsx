import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import StarryBackground from './components/StarryBackground';
import Navbar from './components/Navbar';
import Certifications from './components/Certifications';
import Projects from './components/Projects';

function App() {
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
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-x-hidden scroll-smooth">
      <StarryBackground />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;

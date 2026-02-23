import { useEffect } from 'react';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import ExpertiseMarquee from './components/ExpertiseMarquee';
import Projects from './components/Projects';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-accent selection:text-white">
      <CustomCursor />

      <main>
        <Hero />
        <ExpertiseMarquee />
        <Experience />
        <Projects />
        <Process />
        <Gallery />
      </main>

      <Footer />
    </div>
  );
}

export default App;

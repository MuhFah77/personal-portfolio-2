import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Nav } from '../components/Nav';
import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { Work } from '../components/Work';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function Home() {
  const location = useLocation();

  // Scroll to the matching section whenever the URL hash changes
  // (e.g. clicking "Work" in the nav, or "Back to work" from a project page).
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Work />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

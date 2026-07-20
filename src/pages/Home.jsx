import { useEffect } from 'react';
import { Nav } from '../components/Nav';
import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { Work } from '../components/Work';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function Home() {
  // If arriving at "/" with a hash (e.g. from a project page's "Back to work" link),
  // scroll to that section once the page has rendered.
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

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

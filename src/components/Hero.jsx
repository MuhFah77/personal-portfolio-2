import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useScrambleText } from '../hooks/useScrambleText';
import { MagneticButton } from './MagneticButton';

export function Hero() {
  const [heroTrigger, setHeroTrigger] = useState(false);
  const line1 = useScrambleText('Building intelligent', heroTrigger);
  const line2 = useScrambleText('full-stack products.', heroTrigger);

  useEffect(() => {
    setHeroTrigger(true);
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 pt-40 pb-28 md:pt-52 md:pb-36">
      <p className="font-mono text-sm mb-6" style={{ color: '#8FBFA0' }}>// MERN &amp; AI Engineer</p>
      <h1 className="font-display italic text-4xl md:text-7xl leading-[1.05] mb-8" style={{ minHeight: '2.2em' }}>
        {line1}<br />{line2}
      </h1>
      <p className="max-w-xl text-lg" style={{ color: '#B8B3C7' }}>
        I build full-stack products with the MERN stack and bring them to life with AI —
        from LLM-powered features to custom ML pipelines that ship in production.
      </p>
      <div className="mt-10 flex gap-4 flex-wrap">
        <MagneticButton
          onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-6 py-3 rounded-full font-mono text-sm flex items-center gap-2"
          style={{ background: '#FF6B5B', color: '#1B1730' }}
        >
          View work <ArrowUpRight size={16} />
        </MagneticButton>
        <MagneticButton
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-6 py-3 rounded-full font-mono text-sm border"
          style={{ borderColor: 'rgba(242,239,234,0.25)' }}
        >
          Get in touch
        </MagneticButton>
      </div>
    </section>
  );
}

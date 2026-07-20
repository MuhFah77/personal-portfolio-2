import { SKILLS } from '../data';
import { RevealSection } from './RevealSection';

export function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 md:px-10 py-28 grid md:grid-cols-5 gap-12">
      <RevealSection className="md:col-span-2">
        <h2 className="font-display italic text-3xl md:text-4xl">About</h2>
      </RevealSection>
      <RevealSection className="md:col-span-3" delay={100}>
        <p className="text-lg mb-6" style={{ color: '#B8B3C7' }}>
          I'm a MERN stack developer who went deep into AI — now I build products that use
          React, Node.js, and MongoDB for the foundation, and LLMs, embeddings, and custom
          models for the intelligence layer.
        </p>
        <p className="text-lg mb-8" style={{ color: '#B8B3C7' }}>
          I care about shipping things that actually work in production, not just demos —
          fast APIs, clean data pipelines, and AI features people trust.
        </p>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map(s => (
            <span key={s} className="chip font-mono text-xs px-3 py-1.5 rounded-full" style={{ border: '1px solid rgba(242,239,234,0.2)' }}>{s}</span>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}

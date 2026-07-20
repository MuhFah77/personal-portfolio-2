import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data';
import { RevealSection } from './RevealSection';

export function Work() {
  return (
    <section id="work" className="max-w-6xl mx-auto px-6 md:px-10 py-28">
      <RevealSection>
        <h2 className="font-display italic text-3xl md:text-4xl mb-14">Selected work</h2>
      </RevealSection>
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => (
          <RevealSection key={p.slug} delay={i * 80}>
            <Link
              to={`/projects/${p.slug}`}
              className="project-card rounded-2xl p-8 h-full block"
              style={{ background: '#221D3B', border: '1px solid rgba(242,239,234,0.08)' }}
            >
              <div className="w-10 h-10 rounded-full mb-6" style={{ background: p.color }} />
              <h3 className="font-display text-2xl mb-2">{p.title}</h3>
              <p className="font-mono text-xs mb-4" style={{ color: p.color }}>{p.tag}</p>
              <p style={{ color: '#B8B3C7' }}>{p.desc}</p>
              <div className="mt-6 flex items-center gap-1 font-mono text-xs">
                View project details <ArrowUpRight size={14} />
              </div>
            </Link>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}

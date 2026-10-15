import { SKILLS } from '../data';

export function Marquee() {
  return (
    <div className="overflow-hidden py-6" style={{ borderTop: '1px solid rgba(242,239,234,0.08)', borderBottom: '1px solid rgba(242,239,234,0.08)' }}>
      <div className="flex whitespace-nowrap marquee-track" style={{ width: 'fit-content' }}>
        {[...SKILLS, ...SKILLS].map((s, i) => (
          <span key={i} className="font-mono text-sm mx-6" style={{ color: '#6C6784' }}>{s}</span>
        ))}
      </div>
    </div>
  );
}

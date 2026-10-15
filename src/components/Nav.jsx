import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ background: 'rgba(27,23,48,0.75)', borderBottom: '1px solid rgba(242,239,234,0.08)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="font-mono text-sm tracking-widest uppercase" style={{ color: '#FF6B5B' }}>Muhammad Fahad</Link>
        <div className="hidden md:flex gap-8 font-mono text-sm" style={{ color: '#B8B3C7' }}>
          <Link to="/#work" className="hover:text-white transition-colors">Work</Link>
          <Link to="/#about" className="hover:text-white transition-colors">About</Link>
          <Link to="/#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 font-mono text-sm" style={{ color: '#B8B3C7' }}>
          <Link to="/#work" onClick={() => setMenuOpen(false)}>Work</Link>
          <Link to="/#about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

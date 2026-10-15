import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';

export function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS.find(p => p.slug === slug);

  if (!project) {
    return (
      <>
        <Nav />
        <div className="max-w-6xl mx-auto px-6 md:px-10 pt-40 pb-28 text-center">
          <h1 className="font-display italic text-3xl mb-6">Project not found</h1>
          <Link to="/" className="font-mono text-sm underline" style={{ color: '#FF6B5B' }}>
            ← Back to portfolio
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Nav />
      <div className="max-w-4xl mx-auto px-6 md:px-10 pt-32 pb-28">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 font-mono text-sm mb-10 hover:opacity-80 transition-opacity"
          style={{ color: '#B8B3C7' }}
        >
          <ArrowLeft size={16} /> Back to work
        </Link>

        {/* Image / banner placeholder — swap for a real screenshot by adding an `image` URL field to this project in data.js */}
        <div
          className="w-full rounded-2xl mb-10 flex items-center justify-center"
          style={{
            height: '320px',
            background: project.image
              ? `url(${project.image}) center/cover no-repeat`
              : `linear-gradient(135deg, ${project.color}33, #221D3B)`,
            border: '1px solid rgba(242,239,234,0.08)',
          }}
        >
          {!project.image && (
            <span className="font-display italic text-6xl" style={{ color: project.color, opacity: 0.5 }}>
              {project.title}
            </span>
          )}
        </div>

        <p className="font-mono text-xs mb-3" style={{ color: project.color }}>{project.tag}</p>
        <h1 className="font-display italic text-4xl md:text-5xl mb-6">{project.title}</h1>
        <p className="text-lg mb-10" style={{ color: '#B8B3C7' }}>{project.desc}</p>

        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-sm"
            style={{ background: '#FF6B5B', color: '#1B1730' }}
          >
            View project <ArrowUpRight size={16} />
          </a>
        ) : (
          <p className="font-mono text-sm" style={{ color: '#6C6784' }}>
            Live link coming soon.
          </p>
        )}
      </div>
      <Footer />
    </>
  );
}

import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { RevealSection } from './RevealSection';

export function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 md:px-10 py-28">
      <RevealSection>
        <h2 className="font-display italic text-3xl md:text-4xl mb-6">Let's build something.</h2>
        <a href="mailto:muhammadfahada2@gmail.com" className="font-display italic text-2xl md:text-4xl underline decoration-1 underline-offset-8" style={{ color: '#FF6B5B' }}>
          muhammadfahada2@gmail.com
        </a>
        <div className="mt-10 flex gap-6" style={{ color: '#B8B3C7' }}>
          <a href="https://github.com/MuhFah77" target="_blank" rel="noopener noreferrer" aria-label="Github" className="hover:text-white transition-colors"><GithubIcon size={20} /></a>
          <a href="https://www.linkedin.com/in/muhammad-fahad-79a997255/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors"><LinkedinIcon size={20} /></a>
          <a href="mailto:muhammadfahada2@gmail.com" aria-label="Email" className="hover:text-white transition-colors"><Mail size={20} /></a>
        </div>
      </RevealSection>
    </section>
  );
}

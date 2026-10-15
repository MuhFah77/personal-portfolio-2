export function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,600;1,600&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
      .font-display { font-family: 'Fraunces', serif; }
      .font-mono { font-family: 'IBM Plex Mono', monospace; }
      .font-sans { font-family: 'Inter', sans-serif; }
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .marquee-track { animation: marquee 22s linear infinite; }
      @media (prefers-reduced-motion: reduce) {
        .marquee-track { animation: none; }
        * { transition-duration: 0.01ms !important; }
      }
      .project-card { transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1); }
      .project-card:hover { transform: translateY(-6px); }
      .chip { transition: transform 0.2s ease; }
      .chip:hover { transform: rotate(-2deg) translateY(-2px); }
    `}</style>
  );
}

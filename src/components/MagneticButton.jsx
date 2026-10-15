import { useState, useRef } from 'react';

export function MagneticButton({ children, className = '', style = {}, ...props }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setPos({ x, y });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  return (
    <button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ ...style, transform: `translate(${pos.x}px, ${pos.y}px)`, transition: 'transform 0.15s ease-out' }}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}

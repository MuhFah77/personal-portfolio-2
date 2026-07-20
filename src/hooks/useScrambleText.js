import { useState, useEffect } from 'react';

export function useScrambleText(text, trigger) {
  const [display, setDisplay] = useState(text);
  const chars = '!<>-_\\/[]{}—=+*^?#________';

  useEffect(() => {
    if (!trigger) return;
    let frame = 0;
    const totalFrames = 24;
    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const revealCount = Math.floor(progress * text.length);
      let out = '';
      for (let i = 0; i < text.length; i++) {
        if (i < revealCount) out += text[i];
        else if (text[i] === ' ') out += ' ';
        else out += chars[Math.floor(Math.random() * chars.length)];
      }
      setDisplay(out);
      if (frame >= totalFrames) {
        setDisplay(text);
        clearInterval(interval);
      }
    }, 35);
    return () => clearInterval(interval);
  }, [trigger, text]);

  return display;
}

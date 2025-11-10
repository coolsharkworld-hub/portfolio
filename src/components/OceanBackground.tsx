import { useEffect, useRef } from 'react';

interface Bubble {
  x: number;
  y: number;
  size: number;
  speed: number;
  wobble: number;
  wobbleSpeed: number;
  wobbleAmount: number;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  drift: number;
  driftSpeed: number;
}

export default function OceanBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const bubbles: Bubble[] = [];
    const particles: Particle[] = [];

    for (let i = 0; i < 60; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 6 + 2,
        speed: Math.random() * 0.4 + 0.2,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.015 + 0.008,
        wobbleAmount: Math.random() * 15 + 10,
      });
    }

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.3,
        speed: Math.random() * 0.2 + 0.08,
        drift: Math.random() * 0.3 - 0.15,
        driftSpeed: Math.random() * 0.01 + 0.005,
      });
    }

    const drawBubble = (bubble: Bubble, depth: number) => {
      const wobbleX = Math.sin(bubble.wobble) * bubble.wobbleAmount;

      ctx.save();

      const bubbleOpacity = Math.max(0, 0.6 * (1 - depth * 0.4));

      const gradient = ctx.createRadialGradient(
        bubble.x + wobbleX - bubble.size * 0.3,
        bubble.y - bubble.size * 0.3,
        0,
        bubble.x + wobbleX,
        bubble.y,
        bubble.size
      );

      gradient.addColorStop(0, `rgba(200, 230, 255, ${bubbleOpacity * 0.8})`);
      gradient.addColorStop(0.4, `rgba(100, 180, 255, ${bubbleOpacity * 0.5})`);
      gradient.addColorStop(0.7, `rgba(70, 150, 255, ${bubbleOpacity * 0.2})`);
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(bubble.x + wobbleX, bubble.y, bubble.size, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = `rgba(147, 197, 253, ${bubbleOpacity * 0.4})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      const highlight = ctx.createRadialGradient(
        bubble.x + wobbleX - bubble.size * 0.25,
        bubble.y - bubble.size * 0.25,
        0,
        bubble.x + wobbleX,
        bubble.y,
        bubble.size * 0.3
      );
      highlight.addColorStop(0, `rgba(255, 255, 255, ${bubbleOpacity * 0.6})`);
      highlight.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = highlight;
      ctx.beginPath();
      ctx.arc(
        bubble.x + wobbleX - bubble.size * 0.25,
        bubble.y - bubble.size * 0.25,
        bubble.size * 0.3,
        0,
        Math.PI * 2
      );
      ctx.fill();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      const experienceStart = window.innerHeight * 2.5;

      if (scrollY > experienceStart - 500) {
        const depth = Math.min(1, (scrollY - experienceStart) / (maxScroll * 0.7));

        bubbles.forEach((bubble) => {
          const bubbleAbsoluteY = bubble.y + scrollY;

          if (bubbleAbsoluteY > experienceStart) {
            bubble.wobble += bubble.wobbleSpeed;

            drawBubble(bubble, depth);

            bubble.y -= bubble.speed;

            if (bubble.y < scrollY - bubble.size) {
              bubble.y = scrollY + window.innerHeight + bubble.size;
              bubble.x = Math.random() * canvas.width;
            }
          }
        });

        particles.forEach((particle) => {
          const particleAbsoluteY = particle.y + scrollY;

          if (particleAbsoluteY > experienceStart) {
            const particleOpacity = Math.max(0, 0.4 * (1 - depth * 0.5));

            ctx.fillStyle = `rgba(147, 197, 253, ${particleOpacity})`;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();

            particle.y -= particle.speed;
            particle.drift += particle.driftSpeed * (Math.random() > 0.5 ? 1 : -1) * 0.01;
            particle.drift = Math.max(-0.3, Math.min(0.3, particle.drift));
            particle.x += particle.drift;

            if (particle.y < scrollY - particle.size) {
              particle.y = scrollY + window.innerHeight + particle.size;
              particle.x = Math.random() * canvas.width;
              particle.drift = 0;
            }

            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
          }
        });
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full pointer-events-none z-[5]"
      style={{ height: '100%' }}
    />
  );
}

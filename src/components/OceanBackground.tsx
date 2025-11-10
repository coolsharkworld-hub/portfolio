import { useEffect, useRef } from 'react';

interface Bubble {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  wobble: number;
  wobbleSpeed: number;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  drift: number;
}

interface LightRay {
  x: number;
  width: number;
  opacity: number;
  speed: number;
}

interface Shark {
  x: number;
  y: number;
  speed: number;
  size: number;
  opacity: number;
  direction: number;
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
    const lightRays: LightRay[] = [];
    const sharks: Shark[] = [];

    for (let i = 0; i < 80; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1,
        speed: Math.random() * 0.5 + 0.3,
        opacity: Math.random() * 0.4 + 0.2,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.3 + 0.1,
        drift: Math.random() * 0.5 - 0.25,
      });
    }

    for (let i = 0; i < 6; i++) {
      lightRays.push({
        x: (canvas.width / 7) * i + Math.random() * 100,
        width: Math.random() * 100 + 50,
        opacity: Math.random() * 0.1 + 0.05,
        speed: Math.random() * 0.1 + 0.05,
      });
    }

    const createShark = () => {
      const direction = Math.random() > 0.5 ? 1 : -1;
      sharks.push({
        x: direction > 0 ? -200 : canvas.width + 200,
        y: Math.random() * canvas.height * 0.6 + canvas.height * 0.3,
        speed: Math.random() * 2 + 1,
        size: Math.random() * 60 + 40,
        opacity: Math.random() * 0.15 + 0.1,
        direction,
      });
    };

    let lastSharkTime = 0;

    const drawShark = (shark: Shark) => {
      ctx.save();
      ctx.translate(shark.x, shark.y);
      if (shark.direction < 0) {
        ctx.scale(-1, 1);
      }

      ctx.globalAlpha = shark.opacity;
      ctx.fillStyle = '#1e3a5f';

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(
        shark.size * 0.3, -shark.size * 0.15,
        shark.size * 0.7, -shark.size * 0.1,
        shark.size, 0
      );
      ctx.bezierCurveTo(
        shark.size * 0.7, shark.size * 0.1,
        shark.size * 0.3, shark.size * 0.15,
        0, 0
      );
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(shark.size * 0.3, -shark.size * 0.15);
      ctx.lineTo(shark.size * 0.25, -shark.size * 0.35);
      ctx.lineTo(shark.size * 0.4, -shark.size * 0.12);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(shark.size * 0.85, 0);
      ctx.lineTo(shark.size * 0.95, -shark.size * 0.2);
      ctx.lineTo(shark.size, -shark.size * 0.05);
      ctx.lineTo(shark.size * 0.95, shark.size * 0.2);
      ctx.fill();

      ctx.restore();
    };

    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(scrollY / maxScroll, 1);

      const oceanStartY = window.innerHeight * 0.8;

      lightRays.forEach((ray) => {
        if (scrollY > oceanStartY) {
          const depth = (scrollY - oceanStartY) / maxScroll;
          const rayOpacity = ray.opacity * (1 - depth * 0.7);

          const gradient = ctx.createLinearGradient(
            ray.x,
            scrollY - 200,
            ray.x + ray.width / 2,
            scrollY + canvas.height
          );
          gradient.addColorStop(0, `rgba(147, 197, 253, ${rayOpacity})`);
          gradient.addColorStop(0.3, `rgba(96, 165, 250, ${rayOpacity * 0.5})`);
          gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');

          ctx.fillStyle = gradient;
          ctx.fillRect(ray.x, scrollY - 200, ray.width, canvas.height);

          ray.x += ray.speed;
          if (ray.x > canvas.width) ray.x = -ray.width;
        }
      });

      bubbles.forEach((bubble) => {
        if (bubble.y > oceanStartY) {
          const depth = (bubble.y - oceanStartY) / maxScroll;
          const bubbleOpacity = bubble.opacity * (1 - depth * 0.5);

          bubble.wobble += bubble.wobbleSpeed;
          const wobbleX = Math.sin(bubble.wobble) * 20;

          const gradient = ctx.createRadialGradient(
            bubble.x + wobbleX,
            bubble.y,
            0,
            bubble.x + wobbleX,
            bubble.y,
            bubble.size
          );
          gradient.addColorStop(0, `rgba(147, 197, 253, ${bubbleOpacity})`);
          gradient.addColorStop(0.5, `rgba(96, 165, 250, ${bubbleOpacity * 0.5})`);
          gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(bubble.x + wobbleX, bubble.y, bubble.size, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = `rgba(147, 197, 253, ${bubbleOpacity * 0.6})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();

          bubble.y -= bubble.speed;
          if (bubble.y < scrollY - 100) {
            bubble.y = scrollY + canvas.height + 100;
            bubble.x = Math.random() * canvas.width;
          }
        }
      });

      particles.forEach((particle) => {
        if (particle.y > oceanStartY) {
          const depth = (particle.y - oceanStartY) / maxScroll;
          const particleOpacity = particle.opacity * (1 - depth * 0.6);

          ctx.fillStyle = `rgba(147, 197, 253, ${particleOpacity})`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();

          particle.y -= particle.speed;
          particle.x += particle.drift;

          if (particle.y < scrollY - 100) {
            particle.y = scrollY + canvas.height + 100;
            particle.x = Math.random() * canvas.width;
          }
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.x > canvas.width) particle.x = 0;
        }
      });

      if (scrollY > oceanStartY && timestamp - lastSharkTime > 15000) {
        if (Math.random() < 0.3) {
          createShark();
          lastSharkTime = timestamp;
        }
      }

      sharks.forEach((shark, index) => {
        drawShark(shark);
        shark.x += shark.speed * shark.direction;

        if (
          (shark.direction > 0 && shark.x > canvas.width + 200) ||
          (shark.direction < 0 && shark.x < -200)
        ) {
          sharks.splice(index, 1);
        }
      });

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

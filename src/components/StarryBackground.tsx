import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

export default function StarryBackground() {
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

    const stars: Star[] = [];
    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }

    const shootingStars: Array<{
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
    }> = [];

    const createShootingStar = () => {
      if (Math.random() < 0.01) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          length: Math.random() * 80 + 40,
          speed: Math.random() * 10 + 10,
          opacity: 1,
        });
      }
    };

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY + window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        const dx = mouseX - star.x;
        const dy = mouseY - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          star.x -= (dx / distance) * force * 2;
          star.y -= (dy / distance) * force * 2;
        }

        star.twinklePhase += star.twinkleSpeed;
        star.opacity = 0.5 + Math.sin(star.twinklePhase) * 0.5;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 197, 253, ${star.opacity})`;
        ctx.fill();

        if (star.size > 1) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = 'rgba(59, 130, 246, 0.8)';
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        star.y += star.speed * 0.2;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      createShootingStar();

      shootingStars.forEach((star, index) => {
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x + star.length, star.y + star.length);
        ctx.strokeStyle = `rgba(147, 197, 253, ${star.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(59, 130, 246, 0.8)';
        ctx.stroke();
        ctx.shadowBlur = 0;

        star.x += star.speed;
        star.y += star.speed;
        star.opacity -= 0.01;

        if (star.opacity <= 0) {
          shootingStars.splice(index, 1);
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ height: '100%' }}
    />
  );
}

import { useEffect, useRef } from 'react';

export default function WaveTransition() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 2;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    let waveOffset = 0;

    const drawWave = (y: number, amplitude: number, frequency: number, speed: number, color: string, alpha: number) => {
      ctx.beginPath();
      ctx.moveTo(0, y);

      for (let x = 0; x <= canvas.width; x += 5) {
        const waveY = y + Math.sin((x * frequency) + waveOffset * speed) * amplitude;
        ctx.lineTo(x, waveY);
      }

      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();

      ctx.fillStyle = color;
      ctx.globalAlpha = alpha;
      ctx.fill();
      ctx.globalAlpha = 1;
    };

    const animate = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      const transitionStart = heroHeight * 0.7;
      const transitionEnd = heroHeight * 1.3;

      if (scrollY >= transitionStart - 200 && scrollY <= transitionEnd + 200) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const transitionProgress = Math.max(0, Math.min(1, (scrollY - transitionStart) / (transitionEnd - transitionStart)));

        const waveY = transitionStart - scrollY + heroHeight * 0.85;

        const skyGradient = ctx.createLinearGradient(0, 0, 0, waveY + 100);
        skyGradient.addColorStop(0, 'rgba(2, 6, 23, 0)');
        skyGradient.addColorStop(1, `rgba(15, 23, 42, ${0.3 * transitionProgress})`);
        ctx.fillStyle = skyGradient;
        ctx.fillRect(0, 0, canvas.width, waveY + 100);

        drawWave(waveY, 30, 0.005, 0.8, 'rgba(30, 58, 95, 0.6)', 0.4 + transitionProgress * 0.3);
        drawWave(waveY + 15, 25, 0.007, 1.2, 'rgba(37, 99, 235, 0.4)', 0.3 + transitionProgress * 0.2);
        drawWave(waveY + 30, 20, 0.009, 1.5, 'rgba(59, 130, 246, 0.3)', 0.2 + transitionProgress * 0.2);
        drawWave(waveY + 45, 15, 0.011, 1.8, 'rgba(96, 165, 250, 0.2)', 0.15 + transitionProgress * 0.15);

        const oceanGradient = ctx.createLinearGradient(0, waveY + 60, 0, canvas.height);
        oceanGradient.addColorStop(0, `rgba(30, 58, 95, ${0.4 * transitionProgress})`);
        oceanGradient.addColorStop(0.3, `rgba(15, 23, 42, ${0.5 * transitionProgress})`);
        oceanGradient.addColorStop(1, `rgba(2, 6, 23, ${0.6 * transitionProgress})`);
        ctx.fillStyle = oceanGradient;
        ctx.fillRect(0, waveY + 60, canvas.width, canvas.height);

        waveOffset += 0.02;
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full pointer-events-none z-[3]"
      style={{ height: '100%' }}
    />
  );
}

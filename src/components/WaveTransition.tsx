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
      canvas.height = document.documentElement.scrollHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    let waveOffset = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      const aboutStart = heroHeight;
      const experienceStart = heroHeight * 2.5;

      const smoothTransitionStart = aboutStart + heroHeight * 0.3;
      const smoothTransitionEnd = experienceStart - heroHeight * 0.3;
      const transitionLength = smoothTransitionEnd - smoothTransitionStart;

      if (scrollY >= smoothTransitionStart - 300 && scrollY <= smoothTransitionEnd + 300) {
        const transitionProgress = Math.max(
          0,
          Math.min(1, (scrollY - smoothTransitionStart) / transitionLength)
        );

        const waveY = smoothTransitionStart + transitionLength * transitionProgress;

        const topGradient = ctx.createLinearGradient(0, 0, 0, waveY);
        topGradient.addColorStop(0, 'rgba(2, 6, 23, 0.1)');
        topGradient.addColorStop(
          0.5,
          `rgba(15, 23, 42, ${0.2 * transitionProgress})`
        );
        topGradient.addColorStop(
          1,
          `rgba(30, 58, 95, ${0.3 * transitionProgress})`
        );
        ctx.fillStyle = topGradient;
        ctx.fillRect(0, 0, canvas.width, waveY);

        ctx.beginPath();
        ctx.moveTo(0, waveY);

        for (let x = 0; x <= canvas.width; x += 2) {
          const wave1 = Math.sin((x * 0.006 + waveOffset * 0.4) * Math.PI) * 30;
          const wave2 =
            Math.sin((x * 0.012 + waveOffset * 0.8) * Math.PI * 0.5) * 15;
          const wave3 =
            Math.sin((x * 0.003 + waveOffset * 0.2) * Math.PI) * 8;

          const y = waveY + wave1 + wave2 + wave3;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, waveY + 80);
        ctx.lineTo(canvas.width, waveY + 200);
        ctx.lineTo(0, waveY + 200);
        ctx.lineTo(0, waveY + 80);
        ctx.closePath();

        const waveGradient = ctx.createLinearGradient(0, waveY, 0, waveY + 200);
        waveGradient.addColorStop(
          0,
          `rgba(30, 58, 95, ${0.5 * transitionProgress})`
        );
        waveGradient.addColorStop(
          0.3,
          `rgba(15, 23, 42, ${0.55 * transitionProgress})`
        );
        waveGradient.addColorStop(
          0.7,
          `rgba(2, 6, 23, ${0.6 * transitionProgress})`
        );
        waveGradient.addColorStop(
          1,
          `rgba(0, 0, 10, ${0.65 * transitionProgress})`
        );

        ctx.fillStyle = waveGradient;
        ctx.fill();

        ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * transitionProgress})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        const oceanGradient = ctx.createLinearGradient(
          0,
          waveY + 200,
          0,
          canvas.height
        );
        oceanGradient.addColorStop(
          0,
          `rgba(2, 6, 23, ${0.6 * transitionProgress})`
        );
        oceanGradient.addColorStop(
          1,
          `rgba(0, 0, 10, ${0.7 * transitionProgress})`
        );
        ctx.fillStyle = oceanGradient;
        ctx.fillRect(0, waveY + 200, canvas.width, canvas.height);
      }

      waveOffset += 0.025;
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

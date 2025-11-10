import { Github, Linkedin, Mail, ArrowDown, Code2 } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const roles = [
  'Full Stack Engineer',
  'Frontend Engineer',
  'Backend Engineer',
  'Software Architect'
];

interface Meteor {
  x: number;
  y: number;
  size: number;
  speed: number;
  angle: number;
  tail: Array<{ x: number; y: number; alpha: number }>;
  color: string;
}

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showAvatar, setShowAvatar] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showRole, setShowRole] = useState(false);
  const [showDesc, setShowDesc] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);

  const [meteors, setMeteors] = useState<Meteor[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const meteorRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  /** ✨ Role typing animation — slowed down naturally */
  useEffect(() => {
    if (!showRole) return;

    let isMounted = true;

    const typeRole = async () => {
      const baseTypeDelay = 220; // ⏳ slower typing speed
      const baseEraseDelay = 130; // ⏳ slower erase speed
      const pauseDelay = 3000; // pause after typing
      const transitionDelay = 1000; // before switching to next role

      const getRandomDelay = (base: number) =>
        base + Math.random() * 120; // natural variation

      while (isMounted) {
        const role = roles[roleIndex];

        // Type each character
        for (let i = 0; i <= role.length; i++) {
          if (!isMounted) return;
          setCurrentRole(role.substring(0, i));
          const currentChar = role[i - 1];
          const extraDelay = currentChar === ' ' ? 150 : 0;
          await new Promise((r) =>
            setTimeout(r, getRandomDelay(baseTypeDelay) + extraDelay)
          );
        }

        await new Promise((r) => setTimeout(r, pauseDelay));

        // Erase with a natural acceleration
        for (let i = role.length; i >= 0; i--) {
          if (!isMounted) return;
          setCurrentRole(role.substring(0, i));
          const progress = i / role.length;
          const speedup = 1 + (1 - progress) * 0.5;
          await new Promise((r) =>
            setTimeout(r, baseEraseDelay / speedup)
          );
        }

        await new Promise((r) => setTimeout(r, transitionDelay));

        // Move to next role
        if (isMounted) {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    typeRole();

    return () => {
      isMounted = false;
    };
  }, [showRole, roleIndex]);

  /** ⭐ Ambient starfield + meteor effects (unchanged, but cleaned spacing) */
  useEffect(() => {
    if (!meteorRef.current) return;
    const canvas = meteorRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const createMeteor = (): Meteor => {
      const x = Math.random() * canvas.width;
      const y = -50;
      const baseAngle = Math.PI / 2;
      const angle = baseAngle + (Math.random() * Math.PI / 3 - Math.PI / 6);
      const size = Math.random() * 3 + 2;
      const speed = Math.random() * 8 + 12;
      const hue = Math.random() * 60 + 200;
      const brightness = Math.random() * 20 + 70;
      return {
        x, y, size, speed, angle,
        tail: [],
        color: `hsl(${hue}, 80%, ${brightness}%)`,
      };
    };

    const meteors: Meteor[] = [];
    let lastSpawn = 0;

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (time - lastSpawn > 1500 && meteors.length < 4) {
        meteors.push(createMeteor());
        lastSpawn = time;
      }

      meteors.forEach((m, i) => {
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.tail.unshift({ x: m.x, y: m.y, alpha: 1 });
        if (m.tail.length > 50) m.tail.pop();

        const grad = ctx.createRadialGradient(
          m.x, m.y, 0, m.x, m.y, m.size * 8
        );
        grad.addColorStop(0, m.color);
        grad.addColorStop(0.5, `${m.color}40`);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.size * 8, 0, Math.PI * 2);
        ctx.fill();

        if (m.x < -50 || m.x > canvas.width + 50 || m.y > canvas.height + 50)
          meteors.splice(i, 1);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationFrameRef.current!);
      window.removeEventListener('resize', resize);
    };
  }, []);

  /** ✨ Staged appearance */
  useEffect(() => {
    const seq = async () => {
      await new Promise((r) => setTimeout(r, 500));
      setIsLoaded(true);
      await new Promise((r) => setTimeout(r, 500));
      setShowContent(true);
      await new Promise((r) => setTimeout(r, 300));
      setShowAvatar(true);
      await new Promise((r) => setTimeout(r, 500));
      setShowTitle(true);
      await new Promise((r) => setTimeout(r, 400));
      setShowRole(true);
      await new Promise((r) => setTimeout(r, 300));
      setShowDesc(true);
      await new Promise((r) => setTimeout(r, 300));
      setShowSocial(true);
    };
    seq();
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-6 pt-20 overflow-hidden"
    >
      <canvas ref={meteorRef} className="absolute inset-0 w-full h-full pointer-events-none z-20" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: isLoaded ? 0.5 : 0 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent pointer-events-none" />

      <div
        className={`max-w-5xl mx-auto text-center z-10 transition-all duration-1000 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className={`mb-8 inline-block transition-all duration-700 ${
          showAvatar ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}>
          <div className="w-40 h-40 mx-auto mb-6 rounded-full relative group animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-500 via-gray-600 to-gray-800 animate-border-flow"></div>
            <div className="absolute inset-[3px] rounded-full overflow-hidden bg-slate-900">
              <img
                src="/images/avatar.png"
                alt="Vladislav Plazinskiy"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

        <div className={`mb-6 flex items-center justify-center gap-3 transition-all duration-700 ${
          showTitle ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
          <Code2 className="w-8 h-8 text-blue-400 animate-pulse" />
          <h1 className="text-6xl md:text-8xl font-bold shimmer-text">
            Vladislav Plazinskiy
          </h1>
          <Code2 className="w-8 h-8 text-blue-400 animate-pulse" />
        </div>

        <div className={`mb-4 overflow-hidden transition-all duration-700 ${
          showRole ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-3xl md:text-4xl text-slate-300 font-light">
            Senior{' '}
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
              {currentRole}
              <span className="animate-blink">|</span>
            </span>
          </p>
        </div>

        <div className={`mb-8 transition-all duration-700 ${
          showDesc ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            20+ years architecting enterprise-grade systems across{' '}
            <span className="text-blue-400 font-semibold">IoT</span>,{' '}
            <span className="text-cyan-400 font-semibold">AI</span>,{' '}
            <span className="text-blue-400 font-semibold">streaming platforms</span>, and{' '}
            <span className="text-cyan-400 font-semibold">cloud-native ecosystems</span>
          </p>
        </div>

        <div className={`flex gap-6 justify-center mb-16 flex-wrap transition-all duration-700 ${
          showSocial ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[{ Icon: Linkedin, href: 'https://linkedin.com' },
            { Icon: Github, href: 'https://github.com' },
            { Icon: Mail, href: 'mailto:vladplaz.codes@gmail.com' }].map(({ Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer"
              className="group relative p-5 rounded-full bg-slate-800/50 hover:bg-blue-500/20 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-110">
              <Icon className="w-7 h-7 text-slate-400 group-hover:text-blue-400 transition-colors" />
            </a>
          ))}
        </div>

        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-all duration-300 group"
        >
          <span className="text-sm uppercase tracking-wider font-semibold">Explore My Journey</span>
          <ArrowDown className="w-5 h-5 animate-bounce group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}

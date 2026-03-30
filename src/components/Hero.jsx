import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const roles = ["Designer", "Strategist", "Creative", "Researcher", "Freelancer"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  // Typewriter effect logic
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 80 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Advanced "Light Flies" (Fireflies) particle logic
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 3 + 0.5,
      opacity: Math.random(),
      flickerSpeed: 0.01 + Math.random() * 0.05,
      angle: Math.random() * Math.PI * 2,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        // Natural firefly movement
        p.angle += 0.02;
        p.vx += Math.cos(p.angle) * 0.01;
        p.vy += Math.sin(p.angle) * 0.01;
        
        // Mouse attraction
        const dx = mousePos.current.x - p.x;
        const dy = mousePos.current.y - p.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 200) {
          p.vx += dx * 0.0001;
          p.vy += dy * 0.0001;
        }

        p.x += p.vx;
        p.y += p.vy;
        
        // Boundaries with wrap-around instead of bounce for more "fly" feel
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Flicker effect
        p.opacity = 0.2 + Math.abs(Math.sin(Date.now() * p.flickerSpeed) * 0.8);
        
        // Drawing glowing firefly
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#ffb400';
        ctx.fillStyle = `rgba(255, 180, 0, ${p.opacity * 0.6})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // Reset for performance

        // Subtle connection lines (web)
        particles.forEach(p2 => {
          const dx2 = p.x - p2.x;
          const dy2 = p.y - p2.y;
          const dist2 = Math.sqrt(dx2*dx2 + dy2*dy2);
          if (dist2 < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 180, 0, ${0.05 * (1 - dist2/120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const contactDetails = [
    { label: 'Email:', value: 'hello@janemon.com' },
    { label: 'Phone:', value: '+00 123 456 789' },
    { label: 'Address:', value: 'New Winchester' },
    { label: 'Nationality:', value: 'USA' },
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" />

      {/* Massive Background Text - Sync with Current Role + Mouse Parallax */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none px-4"
        animate={{
          x: (mousePos.current.x - window.innerWidth / 2) * 0.02,
          y: (mousePos.current.y - window.innerHeight / 2) * 0.02,
        }}
        transition={{ type: "smooth", duration: 0.5 }}
      >
        <h2 className="text-[12rem] md:text-[22rem] font-black text-outline uppercase tracking-[0.05em] opacity-30 break-all leading-none text-center transform transition-transform duration-1000">
          {roles[roleIndex]}
        </h2>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center lg:text-left w-full max-w-7xl px-6 lg:px-24">
        <motion.h4 
          className="text-on-surface-variant text-base md:text-lg font-medium tracking-[0.1em] mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          — I Am Jannatul Ferdousy
        </motion.h4>
        
        <motion.h1 
          className="text-6xl md:text-9xl font-black text-on-surface mb-16 h-[1.1em] flex items-center lg:justify-start justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {displayText}
          <span className="w-1.5 h-[0.9em] bg-primary ml-4 animate-pulse shadow-[0_0_20px_rgba(255,180,0,0.8)]" />
        </motion.h1>

        {/* Contact Details Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-8 border-t border-white/5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {contactDetails.map((detail, i) => (
            <div key={detail.label} className="flex flex-col gap-2">
              <span className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">{detail.label}</span>
              <span className="text-on-surface text-base md:text-lg font-bold truncate transition-colors hover:text-primary cursor-default">{detail.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

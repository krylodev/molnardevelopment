
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  life: number;
  maxLife: number;
}

const ParticleSystem = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (): Particle => {
      return {
        x: Math.random() * canvas.width,
        y: canvas.height + 10,
        size: Math.random() * 4 + 2,
        speedX: (Math.random() - 0.5) * 2,
        speedY: -Math.random() * 3 - 1,
        opacity: Math.random() * 0.8 + 0.2,
        life: 0,
        maxLife: Math.random() * 300 + 100,
      };
    };

    const updateParticles = () => {
      const particles = particlesRef.current;
      
      // Add new particles
      if (Math.random() < 0.3) {
        particles.push(createParticle());
      }

      // Update existing particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.life++;
        
        // Fade out as particle ages
        particle.opacity = Math.max(0, 1 - (particle.life / particle.maxLife));
        
        // Remove dead particles
        if (particle.life >= particle.maxLife || particle.y < -10) {
          particles.splice(i, 1);
        }
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const particles = particlesRef.current;
      
      particles.forEach(particle => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        // Create gradient for glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        gradient.addColorStop(0, '#e63946');
        gradient.addColorStop(0.5, 'rgba(230, 57, 70, 0.5)');
        gradient.addColorStop(1, 'rgba(230, 57, 70, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    // Create floating circles
    const createFloatingCircles = () => {
      const circleContainer = document.createElement('div');
      circleContainer.className = 'fixed inset-0 pointer-events-none z-0 overflow-hidden';
      
      for (let i = 0; i < 5; i++) {
        const circle = document.createElement('div');
        const size = Math.random() * 200 + 100;
        
        circle.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          background: radial-gradient(circle, rgba(230, 57, 70, 0.1) 20%, rgba(230, 57, 70, 0.05) 70%);
          border-radius: 50%;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation: float-circle ${5 + Math.random() * 5}s ease-in-out infinite;
          animation-delay: ${Math.random() * 2}s;
        `;
        
        circleContainer.appendChild(circle);
      }
      
      document.body.appendChild(circleContainer);
      
      return () => {
        if (circleContainer.parentNode) {
          circleContainer.parentNode.removeChild(circleContainer);
        }
      };
    };

    const cleanupCircles = createFloatingCircles();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
      cleanupCircles();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleSystem;

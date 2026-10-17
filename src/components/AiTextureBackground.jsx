import React, { useEffect, useRef } from 'react';

export default function AiTextureBackground() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let isVisible = true;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Dynamic grid sizing to completely fill the full background edge-to-edge
    let SPACING_X = width > 1200 ? 46 : width > 768 ? 40 : 32;
    let SPACING_Y = width > 1200 ? 42 : 36;
    let COLS = Math.ceil(width / SPACING_X) + 10;
    let ROWS = Math.ceil(height / SPACING_Y) + 10;

    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.parentElement.offsetWidth || window.innerWidth;
      height = canvas.parentElement.offsetHeight || window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      SPACING_X = width > 1200 ? 46 : width > 768 ? 40 : 32;
      SPACING_Y = width > 1200 ? 42 : 36;
      COLS = Math.ceil(width / SPACING_X) + 10;
      ROWS = Math.ceil(height / SPACING_Y) + 10;
    };

    window.addEventListener('resize', handleResize);

    const FOV = 480;

    // Synapse energy pulses traveling through the 3D lattice across full screen
    const pulses = [
      { col: 6, row: 4, progress: 0, speed: 0.014, color: '#C5A059' },
      { col: 18, row: 8, progress: 0, speed: 0.018, color: '#8E1735' },
      { col: 28, row: 14, progress: 0, speed: 0.012, color: '#C5A059' },
      { col: 10, row: 16, progress: 0, speed: 0.016, color: '#4A0A1A' },
      { col: 34, row: 6, progress: 0, speed: 0.015, color: '#C5A059' },
      { col: 22, row: 20, progress: 0, speed: 0.019, color: '#8E1735' },
    ];

    let time = 0;

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      time += 0.016;

      // Mouse smoothing
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      const tiltX = ((mouse.y - height / 2) / height) * 0.3;
      const tiltY = ((mouse.x - width / 2) / width) * 0.3;

      ctx.clearRect(0, 0, width, height);

      const grid = [];
      const originX = width / 2;
      const originY = height / 2;

      for (let r = 0; r < ROWS; r++) {
        grid[r] = [];
        for (let c = 0; c < COLS; c++) {
          const worldX = (c - COLS / 2) * SPACING_X;
          const worldZ = (r - ROWS / 2) * SPACING_Y;

          // 3D Undulating wave functions
          const dist = Math.sqrt(worldX * worldX + worldZ * worldZ);
          const wave1 = Math.sin(worldX * 0.006 + time * 1.1) * Math.cos(worldZ * 0.008 + time * 0.9) * 40;
          const wave2 = Math.sin(dist * 0.009 - time * 1.4) * 26;
          
          // Cursor ripple
          const cursorDist = Math.hypot(worldX - (mouse.x - originX), worldZ - (mouse.y - originY));
          const cursorWave = Math.exp(-cursorDist * 0.005) * 35;

          const worldY = wave1 + wave2 + cursorWave;

          // 3D Rotation Transform
          const cosY = Math.cos(tiltY);
          const sinY = Math.sin(tiltY);
          const rotX = worldX * cosY - worldZ * sinY;
          const tempZ = worldX * sinY + worldZ * cosY;

          const cosX = Math.cos(tiltX);
          const sinX = Math.sin(tiltX);
          const rotY = worldY * cosX - tempZ * sinX;
          const rotZ = worldY * sinX + tempZ * cosX + 380;

          // Perspective projection
          const scale = FOV / Math.max(rotZ, 60);
          const screenX = originX + rotX * scale;
          const screenY = originY + rotY * scale;

          grid[r][c] = {
            x: screenX,
            y: screenY,
            z: rotZ,
            scale,
            alpha: Math.min(Math.max((scale - 0.3) * 1.3, 0.08), 0.95)
          };
        }
      }

      // Draw horizontal 3D network lines
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS - 1; c++) {
          const p1 = grid[r][c];
          const p2 = grid[r][c + 1];

          // Skip if completely out of viewport
          if (
            (p1.x < -40 && p2.x < -40) ||
            (p1.x > width + 40 && p2.x > width + 40) ||
            (p1.y < -40 && p2.y < -40) ||
            (p1.y > height + 40 && p2.y > height + 40)
          ) {
            continue;
          }

          const lineAlpha = (p1.alpha + p2.alpha) * 0.5 * 0.28;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(74, 10, 26, ${lineAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Draw vertical 3D network lines
      for (let c = 0; c < COLS; c++) {
        for (let r = 0; r < ROWS - 1; r++) {
          const p1 = grid[r][c];
          const p2 = grid[r + 1][c];

          if (
            (p1.x < -40 && p2.x < -40) ||
            (p1.x > width + 40 && p2.x > width + 40) ||
            (p1.y < -40 && p2.y < -40) ||
            (p1.y > height + 40 && p2.y > height + 40)
          ) {
            continue;
          }

          const lineAlpha = (p1.alpha + p2.alpha) * 0.5 * 0.24;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(110, 17, 40, ${lineAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Draw Traveling Synaptic Pulses
      pulses.forEach((pulse) => {
        pulse.progress += pulse.speed;
        if (pulse.progress > 1) {
          pulse.progress = 0;
          pulse.col = Math.floor(Math.random() * (COLS - 4)) + 1;
          pulse.row = Math.floor(Math.random() * (ROWS - 4)) + 1;
        }

        const currCol = pulse.col;
        const currRow = pulse.row;
        if (grid[currRow] && grid[currRow][currCol] && grid[currRow][currCol + 1]) {
          const p1 = grid[currRow][currCol];
          const p2 = grid[currRow][currCol + 1];

          const pulseX = p1.x + (p2.x - p1.x) * pulse.progress;
          const pulseY = p1.y + (p2.y - p1.y) * pulse.progress;

          const glowRadius = 12 * p1.scale;
          const gradient = ctx.createRadialGradient(pulseX, pulseY, 0, pulseX, pulseY, glowRadius);
          gradient.addColorStop(0, pulse.color === '#C5A059' ? 'rgba(197, 160, 89, 0.9)' : 'rgba(178, 32, 69, 0.8)');
          gradient.addColorStop(1, 'rgba(197, 160, 89, 0)');

          ctx.beginPath();
          ctx.arc(pulseX, pulseY, glowRadius, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 2.5 * p1.scale, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.fill();
        }
      });

      // Draw Synaptic Nodes at Grid Intersections
      for (let r = 0; r < ROWS; r += 2) {
        for (let c = 0; c < COLS; c += 2) {
          const pt = grid[r][c];
          if (!pt || pt.x < -20 || pt.x > width + 20 || pt.y < -20 || pt.y > height + 20) continue;

          const radius = Math.max(2.2 * pt.scale, 1);
          const isGold = (r + c) % 4 === 0;

          ctx.beginPath();
          ctx.arc(pt.x, pt.y, radius, 0, Math.PI * 2);
          ctx.fillStyle = isGold
            ? `rgba(197, 160, 89, ${pt.alpha * 0.85})`
            : `rgba(74, 10, 26, ${pt.alpha * 0.75})`;
          ctx.fill();

          if (pt.scale > 1.1) {
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, radius * 2.8, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(197, 160, 89, ${pt.alpha * 0.22})`;
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );

    if (canvas) observer.observe(canvas);

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (canvas) observer.unobserve(canvas);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-50 transition-opacity duration-1000"
      />
      {/* Light subtle edge blend to keep header & next section clean */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-cream-100/90 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream-100/90 to-transparent pointer-events-none" />
    </div>
  );
}

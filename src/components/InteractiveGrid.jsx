import { useEffect, useRef } from "react";

function InteractiveGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = 0;
    let height = 0;
    let points = [];
    
    // Config
    const spacing = 40;
    const magneticRadius = 150;
    const pullStrength = 30; // Max pull distance in px

    let mouse = { x: -1000, y: -1000 };
    
    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      
      initGrid();
    }

    window.addEventListener("resize", resize);

    function initGrid() {
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;
      points = [];
      for (let i = 0; i <= cols; i++) {
        const col = [];
        for (let j = 0; j <= rows; j++) {
          col.push({
            x: i * spacing,
            y: j * spacing,
            baseX: i * spacing,
            baseY: j * spacing,
          });
        }
        points.push(col);
      }
    }

    function render() {
      ctx.clearRect(0, 0, width, height);

      const cols = points.length;
      const rows = points[0] ? points[0].length : 0;

      // Update points
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const p = points[i][j];
          if (!p) continue;
          
          const dx = mouse.x - p.baseX;
          const dy = mouse.y - p.baseY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < magneticRadius) {
            // Calculate force for magnet pull (easing function out-sine)
            const force = 1 - (distance / magneticRadius);
            // Attract towards mouse
            p.x = p.baseX + (dx / distance) * (force * pullStrength);
            p.y = p.baseY + (dy / distance) * (force * pullStrength);
          } else {
            // Spring back fast
            p.x += (p.baseX - p.x) * 0.2;
            p.y += (p.baseY - p.y) * 0.2;
          }
        }
      }

      // Calculate pulse effect based on time
      const time = Date.now() / 1500; // Speed of pulse
      const pulseOpacity = 0.12 + Math.sin(time) * 0.08; // Oscillates between 0.04 and 0.20
      
      // Calculate true glow based on time (matches CSS glow-text pulse)
      const glowIntensity = 10 + Math.sin(time) * 10; // Oscillates between 0 and 20px of blur

      // Draw lines
      ctx.beginPath();
      ctx.strokeStyle = `rgba(56, 189, 248, ${pulseOpacity})`; // Now animated and dynamic
      
      // Create true glowing pulse
      ctx.shadowBlur = Math.max(0, glowIntensity); // Blur radius
      ctx.shadowColor = `rgba(56, 189, 248, ${pulseOpacity * 2})`; // Glow color (slightly brighter than lines)

      // Ensure lines are drawn on integer pixels to avoid sub-pixel blurring!
      ctx.lineWidth = 1;

      for (let j = 0; j < rows; j++) {
        // Adding 0.5 to coordinates helps canvas draw crisp 1px lines without anti-aliasing blur
        ctx.moveTo(Math.round(points[0][j].x) + 0.5, Math.round(points[0][j].y) + 0.5);
        for (let i = 1; i < cols; i++) {
          ctx.lineTo(Math.round(points[i][j].x) + 0.5, Math.round(points[i][j].y) + 0.5);
        }
      }

      for (let i = 0; i < cols; i++) {
        ctx.moveTo(Math.round(points[i][0].x) + 0.5, Math.round(points[i][0].y) + 0.5);
        for (let j = 1; j < rows; j++) {
          ctx.lineTo(Math.round(points[i][j].x) + 0.5, Math.round(points[i][j].y) + 0.5);
        }
      }
      ctx.stroke();

      // Add the static glow layer mask over the grid
      const gradient = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, width * 0.6
      );
      gradient.addColorStop(0, "rgba(56, 189, 248, 0.12)");
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    }

    resize();
    render();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}

export default InteractiveGrid;

import { useEffect, useRef, useMemo } from "react";
import bgImage from "../assets/images/pixel_bg.png";

export default function InteractiveGrid() {
  const containerRef = useRef(null);

  // Generate leaf config once
  const leaves = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      baseLeft: Math.random() * 110,
      baseSpeed: 1 + Math.random() * 2, // pixels per frame
      baseSway: Math.random() * 3 + 1, // amplitude of wind sway
      size: Math.random() * 8 + 4,
      opacity: Math.random() * 0.5 + 0.3,
      // starting offset
      yPos: Math.random() * -1000,
      xOffset: 0,
    }));
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let mouse = { x: -1000, y: -1000 };
    const magneticRadiusSq = 150 * 150; 

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove);

    const leafNodes = Array.from(container.querySelectorAll('.cherry-leaf'));
    let animationFrameId;

    function render() {
      const time = Date.now() / 1000;
      const vh = window.innerHeight;

      leafNodes.forEach((node, index) => {
        const item = leaves[index];
        
        // Base downward movement (mod by height to loop)
        item.yPos += item.baseSpeed;
        if (item.yPos > vh + 100) {
          item.yPos = -100; // Reset to top
          item.xOffset = 0; // Reset physical offsets
        }

        // Base wind sway
        const windSway = Math.sin(time * item.baseSway + index) * 30;
        
        // Calculate bounding coordinates
        const rect = node.getBoundingClientRect();
        const leafCenterX = rect.left + rect.width / 2;
        const leafCenterY = rect.top + rect.height / 2;

        const dx = mouse.x - leafCenterX;
        const dy = mouse.y - leafCenterY;
        const distSq = dx * dx + dy * dy;

        // Interaction: leaves fly away from mouse
        if (distSq < magneticRadiusSq) {
          const force = 1 - Math.sqrt(distSq) / 150;
          // Apply a velocity offset based on angle
          item.xOffset -= (dx * force * 0.05);
          item.yPos -= (dy * force * 0.05); 
        }

        // Continually decay the repulsive force offset back towards 0
        item.xOffset *= 0.98;

        const finalX = `calc(${item.baseLeft}vw + ${windSway + item.xOffset}px)`;
        const finalY = `${item.yPos}px`;
        const rotation = (item.yPos * 2 + item.xOffset) % 360;

        node.style.transform = `translate3d(${finalX}, ${finalY}, 0) rotate(${rotation}deg)`;
      });

      animationFrameId = requestAnimationFrame(render);
    }

    render();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [leaves]);

  return (
    <>
      {/* Pixel Background Image */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-[#0b0614]/60 mix-blend-multiply pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0614] via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* Falling Leaves Container */}
      <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {leaves.map((leaf) => (
          <div
            key={leaf.id}
            className="cherry-leaf absolute will-change-transform" /* Using CSS absolute and JS translate3D */
            style={{
              width: `${leaf.size}px`,
              height: `${leaf.size * 0.7}px`, 
              opacity: leaf.opacity,
              backgroundColor: 'var(--color-brand-pink)',
              boxShadow: '0 0 6px var(--color-brand-pink)'
            }}
          />
        ))}
      </div>
    </>
  );
}

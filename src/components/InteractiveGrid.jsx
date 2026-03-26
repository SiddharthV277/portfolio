import { useEffect, useRef, useMemo } from "react";
import { FaHtml5, FaCss3Alt, FaPhp, FaGit, FaReact } from "react-icons/fa";
import { SiMysql, SiJavascript, SiTailwindcss, SiNodedotjs, SiTypescript, SiCplusplus } from "react-icons/si";

const ICONS = [
  FaHtml5, FaCss3Alt, FaPhp, FaGit, FaReact,
  SiMysql, SiJavascript, SiTailwindcss, SiNodedotjs, SiTypescript, SiCplusplus
];

export default function InteractiveGrid() {
  // Generate random positions once using useMemo to avoid hydration/render mismatch
  const items = useMemo(() => {
    const arr = [];
    // Lowered quantity slightly from 500 to a guaranteed 150-250 range. 
    // 500 animated DOM nodes will cripple the browser layout engine. 150-250 provides a dense layout without locking up the CPU.
    const randomAmount = Math.floor(Math.random() * 101) + 150; 
    for (let i = 0; i < randomAmount; i++) {
        const IconComponent = ICONS[Math.floor(Math.random() * ICONS.length)];
        arr.push({
            id: i,
            Icon: IconComponent,
            top: 2 + Math.random() * 96,
            left: 2 + Math.random() * 96,
            depth: Math.random() * 0.7 + 0.3,
            baseGlow: Math.random() * 0.2 + 0.1, 
            rotation: Math.random() * 360, 
            sizeScale: Math.random() * 0.8 + 0.3 // keep them ant-sized
        });
    }
    return arr;
  }, []);

  const containerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let mouse = { x: -1000, y: -1000 };
    
    const magneticRadius = 250; 
    const magneticRadiusSq = magneticRadius * magneticRadius; // Optimized distance calculation
    
    const iconNodes = Array.from(container.querySelectorAll('.bg-icon-item'));
    const basePositions = iconNodes.map(node => {
        const rect = node.getBoundingClientRect();
        return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        };
    });

    let animationFrameId;

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    function render() {
      const time = Date.now() / 1500;
      
      iconNodes.forEach((node, index) => {
        const item = items[index];
        const base = basePositions[index];
        
        const dx = mouse.x - base.x;
        const dy = mouse.y - base.y;
        const distSq = dx * dx + dy * dy; // Avoiding expensive Math.sqrt unless necessary

        let transformX = 0;
        let transformY = 0;
        let scale = 1;
        let isNear = false;
        let force = 0;

        if (distSq < magneticRadiusSq) {
            isNear = true;
            const distance = Math.sqrt(distSq);
            force = 1 - (distance / magneticRadius);
            transformX = (dx / distance) * (force * 30 * item.depth);
            transformY = (dy / distance) * (force * 30 * item.depth);
            scale = 1 + force * 0.4; 
        }

        const floatY = Math.sin(time + index) * 15 * item.depth;
        const floatX = Math.cos(time * 0.8 + index) * 10 * item.depth;
        
        // using translate3d triggers hardware GUI acceleration 
        node.style.transform = `translate3d(${transformX + floatX}px, ${transformY + floatY}px, 0) scale(${scale}) rotate(${item.rotation}deg)`;
        
        const opacity = Math.min(1, item.baseGlow + (isNear ? force * 0.6 : 0) + (Math.sin(time * 2 + index) * 0.1));
        node.style.opacity = opacity;
        
        // Replaced expensive drop-shadow filters with strict color toggling for rapid rendering 
        if (isNear) {
            node.style.color = `rgba(234, 179, 8, 1)`;
        } else {
            node.style.color = `rgba(234, 179, 8, 0.7)`;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    }

    render();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [items]);

  return (
    <div 
        ref={containerRef} 
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden" 
        style={{
            background: 'radial-gradient(circle at center, rgba(234, 179, 8, 0.08) 0%, transparent 60%)'
        }}
    >
      {items.map((item) => {
        const Icon = item.Icon;
        return (
          <div
            key={item.id}
            className="bg-icon-item absolute will-change-transform" // hardware CSS hint
            style={{
              top: `${item.top}%`,
              left: `${item.left}%`,
              fontSize: `${(0.8 + item.depth * 1.2) * item.sizeScale}rem`,
              opacity: item.baseGlow,
              // default shadow removed for performance
            }}
          >
            <Icon />
          </div>
        );
      })}
    </div>
  );
}

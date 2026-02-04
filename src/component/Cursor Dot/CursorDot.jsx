import { useEffect, useRef } from "react";

const CursorDot = () => {
  const dotRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      // 🔽 smaller = slower
      pos.current.x += (mouse.current.x - pos.current.x) * 0.08;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.08;

      if (dotRef.current) {
        dotRef.current.style.left = `${pos.current.x}px`;
        dotRef.current.style.top = `${pos.current.y}px`;
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);
    animate();

    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 h-2.5 w-2.5 rounded-full bg-white pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
    />
  );
};

export default CursorDot;

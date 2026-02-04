import { useEffect, useRef } from "react";

const CursorDot = () => {
  const dotRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      const target = e.target.closest("[data-cursor]");
      if (!dotRef.current) return;

      if (target?.dataset.cursor === "big") {
        dotRef.current.classList.add("scale-300");
      } else {
        dotRef.current.classList.remove("scale-300");
      }
    };

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.08;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.08;

      dotRef.current.style.left = `${pos.current.x}px`;
      dotRef.current.style.top = `${pos.current.y}px`;

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", move);
    animate();

    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed hidden lg:flex top-0 left-0 h-4 w-4 rounded-full bg-white mix-blend-difference
      pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2
      transition-transform duration-150"
    />
  );
};

export default CursorDot;

"use client";

import { useEffect } from "react";

export default function CursorEffect() {
  useEffect(() => {
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");

    const handleMouseMove = (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
  
        if (cursorDot) {
          cursorDot.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
        }
  
        if (cursorOutline) {
          cursorOutline.animate(
            {
              left: `${posX}px`,
              top: `${posY}px`,
            },
            { duration: 500, fill: "forwards" }
          );
        }
      };

    window.addEventListener("mousemove", handleMouseMove);

    // clean up function

    return () => {
        window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return null;
}

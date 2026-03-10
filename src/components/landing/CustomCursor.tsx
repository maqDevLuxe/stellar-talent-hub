import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    document.body.classList.add("custom-cursor");

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      document.body.classList.remove("custom-cursor");
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        id="cursor-dot"
        style={{ left: pos.x - 4, top: pos.y - 4 }}
      />
      <div
        id="cursor-ring"
        style={{ left: pos.x - 20, top: pos.y - 20 }}
      />
    </>
  );
};

export default CustomCursor;

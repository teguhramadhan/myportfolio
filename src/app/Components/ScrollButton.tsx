// app/Components/ScrollButton.tsx
"use client";

interface ScrollButtonProps {
  targetId: string;
  label: string;
}

export default function ScrollButton({ targetId, label }: ScrollButtonProps) {
  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition text-sm"
    >
      {label}
    </button>
  );
}

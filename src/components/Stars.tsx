export default function Stars({ count = 35 }: { count?: number }) {
  // Generate deterministic values to avoid hydration mismatch
  const stars = Array.from({ length: count }, (_, i) => ({
    id: i,
    top:     `${((i * 37 + 11) % 97)}%`,
    left:    `${((i * 53 + 7)  % 100)}%`,
    size:    (i % 3) * 0.8 + 0.6,
    dur:     `${(i % 4) + 3}s`,
    delay:   `${(i % 5) * 0.8}s`,
    opacity: ((i % 5) * 0.1 + 0.1).toFixed(2),
  }));

  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}
    >
      {stars.map(s => (
        <div
          key={s.id}
          style={{
            position: "absolute",
            top: s.top, left: s.left,
            width: s.size, height: s.size,
            borderRadius: "50%",
            background: "#f0c84a",
            opacity: Number(s.opacity),
            animation: `starPulse ${s.dur} ease-in-out infinite`,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  );
}

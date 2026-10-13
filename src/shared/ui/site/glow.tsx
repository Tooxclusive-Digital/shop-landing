/** Brand-blue light on a navy field, from the top or the bottom edge. */
export function Glow({ at = "top" }: { at?: "top" | "bottom" }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          at === "top"
            ? "radial-gradient(60% 55% at 50% 0%, rgba(0,96,196,0.6) 0%, rgba(0,80,163,0.14) 55%, transparent 100%)"
            : "radial-gradient(55% 75% at 50% 100%, rgba(0,96,196,0.5) 0%, transparent 100%)",
      }}
    />
  );
}

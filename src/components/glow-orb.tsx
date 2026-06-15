const GlowOrb = ({ className }: { className?: string }) => (
  <div
    className={`pointer-events-none absolute rounded-full ${className} orb-background opacity-40 blur-3xl`}
  />
);

export default GlowOrb;

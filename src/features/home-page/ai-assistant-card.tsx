import GlowOrb from "@/components/glow-orb";

const AiAssistantCard = () => {
  return (
    <div className="relative mt-6 h-50 w-1/4 rounded-xl border-none bg-(--ink-text-dark) p-6">
      <GlowOrb className="absolute top-0 right-0 size-[400px]" />
    </div>
  );
};

export default AiAssistantCard;

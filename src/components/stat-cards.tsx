import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import type { StatCardsProps } from "@/types/ui";

const StatCards = ({
  title,
  value,
  loading,
  className,
  titleClassName,
  valueClassName,
}: StatCardsProps) => {
  return (
    <div
      className={cn(
        "w-full rounded-xl border border-(--card-background) bg-(--card-background) px-4 py-8 shadow-sm",
        className,
      )}
    >
      <h2
        className={cn(
          "text-[10px] tracking-wide text-(--ink-text-lighter) uppercase",
          titleClassName,
        )}
      >
        {title}
      </h2>

      {loading ? (
        <Skeleton className="mt-2 h-9 w-24" />
      ) : (
        <span className={cn("text-3xl font-bold", valueClassName)}>
          {value.toLocaleString()}
        </span>
      )}
    </div>
  );
};

export default StatCards;

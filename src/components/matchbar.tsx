"use client";

const MatchBar = ({
  label,
  value,
  className,
  valueClassName = "text-(--success-text)",
}: {
  label: string;
  value: number;
  className: string;
  valueClassName?: string;
}) => {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs text-(--ink-text-dark)">
        <span>{label}</span>
        <span className={valueClassName}>{value}</span>
      </div>

      <div className="h-2 w-full rounded-sm bg-(--text-accent-foreground)/20">
        <div
          className={`h-full rounded-sm ${className}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default MatchBar;

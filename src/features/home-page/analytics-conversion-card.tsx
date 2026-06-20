"use client";

const AnalyticsConversionCard = () => {
  const appliedValue = 80;
  const respondedValue = 28;
  const interviewed = 14;
  const offers = 3;

  const respondedProgressValue = Math.trunc(
    (respondedValue / appliedValue) * 100,
  );
  const interviewedProgressValue = Math.trunc(
    (interviewed / appliedValue) * 100,
  );
  const offersProgressValue = Math.trunc((offers / appliedValue) * 100);

  return (
    <div className="flex flex-col">
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-(--ink-text-dark)">
          <span>Applied</span>
          <span className="text-(--ink-text-lighter)">{appliedValue}</span>
        </div>
        <div className="relative flex h-5 w-full items-center overflow-x-hidden rounded-sm border-none bg-(--ink-text-dark)" />
        <div className="flex items-center justify-between text-xs text-(--ink-text-dark)">
          <span>Responded</span>
          <span className="text-(--ink-text-lighter)">
            {respondedValue} • {respondedProgressValue}%
          </span>
        </div>
        <div
          className="relative flex h-5 items-center overflow-x-hidden rounded-sm border-none bg-(--ink-text-medium)"
          style={{ width: `${respondedProgressValue}%` }}
        />
        <div className="flex items-center justify-between text-xs text-(--ink-text-dark)">
          <span>Interviewed</span>
          <span className="text-(--ink-text-lighter)">
            {interviewed} • {interviewedProgressValue}%
          </span>
        </div>
        <div
          className="relative flex h-5 items-center overflow-x-hidden rounded-sm border-none bg-(--accent-text-medium)"
          style={{ width: `${interviewedProgressValue}%` }}
        />
        <div className="flex items-center justify-between text-xs text-(--ink-text-dark)">
          <span>Offers</span>
          <span className="text-(--ink-text-lighter)">
            {offers} • {offersProgressValue}%
          </span>
        </div>
        <div
          className="relative flex h-5 items-center overflow-x-hidden rounded-sm border-none bg-(--success-text)"
          style={{ width: `${offersProgressValue}%` }}
        />
      </div>
    </div>
  );
};

export default AnalyticsConversionCard;

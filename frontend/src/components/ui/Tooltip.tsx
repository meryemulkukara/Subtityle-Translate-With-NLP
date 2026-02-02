import React, { PropsWithChildren } from 'react';

type TooltipProps = PropsWithChildren<{
  label: string;
}>;

export const Tooltip: React.FC<TooltipProps> = ({ label, children }) => {
  return (
    <span className="relative inline-block group">
      {children}
      <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -translate-y-2 bottom-full mb-1 hidden whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-xs text-slate-100 shadow-lg group-hover:block">
        {label}
      </span>
    </span>
  );
};


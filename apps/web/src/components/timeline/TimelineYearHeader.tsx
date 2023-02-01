import { format, parseISO } from 'date-fns';
import React from 'react';

export function TimelineYearHeader({ year }: { year: string }) {
  return (
    <div
      className="sticky top-0 left-0 z-10 flex flex-col bg-white pt-4"
      style={{
        position: '-webkit-sticky',
      }}
    >
      <div className="relative flex flex-row py-1">
        <div className="absolute -top-2 h-2 w-full bg-gradient-to-t from-white"></div>
        <span className="flex grow"></span>
        <div className="w-full">
          <p className="text-xl font-black">{`Timeline of ${format(
            parseISO(year),
            'yyyy'
          )}`}</p>
        </div>
        <div className="absolute -bottom-4 h-4 w-full bg-gradient-to-b from-white"></div>
      </div>
    </div>
  );
}

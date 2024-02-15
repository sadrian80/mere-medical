import { format, parseISO } from 'date-fns';
import React from 'react';

export function TimelineYearHeader({ year }: { year: string }) {
  return (
    <div className="sticky top-4 z-10 flex flex-col bg-transparent mt-4 mb-2 h-6">
      <div className="flex flex-row py-1">
        <div className="relative flex flex-col">
          <div className="h-0 mt-0 bg-transparent">
            <p className="px-2 text-xl font-black bg-gray-100 border-4 border-gray-300 rounded-md text-center">{`${format(
              parseISO(year),
              'yyyy',
            )}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import * as React from 'react';

// Delete me
export const BreakpointChecker = () => (
    <div
        className={`fixed top-0 left-0 z-50 p-1 px-2 text-white bg-purple-900 font-mono flex gap-3 text-sm`}
    >
      <div>default</div>
      <div className="opacity-20 sm:opacity-100">sm</div>
      <div className="opacity-20 md:opacity-100">md</div>
      <div className="opacity-20 lg:opacity-100">lg</div>
      <div className="opacity-20 xl:opacity-100">xl</div>
      <div className="opacity-20 2xl:opacity-100">2xl</div>
    </div>
)

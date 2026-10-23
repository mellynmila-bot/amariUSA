import React from 'react';

interface WaveDividerProps {
  fillColor: string; // The color of the wave fill (matching next section)
  flip?: boolean;
  withGoldLine?: boolean;
  className?: string;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({
  fillColor,
  flip = false,
  withGoldLine = true,
  className = '',
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden leading-none z-10 pointer-events-none ${
        flip ? 'rotate-180 -mb-[1px]' : '-mt-[1px]'
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative block w-full h-[35px] sm:h-[55px] md:h-[75px]"
        preserveAspectRatio="none"
      >
        {withGoldLine && (
          <path
            d="M0,45 C320,85 460,10 740,55 C1020,100 1200,20 1440,50"
            stroke="#C4A05A"
            strokeWidth="1.5"
            strokeOpacity="0.45"
            fill="none"
          />
        )}
        <path
          d="M0,48 C320,88 460,13 740,58 C1020,103 1200,23 1440,53 L1440,90 L0,90 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

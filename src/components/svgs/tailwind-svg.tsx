"use client";

import { cn } from "@/lib/utils";

const TailwindSvg = ({
  className,
  fill,
  background,
}: {
  className?: string;
  fill?: string;
  background?: string;
}) => {
  if (!fill) fill = "";
  if (!background) background = "background";
  return (
    <div
      className={cn(
        "rounded p-2 aspect-square border shadow w-16 h-16",
        className
      )}
      style={{ backgroundColor: `hsl(var(--${background}))` }}
    >
      <svg
        viewBox="0 0 54 33"
        fill={fill ? `hsl(var(--${fill}))` : "#38BDF8"}
        xmlns="http://www.w3.org/2000/svg"
        className={cn("w-full h-full")}
      >
        <mask
          id="mask0_199_7"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="54"
          height="33"
        >
          <path d="M0 0H54V32.4H0V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_199_7)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.464 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z"
            // fill="#38BDF8"
          />
        </g>
      </svg>
    </div>
  );
};

export default TailwindSvg;

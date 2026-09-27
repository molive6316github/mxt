/** "MXT" drawn as vector shapes — decorative, and never an LCP candidate. */
export default function Wordmark({
  className,
  outline = false,
}: {
  className?: string;
  outline?: boolean;
}) {
  return (
    <svg
      viewBox="-2 -2 304 124"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill={outline ? "none" : "currentColor"}
      stroke={outline ? "currentColor" : "none"}
      strokeWidth={outline ? 1.5 : 0}
      strokeLinejoin="round"
    >
      <polygon vectorEffect="non-scaling-stroke" points="0,120 0,0 28,0 50,55 72,0 100,0 100,120 76,120 76,50 56,100 44,100 24,50 24,120" />
      <polygon vectorEffect="non-scaling-stroke" points="106,0 134,0 153,38 172,0 200,0 168,60 200,120 172,120 153,82 134,120 106,120 138,60" />
      <polygon vectorEffect="non-scaling-stroke" points="206,0 300,0 300,24 265,24 265,120 241,120 241,24 206,24" />
    </svg>
  );
}

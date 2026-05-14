type NeedleIconProps = {
  orientation?: 'vertical' | 'horizontal';
  size?: number;
  inkColor?: string;
  eyeColor?: string;
  className?: string;
  ariaLabel?: string;
};

/**
 * Highstack needle mark — the brand's core symbol. Replaces the 'I' in the
 * HIGHSTACK wordmark and appears at multiple scales (favicon, logo mark,
 * decorative). The eye is always #F5C000 on dark surfaces, #1C1C2E on yellow.
 */
export function NeedleIcon({
  orientation = 'vertical',
  size = 40,
  inkColor = '#1C1C2E',
  eyeColor = '#F5C000',
  className,
  ariaLabel,
}: NeedleIconProps) {
  const isVertical = orientation === 'vertical';
  const width = isVertical ? size * 0.25 : size;
  const height = isVertical ? size : size * 0.25;
  const viewBox = isVertical ? '0 0 24 96' : '0 0 96 24';

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      className={className}
      fill="none"
    >
      {isVertical ? (
        <>
          <path
            d="M12 4 L18 16 L18 76 L12 92 L6 76 L6 16 Z"
            fill={inkColor}
          />
          <ellipse cx="12" cy="22" rx="3" ry="6" fill={eyeColor} />
        </>
      ) : (
        <>
          <path
            d="M4 12 L16 6 L76 6 L92 12 L76 18 L16 18 Z"
            fill={inkColor}
          />
          <ellipse cx="22" cy="12" rx="6" ry="3" fill={eyeColor} />
        </>
      )}
    </svg>
  );
}

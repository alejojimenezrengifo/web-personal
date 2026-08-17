import React from 'react';

export type DiagonalSectionProps = {
  children: React.ReactNode;
  tilt: 'up' | 'down';
  bgClassName: string;
  className?: string;
  id?: string;
};

export function DiagonalSection({
  children,
  tilt,
  bgClassName,
  className = '',
  id,
}: DiagonalSectionProps) {
  const clipPath =
    tilt === 'down'
      ? 'polygon(0 50px, 100% 0, 100% 100%, 0 100%)'
      : 'polygon(0 0, 100% 50px, 100% 100%, 0 100%)';

  return (
    <section id={id} className="relative -mt-[50px] z-10 first:mt-0">
      <div
        className={`${bgClassName} pt-[50px] pb-16 transition-colors duration-300 ${className}`}
        style={{ clipPath }}
      >
        <div className="pt-8">
          {children}
        </div>
      </div>
    </section>
  );
}

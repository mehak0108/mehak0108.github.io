// Template — edit config/ files to update content, not this file

'use client';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 ${className}`}
    >
      {children}
    </div>
  );
}

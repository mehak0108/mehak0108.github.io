// Template — edit config/ files to update content, not this file

'use client';

interface TagProps {
  label: string;
  className?: string;
}

export function Tag({ label, className = '' }: TagProps) {
  return (
    <span
      className={`inline-block text-xs font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 ${className}`}
    >
      {label}
    </span>
  );
}

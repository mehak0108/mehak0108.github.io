// Template — edit config/ files to update content, not this file

'use client';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  className?: string;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  target,
  rel,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors';
  const styles = {
    primary: 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-200',
    outline: 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800',
  };

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={`${base} ${styles[variant]} ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
}

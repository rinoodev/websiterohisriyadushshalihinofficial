import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

const variants = {
  default: 'bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600',
  destructive: 'bg-red-500 text-white hover:bg-red-600',
  outline: 'border border-primary-600 text-primary-600 hover:bg-primary-100 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900/20',
  ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800',
  link: 'text-primary-600 underline-offset-4 hover:underline dark:text-primary-400',
};

const sizes = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 rounded-md px-3',
  lg: 'h-11 rounded-md px-8',
  icon: 'h-10 w-10',
};

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  children,
  ...props
}) => {
  const computedClasses = `inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background ${variants[variant]} ${sizes[size]}`;

  if (asChild) {
    const child = React.Children.only(children);

    if (!React.isValidElement<{ className?: string }>(child)) {
      return null;
    }
    
    const childClassName = child.props.className || '';
    const finalClassName = [computedClasses, className, childClassName].filter(Boolean).join(' ');

    return React.cloneElement(child, {
      className: finalClassName,
      ...props,
    });
  }
  
  return (
    <button
      className={`${computedClasses} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};
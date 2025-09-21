import React from 'react';

const badgeVariants = {
  default: "border-transparent bg-primary text-primary-foreground",
  secondary: "border-transparent bg-secondary text-secondary-foreground",
  destructive: "border-transparent bg-destructive text-destructive-foreground",
  outline: "text-foreground",
  success: "border-transparent bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
  warning: "border-transparent bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
};

export const Badge = ({ 
  className = '', 
  variant = 'default', 
  children,
  ...props 
}) => {
  return (
    <div 
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${badgeVariants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
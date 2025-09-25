import React, { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from './lib/utils';
import { Loader2 } from 'lucide-react';

const buttonVariants = cva(
  // Base styles with enhanced accessibility and animations
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium',
    'transition-all duration-200 ',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'relative overflow-hidden',
    'touch-target', // Ensures minimum touch target size
    // Micro-animations
    'hover:transform hover:-translate-y-0.5 hover:shadow-md',
    'active:transform active:translate-y-0 active:shadow-sm',
    'disabled:hover:transform-none disabled:hover:shadow-none'
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-primary text-primary-foreground shadow',
          'hover:bg-primary/90 hover:shadow-lg',
          'active:bg-primary/95',
          // Ripple effect background
          'before:absolute before:inset-0 before:bg-white/20 before:opacity-0',
          'before:transition-opacity before:duration-300',
          'hover:before:opacity-100 active:before:opacity-0'
        ],
        destructive: [
          'bg-destructive text-destructive-foreground shadow-sm',
          'hover:bg-destructive/90 hover:shadow-lg',
          'active:bg-destructive/95'
        ],
        outline: [
          'border border-input bg-background shadow-sm',
          'hover:bg-accent hover:text-accent-foreground hover:border-accent',
          'active:bg-accent/90'
        ],
        secondary: [
          'bg-secondary text-secondary-foreground shadow-sm',
          'hover:bg-secondary/80 hover:shadow-md',
          'active:bg-secondary/90'
        ],
        ghost: [
          'hover:bg-accent hover:text-accent-foreground',
          'active:bg-accent/90'
        ],
        link: [
          'text-primary underline-offset-4',
          'hover:underline hover:text-primary/80',
          'active:text-primary/90'
        ],
        success: [
          'bg-success text-white shadow',
          'hover:bg-success/90 hover:shadow-lg',
          'active:bg-success/95'
        ],
        warning: [
          'bg-warning text-white shadow',
          'hover:bg-warning/90 hover:shadow-lg',
          'active:bg-warning/95'
        ]
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        xl: 'h-12 rounded-lg px-10 text-base',
        icon: 'h-9 w-9',
        'icon-sm': 'h-8 w-8',
        'icon-lg': 'h-10 w-10'
      },
      loading: {
        true: 'cursor-not-allowed',
        false: ''
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      loading: false
    }
  }
);

const EnhancedButton = forwardRef(({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  loadingText = 'Loading...',
  children,
  disabled,
  onClick,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : 'button';
  
  const handleClick = (e) => {
    if (loading || disabled) {
      e.preventDefault();
      return;
    }
    
    // Add ripple effect
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
      z-index: 1;
    `;
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
    
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
      <Comp
        className={cn(buttonVariants({ variant, size, loading, className }))}
        ref={ref}
        disabled={disabled || loading}
        onClick={handleClick}
        aria-busy={loading}
        aria-describedby={loading ? 'button-loading' : undefined}
        {...props}
      >
        {loading && (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            <span className="sr-only" id="button-loading">
              {loadingText}
            </span>
          </>
        )}
        {!loading && children}
      </Comp>
    </>
  );
});

EnhancedButton.displayName = 'EnhancedButton';

export { EnhancedButton, buttonVariants };


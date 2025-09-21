import React from 'react';
import { cn } from '../../lib/utils';
import { Loader2, CheckCircle, AlertCircle, Info } from 'lucide-react';

// Skeleton Components
export const Skeleton = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-muted',
        'skeleton', // Uses CSS animation from design-system.css
        className
      )}
      {...props}
    />
  );
};

// Card Skeleton
export const CardSkeleton = ({ showHeader = true, lines = 3, className }) => {
  return (
    <div className={cn('p-6 space-y-4', className)}>
      {showHeader && <Skeleton className="h-6 w-1/3" />}
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <Skeleton
            key={i}
            className={cn(
              'h-4',
              i === lines - 1 ? 'w-2/3' : 'w-full'
            )}
          />
        ))}
      </div>
    </div>
  );
};

// Dashboard Stats Skeleton
export const StatsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="p-6 border rounded-lg space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-8 w-32" />
            </div>
            <Skeleton className="h-12 w-12 rounded-full" />
          </div>
          <div className="flex items-center space-x-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
      ))}
    </div>
  );
};

// Table Skeleton
export const TableSkeleton = ({ rows = 5, columns = 4 }) => {
  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {Array.from({ length: columns }).map((_, i) => (
          <Skeleton key={i} className="h-4 w-20" />
        ))}
      </div>
      
      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="grid gap-4 py-2"
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {Array.from({ length: columns }).map((_, colIndex) => (
            <Skeleton
              key={colIndex}
              className={cn(
                'h-4',
                colIndex === 0 ? 'w-24' : colIndex === columns - 1 ? 'w-16' : 'w-20'
              )}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

// Chart Skeleton
export const ChartSkeleton = ({ type = 'line', className }) => {
  if (type === 'pie') {
    return (
      <div className={cn('flex items-center justify-center h-64', className)}>
        <Skeleton className="h-48 w-48 rounded-full" />
      </div>
    );
  }
  
  return (
    <div className={cn('space-y-4', className)}>
      <div className="flex items-end space-x-2 h-48">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton
            key={i}
            className="w-8 rounded-t"
            style={{ height: `${Math.random() * 80 + 20}%` }}
          />
        ))}
      </div>
      <div className="flex justify-between">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-3 w-8" />
        ))}
      </div>
    </div>
  );
};

// Loading Spinner Component
export const LoadingSpinner = ({ 
  size = 'default', 
  className,
  text,
  variant = 'default'
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    default: 'h-6 w-6',
    lg: 'h-8 w-8',
    xl: 'h-12 w-12'
  };

  const variantClasses = {
    default: 'text-primary',
    muted: 'text-muted-foreground',
    white: 'text-white'
  };

  return (
    <div className={cn('flex items-center justify-center space-x-2', className)}>
      <Loader2 
        className={cn(
          'animate-spin',
          sizeClasses[size],
          variantClasses[variant]
        )}
        aria-hidden="true"
      />
      {text && (
        <span className={cn(
          'text-sm font-medium',
          variantClasses[variant]
        )}>
          {text}
        </span>
      )}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

// Progress Bar Component
export const ProgressBar = ({ 
  value = 0, 
  max = 100, 
  className,
  showPercentage = false,
  variant = 'default',
  size = 'default'
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  const sizeClasses = {
    sm: 'h-1',
    default: 'h-2',
    lg: 'h-3'
  };

  const variantClasses = {
    default: 'bg-primary',
    success: 'bg-success',
    warning: 'bg-warning',
    error: 'bg-destructive'
  };

  return (
    <div className={cn('space-y-1', className)}>
      <div className={cn(
        'w-full bg-secondary rounded-full overflow-hidden',
        sizeClasses[size]
      )}>
        <div
          className={cn(
            'h-full transition-all duration-500 ease-out rounded-full',
            variantClasses[variant]
          )}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
      {showPercentage && (
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{value}</span>
          <span>{max}</span>
        </div>
      )}
    </div>
  );
};

// Status Indicators
export const StatusIndicator = ({ 
  status, 
  message, 
  className,
  showIcon = true 
}) => {
  const statusConfig = {
    success: {
      icon: CheckCircle,
      className: 'text-success bg-success/10 border-success/20',
      iconClassName: 'text-success'
    },
    error: {
      icon: AlertCircle,
      className: 'text-destructive bg-destructive/10 border-destructive/20',
      iconClassName: 'text-destructive'
    },
    warning: {
      icon: AlertCircle,
      className: 'text-warning bg-warning/10 border-warning/20',
      iconClassName: 'text-warning'
    },
    info: {
      icon: Info,
      className: 'text-info bg-info/10 border-info/20',
      iconClassName: 'text-info'
    },
    loading: {
      icon: Loader2,
      className: 'text-muted-foreground bg-muted/50 border-muted',
      iconClassName: 'text-muted-foreground animate-spin'
    }
  };

  const config = statusConfig[status] || statusConfig.info;
  const Icon = config.icon;

  return (
    <div className={cn(
      'flex items-center space-x-2 px-3 py-2 rounded-md border text-sm',
      config.className,
      className
    )}>
      {showIcon && (
        <Icon className={cn('h-4 w-4', config.iconClassName)} aria-hidden="true" />
      )}
      <span>{message}</span>
    </div>
  );
};

// Empty State Component
export const EmptyState = ({ 
  icon: Icon,
  title,
  description,
  action,
  className 
}) => {
  return (
    <div className={cn(
      'flex flex-col items-center justify-center text-center py-12 px-4',
      className
    )}>
      {Icon && (
        <div className="mb-4 p-3 bg-muted rounded-full">
          <Icon className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
        </div>
      )}
      
      {title && (
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {title}
        </h3>
      )}
      
      {description && (
        <p className="text-muted-foreground mb-6 max-w-sm">
          {description}
        </p>
      )}
      
      {action}
    </div>
  );
};

// Page Loading Component
export const PageLoading = ({ message = 'Loading...' }) => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center space-y-4">
        <LoadingSpinner size="xl" />
        <p className="text-muted-foreground">{message}</p>
      </div>
    </div>
  );
};

// Inline Loading Component
export const InlineLoading = ({ text = 'Loading...', className }) => {
  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <LoadingSpinner size="sm" />
      <span className="text-sm text-muted-foreground">{text}</span>
    </div>
  );
};


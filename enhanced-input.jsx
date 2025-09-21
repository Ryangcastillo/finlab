import React, { forwardRef, useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { AlertCircle, CheckCircle2, Eye, EyeOff } from 'lucide-react';

const EnhancedInput = forwardRef(({
  className,
  type = 'text',
  label,
  placeholder,
  error,
  success,
  helperText,
  required = false,
  validation,
  showPasswordToggle = false,
  leftIcon,
  rightIcon,
  onValidation,
  ...props
}, ref) => {
  const [value, setValue] = useState(props.value || props.defaultValue || '');
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [validationState, setValidationState] = useState({
    isValid: true,
    message: ''
  });

  const inputId = props.id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const errorId = `${inputId}-error`;
  const helperId = `${inputId}-helper`;

  // Real-time validation
  useEffect(() => {
    if (validation && value) {
      const result = validation(value);
      setValidationState(result);
      if (onValidation) {
        onValidation(result);
      }
    } else if (value === '' && required) {
      setValidationState({
        isValid: false,
        message: 'This field is required'
      });
    } else {
      setValidationState({
        isValid: true,
        message: ''
      });
    }
  }, [value, validation, required, onValidation]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  const handleFocus = (e) => {
    setIsFocused(true);
    if (props.onFocus) {
      props.onFocus(e);
    }
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    if (props.onBlur) {
      props.onBlur(e);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const hasError = error || !validationState.isValid;
  const hasSuccess = success || (validationState.isValid && value && !hasError);
  const displayType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className="space-y-2">
      {/* Label */}
      {label && (
        <label
          htmlFor={inputId}
          className={cn(
            'text-label-medium text-foreground',
            'transition-colors duration-200',
            hasError && 'text-destructive',
            hasSuccess && 'text-success'
          )}
        >
          {label}
          {required && (
            <span className="text-destructive ml-1" aria-label="required">
              *
            </span>
          )}
        </label>
      )}

      {/* Input Container */}
      <div className="relative">
        {/* Left Icon */}
        {leftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
            {leftIcon}
          </div>
        )}

        {/* Input Field */}
        <input
          id={inputId}
          ref={ref}
          type={displayType}
          className={cn(
            // Base styles
            'flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm',
            'transition-all duration-200 ease-in-out',
            'placeholder:text-muted-foreground',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50',
            
            // Enhanced visual feedback
            'hover:border-ring/50',
            isFocused && 'ring-2 ring-ring ring-offset-2',
            
            // State-based styling
            hasError && [
              'border-destructive text-destructive',
              'focus-visible:ring-destructive',
              'placeholder:text-destructive/60'
            ],
            hasSuccess && [
              'border-success',
              'focus-visible:ring-success'
            ],
            !hasError && !hasSuccess && 'border-input',
            
            // Icon spacing
            leftIcon && 'pl-10',
            (rightIcon || showPasswordToggle || hasError || hasSuccess) && 'pr-10',
            
            className
          )}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          aria-invalid={hasError}
          aria-describedby={cn(
            hasError && errorId,
            helperText && helperId
          )}
          aria-required={required}
          {...props}
        />

        {/* Right Icons */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
          {/* Validation Icons */}
          {hasError && (
            <AlertCircle className="h-4 w-4 text-destructive" aria-hidden="true" />
          )}
          {hasSuccess && (
            <CheckCircle2 className="h-4 w-4 text-success" aria-hidden="true" />
          )}
          
          {/* Password Toggle */}
          {type === 'password' && showPasswordToggle && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={cn(
                'p-1 rounded-sm text-muted-foreground',
                'hover:text-foreground hover:bg-muted',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                'transition-colors duration-200'
              )}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          )}
          
          {/* Custom Right Icon */}
          {rightIcon && !hasError && !hasSuccess && (
            <div className="text-muted-foreground">
              {rightIcon}
            </div>
          )}
        </div>
      </div>

      {/* Helper Text / Error Message */}
      {(helperText || hasError || validationState.message) && (
        <div className="space-y-1">
          {hasError && (
            <p
              id={errorId}
              className="text-label-small text-destructive flex items-center gap-1"
              role="alert"
              aria-live="polite"
            >
              <AlertCircle className="h-3 w-3" aria-hidden="true" />
              {error || validationState.message}
            </p>
          )}
          
          {helperText && !hasError && (
            <p
              id={helperId}
              className={cn(
                'text-label-small text-muted-foreground',
                hasSuccess && 'text-success'
              )}
            >
              {helperText}
            </p>
          )}
        </div>
      )}
    </div>
  );
});

EnhancedInput.displayName = 'EnhancedInput';

// Common validation functions
export const validationRules = {
  email: (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return {
      isValid: emailRegex.test(value),
      message: emailRegex.test(value) ? '' : 'Please enter a valid email address'
    };
  },
  
  password: (value) => {
    const minLength = value.length >= 8;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumbers = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    
    const isValid = minLength && hasUpperCase && hasLowerCase && hasNumbers;
    
    if (!minLength) {
      return { isValid: false, message: 'Password must be at least 8 characters long' };
    }
    if (!hasUpperCase) {
      return { isValid: false, message: 'Password must contain at least one uppercase letter' };
    }
    if (!hasLowerCase) {
      return { isValid: false, message: 'Password must contain at least one lowercase letter' };
    }
    if (!hasNumbers) {
      return { isValid: false, message: 'Password must contain at least one number' };
    }
    
    return { isValid: true, message: 'Strong password!' };
  },
  
  required: (value) => ({
    isValid: value.trim().length > 0,
    message: value.trim().length > 0 ? '' : 'This field is required'
  }),
  
  minLength: (min) => (value) => ({
    isValid: value.length >= min,
    message: value.length >= min ? '' : `Must be at least ${min} characters long`
  }),
  
  maxLength: (max) => (value) => ({
    isValid: value.length <= max,
    message: value.length <= max ? '' : `Must be no more than ${max} characters long`
  })
};

export { EnhancedInput };


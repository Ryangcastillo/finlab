import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowLeft, Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { ThemeToggle } from '../components/ui/theme-toggle';
import { EnhancedButton } from '../components/ui/enhanced-button';
import { EnhancedInput, validationRules } from '../components/ui/enhanced-input';
import { StatusIndicator, ProgressBar } from '../components/ui/loading-states';

export const EnhancedAuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [validationStates, setValidationStates] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleValidation = (field) => (result) => {
    setValidationStates(prev => ({
      ...prev,
      [field]: result
    }));
  };

  const validateConfirmPassword = (value) => {
    return {
      isValid: value === formData.password,
      message: value === formData.password ? 'Passwords match!' : 'Passwords do not match'
    };
  };

  const calculatePasswordStrength = () => {
    const password = formData.password;
    if (!password) return 0;
    
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[a-z]/.test(password)) strength += 25;
    if (/\d/.test(password)) strength += 25;
    
    return strength;
  };

  const getPasswordStrengthVariant = () => {
    const strength = calculatePasswordStrength();
    if (strength < 50) return 'error';
    if (strength < 75) return 'warning';
    return 'success';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success
      setSubmitStatus({
        type: 'success',
        message: isSignUp ? 'Account created successfully!' : 'Welcome back!'
      });
      
      // Redirect after success (in real app, this would be handled by router)
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1500);
      
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = () => {
    if (isSignUp) {
      return formData.fullName && 
             formData.email && 
             formData.password && 
             formData.confirmPassword &&
             validationStates.email?.isValid &&
             validationStates.password?.isValid &&
             validationStates.confirmPassword?.isValid;
    } else {
      return formData.email && 
             formData.password &&
             validationStates.email?.isValid;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
        <div className="relative z-10 flex flex-col justify-center px-12 text-primary-foreground">
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold">F</span>
              </div>
              <span className="text-3xl font-bold">FinLab</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 leading-tight">
              Simplify Your Shared Finances
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Join thousands of users who trust FinLab to manage their shared expenses, 
              track goals, and build better financial habits together.
            </p>
          </div>
          
          {/* Feature highlights */}
          <div className="space-y-4">
            {[
              'Real-time expense tracking',
              'Collaborative budgeting tools',
              'AI-powered insights',
              'Secure & private'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle2 className="h-5 w-5 text-primary-foreground/80" />
                <span className="text-primary-foreground/90">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-12">
        <div className="w-full max-w-md mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Back to home</span>
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile branding */}
          <div className="lg:hidden mb-8 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">F</span>
              </div>
              <span className="text-2xl font-bold text-foreground">FinLab</span>
            </div>
          </div>

          {/* Form Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              {isSignUp ? 'Create your account' : 'Welcome back'}
            </h2>
            <p className="text-muted-foreground">
              {isSignUp 
                ? 'Start managing your shared finances today' 
                : 'Sign in to your FinLab account'
              }
            </p>
          </div>

          {/* Status Message */}
          {submitStatus && (
            <div className="mb-6 fade-in-up">
              <StatusIndicator 
                status={submitStatus.type} 
                message={submitStatus.message}
              />
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name - Sign Up Only */}
            {isSignUp && (
              <div className="fade-in-up">
                <EnhancedInput
                  label="Full Name"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleInputChange('fullName')}
                  validation={validationRules.required}
                  onValidation={handleValidation('fullName')}
                  leftIcon={<User className="h-4 w-4" />}
                  required
                />
              </div>
            )}

            {/* Email */}
            <div className="fade-in-up">
              <EnhancedInput
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange('email')}
                validation={validationRules.email}
                onValidation={handleValidation('email')}
                leftIcon={<Mail className="h-4 w-4" />}
                required
              />
            </div>

            {/* Password */}
            <div className="fade-in-up">
              <EnhancedInput
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange('password')}
                validation={isSignUp ? validationRules.password : validationRules.required}
                onValidation={handleValidation('password')}
                leftIcon={<Lock className="h-4 w-4" />}
                showPasswordToggle
                required
              />
              
              {/* Password Strength Indicator - Sign Up Only */}
              {isSignUp && formData.password && (
                <div className="mt-2 space-y-2">
                  <ProgressBar
                    value={calculatePasswordStrength()}
                    max={100}
                    variant={getPasswordStrengthVariant()}
                    size="sm"
                  />
                  <p className="text-xs text-muted-foreground">
                    Password strength: {calculatePasswordStrength()}% complete
                  </p>
                </div>
              )}
            </div>

            {/* Confirm Password - Sign Up Only */}
            {isSignUp && (
              <div className="fade-in-up">
                <EnhancedInput
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange('confirmPassword')}
                  validation={validateConfirmPassword}
                  onValidation={handleValidation('confirmPassword')}
                  leftIcon={<Lock className="h-4 w-4" />}
                  showPasswordToggle
                  required
                />
              </div>
            )}

            {/* Submit Button */}
            <div className="fade-in-up">
              <EnhancedButton
                type="submit"
                className="w-full"
                size="lg"
                loading={isLoading}
                loadingText={isSignUp ? 'Creating account...' : 'Signing in...'}
                disabled={!isFormValid()}
              >
                {isSignUp ? 'Create Account' : 'Sign In'}
              </EnhancedButton>
            </div>

            {/* Toggle Form Type */}
            <div className="text-center fade-in-up">
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setFormData({
                    fullName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                  });
                  setValidationStates({});
                  setSubmitStatus(null);
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {isSignUp 
                  ? 'Already have an account? Sign in' 
                  : "Don't have an account? Sign up"
                }
              </button>
            </div>
          </form>

          {/* Terms and Privacy */}
          {isSignUp && (
            <div className="mt-8 text-center text-xs text-muted-foreground fade-in-up">
              By creating an account, you agree to our{' '}
              <Link to="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card } from '../components/ui/card';
import { ThemeToggle } from '../components/ui/theme-toggle';

export const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Theme toggle in top right */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-md space-y-8">
        {/* Logo and Welcome */}
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Welcome to FinLab</h1>
            <p className="text-muted-foreground">
              Manage shared expenses and financial projects with your partner or roommate. Get started in seconds.
            </p>
          </div>
        </div>

        {/* Auth Form */}
        <Card className="p-6 space-y-6">
          <div className="space-y-4">
            {isSignUp && (
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full"
                />
              </div>
            )}
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full"
              />
            </div>

            {isSignUp && (
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium">
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full"
                />
              </div>
            )}
          </div>

          <div className="space-y-4">
            <Button className="w-full" size="lg">
              {isSignUp ? 'Sign Up' : 'Log In'}
            </Button>
            
            <Button variant="outline" className="w-full" size="lg">
              {isSignUp ? 'Log In' : 'Sign Up'}
            </Button>
          </div>

          <div className="text-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {isSignUp 
                ? 'Already have an account? Log in' 
                : "Don't have an account? Sign up"
              }
            </button>
          </div>
        </Card>

        {/* Terms */}
        <div className="text-center text-sm text-muted-foreground">
          By continuing, you agree to our{' '}
          <a href="#" className="underline hover:text-foreground">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="underline hover:text-foreground">
            Privacy Policy
          </a>
          .
        </div>
      </div>
    </div>
  );
};


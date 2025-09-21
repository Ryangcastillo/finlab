import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ThemeToggle } from '../ui/theme-toggle';

export const Header = ({ variant = 'landing' }) => {
  const Logo = () => (
    <Link to="/" className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
        <span className="text-primary-foreground font-bold text-lg">F</span>
      </div>
      <span className="text-xl font-bold text-foreground">FinLab</span>
    </Link>
  );

  if (variant === 'landing') {
    return (
      <header className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Logo />

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            <a
              href="#support"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Support
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/auth">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>
    );
  }

  // App header variant
  return (
    <header className="w-full border-b border-border bg-background">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="/overview"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Overview
          </a>
          <a
            href="/transactions"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Transactions
          </a>
          <a
            href="/insights"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Insights & Goals
          </a>
          <a
            href="/budget"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Budget
          </a>
          <a
            href="/investments"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Investments
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <div className="w-8 h-8 bg-muted rounded-full"></div>
        </div>
      </div>
    </header>
  );
};

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  CreditCard, 
  BarChart3, 
  PiggyBank, 
  TrendingUp, 
  Settings,
  Users,
  Target,
  FileText
} from 'lucide-react';
import { cn } from './lib/utils';
import { Button } from './components/ui/button';

export const Sidebar = ({ className, collapsed = false }) => {
  const location = useLocation();

  const sidebarItems = [
    { icon: Home, label: 'Overview', href: '/dashboard' },
    { icon: CreditCard, label: 'Transactions', href: '/transactions' },
    { icon: Target, label: 'Insights & Goals', href: '/insights' },
    { icon: BarChart3, label: 'Budget', href: '/budget' },
    { icon: TrendingUp, label: 'Investments', href: '/investments' },
    { icon: Users, label: 'Collaboration', href: '/collaboration' },
    { icon: FileText, label: 'Reports', href: '/reports' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ];

  return (
    <div className={cn(
      'flex flex-col h-full bg-card border-r border-border',
      collapsed ? 'w-16' : 'w-64',
      className
    )}>
      {/* Logo */}
      <div className="p-4 border-b border-border">
        <Link to="/dashboard" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">F</span>
          </div>
          {!collapsed && (
            <span className="text-xl font-bold text-foreground">FinLab</span>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          
          return (
            <Link key={item.href} to={item.href}>
              <Button
                variant={isActive ? 'default' : 'ghost'}
                className={cn(
                  'w-full justify-start',
                  collapsed ? 'px-2' : 'px-3'
                )}
              >
                <Icon className="h-4 w-4" />
                {!collapsed && (
                  <span className="ml-2">{item.label}</span>
                )}
              </Button>
            </Link>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">S</span>
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">Sarah</p>
              <p className="text-xs text-muted-foreground truncate">sarah@example.com</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


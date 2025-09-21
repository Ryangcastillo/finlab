import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Target, TrendingUp, Lightbulb, DollarSign } from 'lucide-react';
import { Header } from '../shared/components/layout/Header';
import { Sidebar } from '../shared/components/layout/Sidebar';
import { Card } from '../shared/components/card';
import { Badge } from '../shared/components/badge';
import { Progress } from '../shared/components/progress';
import { Button } from '../shared/components/button';

export const InsightsPage = () => {
  // Mock data for charts
  const monthlyExpenses = [
    { month: 'Jan', amount: 2400 },
    { month: 'Feb', amount: 2100 },
    { month: 'Mar', amount: 2800 },
    { month: 'Apr', amount: 2300 },
    { month: 'May', amount: 2600 },
    { month: 'Jun', amount: 2200 },
  ];

  const expenseCategories = [
    { name: 'Rent', value: 1200, color: '#22c55e' },
    { name: 'Groceries', value: 450, color: '#3b82f6' },
    { name: 'Utilities', value: 200, color: '#f59e0b' },
    { name: 'Entertainment', value: 180, color: '#ef4444' },
    { name: 'Transport', value: 120, color: '#8b5cf6' },
  ];

  const savingsGoals = [
    { name: 'Vacation Fund', current: 2400, target: 5000, progress: 48 },
    { name: 'Emergency Fund', current: 1800, target: 3000, progress: 60 },
    { name: 'Home Down Payment', current: 8500, target: 20000, progress: 42.5 },
  ];

  const aiInsights = [
    {
      type: 'savings',
      title: 'Grocery Optimization',
      description: 'You could save $45/month by buying shampoo in bulk instead of individual bottles.',
      impact: '$540/year',
      icon: Lightbulb,
    },
    {
      type: 'goal',
      title: 'Vacation Goal on Track',
      description: 'At your current saving rate, you\'ll reach your vacation goal 2 months early.',
      impact: 'Goal completion: March 2024',
      icon: Target,
    },
    {
      type: 'trend',
      title: 'Spending Pattern Alert',
      description: 'Your entertainment expenses increased by 25% this month. Consider setting a budget.',
      impact: '+$36 vs last month',
      icon: TrendingUp,
    },
  ];

  const COLORS = ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'];

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header variant="app" />
        
        <main className="flex-1 p-6 space-y-6">
          {/* Page Header */}
          <div>
            <h1 className="text-3xl font-bold text-foreground">Insights & Goals</h1>
            <p className="text-muted-foreground">Track your progress and discover ways to optimize your finances.</p>
          </div>

          {/* AI Insights */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">AI-Powered Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {aiInsights.map((insight, index) => {
                const Icon = insight.icon;
                return (
                  <div key={index} className="p-4 bg-muted/50 rounded-lg space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <Badge variant="outline">{insight.type}</Badge>
                    </div>
                    <h3 className="font-semibold text-foreground">{insight.title}</h3>
                    <p className="text-sm text-muted-foreground">{insight.description}</p>
                    <p className="text-sm font-medium text-primary">{insight.impact}</p>
                  </div>
                );
              })}
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Monthly Spending Trend */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Monthly Spending Trend</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyExpenses}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" className="text-muted-foreground" />
                  <YAxis className="text-muted-foreground" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                  <Line type="monotone" dataKey="amount" stroke="#22c55e" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            {/* Expense Categories */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Expense Categories</h2>
              <div className="flex items-center justify-center">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={expenseCategories}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {expenseCategories.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>

          {/* Savings Goals */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">Savings Goals</h2>
              <Button variant="outline" size="sm">
                <Target className="h-4 w-4 mr-2" />
                Add Goal
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {savingsGoals.map((goal, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-lg space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground">{goal.name}</h3>
                    <Badge variant="outline">{goal.progress}%</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="text-foreground font-medium">
                        ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                      </span>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      ${(goal.target - goal.current).toLocaleString()} remaining
                    </span>
                    <Button variant="ghost" size="sm" className="text-primary">
                      Add Funds
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};


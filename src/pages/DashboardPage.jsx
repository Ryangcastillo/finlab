import React from 'react';
import { Plus, TrendingUp, TrendingDown, DollarSign, Users } from 'lucide-react';
import { Header } from '../shared/components/layout/Header';
import { Sidebar } from '../shared/components/layout/Sidebar';
import { Button } from '../shared/components/button';
import { Card } from '../shared/components/card';
import { Badge } from '../shared/components/badge';
import { Progress } from '../shared/components/progress';

export const DashboardPage = () => {
  // Mock data for dashboard
  const upcomingPayments = [
    { id: 1, title: 'Rent', amount: 1200, dueDate: '2024-01-15', status: 'pending' },
    { id: 2, title: 'Utilities', amount: 150, dueDate: '2024-01-20', status: 'pending' },
    { id: 3, title: 'Internet', amount: 80, dueDate: '2024-01-25', status: 'paid' },
  ];

  const recentActivity = [
    { id: 1, description: 'Sarah added grocery expense', amount: 45.67, type: 'expense' },
    { id: 2, description: 'Payment received from John', amount: 200, type: 'income' },
    { id: 3, description: 'Rent payment processed', amount: 1200, type: 'expense' },
  ];

  const stats = [
    { title: 'Total Balance', value: '$2,450.00', change: '+12%', icon: DollarSign, trend: 'up' },
    { title: 'Monthly Expenses', value: '$1,890.00', change: '-5%', icon: TrendingDown, trend: 'down' },
    { title: 'Shared Goals', value: '3 Active', change: '+1', icon: Users, trend: 'up' },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header variant="app" />
        
        <main className="flex-1 p-6 space-y-6">
          {/* Welcome Section */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Welcome back, Sarah!</h1>
              <p className="text-muted-foreground">Here's what's happening with your shared finances.</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Expense
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    {stat.trend === 'up' ? (
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                    )}
                    <span className={`text-sm ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-muted-foreground ml-1">from last month</span>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Upcoming Payments */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-foreground">Upcoming Payments</h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              <div className="space-y-4">
                {upcomingPayments.map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">{payment.title}</p>
                      <p className="text-sm text-muted-foreground">Due {payment.dueDate}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="font-semibold text-foreground">${payment.amount}</span>
                      <Badge variant={payment.status === 'paid' ? 'default' : 'outline'}>
                        {payment.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-foreground">Recent Activity</h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">{activity.description}</p>
                      <p className="text-sm text-muted-foreground">2 hours ago</p>
                    </div>
                    <span className={`font-semibold ${activity.type === 'income' ? 'text-green-500' : 'text-foreground'}`}>
                      {activity.type === 'income' ? '+' : '-'}${activity.amount}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Goals Progress */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">Shared Goals Progress</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-foreground">Vacation Fund</span>
                  <span className="text-sm text-muted-foreground">$2,400 / $5,000</span>
                </div>
                <Progress value={48} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-foreground">Emergency Fund</span>
                  <span className="text-sm text-muted-foreground">$1,800 / $3,000</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-foreground">Home Down Payment</span>
                  <span className="text-sm text-muted-foreground">$8,500 / $20,000</span>
                </div>
                <Progress value={42.5} className="h-2" />
              </div>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};


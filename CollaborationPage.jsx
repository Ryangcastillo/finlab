import React, { useState } from 'react';
import { Plus, Users, FileText, DollarSign, Calendar, Upload, MessageCircle } from 'lucide-react';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from './components/ui/avatar';
import { Input } from './components/ui/input';

export const CollaborationPage = () => {
  const [activeTab, setActiveTab] = useState('expenses');

  // Mock data for collaboration
  const collaborators = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', avatar: '', role: 'Owner' },
    { id: 2, name: 'John Smith', email: 'john@example.com', avatar: '', role: 'Member' },
    { id: 3, name: 'Emma Davis', email: 'emma@example.com', avatar: '', role: 'Member' },
  ];

  const sharedExpenses = [
    { 
      id: 1, 
      title: 'Grocery Shopping', 
      amount: 156.78, 
      date: '2024-01-10', 
      paidBy: 'Sarah Johnson',
      splitBetween: ['Sarah Johnson', 'John Smith'],
      status: 'pending',
      category: 'Food & Dining'
    },
    { 
      id: 2, 
      title: 'Electricity Bill', 
      amount: 89.50, 
      date: '2024-01-08', 
      paidBy: 'John Smith',
      splitBetween: ['Sarah Johnson', 'John Smith', 'Emma Davis'],
      status: 'approved',
      category: 'Utilities'
    },
    { 
      id: 3, 
      title: 'Internet Bill', 
      amount: 65.00, 
      date: '2024-01-05', 
      paidBy: 'Emma Davis',
      splitBetween: ['Sarah Johnson', 'John Smith', 'Emma Davis'],
      status: 'approved',
      category: 'Utilities'
    },
  ];

  const savingsGoals = [
    { id: 1, name: 'Vacation Fund', target: 5000, current: 2400, contributors: 2 },
    { id: 2, name: 'Emergency Fund', target: 3000, current: 1800, contributors: 3 },
  ];

  const investments = [
    { id: 1, name: 'Joint Investment Account', value: 12500, return: '+8.5%', contributors: 2 },
    { id: 2, name: 'Crypto Portfolio', value: 3200, return: '+15.2%', contributors: 3 },
  ];

  const tabs = [
    { id: 'expenses', label: 'Shared Expenses', icon: DollarSign },
    { id: 'savings', label: 'Savings', icon: FileText },
    { id: 'investments', label: 'Investments', icon: Users },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'expenses':
        return (
          <div className="space-y-4">
            {sharedExpenses.map((expense) => (
              <Card key={expense.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <h3 className="font-semibold text-foreground">{expense.title}</h3>
                      <Badge variant="outline">{expense.category}</Badge>
                      <Badge variant={expense.status === 'approved' ? 'default' : 'secondary'}>
                        {expense.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Paid by {expense.paidBy} • Split between {expense.splitBetween.length} people
                    </p>
                    <p className="text-xs text-muted-foreground">{expense.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-foreground">${expense.amount}</p>
                    <p className="text-sm text-muted-foreground">
                      ${(expense.amount / expense.splitBetween.length).toFixed(2)} per person
                    </p>
                  </div>
                  <div className="ml-4 flex space-x-2">
                    <Button variant="outline" size="sm">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Upload className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        );
      
      case 'savings':
        return (
          <div className="space-y-4">
            {savingsGoals.map((goal) => (
              <Card key={goal.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{goal.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {goal.contributors} contributors
                    </p>
                    <div className="mt-2 w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${(goal.current / goal.target) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <p className="text-lg font-semibold text-foreground">
                      ${goal.current.toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      of ${goal.target.toLocaleString()}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="ml-4">
                    Contribute
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        );
      
      case 'investments':
        return (
          <div className="space-y-4">
            {investments.map((investment) => (
              <Card key={investment.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{investment.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {investment.contributors} contributors
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-foreground">
                      ${investment.value.toLocaleString()}
                    </p>
                    <p className="text-sm text-green-500 font-medium">
                      {investment.return}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="ml-4">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header variant="app" />
        
        <main className="flex-1 p-6 space-y-6">
          {/* Page Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Collaboration</h1>
              <p className="text-muted-foreground">Manage shared expenses, savings, and investments with your team.</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Expense
            </Button>
          </div>

          {/* Collaborators Section */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-foreground">Team Members</h2>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Invite Member
              </Button>
            </div>
            <div className="flex space-x-4">
              {collaborators.map((collaborator) => (
                <div key={collaborator.id} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                  <Avatar>
                    <AvatarImage src={collaborator.avatar} />
                    <AvatarFallback>{collaborator.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-foreground">{collaborator.name}</p>
                    <p className="text-sm text-muted-foreground">{collaborator.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Tabs */}
          <div className="border-b border-border">
            <nav className="flex space-x-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-primary text-primary'
                        : 'border-transparent text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Tab Content */}
          <div>
            {renderTabContent()}
          </div>
        </main>
      </div>
    </div>
  );
};


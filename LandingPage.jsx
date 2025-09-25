import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, BarChart3, Target } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';

export const LandingPage = () => {
  const features = [
    {
      icon: CheckCircle,
      title: 'Shared Expense Tracking',
      description: 'Easily track and manage shared expenses with clear visibility for all participants.',
    },
    {
      icon: Users,
      title: 'Collaborative Budgeting',
      description: 'Create and manage budgets together, ensuring everyone stays on the same page.',
    },
    {
      icon: Target,
      title: 'Financial Goal Setting',
      description: 'Set and track progress towards shared financial goals, like saving for a vacation or a down payment.',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header variant="landing" />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background illustration area */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
        
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Simplify Shared Finances
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              FinLab: Shared Ledger makes managing shared expenses and financial projects 
              easy, whether you're a couple, roommates, or just sharing costs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link to="/auth">
                <Button size="lg" className="text-lg px-8 py-6">
                  Get Started For Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Key Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              FinLab: Shared Ledger offers a range of features designed to make shared finances simple and transparent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-8 text-center space-y-4 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Take Control of Your Shared Finances?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join FinLab: Shared Ledger today and start managing your shared expenses with ease.
            </p>
            <Link to="/auth">
              <Button size="lg" className="text-lg px-8 py-6">
                Sign Up Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};


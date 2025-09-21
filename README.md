# FinLab - Next-Generation Shared Finance Application

## 🎯 Overview

FinLab is a modern, modular web application for managing shared finances. Built with React, Vite, and a feature-based architecture following clean code principles.

## ✨ Key Features

- **Shared Expense Tracking**: Manage shared expenses with clear visibility
- **Collaborative Budgeting**: Create and manage budgets together
- **Financial Goal Setting**: Track progress towards shared financial goals
- **AI-Powered Insights**: Smart financial recommendations
- **Real-time Updates**: Live expense tracking and notifications
- **Responsive Design**: Mobile-first, works on all devices
- **Dark/Light Themes**: Automatic theme switching with user preference

## 🏗️ Architecture

This project implements a **modular feature-based architecture** following the PROJECT_RULES.md specifications:

### Directory Structure
```
src/
├── shared/           # Reusable components and utilities
├── features/         # Feature-specific modules (auth, dashboard, etc.)
├── pages/           # Page components
├── contexts/        # React contexts
└── services/        # API layer
```

### Key Principles
- **Feature-based organization**: Each feature is self-contained
- **Separation of concerns**: UI components never handle business logic directly
- **Clean dependencies**: Proper import/export structure
- **Type safety**: TypeScript throughout the application

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Ryangcastillo/finlab.git
cd finlab

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🎨 UI Components

The application includes a comprehensive component library:

- **Basic Components**: Button, Input, Card, Badge, Progress
- **Layout Components**: Header, Footer, Sidebar
- **Interactive Components**: Tabs, Theme Toggle, Avatar
- **Loading States**: Skeleton loaders, Status indicators

All components support theming and responsive design.

## 🔧 Development

### Adding New Features
1. Create feature folder in `src/features/`
2. Follow the established patterns (components, hooks, services, types)
3. Export public API through index files
4. Document the feature

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint (when configured)
```

## 📱 Pages & Features

### Landing Page
- Clean, modern design showcasing key features
- Call-to-action buttons
- Responsive layout with mobile-first approach

### Authentication
- Sign up and login forms
- Form validation
- Theme toggle
- Responsive design

### Dashboard (Coming Soon)
- Expense overview
- Recent transactions
- Quick actions

### Collaboration (Coming Soon)
- Shared expense management
- Member invitations
- Real-time updates

## 🎨 Design System

### Theme Support
- CSS custom properties for consistent theming
- Automatic dark/light mode detection
- User preference persistence

### Color Palette
- **Primary**: Green (#22c55e) - Trust and growth
- **Secondary**: Neutral grays for content
- **Status Colors**: Success, warning, error states

### Typography
- System fonts for optimal performance
- Consistent sizing scale
- Accessible contrast ratios

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite
- **Styling**: Custom CSS with CSS variables
- **Icons**: Lucide React
- **Charts**: Recharts (for analytics)
- **Routing**: React Router v6
- **State Management**: React Context + Custom Hooks
- **Build Tool**: Vite
- **Package Manager**: npm

## 📚 Documentation

- [ARCHITECTURE.md](./ARCHITECTURE.md) - Detailed architecture documentation
- [COMPONENTS.md](./COMPONENTS.md) - Component library guide
- [docs/PROJECT_RULES.md](./docs/PROJECT_RULES.md) - Development guidelines

## 🎯 Project Status

### ✅ Completed
- Modular architecture implementation
- Core UI component library
- Theme system with dark/light mode
- Landing page with responsive design
- Authentication pages with validation
- Build system and development environment
- Navigation and routing

### 🚧 In Progress
- Dashboard implementation
- Real-time features
- Advanced form validation
- Performance optimizations

### 📋 Planned
- Backend API integration
- User authentication flow
- Expense management features
- Collaboration tools
- Mobile app (React Native)
- Desktop app (Electron)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Follow the established architecture patterns
4. Add tests for new features
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🎉 Screenshots

### Landing Page
![Landing Page](https://github.com/user-attachments/assets/25003438-0818-4610-a8e2-af9e2b9fb8f9)

### Authentication (Light Mode)
![Auth Light Mode](https://github.com/user-attachments/assets/1884b139-1938-436c-9e78-069e76ecb936)

### Authentication (Dark Mode)
![Auth Dark Mode](https://github.com/user-attachments/assets/86acbaf1-3233-44b6-829f-777b0f4da2a7)

---

**Built with ❤️ for better financial relationships**

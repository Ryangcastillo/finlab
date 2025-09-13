# Modular Frontend Development Guide & Project Rules

## 🎯 PROJECT RULES (Apply to ALL Repositories)

### **RULE SET 1: Code Organization & Architecture**

- **🔥 MANDATORY MODULAR STRUCTURE**: Break everything into small, self-contained modules with single responsibilities
- **🔥 STRICT SEPARATION OF CONCERNS**: UI components NEVER handle business logic or API calls directly
- **🔥 FEATURE-BASED FOLDERS**: Organize by features, not file types (no more separate `components/` and `services/` at root)
- **🔥 CLEAN ARCHITECTURE**: Separate policy from implementation details - defer technology decisions

### **RULE SET 2: AI-Driven Development (Vibe Coding)**

- **📋 PLAN FIRST**: Spend 60-70% of time planning before coding
- **📋 STRUCTURED PLANNING PROCESS**:

1. Architecture & tech choices
2. Detailed feature documentation
3. UI/UX design with all states (loading, error, success)
4. Granular task breakdown

- **📋 CONTEXT MANAGEMENT**: Feed AI only relevant files/folders for current task
- **📋 NEW CONVERSATIONS**: Start fresh AI conversations at natural breakpoints
- **📋 MVP MINDSET**: Build simplest valuable version first, avoid scope creep
- **📋 MULTIPLE SOLUTIONS**: Always ask AI for 2-3 approaches with pros/cons
- **📋 UNDERSTAND AI CODE**: Never blindly copy - ask for explanations of unfamiliar parts

### **RULE SET 3: Code Quality & Consistency**

- **✅ NAMING CONVENTIONS**: PascalCase for components, camelCase for variables, kebab-case for files
- **✅ LINTERS MANDATORY**: ESLint, Prettier, Tailwind CSS linter configured and enforced
- **✅ DRY PRINCIPLE**: No duplicate logic - create reusable utilities
- **✅ SOLID PRINCIPLES**: Single responsibility, open/closed, dependency inversion
- **✅ TYPE SAFETY**: Strict TypeScript config, no `any` types allowed

### **RULE SET 4: Backend Integration & APIs**

- **🔌 SERVICE LAYER PATTERN**: All API calls go through dedicated service functions
- **🔌 CUSTOM HOOKS**: Business logic isolated in custom hooks, not components
- **🔌 ERROR BOUNDARIES**: Implement error boundaries for graceful failure handling
- **🔌 LOADING STATES**: Every async operation has loading, success, and error states
- **🔌 ENVIRONMENT VARIABLES**: Never hardcode URLs, API keys, or configuration

### **RULE SET 5: Security & Best Practices**

- **🔒 INPUT SANITIZATION**: Validate and sanitize all user inputs
- **🔒 SECURE AUTHENTICATION**: Token-based auth (JWT, OAuth), HTTPS everywhere
- **🔒 AUTHORIZATION CHECKS**: Role-based access control on all protected routes
- **🔒 NO SECRETS IN CODE**: Use `.env` files, never commit sensitive data
- **🔒 REGULAR SECURITY AUDITS**: Review critical code against security best practices

### **RULE SET 6: Testing & Quality Assurance**

- **🧪 UNIT TESTS REQUIRED**: Every core function must have unit tests
- **🧪 TDD FOR CRITICAL PATHS**: Test-driven development for auth, APIs, core features
- **🧪 MOCK EXTERNAL DEPS**: Mock databases, third-party APIs in tests
- **🧪 CI/CD AUTOMATION**: Tests run automatically on every commit/PR
- **🧪 TESTABLE ARCHITECTURE**: Business logic testable without UI dependencies

### **RULE SET 7: Documentation & Knowledge Management**

- **📖 COMPREHENSIVE README**: Setup instructions, tech stack, architecture overview
- **📖 CODE COMMENTS**: Explain the “why” not the “what” - focus on complex logic
- **📖 ARCHITECTURAL DECISIONS**: Document important design choices (ADRs)
- **📖 KEEP DOCS CURRENT**: Update documentation with every feature change
- **📖 VISUAL DOCUMENTATION**: Include architecture diagrams, API flow charts

### **RULE SET 8: Version Control & Collaboration**

- **🔄 GIT FROM DAY ONE**: Initialize repository before writing any code
- **🔄 FEATURE BRANCH WORKFLOW**: No direct commits to main branch
- **🔄 MEANINGFUL COMMITS**: Clear, descriptive commit messages
- **🔄 CODE REVIEWS MANDATORY**: Every feature branch requires review before merge
- **🔄 REGULAR COMMITS**: Commit at natural breakpoints, not just at end of day

### **RULE SET 9: Deployment & Scalability**

- **🚀 CONTAINERIZATION**: Docker for consistent environments
- **🚀 INFRASTRUCTURE AS CODE**: Terraform/CloudFormation for reproducible deployments
- **🚀 RESTful/GraphQL APIS**: Design APIs for scalability and maintainability
- **🚀 MONITORING & LOGGING**: Implement comprehensive logging and error tracking
- **🚀 PERFORMANCE OPTIMIZATION**: Code splitting, lazy loading, caching strategies

---

## 🛠️ ENHANCED DEVELOPMENT PROMPT

**Use this prompt when asking AI to help build your frontend:**

```
Create a modular frontend application with the following requirements:

ARCHITECTURE:
- Use feature-based folder structure (not file-type based)
- Each module should be self-contained with its own components, hooks, types, and tests
- Implement clear separation between UI components and business logic
- Create reusable components that don't know about business logic

FOLDER STRUCTURE:

```

src/
├── shared/                 # Shared utilities and components
│   ├── components/         # Reusable UI components
│   ├── hooks/             # Reusable custom hooks
│   ├── utils/             # Utility functions
│   ├── types/             # Shared TypeScript types
│   └── constants/         # App-wide constants
├── features/              # Feature-based modules
│   ├── auth/              # Authentication module
│   │   ├── components/    # Auth-specific components
│   │   ├── hooks/         # Auth-specific hooks
│   │   ├── services/      # Auth API calls
│   │   ├── types/         # Auth-specific types
│   │   └── index.ts       # Public API of the module
│   └── [feature-name]/    # Other features follow same pattern
├── services/              # API integration layer
│   ├── api.ts             # Base API configuration
│   ├── endpoints.ts       # API endpoints
│   └── types.ts           # API response types
└── app/                   # App-level configuration
├── providers/         # Context providers
├── router/            # Routing configuration
└── config/            # App configuration

```
BACKEND INTEGRATION RULES:
- Create a service layer that handles ALL backend communication
- Use custom hooks to manage API calls and state
- Never make direct API calls from components
- Implement loading, error, and success states for all async operations
- Use environment variables for all backend URLs and API keys

STYLING REQUIREMENTS:
- Use CSS Modules or styled-components for component-level styles
- If using Tailwind, provide clear utility class organization
- Implement design system with consistent spacing, colors, and typography
- Create style guides and component documentation

Please implement this with [YOUR_TECH_STACK] and include:
1. Example of one complete feature module
2. Service layer setup with error handling
3. TypeScript types for all data structures
4. Basic testing setup for components and services

```

## CSS Error Prevention Setup

### 1. Tailwind Configuration (tailwind.config.js)

```jsx
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Define your design system here
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

```

### 2. ESLint Rules for CSS (.eslintrc.js)

```jsx
module.exports = {
  extends: [
    // ... other extends
    'plugin:tailwindcss/recommended'
  ],
  plugins: ['tailwindcss'],
  rules: {
    // Tailwind-specific rules
    'tailwindcss/classnames-order': 'error',
    'tailwindcss/no-custom-classname': 'error',
    'tailwindcss/no-contradicting-classname': 'error',
  }
}

```

### 3. VS Code Settings (settings.json)

```json
{
  "tailwindCSS.validate": true,
  "tailwindCSS.lint.cssConflict": "error",
  "tailwindCSS.lint.invalidApply": "error",
  "tailwindCSS.lint.invalidScreen": "error",
  "tailwindCSS.lint.invalidTailwindDirective": "error",
  "tailwindCSS.lint.invalidVariant": "error",
  "tailwindCSS.lint.recommendedVariantOrder": "warning",
  "editor.quickSuggestions": {
    "strings": true
  }
}

```

## TypeScript Error Prevention

### 1. Strict tsconfig.json

```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "exactOptionalPropertyTypes": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "build"]
}

```

### 2. API Types Template

```tsx
// services/types.ts
export interface ApiResponse<T> {
  data: T;
  message: string;
  status: 'success' | 'error';
}

export interface ApiError {
  message: string;
  code: string;
  details?: Record<string, unknown>;
}

// Custom hook for API calls
export interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
}

```

## Development Workflow

### 1. Feature Development Process

1. Define types first (data structures, props, API responses)
2. Create service functions (API calls)
3. Build custom hooks (business logic)
4. Create UI components (pure presentation)
5. Connect everything together
6. Add tests

### 2. Backend Integration Checklist

- [ ]  Environment variables configured
- [ ]  Service layer handles all API calls
- [ ]  Error boundaries implemented
- [ ]  Loading states handled
- [ ]  Success/error notifications
- [ ]  Type safety for all API responses

### 3. Style Error Prevention

- [ ]  Tailwind IntelliSense enabled
- [ ]  ESLint rules for CSS conflicts
- [ ]  Design system defined in config
- [ ]  Component style documentation
- [ ]  Consistent naming conventions

## Quick Commands for Setup

```bash
# Install essential packages
npm install @tailwindcss/forms @tailwindcss/typography
npm install -D eslint-plugin-tailwindcss
npm install -D @types/node

# Generate Tailwind config
npx tailwindcss init -p

# Setup TypeScript
npx tsc --init

```

## Example Module Structure

When requesting a feature, ask for this structure:

```
features/auth/
├── components/
│   ├── LoginForm.tsx      # Pure UI component
│   ├── AuthGuard.tsx      # Logic component
│   └── index.ts           # Export all components
├── hooks/
│   ├── useAuth.ts         # Business logic hook
│   ├── useLogin.ts        # Specific auth actions
│   └── index.ts           # Export all hooks
├── services/
│   ├── authAPI.ts         # API calls
│   └── index.ts           # Export services
├── types/
│   ├── auth.types.ts      # Type definitions
│   └── index.ts           # Export types
└── index.ts               # Public API of the module

```

This structure ensures that each module is self-contained and can work independently, making backend integration much easier!

## 🎯 GITHUB REPOSITORY TEMPLATE STRUCTURE

```
project-name/
├── .github/
│   ├── workflows/           # CI/CD pipelines
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── ISSUE_TEMPLATE.md
├── docs/
│   ├── ARCHITECTURE.md      # System architecture overview
│   ├── API.md              # API documentation
│   ├── DEPLOYMENT.md       # Deployment guide
│   └── CONTRIBUTING.md     # Contribution guidelines
├── src/
│   ├── shared/             # Shared utilities and components
│   ├── features/           # Feature-based modules
│   ├── services/           # API integration layer
│   └── app/               # App-level configuration
├── tests/
│   ├── unit/              # Unit tests
│   ├── integration/       # Integration tests
│   └── __mocks__/         # Test mocks
├── .env.example           # Environment variables template
├── .eslintrc.js          # ESLint configuration
├── .prettierrc           # Prettier configuration
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── docker-compose.yml    # Local development setup
├── Dockerfile           # Production container
└── README.md           # Comprehensive project documentation

```

## 🚨 ADDITIONAL SUCCESS RULES I’M ADDING

### **RULE SET 10: AI Context Optimization**

- **🤖 CONTEXT BUDGET**: Keep AI context under 32k tokens per conversation
- **🤖 RELEVANT FILES ONLY**: Pass only files relevant to current task (use `@filename` syntax)
- **🤖 CONVERSATION CHECKPOINTS**: Save important decisions/patterns for future reference
- **🤖 MODEL SWITCHING**: Use Claude for architecture, GPT-4 for specific coding tasks
- **🤖 EVALUATOR-OPTIMIZER**: Have AI evaluate outputs against best practices, then optimize

### **RULE SET 11: Debugging & Development Workflow**

- **🐛 CONSOLE LOGGING**: Add comprehensive logging during development
- **🐛 EARLY RETURNS**: Use early returns and guard clauses for cleaner code
- **🐛 CHECKPOINT RESTORATION**: Use IDE features to quickly revert to working states
- **🐛 INCREMENTAL DEVELOPMENT**: Build in small, testable increments
- **🐛 ERROR REPRODUCTION**: Create minimal test cases to reproduce bugs

### **RULE SET 12: Performance & User Experience**

- **⚡ LAZY LOADING**: Implement code splitting and lazy loading for large apps
- **⚡ CACHING STRATEGIES**: Cache API responses, implement proper cache invalidation
- **⚡ LOADING INDICATORS**: Every async operation needs visual feedback
- **⚡ ERROR RECOVERY**: Provide clear error messages with recovery actions
- **⚡ ACCESSIBILITY**: Follow WCAG guidelines, test with screen readers

## 📋 PROJECT INITIALIZATION CHECKLIST

**Before Writing Any Code:**

- [ ]  Repository created with proper folder structure
- [ ]  Environment variables template created
- [ ]  Linting and formatting rules configured
- [ ]  Testing framework setup
- [ ]  CI/CD pipeline configured
- [ ]  Documentation templates created
- [ ]  Docker setup for consistent development environment

**During Development:**

- [ ]  Feature branch created for each new feature
- [ ]  Tests written for new functionality
- [ ]  Documentation updated with changes
- [ ]  Code reviewed before merging
- [ ]  Performance impact assessed

**Before Deployment:**

- [ ]  All tests passing
- [ ]  Security audit completed
- [ ]  Performance benchmarks met
- [ ]  Documentation complete and accurate
- [ ]  Deployment scripts tested
- [ ]  Monitoring and logging configured

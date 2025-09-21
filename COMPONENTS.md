# FinLab - Component Library

## 🎨 Shared Components

This document provides an overview of all reusable UI components available in the FinLab application.

## 📦 Installation & Usage

Components are available through the shared components index:

```javascript
import { Button, Input, Card, Badge } from '../shared/components';
```

## 🧩 Available Components

### Button
Flexible button component with multiple variants and sizes.

```javascript
import { Button } from '../shared/components';

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="outline">Outline Button</Button>
<Button variant="destructive">Delete</Button>

// With sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
```

**Props:**
- `variant`: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
- `size`: 'default' | 'sm' | 'lg' | 'icon'
- `disabled`: boolean
- `className`: string

### Input
Form input component with consistent styling.

```javascript
import { Input } from '../shared/components';

<Input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={handleChange}
/>
```

**Props:**
- `type`: HTML input type
- `placeholder`: string
- `value`: string
- `onChange`: function
- `disabled`: boolean
- `className`: string

### Card
Container component for grouped content.

```javascript
import { Card, CardHeader, CardTitle, CardContent } from '../shared/components';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
</Card>
```

**Components:**
- `Card`: Main container
- `CardHeader`: Header section
- `CardTitle`: Title text
- `CardDescription`: Description text
- `CardContent`: Main content area
- `CardFooter`: Footer section

### Badge
Small status indicator component.

```javascript
import { Badge } from '../shared/components';

<Badge>New</Badge>
<Badge variant="success">Approved</Badge>
<Badge variant="warning">Pending</Badge>
```

**Props:**
- `variant`: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning'

### Progress
Progress bar component.

```javascript
import { Progress } from '../shared/components';

<Progress value={60} max={100} />
```

**Props:**
- `value`: number (current progress)
- `max`: number (maximum value, default 100)

### Tabs
Tabbed interface component.

```javascript
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../shared/components';

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

### Avatar
User avatar component with fallback.

```javascript
import { Avatar, AvatarImage, AvatarFallback } from '../shared/components';

<Avatar>
  <AvatarImage src="/user-avatar.jpg" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

### ThemeToggle
Toggle between light and dark themes.

```javascript
import { ThemeToggle } from '../shared/components';

<ThemeToggle />
```

### Separator
Visual separator line.

```javascript
import { Separator } from '../shared/components';

<Separator />
<Separator orientation="vertical" />
```

## 🎭 Layout Components

### Header
Application header with navigation.

```javascript
import { Header } from '../shared/components/layout';

<Header variant="landing" />
<Header variant="dashboard" />
```

### Footer
Application footer with links.

```javascript
import { Footer } from '../shared/components/layout';

<Footer />
```

### Sidebar
Navigation sidebar for dashboard.

```javascript
import { Sidebar } from '../shared/components/layout';

<Sidebar />
```

## 🔄 Loading States

### Skeleton
Loading placeholder component.

```javascript
import { Skeleton } from '../shared/components/loading-states';

<Skeleton className="h-4 w-full" />
```

### StatusIndicator
Status indicator with loading, success, error states.

```javascript
import { StatusIndicator } from '../shared/components/loading-states';

<StatusIndicator status="loading" message="Processing..." />
<StatusIndicator status="success" message="Completed!" />
<StatusIndicator status="error" message="Error occurred" />
```

## 🎨 Theming

All components support the theme system:

### CSS Variables
```css
:root {
  --primary: #22c55e;
  --background: #ffffff;
  --foreground: #171717;
  --card: #ffffff;
  --border: #e5e5e5;
}

.dark {
  --primary: #4ade80;
  --background: #0a0a0a;
  --foreground: #fafafa;
  --card: #171717;
  --border: #404040;
}
```

### Using Theme Context
```javascript
import { useTheme } from '../contexts/ThemeContext';

const { theme, toggleTheme, isDark } = useTheme();
```

## 📱 Responsive Design

Components are designed mobile-first with responsive utilities:

```javascript
<Button className="w-full md:w-auto">
  Responsive Button
</Button>
```

## ♿ Accessibility

Components include accessibility features:
- Proper ARIA attributes
- Keyboard navigation support
- Focus management
- Screen reader compatibility

## 🛠️ Customization

### Custom Styling
Use className prop to add custom styles:

```javascript
<Button className="custom-button-class">
  Custom Styled Button
</Button>
```

### CSS Custom Properties
Override theme variables for specific components:

```css
.custom-card {
  --card-background: #f0f0f0;
}
```

## 📋 Best Practices

1. **Import from index**: Always import from the components index file
2. **Consistent props**: Follow the established prop patterns
3. **Accessibility**: Include proper labels and ARIA attributes
4. **Responsive**: Test components on different screen sizes
5. **Theme support**: Ensure components work in both light and dark modes

## 🔧 Development

### Adding New Components
1. Create component file in `src/shared/components/`
2. Follow existing patterns for props and styling
3. Add to `src/shared/components/index.js`
4. Update this documentation

### Testing Components
```javascript
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

This component library ensures consistent UI patterns across the FinLab application while maintaining flexibility for specific use cases.
// FinLab Brand Colors
export const COLORS = {
  // Primary brand color (green from the mockups)
  primary: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e', // Main green
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  
  // Neutral colors for backgrounds and text
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  
  // Status colors
  success: '#22c55e',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
};

// Theme-specific color mappings
export const THEME_COLORS = {
  light: {
    background: '#ffffff',
    foreground: '#171717',
    card: '#ffffff',
    cardForeground: '#171717',
    muted: '#f5f5f5',
    mutedForeground: '#737373',
    border: '#e5e5e5',
    primary: COLORS.primary[500],
    primaryForeground: '#ffffff',
  },
  dark: {
    background: '#0a0a0a',
    foreground: '#fafafa',
    card: '#171717',
    cardForeground: '#fafafa',
    muted: '#262626',
    mutedForeground: '#a3a3a3',
    border: '#404040',
    primary: COLORS.primary[400],
    primaryForeground: '#0a0a0a',
  },
};


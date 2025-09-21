// App configuration constants
export const APP_CONFIG = {
  APP_NAME: 'FinLab',
  APP_DESCRIPTION: 'Next-generation shared finance application',
  VERSION: '1.0.0',
  
  // API configuration
  API_TIMEOUT: 10000, // 10 seconds
  
  // UI configuration
  DEFAULT_PAGE_SIZE: 20,
  MAX_UPLOAD_SIZE: 10 * 1024 * 1024, // 10MB
  
  // Feature flags
  FEATURES: {
    COLLABORATION: true,
    AI_INSIGHTS: true,
    CSV_IMPORT: true,
    NOTIFICATIONS: true,
  },
  
  // Navigation
  ROUTES: {
    HOME: '/',
    AUTH: '/auth',
    DASHBOARD: '/dashboard',
    INSIGHTS: '/insights',
    COLLABORATION: '/collaboration',
    SETTINGS: '/settings',
  },
  
  // Theme
  THEME: {
    DEFAULT: 'light',
    STORAGE_KEY: 'finlab-theme',
  },
};
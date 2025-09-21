// API endpoints
export const ENDPOINTS = {
  // Auth endpoints
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  REFRESH: '/auth/refresh',
  LOGOUT: '/auth/logout',
  PROFILE: '/auth/profile',

  // User endpoints
  USERS: '/users',
  USER_BY_ID: (id: string) => `/users/${id}`,

  // Expense endpoints
  EXPENSES: '/expenses',
  EXPENSE_BY_ID: (id: string) => `/expenses/${id}`,
  SHARED_EXPENSES: '/expenses/shared',

  // Dashboard endpoints
  DASHBOARD: '/dashboard',
  DASHBOARD_STATS: '/dashboard/stats',

  // Collaboration endpoints
  COLLABORATORS: '/collaborators',
  INVITE_COLLABORATOR: '/collaborators/invite',

  // Settings endpoints
  SETTINGS: '/settings',
  PREFERENCES: '/settings/preferences',
} as const;

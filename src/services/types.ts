// API response types
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

// User types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: string;
}

// Auth types
export interface AuthData {
  user: User;
  token: string;
  refreshToken: string;
}

// Expense types
export interface Expense {
  id: string;
  amount: number;
  description: string;
  category: string;
  date: string;
  paidBy: string;
  participants: string[];
  status: 'pending' | 'approved' | 'rejected';
}

// Dashboard types
export interface DashboardData {
  totalBalance: number;
  monthlyExpenses: number;
  upcomingPayments: number;
  recentExpenses: Expense[];
}

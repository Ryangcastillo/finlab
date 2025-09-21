// Auth services
import { apiClient } from '../../services/api';
import { ENDPOINTS } from '../../services/endpoints';
import type { AuthData } from '../../services/types';
import type { LoginCredentials, SignupData } from '../types';

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthData> {
    const response = await apiClient.post<AuthData>(ENDPOINTS.LOGIN, credentials);
    
    if (response.status === 'success' && response.data) {
      localStorage.setItem('finlab-token', response.data.token);
      localStorage.setItem('finlab-refresh-token', response.data.refreshToken);
      return response.data;
    }
    
    throw new Error(response.message || 'Login failed');
  },

  async signup(signupData: SignupData): Promise<AuthData> {
    const response = await apiClient.post<AuthData>(ENDPOINTS.REGISTER, signupData);
    
    if (response.status === 'success' && response.data) {
      localStorage.setItem('finlab-token', response.data.token);
      localStorage.setItem('finlab-refresh-token', response.data.refreshToken);
      return response.data;
    }
    
    throw new Error(response.message || 'Registration failed');
  },

  async logout(): Promise<void> {
    try {
      await apiClient.post(ENDPOINTS.LOGOUT, {});
    } finally {
      localStorage.removeItem('finlab-token');
      localStorage.removeItem('finlab-refresh-token');
    }
  },

  async refreshToken(): Promise<AuthData> {
    const refreshToken = localStorage.getItem('finlab-refresh-token');
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await apiClient.post<AuthData>(ENDPOINTS.REFRESH, {
      refreshToken,
    });

    if (response.status === 'success' && response.data) {
      localStorage.setItem('finlab-token', response.data.token);
      return response.data;
    }

    throw new Error(response.message || 'Token refresh failed');
  },
};
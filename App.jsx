import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import { LandingPage } from './LandingPage';
import { EnhancedAuthPage } from './EnhancedAuthPage';
import { DashboardPage } from './DashboardPage';
import { InsightsPage } from './InsightsPage';
import { CollaborationPage } from './CollaborationPage';
import { SettingsPage } from './SettingsPage';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<EnhancedAuthPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/collaboration" element={<CollaborationPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;


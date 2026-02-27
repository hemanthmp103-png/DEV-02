import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { UserDashboard } from '../components/UserDashboard';
import { NGODashboard } from '../components/NGODashboard';
import { Navigate } from 'react-router-dom';

export const DashboardPage = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {user.role === 'ngo' ? <NGODashboard /> : <UserDashboard />}
    </div>
  );
};


import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (user: string, pass: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (token) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const login = async (user: string, pass: string): Promise<boolean> => {
    // Dummy authentication
    if (user === 'rohis' && pass === 'riyadushshalihin123') {
      localStorage.setItem('auth-token', 'dummy-token-rohis-riyadushshalihin');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('auth-token');
    setIsAuthenticated(false);
    navigate('/login');
  };
  
  const value = { isAuthenticated, login, logout, isLoading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

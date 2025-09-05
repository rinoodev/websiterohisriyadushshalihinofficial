import React, { useState, FormEvent, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.ts';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '../components/ui/Button.tsx';
import { Input } from '../components/ui/Input.tsx';
import { Label } from '../components/ui/Label.tsx';

// A decorative component for the background lines from the design
const BackgroundLines = () => (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 opacity-50">
            <defs>
                <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                    <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <path d="M -100 100 Q 150 200 400 100 T 900 150" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
            <path d="M -50 200 Q 200 300 450 200 T 950 250" stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none" />
        </svg>
    </div>
);


const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    await new Promise(res => setTimeout(res, 500));
    const success = await login(username, password);
    if (success) {
      navigate(from, { replace: true });
    } else {
      setError('Username atau password salah.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full lg:grid lg:grid-cols-2">
        {/* Left Pane */}
        <div className="relative hidden lg:flex flex-col justify-between p-8 sm:p-12 bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
            <BackgroundLines />
            <div className="relative z-10 flex-grow flex flex-col justify-center">
                <div className="flex items-center gap-4 text-3xl font-bold">
                    <img src="img/ROHIS.png" alt="Logo" className="h-12 w-12 rounded-lg" />
                    <span>Rohis Riyadushshalihin</span>
                </div>
                <h1 className="mt-16 text-5xl font-bold tracking-tight">
                    Hello, Pejuang Dakwah! 👋
                </h1>
                <p className="mt-4 text-lg text-primary-200 max-w-lg">
                    Membina generasi Rabbani yang berakhlak mulia, berprestasi, dan berkontribusi aktif bagi kemajuan umat.
                </p>
            </div>
            <footer className="relative z-10 text-sm text-primary-300">
                &copy; {new Date().getFullYear()} Rohis Riyadushshalihin. All rights reserved.
            </footer>
        </div>
        
        {/* Right Pane */}
        <div className="flex items-center justify-center p-6 sm:p-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="w-full max-w-md mx-auto">
                 <div className="lg:hidden text-center mb-8">
                     <div className="flex items-center justify-center gap-3 text-2xl font-bold text-gray-800 dark:text-white">
                        <img src="https://api.dicebear.com/8.x/initials/svg?seed=RR&backgroundColor=10b981&textColor=ffffff&size=32" alt="Logo" className="h-8 w-8 rounded-md" />
                        <span>Rohis Riyadushshalihin</span>
                    </div>
                </div>
                <div className="text-center lg:text-left mb-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                        Welcome Back!
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Belum punya akun? Silakan hubungi admin untuk mendapatkan akses.
                    </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            autoComplete="username"
                            placeholder="Masukkan username"
                            className="bg-white dark:bg-gray-800"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                            <Input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                autoComplete="current-password"
                                placeholder="••••••••"
                                className="bg-white dark:bg-gray-800"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>

                    {error && <p className="text-sm text-red-500 text-center animate-pulse">{error}</p>}
                    
                    <Button type="submit" className="w-full !mt-8 text-base font-semibold" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : null}
                        {isSubmitting ? 'Loading...' : 'Login Now'}
                    </Button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Login;
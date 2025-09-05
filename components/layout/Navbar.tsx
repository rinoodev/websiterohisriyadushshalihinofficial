import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.ts';
import { useTheme } from '../../hooks/useTheme.ts';
import { Menu, X, Sun, Moon, LogOut } from 'lucide-react';
import { Button } from '../ui/Button.tsx';

const navLinks = [
  { to: '/home', label: 'Home' },
  { to: '/tentang', label: 'Tentang Kami' },
  { to: '/dakwah', label: 'Dakwah' },
];

const Navbar: React.FC = () => {
  const { logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = "text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300";
  const activeLinkClasses = "text-primary-600 dark:text-primary-400 font-semibold";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/home" className="flex items-center gap-3 text-xl font-bold text-gray-800 dark:text-white">
              <img src="img/ROHIS.png" alt="Logo" className="h-8 w-8 rounded-md" />
              <span>Rohis Riyadushshalihin</span>
            </Link>
          </div>
          
          {/* Combined Nav links and controls for desktop */}
          <div className="hidden md:flex items-center gap-4">
            <nav className="flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Visual separator */}
            <div className="h-6 w-px bg-gray-200 dark:bg-gray-700"></div>

            <div className="flex items-center space-x-1">
               <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={logout} aria-label="Logout">
                <LogOut className="h-5 w-5 text-red-500" />
              </Button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Open menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${linkClasses} ${isActive ? activeLinkClasses : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between px-3">
              <Button variant="ghost" onClick={toggleTheme} aria-label="Toggle theme" className="flex items-center gap-2">
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                <span>Toggle Theme</span>
              </Button>
              <Button variant="ghost" onClick={logout} aria-label="Logout" className="flex items-center gap-2 text-red-500">
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

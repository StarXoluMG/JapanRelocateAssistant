import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, Map, BookOpen, Library, Info, LogOut, User } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import Button from './ui/Button';

export default function Navigation() {
  const { isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="w-6 h-6 text-indigo-600" />
            <span className="font-bold text-xl">Japan Relocation Assistant</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <NavLink to="/tasks" icon={<BookOpen className="w-5 h-5" />} text="Checklists" />
            <NavLink to="/resources" icon={<Library className="w-5 h-5" />} text="Resources" />
            <NavLink to="/map" icon={<Map className="w-5 h-5" />} text="Local Services" />
            <NavLink to="/guide" icon={<Info className="w-5 h-5" />} text="Cultural Guide" />
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="text-gray-600 hover:text-gray-900">
                  <User className="w-5 h-5" />
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="flex items-center space-x-1"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button variant="outline" size="sm">Login</Button>
                </Link>
                <Link to="/register">
                  <Button size="sm">Register</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}
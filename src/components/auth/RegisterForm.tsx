import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import Button from '../ui/Button';
import { Card, CardHeader, CardContent } from '../ui/Card';

export default function RegisterForm() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    visaStatus: '',
    lengthOfStay: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    // In a real app, you would make an API call here
    login({
      id: Math.random().toString(),
      email: formData.email,
      visaStatus: formData.visaStatus,
      lengthOfStay: formData.lengthOfStay,
      address: '',
      wardOffice: '',
    });
    navigate('/profile');
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-bold">Create Account</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
              minLength={8}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
              minLength={8}
            />
          </div>

          <div>
            <label htmlFor="visaStatus" className="block text-sm font-medium text-gray-700">
              Visa Status
            </label>
            <select
              id="visaStatus"
              name="visaStatus"
              value={formData.visaStatus}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            >
              <option value="">Select visa type</option>
              <option value="student">Student</option>
              <option value="work">Work</option>
              <option value="spouse">Spouse</option>
              <option value="permanent">Permanent Resident</option>
            </select>
          </div>

          <div>
            <label htmlFor="lengthOfStay" className="block text-sm font-medium text-gray-700">
              Length of Stay
            </label>
            <input
              type="text"
              id="lengthOfStay"
              name="lengthOfStay"
              value={formData.lengthOfStay}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="e.g., 1 year"
              required
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}

          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
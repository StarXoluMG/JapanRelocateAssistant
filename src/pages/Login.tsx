import React from 'react';
import LoginForm from '../components/auth/LoginForm';

export default function Login() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Welcome Back</h1>
        <p className="text-gray-600">Login to access your relocation dashboard</p>
      </div>
      <LoginForm />
    </div>
  );
}
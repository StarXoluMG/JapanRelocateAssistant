import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';

export default function Register() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Get Started</h1>
        <p className="text-gray-600">Create your account to begin your relocation journey</p>
      </div>
      <RegisterForm />
    </div>
  );
}
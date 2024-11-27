import React from 'react';
import ProfileForm from '../components/auth/ProfileForm';

export default function Profile() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Your Profile</h1>
        <p className="text-gray-600">Update your information to get personalized assistance</p>
      </div>
      <ProfileForm />
    </div>
  );
}
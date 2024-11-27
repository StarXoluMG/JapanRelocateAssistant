import React, { useState } from 'react';
import { useAuthStore } from '../../store/useAuthStore';
import Button from '../ui/Button';
import { Card, CardHeader, CardContent } from '../ui/Card';

export default function ProfileForm() {
  const { user, updateProfile } = useAuthStore();
  const [formData, setFormData] = useState({
    visaStatus: user?.visaStatus || '',
    lengthOfStay: user?.lengthOfStay || '',
    address: user?.address || '',
    wardOffice: user?.wardOffice || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-bold">Your Profile</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
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
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Current Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label htmlFor="wardOffice" className="block text-sm font-medium text-gray-700">
              Local Ward Office
            </label>
            <input
              type="text"
              id="wardOffice"
              name="wardOffice"
              value={formData.wardOffice}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <Button type="submit">Save Profile</Button>
        </form>
      </CardContent>
    </Card>
  );
}
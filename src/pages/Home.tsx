import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, FileCheck, Users, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Japan Relocation Assistant
        </h1>
        <p className="text-xl text-gray-600">
          Your comprehensive guide to settling in Japan
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <FeatureCard
          icon={<FileCheck className="w-8 h-8 text-indigo-600" />}
          title="Task Tracking"
          description="Keep track of your post-arrival essentials with our interactive checklist"
        />
        <FeatureCard
          icon={<MapPin className="w-8 h-8 text-indigo-600" />}
          title="Local Services"
          description="Find nearby essential services like ward offices, banks, and hospitals"
        />
        <FeatureCard
          icon={<Users className="w-8 h-8 text-indigo-600" />}
          title="Community"
          description="Connect with other expats and find local community groups"
        />
        <FeatureCard
          icon={<BookOpen className="w-8 h-8 text-indigo-600" />}
          title="Cultural Guide"
          description="Learn about Japanese customs, etiquette, and daily life"
        />
      </div>

      <div className="text-center">
        <Link
          to="/register"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
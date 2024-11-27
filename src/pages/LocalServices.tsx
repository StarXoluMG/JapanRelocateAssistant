import React, { useState } from 'react';
import { MapPin, Building, Building2, CircleDollarSign, Stethoscope, ShoppingCart } from 'lucide-react';
import Map from '../components/Map';
import type { LocalService } from '../types';

const TOKYO_CENTER = { lat: 35.6762, lng: 139.6503 };

const SAMPLE_SERVICES: LocalService[] = [
  {
    id: '1',
    name: 'Shibuya Ward Office',
    type: 'wardOffice',
    address: '1-1 Udagawacho, Shibuya City, Tokyo',
    coordinates: { lat: 35.6597, lng: 139.7019 },
  },
  {
    id: '2',
    name: 'Japan Post Bank - Shibuya',
    type: 'bank',
    address: '2-1 Udagawacho, Shibuya City, Tokyo',
    coordinates: { lat: 35.6585, lng: 139.7010 },
  },
  // Add more sample services as needed
];

const SERVICE_TYPES = [
  { type: 'wardOffice', icon: Building2, label: 'Ward Offices' },
  { type: 'bank', icon: CircleDollarSign, label: 'Banks' },
  { type: 'hospital', icon: Stethoscope, label: 'Hospitals' },
  { type: 'supermarket', icon: ShoppingCart, label: 'Supermarkets' },
] as const;

export default function LocalServices() {
  const [selectedType, setSelectedType] = useState<LocalService['type'] | 'all'>('all');
  const [selectedService, setSelectedService] = useState<LocalService | null>(null);

  const filteredServices = selectedType === 'all'
    ? SAMPLE_SERVICES
    : SAMPLE_SERVICES.filter(service => service.type === selectedType);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Local Services</h1>
        <p className="text-gray-600">Find essential services near you in Tokyo</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Map
            center={TOKYO_CENTER}
            services={filteredServices}
            onMarkerClick={setSelectedService}
          />
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Filter Services</h2>
            <div className="space-y-2">
              <FilterButton
                active={selectedType === 'all'}
                onClick={() => setSelectedType('all')}
                icon={MapPin}
                label="All Services"
              />
              {SERVICE_TYPES.map(({ type, icon: Icon, label }) => (
                <FilterButton
                  key={type}
                  active={selectedType === type}
                  onClick={() => setSelectedType(type)}
                  icon={Icon}
                  label={label}
                />
              ))}
            </div>
          </div>

          {selectedService && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">{selectedService.name}</h2>
              <p className="text-gray-600 mb-2">{selectedService.address}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${selectedService.coordinates.lat},${selectedService.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 flex items-center"
              >
                <MapPin className="w-4 h-4 mr-1" />
                View on Google Maps
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  icon: Icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: typeof Building2;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
        active
          ? 'bg-indigo-600 text-white'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </button>
  );
}
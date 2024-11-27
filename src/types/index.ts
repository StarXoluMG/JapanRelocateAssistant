export interface User {
  id: string;
  email: string;
  visaStatus: string;
  lengthOfStay: string;
  address: string;
  wardOffice: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  category: 'registration' | 'housing' | 'utilities' | 'language' | 'other';
}

export interface LocalService {
  id: string;
  name: string;
  type: 'wardOffice' | 'bank' | 'hospital' | 'supermarket';
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}
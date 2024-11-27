import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import type { LocalService } from '../types';

interface MapProps {
  center: google.maps.LatLngLiteral;
  services: LocalService[];
  onMarkerClick?: (service: LocalService) => void;
}

const GOOGLE_MAPS_API_KEY = 'YOUR_API_KEY'; // Replace with actual API key

export default function Map({ center, services, onMarkerClick }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);

  useEffect(() => {
    const loader = new Loader({
      apiKey: GOOGLE_MAPS_API_KEY,
      version: 'weekly',
    });

    loader.load().then(() => {
      if (mapRef.current && !mapInstanceRef.current) {
        mapInstanceRef.current = new google.maps.Map(mapRef.current, {
          center,
          zoom: 14,
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }],
            },
          ],
        });
      }

      // Clear existing markers
      markersRef.current.forEach(marker => marker.setMap(null));
      markersRef.current = [];

      // Add new markers
      services.forEach(service => {
        const marker = new google.maps.Marker({
          position: service.coordinates,
          map: mapInstanceRef.current,
          title: service.name,
          icon: getMarkerIcon(service.type),
        });

        if (onMarkerClick) {
          marker.addListener('click', () => onMarkerClick(service));
        }

        markersRef.current.push(marker);
      });
    });
  }, [center, services, onMarkerClick]);

  return <div ref={mapRef} className="w-full h-[600px] rounded-lg shadow-md" />;
}

function getMarkerIcon(type: LocalService['type']): string {
  const icons = {
    wardOffice: '🏢',
    bank: '🏦',
    hospital: '🏥',
    supermarket: '🏪',
  };

  return `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <text x="12" y="18" text-anchor="middle" font-size="16">${icons[type]}</text>
    </svg>
  `)}`;
}
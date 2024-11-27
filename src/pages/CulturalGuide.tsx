import React from 'react';
import { Info } from 'lucide-react';

const CULTURAL_TIPS = [
  {
    category: 'Daily Life',
    items: [
      {
        title: 'Garbage Disposal',
        content: 'Japan has strict rules for garbage separation. Generally, waste is divided into burnable, non-burnable, recyclable, and oversized garbage. Each city has its own schedule and rules.'
      },
      {
        title: 'Public Transportation',
        content: 'Trains and buses are extremely punctual. Get an IC card (Suica/PASMO) for convenient travel. During rush hour, maintain queue lines and avoid phone calls on trains.'
      }
    ]
  },
  {
    category: 'Social Etiquette',
    items: [
      {
        title: 'Greetings',
        content: 'Bowing is common in formal situations. The depth and duration of the bow depends on the situation and the person you\'re greeting.'
      },
      {
        title: 'Shoes Off Indoors',
        content: 'Remove shoes before entering homes, traditional restaurants, and some public buildings. Look for shoe lockers or designated areas.'
      }
    ]
  },
  {
    category: 'Business Culture',
    items: [
      {
        title: 'Business Cards',
        content: 'Exchange business cards (meishi) with both hands, facing the card toward the recipient. Take time to read the card before putting it away respectfully.'
      },
      {
        title: 'Punctuality',
        content: 'Being on time is crucial in Japanese business culture. Arrive at least 5 minutes early for appointments.'
      }
    ]
  }
];

export default function CulturalGuide() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Cultural Guide to Japan</h1>

      <div className="space-y-8">
        {CULTURAL_TIPS.map((section) => (
          <div key={section.category} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-indigo-600 px-6 py-4">
              <h2 className="text-xl font-semibold text-white">{section.category}</h2>
            </div>
            <div className="p-6 space-y-6">
              {section.items.map((item) => (
                <div key={item.title} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <Info className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
import React from 'react';
import { ExternalLink, FileText, Building2, Hospital, Bank, Home, GraduationCap } from 'lucide-react';

const RESOURCES = {
  official: [
    {
      title: 'Immigration Services Agency of Japan',
      url: 'https://www.isa.go.jp/en/',
      description: 'Official immigration procedures and visa information'
    },
    {
      title: 'Ministry of Foreign Affairs',
      url: 'https://www.mofa.go.jp/index.html',
      description: 'Information for foreign residents and diplomatic services'
    }
  ],
  registration: [
    {
      title: 'Residence Card Registration Guide',
      url: 'https://www.isa.go.jp/en/applications/procedures/120203-01.html',
      description: 'Step-by-step guide for obtaining your residence card'
    },
    {
      title: 'National Health Insurance System',
      url: 'https://www.city.tokyo.lg.jp/foreign/english/guide/medical/medical1.html',
      description: 'Information about enrolling in the national health insurance'
    }
  ],
  daily: [
    {
      title: 'Japan Post Bank',
      url: 'https://www.jp-bank.japanpost.jp/en_index.html',
      description: 'Opening a basic bank account for foreigners'
    },
    {
      title: 'Housing Information',
      url: 'https://www.realestate.co.jp/en/',
      description: 'Finding apartments and housing in Japan'
    }
  ],
  education: [
    {
      title: 'Japanese Language Education Centers',
      url: 'https://www.jasso.go.jp/en/study_j/search/nihongakou.html',
      description: 'Directory of Japanese language schools'
    }
  ]
};

export default function Resources() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Essential Resources</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <Building2 className="w-6 h-6 mr-2 text-indigo-600" />
          Official Government Resources
        </h2>
        <ResourceList resources={RESOURCES.official} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <FileText className="w-6 h-6 mr-2 text-indigo-600" />
          Registration & Documentation
        </h2>
        <ResourceList resources={RESOURCES.registration} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <Home className="w-6 h-6 mr-2 text-indigo-600" />
          Daily Life Essentials
        </h2>
        <ResourceList resources={RESOURCES.daily} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <GraduationCap className="w-6 h-6 mr-2 text-indigo-600" />
          Education & Language
        </h2>
        <ResourceList resources={RESOURCES.education} />
      </section>
    </div>
  );
}

function ResourceList({ resources }: { resources: Array<{ title: string; url: string; description: string }> }) {
  return (
    <div className="grid gap-6">
      {resources.map((resource) => (
        <a
          key={resource.title}
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-medium text-indigo-600 mb-2 flex items-center">
                {resource.title}
                <ExternalLink className="w-4 h-4 ml-2" />
              </h3>
              <p className="text-gray-600">{resource.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const TASKS = [
  {
    category: 'Registration',
    items: [
      { title: 'Register at local ward office', description: 'Within 14 days of arrival' },
      { title: 'Get residence card', description: 'Required for all foreign residents' },
      { title: 'Enroll in National Health Insurance', description: 'Mandatory for long-term residents' }
    ]
  },
  {
    category: 'Housing',
    items: [
      { title: 'Find long-term accommodation', description: 'Research areas and rental properties' },
      { title: 'Set up utilities', description: 'Electricity, gas, water, and internet' }
    ]
  },
  {
    category: 'Daily Life',
    items: [
      { title: 'Open a bank account', description: 'Required for salary and utilities' },
      { title: 'Get a mobile phone', description: 'Research providers and plans' },
      { title: 'Learn garbage disposal rules', description: 'Different rules for each ward' }
    ]
  }
];

export default function Tasks() {
  const [completedTasks, setCompletedTasks] = React.useState<Set<string>>(new Set());

  const toggleTask = (task: string) => {
    const newCompleted = new Set(completedTasks);
    if (newCompleted.has(task)) {
      newCompleted.delete(task);
    } else {
      newCompleted.add(task);
    }
    setCompletedTasks(newCompleted);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Post-Arrival Checklist</h1>
      
      <div className="space-y-8">
        {TASKS.map((category) => (
          <div key={category.category} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">{category.category}</h2>
            <div className="space-y-4">
              {category.items.map((task) => (
                <div
                  key={task.title}
                  className="flex items-start space-x-3 cursor-pointer"
                  onClick={() => toggleTask(task.title)}
                >
                  {completedTasks.has(task.title) ? (
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  ) : (
                    <Circle className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                  <div>
                    <h3 className={`font-medium ${completedTasks.has(task.title) ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                      {task.title}
                    </h3>
                    <p className="text-sm text-gray-600">{task.description}</p>
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
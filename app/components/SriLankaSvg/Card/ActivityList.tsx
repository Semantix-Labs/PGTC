import React from 'react';
import { Circle } from 'lucide-react';

interface ActivityListProps {
  activities: string[];
}

const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
  return (
    <div className="mt-6">
      <h3 className="font-semibold text-gray-800 mb-3">Activities:</h3>
      <div className="grid grid-cols-2 gap-3">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center gap-2">
            <Circle className="w-2 h-2 text-emerald-500 fill-current" />
            <span className="text-gray-600 text-sm">{activity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityList;
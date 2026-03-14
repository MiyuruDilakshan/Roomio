import React from 'react';
import { MoreVertical } from 'lucide-react';

const ActivityTable = () => {
  const activities = [
    {
      id: 1,
      name: 'Modern Kitchen Remodel',
      client: 'Sarah Jenkins',
      status: 'In Progress',
      date: 'Oct 24, 2023',
      image: '🏠'
    },
    {
      id: 2,
      name: 'Zen Office Space',
      client: 'TechFlow Inc.',
      status: 'Completed',
      date: 'Oct 21, 2023',
      image: '🏢'
    },
    {
      id: 3,
      name: 'Luxury Suite V2',
      client: 'Michael Ross',
      status: 'Pending Approval',
      date: 'Oct 18, 2023',
      image: '🛋️'
    }
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'In Progress':
        return 'bg-blue-100 text-blue-700';
      case 'Completed':
        return 'bg-green-100 text-green-700';
      case 'Pending Approval':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
        <button className="text-sm text-blue-600 font-medium hover:text-blue-700">
          View All Activity
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Project Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Client
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Date Modified
              </th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {activities.map((activity) => (
              <tr key={activity.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
                      {activity.image}
                    </div>
                    <span className="font-medium text-gray-800">{activity.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-gray-600">{activity.client}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(activity.status)}`}>
                    {activity.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-gray-600">{activity.date}</span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityTable;
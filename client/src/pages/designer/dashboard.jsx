import React from 'react';
import { Search, Bell, Settings, Plus, Grid3x3, Users, DollarSign, Clock, MoreVertical, Upload, Sparkles } from 'lucide-react';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const stats = [
    {
      icon: Grid3x3,
      label: 'TOTAL PROJECTS',
      value: '12',
      change: '+4 this month',
      changeColor: 'bg-green-100 text-green-700',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Users,
      label: 'ACTIVE CLIENTS',
      value: '4',
      change: '+2 active',
      changeColor: 'bg-green-100 text-green-700',
      iconBg: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: DollarSign,
      label: 'MONTHLY REVENUE',
      value: '$8,500',
      change: '+15% vs LY',
      changeColor: 'bg-green-100 text-green-700',
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: Clock,
      label: 'PENDING TASKS',
      value: '1',
      change: 'On Schedule',
      changeColor: 'bg-blue-100 text-blue-700',
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-600'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      icon: '🏠',
      name: 'Modern Kitchen Remodel',
      client: 'Sarah Jenkins',
      status: 'In Progress',
      statusColor: 'bg-blue-100 text-blue-700',
      date: 'Oct 24, 2023'
    },
    {
      id: 2,
      icon: '🏢',
      name: 'Zen Office Space',
      client: 'TechFlow Inc.',
      status: 'Completed',
      statusColor: 'bg-green-100 text-green-700',
      date: 'Oct 21, 2023'
    },
    {
      id: 3,
      icon: '🏠',
      name: 'Luxury Suite V2',
      client: 'Michael Ross',
      status: 'Pending Approval',
      statusColor: 'bg-yellow-100 text-yellow-700',
      date: 'Oct 18, 2023'
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 h-[73px] flex items-center px-8 flex-shrink-0">
          {/* Empty space on left - pushes everything to the right */}
          <div className="flex-1"></div>

          {/* Right side - Search + Icons */}
          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <div className="relative w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search projects, clients..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell size={20} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Settings size={20} className="text-gray-600" />
            </button>
            <div className="w-9 h-9 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">AJ</span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-8 py-8">
            {/* Page Title & New Project Button */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Dashboard</h1>
                <p className="text-gray-600">Welcome back, Alex Johnston. Ready for today's customers?</p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2 transition-colors">
                <Plus size={18} />
                New Project
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 ${stat.iconBg} rounded-lg flex items-center justify-center`}>
                        <Icon className={stat.iconColor} size={24} />
                      </div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${stat.changeColor}`}>
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                );
              })}
            </div>

            {/* Recent Activity Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                  View All Activity
                </button>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Project Name
                      </th>
                      <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Client
                      </th>
                      <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Date Modified
                      </th>
                      <th className="w-12"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentActivity.map((activity, index) => (
                      <tr
                        key={activity.id}
                        className={`hover:bg-gray-50 transition-colors ${
                          index !== recentActivity.length - 1 ? 'border-b border-gray-100' : ''
                        }`}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{activity.icon}</span>
                            <span className="text-sm font-medium text-gray-900">{activity.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-600">{activity.client}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-block px-3 py-1 rounded-md text-xs font-semibold ${activity.statusColor}`}>
                            {activity.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-600">{activity.date}</span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                            <MoreVertical size={18} className="text-gray-400" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bottom Cards Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Import Blueprint Card */}
              <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-8 hover:border-blue-400 transition-colors">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
                    <Upload className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Import Blueprint</h3>
                  <p className="text-sm text-gray-600 mb-6 max-w-sm mx-auto">
                    Easily upload floor plans or images to start a new visualization project automatically.
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-2 mx-auto">
                    Get Started →
                  </button>
                </div>
              </div>

              {/* AI-Enhanced Render Card */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                    <Sparkles className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Try AI-Enhanced Render</h3>
                  <p className="text-blue-100 mb-6 text-sm">
                    New 3D algorithms now available for Ultra HD lighting previews.
                  </p>
                  <div className="flex gap-3">
                    <button className="bg-white text-blue-900 px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">
                      Try Now
                    </button>
                    <button className="border-2 border-white text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-white/10 transition-colors">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState } from 'react';
import buttonIcon from '../../assets/plusButton.png';
import sleekKitchen from '../../assets/sleek_kitchen.jpg';
import masterBedroom from '../../assets/masterbed_suite.jpg';
import { Search, Bell, Settings, UserPlus, ChevronRight, ChevronDown } from 'lucide-react';
import Sidebar from './Sidebar';

const Clients = () => {
  const [activeFilter, setActiveFilter] = useState('All Statuses');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = ['Active', 'Pending', 'Completed'];

  const clients = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      email: 'sarah.j@gmail.com',
      status: 'Active',
      initials: 'SJ',
      bgColor: 'bg-blue-500'
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'm.chen@protector.net',
      status: 'Pending',
      initials: 'MC',
      bgColor: 'bg-orange-500'
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      email: 'elena.rod@web.com',
      status: 'Completed',
      initials: 'ER',
      bgColor: 'bg-pink-500'
    },
    {
      id: 4,
      name: 'David Brown',
      email: 'd.brown@tech.co',
      status: 'Active',
      initials: 'DB',
      bgColor: 'bg-green-500'
    }
  ];

  const [selectedClient, setSelectedClient] = useState(clients[1]);

  const filteredClients = clients.filter(client => {
    const matchesFilter = activeFilter === 'All Statuses' || client.status === activeFilter;
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Completed':
        return 'bg-gray-200 text-gray-700';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

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

        {/* Content Area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Middle Column */}
          <div className="flex-1 flex flex-col bg-gray-50">
            {/* Title Section */}
            <div className="px-8 pt-8 pb-6">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-1">Clients</h1>
                <p className="text-gray-500 text-sm">Manage clients.</p>
              </div>

              {/* Search & Filters - FIXED LAYOUT */}
              <div className="flex items-center gap-3">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search by client name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* All Statuses */}
                <button
                  onClick={() => setActiveFilter('All Statuses')}
                  className={`px-4 py-2.5 border rounded-lg text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-2 ${
                    activeFilter === 'All Statuses'
                      ? 'text-blue-600 border-blue-600 bg-blue-50'
                      : 'text-gray-700 border-gray-300 bg-white hover:bg-gray-50'
                  }`}
                >
                  All Statuses
                  <ChevronDown size={14} />
                </button>

                {/* Filter Tabs */}
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2.5 border rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                      activeFilter === filter
                        ? 'text-blue-600 border-blue-600 bg-blue-50'
                        : 'text-gray-700 border-gray-300 bg-white hover:bg-gray-50'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Table */}
            <div className="px-8 pb-8 flex-1 overflow-y-auto">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase">Client Name</th>
                      <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase">Contact Info</th>
                      <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase">Status</th>
                      <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase pl-16">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredClients.map((client, index) => (
                      <tr
                        key={client.id}
                        onClick={() => setSelectedClient(client)}
                        className={`border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                          index === filteredClients.length - 1 ? 'border-b-0' : ''
                        }`}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 ${client.bgColor} rounded-full flex items-center justify-center`}>
                              <span className="text-white font-semibold text-sm">{client.initials}</span>
                            </div>
                            <span className="text-gray-900 font-medium text-sm">{client.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-gray-600 text-sm">{client.email}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-block px-3 py-1 rounded-md text-xs font-medium ${getStatusStyle(client.status)}`}>
                            {client.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <button className="w-9 h-9 flex items-center justify-center hover:opacity-80 transition-opacity">
  <img src={buttonIcon} alt="Info" className="w-9 h-9" />
</button>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                              View Details
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-96 bg-white border-l border-gray-200 overflow-y-auto flex-shrink-0">
            <div className="p-6">
              {/* Add New Client Button - Right Aligned */}
              <div className="flex justify-end mb-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 transition-colors">
                  <UserPlus size={16} />
                  Add New Client
                </button>
              </div> 

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">Project History</h3>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                    View All
                    <ChevronRight size={16} />
                  </button>
                </div>
                <p className="text-gray-500 text-sm">Linked to {selectedClient.name}</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-6">
                <div className="relative h-48 bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
                    alt="Downtown Loft Renovation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-lg">
                      Current Project
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="text-gray-900 font-semibold text-base mb-1">Downtown Loft Renovation</h4>
                  <p className="text-gray-500 text-sm mb-4">Living Room • Updated 3 days ago</p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-6 h-6 ${selectedClient.bgColor} rounded-full flex items-center justify-center`}>
                      <span className="text-white text-xs font-semibold">{selectedClient.initials}</span>
                    </div>
                    <span className="text-gray-700 text-sm">{selectedClient.name}</span>
                  </div>

                  <button className="w-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
                    Edit Design
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-gray-500 text-xs font-semibold uppercase mb-3">Past Projects</h4>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
  <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden">
    <img src={sleekKitchen} alt="Sleek Kitchen" className="w-full h-full object-cover" />
  </div>
  <div className="flex-1">
    <h5 className="text-gray-900 font-medium text-sm">Sleek Kitchen Concept</h5>
    <p className="text-gray-500 text-xs">March 2023 • Completed</p>
  </div>
  <ChevronRight size={16} className="text-gray-400" />
</div>

                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
  <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden">
    <img src={masterBedroom} alt="Master Bedroom" className="w-full h-full object-cover" />
  </div>
  <div className="flex-1">
    <h5 className="text-gray-900 font-medium text-sm">Master Bedroom Suite</h5>
    <p className="text-gray-500 text-xs">Jan 2023 • Completed</p>
  </div>
  <ChevronRight size={16} className="text-gray-400" />
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

export default Clients;

import React, { useState } from 'react';
import lounge from '../../assets/lounge.png';
import bedroom from '../../assets/bedroom.png';
import office from '../../assets/office.png';
import kitchen from '../../assets/kitchen.png';
import lobby from '../../assets/lobby.png';
import { Search, Bell, Settings, Plus, Heart, Edit, Share2, Eye } from 'lucide-react';
import Sidebar from './Sidebar';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('ALL PROJECTS');

  const filterTabs = ['ALL PROJECTS', 'RESIDENTIAL', 'COMMERCIAL', 'HOSPITALITY'];

  const projects = [
    {
      id: 1,
      image: lounge,
      title: 'Modern Minimalist Lounge',
      type: 'RESIDENTIAL PROJECT',
      designer: 'Sarah Johnson',
      time: '20 ago'
    },
    {
      id: 2,
      image: bedroom,
      title: 'Scandinavian Bedroom',
      type: 'RESIDENTIAL PROJECT',
      designer: 'Anne Bakken',
      time: '6d ago'
    },
    {
      id: 3,
      image: office,
      title: 'Industrial Office Loft',
      type: 'COMMERCIAL PROJECT',
      designer: 'TechFlow Inc.',
      time: '1w ago'
    },
    {
      id: 4,
      image: kitchen,
      title: 'Coastal Kitchen Redesign',
      type: 'RESIDENTIAL PROJECT',
      designer: 'Maria Silva',
      time: '2w ago'
    },
    {
      id: 5,
      image: lobby,
      title: 'Art Deco Lobby',
      type: 'HOSPITALITY PROJECT',
      designer: 'Grand Plaza Hotel',
      time: '3w ago'
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
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Portfolio</h1>
                <p className="text-gray-600">Manage and showcase professional interior designs.</p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2 transition-colors">
                <Plus size={18} />
                New Project
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-6 mb-8 border-b border-gray-200">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`pb-3 text-sm font-semibold transition-colors relative ${
                    activeFilter === tab
                      ? 'text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                  {activeFilter === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {/* Project Cards */}
              {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <button className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md">
                      <Heart size={18} className="text-gray-600" />
                    </button>
                  </div>

                  {/* Project Info */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{project.title}</h3>
                    <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">
                      {project.type}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                      <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-[10px] font-semibold text-gray-600">
                          {project.designer.charAt(0)}
                        </span>
                      </div>
                      <span>{project.designer}</span>
                      <span>•</span>
                      <span>{project.time}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <Edit size={16} className="text-gray-600" />
                        <span className="text-sm font-medium text-gray-700">EDIT</span>
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <Share2 size={16} className="text-gray-600" />
                        <span className="text-sm font-medium text-gray-700">SHARE</span>
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <Eye size={16} className="text-gray-600" />
                        <span className="text-sm font-medium text-gray-700">VIEW</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Create New Project Card */}
              <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-8 hover:border-blue-400 transition-colors cursor-pointer min-h-[380px]">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <Plus className="text-blue-600" size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Create New Project</h3>
                <p className="text-sm text-gray-600 text-center max-w-xs">
                  Start a new visualization from template or scratch.
                </p>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">Showing 6 of 32 projects</p>
              
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <span className="text-gray-600">&lt;</span>
                </button>
                
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600 text-white font-semibold text-sm">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700">
                  2
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700">
                  3
                </button>
                
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <span className="text-gray-600">&gt;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

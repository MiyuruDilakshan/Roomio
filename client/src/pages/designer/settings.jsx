import React, { useState } from 'react';
import profileImage from '../../assets/alexj.jpg';
import pencilButton from '../../assets/pencilButton.png';
import { Search, Bell, Settings as SettingsIcon, MapPin, CheckCircle, CreditCard } from 'lucide-react';
import Sidebar from './Sidebar';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    projectUpdates: true,
    assetReleases: true,
    marketplaceSales: false
  });

  const [formData, setFormData] = useState({
    fullName: 'Alex Johnson',
    email: 'alex.j@roomio.com',
    role: 'Interior Designer-Staff'
  });

  const toggleNotification = (key) => {
    setNotifications({
      ...notifications,
      [key]: !notifications[key]
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    console.log('Settings saved:', formData, notifications);
    alert('Settings saved successfully!');
  };

  const handleDiscard = () => {
    setFormData({
      fullName: 'Alex Johnson',
      email: 'alex.j@roomio.com',
      role: 'Interior Designer-Staff'
    });
    setNotifications({
      projectUpdates: true,
      assetReleases: true,
      marketplaceSales: false
    });
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 h-[73px] flex items-center px-8 flex-shrink-0">
          <div className="flex-1"></div>
          <div className="flex items-center gap-3">
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
            <button className="p-2 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              <SettingsIcon size={20} className="text-blue-600" />
            </button>
            <div className="w-9 h-9 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">AJ</span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto px-8 py-8">
            {/* Page Title */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Account Settings</h1>
              <p className="text-gray-600">Manage your profile information and how you interact with the platform.</p>
            </div>

            {/* Profile Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="flex items-start gap-6">
                {/* Avatar */}
                <div className="relative">
                  <img
  src={profileImage}
  alt="alexj"
  className="w-24 h-24 rounded-lg border-4 border-white shadow-lg"
/>
                  {/* Pencil Edit Button - Bottom Right Corner, Larger */}
  <div className="absolute -bottom-6 -right-4 cursor-pointer">
    <img 
      src={pencilButton} 
      alt="Edit" 
      className="w-10 h-10"
    />
  </div>
</div>

                {/* Profile Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">Alex Johnson</h2>
                      <p className="text-sm text-gray-600">Senior Interior Designer</p>
                    </div>
                    <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors">
                      Change Photo
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin size={16} className="text-gray-400" />
                      <span>New York, USA</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 rounded-md">
                      <CheckCircle size={14} className="text-blue-600" />
                      <span className="text-xs font-semibold text-blue-600">Verified Pro</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Personal Details */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Personal Details</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Professional Role
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    >
                      <option>Interior Designer-Staff</option>
                      <option>Senior Designer</option>
                      <option>Junior Designer</option>
                      <option>Project Manager</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Email Notifications */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Bell size={20} className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Email Notifications</h3>
                </div>

                <div className="space-y-4">
                  {/* Project Updates */}
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Project Updates</p>
                      <p className="text-xs text-gray-500">Notify if people comment on your project</p>
                    </div>
                    <button
                      onClick={() => toggleNotification('projectUpdates')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        notifications.projectUpdates ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          notifications.projectUpdates ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  {/* New Asset Releases */}
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">New Asset Releases</p>
                      <p className="text-xs text-gray-500">Weekly digest of new 3D library items</p>
                    </div>
                    <button
                      onClick={() => toggleNotification('assetReleases')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        notifications.assetReleases ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          notifications.assetReleases ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Marketplace Sales */}
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Marketplace Sales</p>
                      <p className="text-xs text-gray-500">Alerts when your assets are purchased</p>
                    </div>
                    <button
                      onClick={() => toggleNotification('marketplaceSales')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        notifications.marketplaceSales ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          notifications.marketplaceSales ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                  <CreditCard size={20} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Payment Method</h3>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">VISA</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Visa ending in 4242</p>
                    <p className="text-xs text-gray-500">Expiry 12/2027 • Primary Method</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg text-sm font-medium transition-colors">
                    Edit
                  </button>
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
                    Update
                  </button>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-sm">
                <p className="text-gray-600">Your next bill is for <span className="font-semibold text-gray-900">$29.00</span> on Oct 12, 2023</p>
                <button className="text-blue-600 hover:text-blue-700 font-semibold">
                  VIEW HISTORY
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={handleDiscard}
                className="px-6 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg text-sm font-medium transition-colors"
              >
                Discard Changes
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
              >
                Save All Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { FiMenu, FiX, FiLogOut, FiSearch, FiSend } from 'react-icons/fi';

const Chat = () => {
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // TODO: Implement send message functionality
      setMessage('');
    }
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:relative lg:translate-x-0`}
      >
        {/* User Profile */}
        <div className="p-4 border-b dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
              {user?.name?.charAt(0)}
            </div>
            <div className="flex-1">
              <h3 className="font-medium dark:text-white">{user?.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</p>
            </div>
            <button
              onClick={logout}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <FiLogOut />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="p-4">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search contacts..."
              className="input pl-10"
            />
          </div>
        </div>

        {/* Contacts List */}
        <div className="overflow-y-auto h-[calc(100vh-180px)]">
          {/* TODO: Add contacts list */}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 p-4 flex items-center">
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 -ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            {sidebarOpen ? <FiX /> : <FiMenu />}
          </button>
          <div className="ml-2">
            <h2 className="font-medium dark:text-white">Chat Room</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">2 online</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* TODO: Add messages list */}
        </div>

        {/* Message Input */}
        <div className="bg-white dark:bg-gray-800 border-t dark:border-gray-700 p-4">
          <form onSubmit={handleSendMessage} className="flex space-x-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="input flex-1"
            />
            <button
              type="submit"
              disabled={!message.trim()}
              className="btn btn-primary px-6"
            >
              <FiSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat; 
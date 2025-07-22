"use client";

import { useState } from "react";
import { Users, UserPlus, Shield, Key, Activity } from "lucide-react";
import { useDashboard } from "./dashboard-router";

const navigationItems = [
  { icon: Users, label: "All Users", subPage: "all-users" as const },
  { icon: UserPlus, label: "Add New User", subPage: "add-user" as const },
  { icon: Shield, label: "Roles", subPage: "roles" as const },
  { icon: Key, label: "Permissions", subPage: "permissions" as const },
  { icon: Activity, label: "Activity Log", subPage: "activity-log" as const },
];

export function UsersSidebar() {
  const { currentSubPage, setCurrentSubPage } = useDashboard();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className='w-64 bg-gray-950 border-r border-gray-800 flex flex-col p-4'>
      <h2 className='text-lg font-bold text-white mb-4'>User Management</h2>

      {/* Quick Search */}
      <div className='relative mb-4'>
        <input
          type='text'
          placeholder='Search users...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-full bg-gray-900 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:border-terminal-green focus:outline-none transition-colors'
        />
        <Users className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
      </div>

      {/* Navigation */}
      <nav className='flex-1 space-y-2'>
        {navigationItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setCurrentSubPage(item.subPage)}
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 cursor-pointer group ${
              currentSubPage === item.subPage
                ? "bg-terminal-green/20 text-terminal-green border-l-4 border-terminal-green "
                : "text-gray-400 hover:text-terminal-green hover:bg-gray-900"
            }`}
          >
            <item.icon
              className={`w-5 h-5 ${
                currentSubPage === item.subPage
                  ? "text-terminal-green"
                  : "group-hover:text-terminal-green"
              }`}
            />
            <span className='font-semibold'>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

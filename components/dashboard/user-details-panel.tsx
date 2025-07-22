"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, Clock, Activity } from "lucide-react";

interface ActivityLogItem {
  id: string;
  action: string;
  user: string;
  timestamp: string;
}

const dummyActivityLog: ActivityLogItem[] = [
  {
    id: "1",
    action: "Created new project 'ASCII City'",
    user: "Alice Johnson",
    timestamp: "2024-07-22 10:30 AM",
  },
  {
    id: "2",
    action: "Updated profile settings",
    user: "Bob Smith",
    timestamp: "2024-07-22 09:45 AM",
  },
  {
    id: "3",
    action: "Trained AI model 'PixelArt'",
    user: "Eve Adams",
    timestamp: "2024-07-21 05:00 PM",
  },
  {
    id: "4",
    action: "Uploaded image to gallery",
    user: "Diana Prince",
    timestamp: "2024-07-21 02:15 PM",
  },
  {
    id: "5",
    action: "Logged in",
    user: "Alice Johnson",
    timestamp: "2024-07-20 08:00 AM",
  },
];

export function UserDetailsPanel() {
  return (
    <div className='w-96 flex-shrink-0 flex flex-col p-6 overflow-auto'>
      <Card className='bg-gray-950 border border-gray-800 text-white mb-6'>
        <CardHeader className='border-b border-gray-800 pb-4'>
          <CardTitle className='text-magenta text-xl'>
            User Statistics
          </CardTitle>
        </CardHeader>
        <CardContent className='p-4 space-y-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2 text-gray-400'>
              <Users className='w-5 h-5 text-terminal-green' />
              <span>Total Users</span>
            </div>
            <span className='text-2xl font-bold text-white'>125</span>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2 text-gray-400'>
              <TrendingUp className='w-5 h-5 text-terminal-green' />
              <span>Active Users</span>
            </div>
            <span className='text-2xl font-bold text-white'>98</span>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2 text-gray-400'>
              <Clock className='w-5 h-5 text-terminal-green' />
              <span>New Users (This Month)</span>
            </div>
            <span className='text-2xl font-bold text-white'>15</span>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2 text-gray-400'>
              <Activity className='w-5 h-5 text-terminal-green' />
              <span>Avg. Session Duration</span>
            </div>
            <span className='text-2xl font-bold text-white'>12m 30s</span>
          </div>
        </CardContent>
      </Card>

      <Card className='bg-gray-950 border border-gray-800 text-white flex-1'>
        <CardHeader className='border-b border-gray-800 pb-4'>
          <CardTitle className='text-magenta text-xl'>
            Recent User Activity
          </CardTitle>
        </CardHeader>
        <CardContent className='p-4 overflow-auto h-[calc(100%-60px)]'>
          {" "}
          {/* Adjust height to fit header */}
          <div className='space-y-3'>
            {dummyActivityLog.map((activity) => (
              <div
                key={activity.id}
                className='bg-gray-900 p-3 rounded-lg border border-gray-800 hover:bg-gray-800 transition-colors'
              >
                <p className='text-sm text-white font-medium'>
                  {activity.action}
                </p>
                <p className='text-xs text-gray-400'>
                  <span className='font-semibold'>{activity.user}</span> at{" "}
                  {activity.timestamp}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import {
  BarChart3,
  Plus,
  FolderOpen,
  Brain,
  User,
  Activity,
} from "lucide-react";
import { useState, useEffect } from "react";

export function DashboardPreviewSection() {
  const [modelProgress, setModelProgress] = useState(0);
  const [recentActivities, setRecentActivities] = useState([
    { action: "Generated ASCII art", time: "2m ago", color: "terminal-green" },
    { action: "Trained custom model", time: "1h ago", color: "magenta" },
    { action: "Shared to gallery", time: "3h ago", color: "terminal-green" },
    { action: "Created new project", time: "1d ago", color: "yellow-500" },
  ]);

  useEffect(() => {
    // Simulate model training progress
    const progressInterval = setInterval(() => {
      setModelProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return Math.min(prev + 5, 100);
      });
    }, 500); // Update every 0.5 seconds

    // Simulate new activity
    const activityInterval = setInterval(() => {
      const newActivity = {
        action: "New project created!",
        time: `${Math.floor(Math.random() * 10) + 1}s ago`,
        color: "blue-500", // A new color for new activity
      };
      setRecentActivities((prev) => [newActivity, ...prev.slice(0, 3)]); // Keep only 4 activities
    }, 5000); // Add new activity every 5 seconds

    return () => {
      clearInterval(progressInterval);
      clearInterval(activityInterval);
    };
  }, []);

  const projects = [
    {
      title: "Cyberpunk Cityscape",
      type: "ASCII Art",
      status: "Completed",
      color: "terminal-green",
    },
    {
      title: "Neural Poetry Vol.1",
      type: "Generative Poetry",
      status: "In Progress",
      color: "magenta",
    },
    {
      title: "Algorithm Visualizer",
      type: "Code Snippets",
      status: "Completed",
      color: "terminal-green",
    },
    {
      title: "Retro Game Sprites",
      type: "ASCII Art",
      status: "Draft",
      color: "yellow-500",
    },
  ];

  return (
    <section className='py-20 px-4 bg-black'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl md:text-5xl font-bold text-center mb-16 text-terminal-green'>
          Your Personalized Creative Hub
        </h2>

        {/* Dashboard Mockup */}
        <div className='bg-gray-900 border border-gray-700 rounded-lg overflow-hidden'>
          {/* Top Bar */}
          <div className='bg-gray-800 px-6 py-4 border-b border-gray-700 flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 rounded-full bg-red-500'></div>
              <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
              <div className='w-3 h-3 rounded-full bg-terminal-green'></div>
            </div>
            <div className='text-terminal-green font-bold'>
              ASCII-Web Dashboard
            </div>
            <div className='text-xs text-gray-400'>v2.1.0</div>
          </div>

          <div className='grid grid-cols-12 min-h-[600px]'>
            {/* Left Sidebar */}
            <div className='col-span-2 bg-black border-r border-gray-700 p-4'>
              <nav className='space-y-2'>
                {[
                  { icon: BarChart3, label: "Dashboard", active: true },
                  { icon: Plus, label: "Create New" },
                  { icon: FolderOpen, label: "My Galleries" },
                  { icon: Brain, label: "Train AI Model" },
                  { icon: User, label: "Profile" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer ${
                      item.active
                        ? "bg-terminal-green/20 text-terminal-green border border-terminal-green/30"
                        : "text-gray-400 hover:text-terminal-green hover:bg-gray-800"
                    }`}
                  >
                    <item.icon className='w-5 h-5' />
                    <span className='text-sm font-semibold'>{item.label}</span>
                  </div>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className='col-span-7 p-6'>
              <div className='mb-6'>
                <h3 className='text-xl font-bold text-terminal-green mb-2'>
                  Recent Projects
                </h3>
                <p className='text-gray-400 text-sm'>
                  Manage your creative works
                </p>
              </div>

              {/* Project Grid */}
              <div className='grid grid-cols-2 gap-4'>
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className='bg-gray-800 border border-gray-600 rounded-lg p-4 hover:border-terminal-green/50 transition-colors cursor-pointer'
                  >
                    <h4 className='font-bold text-white mb-2'>
                      {project.title}
                    </h4>
                    <p className='text-gray-400 text-sm mb-3'>{project.type}</p>
                    <div className='flex items-center justify-between'>
                      <span
                        className={`text-xs px-2 py-1 rounded-full bg-${project.color}/20 text-${project.color} border border-${project.color}/30`}
                      >
                        {project.status}
                      </span>
                      <div className='text-xs text-gray-500'>2 days ago</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel */}
            <div className='col-span-3 bg-gray-800 border-l border-gray-700 p-4'>
              {/* Model Status */}
              <div className='mb-6'>
                <h4 className='font-bold text-terminal-green mb-3 flex items-center gap-2'>
                  <Brain className='w-4 h-4' />
                  Model Status
                </h4>
                <div className='bg-gray-900 rounded-lg p-3 border border-gray-600'>
                  <p className='text-sm text-gray-300 mb-2'>
                    Custom model 'MyStyle_V2' is learning...
                  </p>
                  <div className='w-full bg-gray-700 rounded-full h-2 mb-2'>
                    <div
                      className='bg-magenta h-2 rounded-full transition-all duration-500 ease-out'
                      style={{ width: `${modelProgress}%` }}
                    ></div>
                  </div>
                  <p className='text-xs text-magenta'>
                    {modelProgress}% complete •{" "}
                    {100 - modelProgress > 0
                      ? `${((100 - modelProgress) / 5) * 0.5}h`
                      : "0h"}{" "}
                    remaining
                  </p>
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h4 className='font-bold text-terminal-green mb-3 flex items-center gap-2'>
                  <Activity className='w-4 h-4' />
                  Recent Activity
                </h4>
                <div className='space-y-3'>
                  {recentActivities.map((activity, index) => (
                    <div
                      key={index}
                      className='flex items-center gap-3 text-sm animate-fade-in'
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-${activity.color}`}
                      ></div>
                      <div className='flex-1'>
                        <p className='text-gray-300'>{activity.action}</p>
                        <p className='text-gray-500 text-xs'>{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDashboard } from "./dashboard-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function UserSettings() {
  const { currentSubPage } = useDashboard();

  const renderSettingsContent = () => {
    switch (currentSubPage) {
      case "profile":
        return (
          <Card className='bg-gray-900 border-gray-700 text-white'>
            <CardHeader>
              <CardTitle className='text-terminal-green'>
                Profile Settings
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='username' className='text-gray-400'>
                  Username
                </Label>
                <Input
                  id='username'
                  defaultValue='ascii_master'
                  className='bg-gray-800 border-gray-600 text-white focus:ring-terminal-green'
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email' className='text-gray-400'>
                  Email
                </Label>
                <Input
                  id='email'
                  type='email'
                  defaultValue='user@example.com'
                  className='bg-gray-800 border-gray-600 text-white focus:ring-terminal-green'
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='bio' className='text-gray-400'>
                  Bio
                </Label>
                <textarea
                  id='bio'
                  rows={3}
                  defaultValue='Creative ASCII artist and AI enthusiast.'
                  className='flex h-20 w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-sm ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terminal-green focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white'
                />
              </div>
              <Button className='bg-terminal-green text-black hover:bg-terminal-green/80'>
                Save Profile
              </Button>
            </CardContent>
          </Card>
        );
      case "security":
        return (
          <Card className='bg-gray-900 border-gray-700 text-white'>
            <CardHeader>
              <CardTitle className='text-terminal-green'>
                Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='current-password' className='text-gray-400'>
                  Current Password
                </Label>
                <Input
                  id='current-password'
                  type='password'
                  className='bg-gray-800 border-gray-600 text-white focus:ring-terminal-green'
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='new-password' className='text-gray-400'>
                  New Password
                </Label>
                <Input
                  id='new-password'
                  type='password'
                  className='bg-gray-800 border-gray-600 text-white focus:ring-terminal-green'
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='confirm-password' className='text-gray-400'>
                  Confirm New Password
                </Label>
                <Input
                  id='confirm-password'
                  type='password'
                  className='bg-gray-800 border-gray-600 text-white focus:ring-terminal-green'
                />
              </div>
              <Button className='bg-terminal-green text-black hover:bg-terminal-green/80'>
                Change Password
              </Button>
            </CardContent>
          </Card>
        );
      case "billing":
        return (
          <Card className='bg-gray-900 border-gray-700 text-white'>
            <CardHeader>
              <CardTitle className='text-terminal-green'>
                Billing Information
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='plan' className='text-gray-400'>
                  Current Plan
                </Label>
                <Input
                  id='plan'
                  defaultValue='Pro Plan'
                  readOnly
                  className='bg-gray-800 border-gray-600 text-white focus:ring-terminal-green'
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='next-billing' className='text-gray-400'>
                  Next Billing Date
                </Label>
                <Input
                  id='next-billing'
                  defaultValue='2024-08-01'
                  readOnly
                  className='bg-gray-800 border-gray-600 text-white focus:ring-terminal-green'
                />
              </div>
              <Button className='bg-terminal-green text-black hover:bg-terminal-green/80'>
                Manage Subscription
              </Button>
            </CardContent>
          </Card>
        );
      case "notifications":
        return (
          <Card className='bg-gray-900 border-gray-700 text-white'>
            <CardHeader>
              <CardTitle className='text-terminal-green'>
                Notification Settings
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex items-center space-x-2'>
                <input
                  type='checkbox'
                  id='email-notifications'
                  className='form-checkbox h-4 w-4 text-terminal-green bg-gray-800 border-gray-600 rounded focus:ring-terminal-green'
                  defaultChecked
                />
                <Label htmlFor='email-notifications' className='text-gray-400'>
                  Email Notifications
                </Label>
              </div>
              <div className='flex items-center space-x-2'>
                <input
                  type='checkbox'
                  id='app-notifications'
                  className='form-checkbox h-4 w-4 text-terminal-green bg-gray-800 border-gray-600 rounded focus:ring-terminal-green'
                  defaultChecked
                />
                <Label htmlFor='app-notifications' className='text-gray-400'>
                  In-App Notifications
                </Label>
              </div>
              <Button className='bg-terminal-green text-black hover:bg-terminal-green/80'>
                Save Notifications
              </Button>
            </CardContent>
          </Card>
        );
      default:
        return (
          <div className='text-gray-500 text-center p-8'>
            Select a setting category from the left.
          </div>
        );
    }
  };

  return (
    <div className='flex-1 p-6 overflow-y-auto'>{renderSettingsContent()}</div>
  );
}

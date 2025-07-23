"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsNotificationsPage() {
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
}

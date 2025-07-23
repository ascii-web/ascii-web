"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsSecurityPage() {
  return (
    <Card className='bg-gray-900 border-gray-700 text-white'>
      <CardHeader>
        <CardTitle className='text-terminal-green'>Security Settings</CardTitle>
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
}

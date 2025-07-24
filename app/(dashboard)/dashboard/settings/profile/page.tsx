"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsProfilePage() {
  return (
    <Card className='bg-gray-900 border-gray-700 text-white'>
      <CardHeader>
        <CardTitle className='text-terminal-green'>Profile Settings</CardTitle>
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
}

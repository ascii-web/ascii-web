"use client";

import { Button } from "@/components/ui/button";

import { HardDrive, Zap, Shield, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress"; // Assuming you have a Progress component

export function SettingsPanel() {
  return (
    <div className='w-80 bg-gray-800 border-l border-gray-700 p-6 overflow-y-auto'>
      <div className='space-y-6'>
        {/* Account Overview */}
        <div>
          <h3 className='text-lg font-bold text-terminal-green mb-4 flex items-center gap-2'>
            <span className='text-gray-500'>//</span> ACCOUNT_OVERVIEW
          </h3>
        </div>

        <div className='space-y-4'>
          {/* Storage Usage */}
          <Card className='bg-gray-900 border-gray-600 text-white'>
            <CardHeader className='pb-2'>
              <div className='flex items-center gap-2'>
                <HardDrive className='w-4 h-4 text-gray-400' />
                <CardTitle className='text-sm font-semibold text-gray-300'>
                  Storage Usage
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className='space-y-2'>
              <div className='flex justify-between text-sm'>
                <span className='text-gray-400'>Used</span>
                <span className='text-yellow-500'>2.5 / 10 GB</span>
              </div>
              <Progress
                value={25}
                className='h-2 bg-gray-700 [&>*]:bg-yellow-500'
              />
            </CardContent>
          </Card>

          {/* API Usage */}
          <Card className='bg-gray-900 border-gray-600 text-white'>
            <CardHeader className='pb-2'>
              <div className='flex items-center gap-2'>
                <Zap className='w-4 h-4 text-gray-400' />
                <CardTitle className='text-sm font-semibold text-gray-300'>
                  API Usage
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className='space-y-2'>
              <div className='flex justify-between text-sm'>
                <span className='text-gray-400'>This Month</span>
                <span className='text-terminal-green'>1,247 / 5,000</span>
              </div>
              <Progress
                value={25}
                className='h-2 bg-gray-700 [&>*]:bg-terminal-green'
              />
            </CardContent>
          </Card>

          {/* Security Status */}
          <Card className='bg-gray-900 border-gray-600 text-white'>
            <CardHeader className='pb-2'>
              <div className='flex items-center gap-2'>
                <Shield className='w-4 h-4 text-green-400' />
                <CardTitle className='text-sm font-semibold text-gray-300'>
                  Security Status
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className='space-y-2 text-sm'>
              <div className='flex justify-between'>
                <span className='text-gray-400'>2FA Enabled</span>
                <span className='text-green-400'>✓</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-gray-400'>Password Strength</span>
                <span className='text-green-400'>Strong</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-gray-400'>Last Login</span>
                <span className='text-white'>Today</span>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className='bg-gray-900 border-gray-600 text-white'>
            <CardHeader className='pb-2'>
              <div className='flex items-center gap-2'>
                <Clock className='w-4 h-4 text-gray-400' />
                <CardTitle className='text-sm font-semibold text-gray-300'>
                  Recent Activity
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className='space-y-2 text-sm'>
              <div className='text-gray-400'>Settings updated</div>
              <div className='text-gray-400'>Password changed</div>
              <div className='text-gray-400'>Profile updated</div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className='space-y-2 pt-4 border-t border-gray-700'>
          <Button className='w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors'>
            Delete Account
          </Button>
          <Button className='w-full border border-gray-600 text-gray-400 py-2 rounded-lg font-semibold hover:border-gray-500 transition-colors bg-transparent'>
            Export Data
          </Button>
        </div>
      </div>
    </div>
  );
}

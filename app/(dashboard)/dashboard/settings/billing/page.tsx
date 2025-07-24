"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsBillingPage() {
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
}

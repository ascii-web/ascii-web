"use client";

import { SettingsSubNavigation } from "@/components/dashboard/settings-sub-navigation";
import { SettingsPanel } from "@/components/dashboard/settings-panel";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=' w-full p-6'>
      <div className='flex gap-6'>
        <SettingsSubNavigation />
        <div className='flex-1'>{children}</div>
        <SettingsPanel />
      </div>
    </div>
  );
}

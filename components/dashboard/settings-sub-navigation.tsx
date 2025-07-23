"use client";

import { User, Lock, CreditCard, Bell } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function SettingsSubNavigation() {
  const pathname = usePathname();
  const currentSubPage = pathname.split("/")[3] || "profile";

  const subNavigationItems = [
    { icon: User, label: "Profile", subPage: "profile" },
    { icon: Lock, label: "Security", subPage: "security" },
    { icon: CreditCard, label: "Billing", subPage: "billing" },
    { icon: Bell, label: "Notifications", subPage: "notifications" },
  ];

  return (
    <div className='w-48 bg-gray-900 border-r border-gray-800 flex flex-col p-4'>
      <h3 className='text-lg font-bold text-terminal-green mb-4'>Settings</h3>
      <nav className='flex-1 space-y-2'>
        {subNavigationItems.map((item, index) => (
          <Link
            key={index}
            href={`/dashboard/settings/${item.subPage}`}
            className={cn(
              "flex items-center gap-3 p-3 rounded-lg transition-all duration-200 cursor-pointer group w-full text-left",
              currentSubPage === item.subPage
                ? "bg-terminal-green/20 text-terminal-green border-l-4 border-terminal-green"
                : "text-gray-400 hover:text-terminal-green hover:bg-gray-800"
            )}
          >
            <item.icon
              className={cn(
                "w-5 h-5",
                currentSubPage === item.subPage
                  ? "text-terminal-green"
                  : "group-hover:text-terminal-green"
              )}
            />
            <span className='font-semibold'>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

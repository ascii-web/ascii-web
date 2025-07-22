"use client";

import { useDashboard } from "./dashboard-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const pageInfoMap = {
  create: {
    title: "Creator Studio",
    description: "Generate stunning ASCII art and AI images.",
  },
  projects: {
    title: "My Projects",
    description: "Manage your saved ASCII art and AI creations.",
  },
  train: {
    title: "AI Model Trainer",
    description: "Train custom AI models for unique art styles.",
  },
  gallery: {
    title: "Community Gallery",
    description: "Explore and share ASCII art from the community.",
  },
  settings: {
    title: "Profile & Settings",
    description: "Manage your account, profile, and application settings.",
  },
};

const settingsSubPageInfoMap = {
  profile: {
    title: "Profile",
    description: "Update your personal information and preferences.",
  },
  security: {
    title: "Security",
    description: "Manage your password, 2FA, and account security.",
  },
  billing: {
    title: "Billing",
    description: "View your current plan and manage subscriptions.",
  },
  notifications: {
    title: "Notifications",
    description: "Configure your email and in-app notification settings.",
  },
};

export function PageHeader() {
  const { currentPage, currentSubPage } = useDashboard();

  const mainPageInfo = pageInfoMap[currentPage] || {
    title: "Dashboard",
    description: "Welcome to your ASCII-Web dashboard.",
  };
  const subPageInfo =
    currentPage === "settings" ? settingsSubPageInfoMap[currentSubPage] : null;

  return (
    <header className='mb-6 pb-4 border-b border-gray-800'>
      <Breadcrumb className='mb-2'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href='/dashboard'
              className='text-gray-400 hover:text-terminal-green'
            >
              Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className='text-white'>
              {mainPageInfo.title}
            </BreadcrumbPage>
          </BreadcrumbItem>
          {subPageInfo && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className='text-white'>
                  {subPageInfo.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className='text-4xl font-bold text-terminal-green mb-2'>
        {subPageInfo?.title || mainPageInfo.title}
      </h1>
      <p className='text-gray-400 text-lg'>
        {subPageInfo?.description || mainPageInfo.description}
      </p>
    </header>
  );
}

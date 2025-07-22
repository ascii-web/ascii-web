"use client";

import type React from "react";

import { useState, createContext, useContext, useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/lib/firebase-auth";

import { ProjectsManager } from "@/components/dashboard/projects-manager";
import { ModelTrainer } from "@/components/dashboard/model-trainer";
import { CommunityGallery } from "@/components/dashboard/community-gallery";
import { UserSettings } from "@/components/dashboard/user-settings";
import { CreatorStudio } from "@/components/dashboard/creator-studio";
import { PageHeader } from "@/components/dashboard/page-header";
import { SettingsSubNavigation } from "./settings-sub-navigation"; // Import the renamed sub-navigation
import { SettingsPanel } from "./settings-panel"; // Import the settings panel

type DashboardPage = "create" | "projects" | "train" | "gallery" | "settings";
type DashboardSubPage =
  | "profile"
  | "security"
  | "billing"
  | "notifications"
  | string; // Sub-pages for settings

interface DashboardContextType {
  currentPage: DashboardPage;
  setCurrentPage: (page: DashboardPage) => void;
  currentSubPage: DashboardSubPage;
  setCurrentSubPage: (subPage: DashboardSubPage) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
);

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
}

interface DashboardRouterProps {
  children: React.ReactNode; // This will be the DashboardSidebar
}

export function DashboardRouter({ children }: DashboardRouterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, loading } = useAuth();

  const [currentPage, setCurrentPage] = useState<DashboardPage>(() => {
    if (pathname.startsWith("/dashboard/projects")) return "projects";
    if (pathname.startsWith("/dashboard/train")) return "train";
    if (pathname.startsWith("/dashboard/gallery")) return "gallery";
    if (pathname.startsWith("/dashboard/settings")) return "settings";
    return "create";
  });
  const [currentSubPage, setCurrentSubPage] =
    useState<DashboardSubPage>("profile"); // Default sub-page for settings

  useEffect(() => {
    // Reset sub-page to default 'profile' when navigating to settings, otherwise clear it
    if (currentPage === "settings" && !currentSubPage) {
      setCurrentSubPage("profile");
    } else if (currentPage !== "settings") {
      setCurrentSubPage("");
    }
  }, [currentPage, currentSubPage]);

  useEffect(() => {
    if (pathname.startsWith("/dashboard/projects")) setCurrentPage("projects");
    else if (pathname.startsWith("/dashboard/train")) setCurrentPage("train");
    else if (pathname.startsWith("/dashboard/gallery"))
      setCurrentPage("gallery");
    else if (pathname.startsWith("/dashboard/settings"))
      setCurrentPage("settings");
    else setCurrentPage("create");
  }, [pathname]);

  const renderPageContent = () => {
    switch (currentPage) {
      case "create":
        return <CreatorStudio />;
      case "projects":
        return <ProjectsManager />;
      case "train":
        return <ModelTrainer />;
      case "gallery":
        return <CommunityGallery />;
      case "settings":
        return (
          <div className='flex flex-1 overflow-hidden'>
            <SettingsSubNavigation />{" "}
            {/* Left panel for settings sub-navigation */}
            <UserSettings /> {/* Main content area for settings forms */}
            <SettingsPanel /> {/* Right panel for settings overview */}
          </div>
        );
      default:
        return <CreatorStudio />;
    }
  };

  const contextValue = useMemo(
    () => ({
      currentPage,
      setCurrentPage,
      currentSubPage,
      setCurrentSubPage,
    }),
    [currentPage, currentSubPage]
  );

  if (loading) {
    return (
      <div className='flex h-screen w-full items-center justify-center bg-black text-terminal-green'>
        <div className='text-xl animate-pulse'>
          <pre>{`Loading ASCII-WEB...`}</pre>
        </div>
      </div>
    );
  }

  return (
    <DashboardContext.Provider value={contextValue}>
      {/* This div is the main flex container for the sidebar and the content area */}
      <div className='flex flex-1 h-full'>
        {children}{" "}
        {/* This renders the DashboardSidebar, which is a direct child of this flex container */}
        <div className='flex flex-col flex-1 bg-black border-l border-gray-800'>
          <PageHeader />
          <main className='flex-1 p-6 space-y-6 overflow-y-auto'>
            {renderPageContent()}
          </main>
        </div>
      </div>
    </DashboardContext.Provider>
  );
}

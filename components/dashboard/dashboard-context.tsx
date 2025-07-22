"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface DashboardContextType {
  selectedSection: string;
  setSelectedSection: (section: string) => void;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  // Add more dashboard state as needed
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

interface DashboardProviderProps {
  children: React.ReactNode;
}

export function DashboardProvider({ children }: DashboardProviderProps) {
  const [selectedSection, setSelectedSection] = useState("overview");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  return (
    <DashboardContext.Provider
      value={{
        selectedSection,
        setSelectedSection,
        sidebarCollapsed,
        setSidebarCollapsed,
        theme,
        setTheme,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

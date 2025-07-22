"use client";

import type React from "react";

import { useAuth } from "@/lib/firebase-auth";
import { useEffect } from "react";

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      window.location.href = "/auth";
    }
  }, [user, loading]);

  if (loading) {
    return (
      <div className='min-h-screen bg-black flex items-center justify-center'>
        <div className='text-center space-y-4'>
          {/* ASCII Loading Animation */}
          <div className='text-terminal-green font-mono text-lg animate-pulse'>
            <pre>{`╔═══════════════╗
║   LOADING...  ║
║               ║
║  ████████████ ║
║  ░░░░░░░░░░░░ ║
║               ║
╚═══════════════╝`}</pre>
          </div>
          <div className='flex items-center justify-center space-x-1'>
            <div className='w-2 h-2 bg-terminal-green rounded-full animate-bounce'></div>
            <div
              className='w-2 h-2 bg-terminal-green rounded-full animate-bounce'
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className='w-2 h-2 bg-terminal-green rounded-full animate-bounce'
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
          <p className='text-gray-400 text-sm'>
            Initializing ASCII Web Dashboard...
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect via useEffect
  }

  return <>{children}</>;
}

"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

export interface User {
  id: string
  email: string
  username: string
  displayName?: string
  bio?: string
  avatar?: string
  plan: "free" | "pro" | "enterprise"
  emailVerified: boolean
  createdAt: string
  lastLogin: string
  stats: {
    projectsCreated: number
    modelsTrained: number
    storageUsed: number
    storageTotal: number
  }
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  register: (email: string, password: string, username: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  resetPassword: (email: string) => Promise<{ success: boolean; error?: string }>
  verifyEmail: (token: string) => Promise<{ success: boolean; error?: string }>
  updateProfile: (data: Partial<User>) => Promise<{ success: boolean; error?: string }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}

// Static-compatible API functions
const staticApi = {
  async login(email: string, password: string) {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (email === "demo@ascii-web.com" && password === "demo123") {
      const user: User = {
        id: "1",
        email: "demo@ascii-web.com",
        username: "demo_user",
        displayName: "Demo User",
        bio: "ASCII art enthusiast and AI explorer",
        plan: "pro",
        emailVerified: true,
        createdAt: "2024-01-01",
        lastLogin: new Date().toISOString(),
        stats: {
          projectsCreated: 14,
          modelsTrained: 3,
          storageUsed: 2.5,
          storageTotal: 10,
        },
      }

      if (typeof window !== "undefined") {
        localStorage.setItem("auth_user", JSON.stringify(user))
      }
      return { success: true, user }
    }

    return { success: false, error: "Invalid credentials" }
  },

  async register(email: string, password: string, username: string) {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (email === "demo@ascii-web.com") {
      return { success: false, error: "User already exists" }
    }

    const user: User = {
      id: Date.now().toString(),
      email,
      username,
      plan: "free",
      emailVerified: false,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
      stats: {
        projectsCreated: 0,
        modelsTrained: 0,
        storageUsed: 0,
        storageTotal: 5,
      },
    }

    if (typeof window !== "undefined") {
      localStorage.setItem("auth_user", JSON.stringify(user))
      localStorage.setItem("email_verification_needed", "true")
    }

    return { success: true, user }
  },

  async resetPassword(email: string) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return { success: true }
  },

  async verifyEmail(token: string) {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (typeof window !== "undefined") {
      const userStr = localStorage.getItem("auth_user")
      if (userStr) {
        const user = JSON.parse(userStr)
        user.emailVerified = true
        localStorage.setItem("auth_user", JSON.stringify(user))
        localStorage.removeItem("email_verification_needed")
        return { success: true, user }
      }
    }

    return { success: false, error: "Invalid token" }
  },

  async updateProfile(data: Partial<User>) {
    await new Promise((resolve) => setTimeout(resolve, 500))

    if (typeof window !== "undefined") {
      const userStr = localStorage.getItem("auth_user")
      if (userStr) {
        const user = { ...JSON.parse(userStr), ...data }
        localStorage.setItem("auth_user", JSON.stringify(user))
        return { success: true, user }
      }
    }

    return { success: false, error: "User not found" }
  },
}

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      const userStr = localStorage.getItem("auth_user")
      if (userStr) {
        try {
          setUser(JSON.parse(userStr))
        } catch (error) {
          localStorage.removeItem("auth_user")
        }
      }
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    const result = await staticApi.login(email, password)
    if (result.success && result.user) {
      setUser(result.user)
    }
    return result
  }

  const register = async (email: string, password: string, username: string) => {
    const result = await staticApi.register(email, password, username)
    if (result.success && result.user) {
      setUser(result.user)
    }
    return result
  }

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_user")
      localStorage.removeItem("email_verification_needed")
    }
    setUser(null)
  }

  const resetPassword = async (email: string) => {
    return await staticApi.resetPassword(email)
  }

  const verifyEmail = async (token: string) => {
    const result = await staticApi.verifyEmail(token)
    if (result.success && result.user) {
      setUser(result.user)
    }
    return result
  }

  const updateProfile = async (data: Partial<User>) => {
    const result = await staticApi.updateProfile(data)
    if (result.success && result.user) {
      setUser(result.user)
    }
    return result
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        resetPassword,
        verifyEmail,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

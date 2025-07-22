"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/lib/firebase-auth"
import { LoginForm } from "@/components/auth/login-form"
import { RegisterForm } from "@/components/auth/register-form"
import { PasswordResetForm } from "@/components/auth/password-reset-form"

type AuthMode = "login" | "register" | "reset"

export default function AuthPage() {
  const [mode, setMode] = useState<AuthMode>("login")
  const { user, loading } = useAuth()

  useEffect(() => {
    if (!loading && user) {
      // Redirect to dashboard if already authenticated
      window.location.href = "/dashboard"
    }
  }, [user, loading])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (user) {
    return null // Will redirect
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background to-muted">
      <div className="w-full max-w-md">
        {mode === "login" && (
          <LoginForm onSwitchToRegister={() => setMode("register")} onSwitchToReset={() => setMode("reset")} />
        )}
        {mode === "register" && <RegisterForm onSwitchToLogin={() => setMode("login")} />}
        {mode === "reset" && <PasswordResetForm onSwitchToLogin={() => setMode("login")} />}
      </div>
    </div>
  )
}

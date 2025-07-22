"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAuth } from "@/lib/firebase-auth";
import { Mail, Loader2, CheckCircle, RefreshCw } from "lucide-react";

export function EmailVerification() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, verifyEmail, logout } = useAuth();

  const handleResendVerification = async () => {
    setIsLoading(true);
    setError("");
    setSuccess(false);

    const result = await verifyEmail();

    if (result.success) {
      setSuccess(true);
    } else {
      setError(result.error || "Failed to send verification email");
    }

    setIsLoading(false);
  };

  const handleLogout = async () => {
    await logout();
    window.location.href = "/auth";
  };

  return (
    <div className='min-h-screen bg-black text-white font-mono flex items-center justify-center p-4'>
      <Card className='w-full max-w-md mx-auto bg-gray-900 border-gray-700'>
        <CardHeader className='space-y-1'>
          <div className='text-center mb-4'>
            <div className='text-terminal-green text-2xl font-bold mb-2'>
              <pre className='text-sm leading-tight'>{`╔═══════════╗
║ ASCII-WEB ║
╚═══════════╝`}</pre>
            </div>
          </div>
          <div className='flex items-center justify-center mb-4'>
            <Mail className='h-12 w-12 text-yellow-500' />
          </div>
          <CardTitle className='text-2xl font-bold text-center text-white'>
            Verify Your Email
          </CardTitle>
          <CardDescription className='text-center text-gray-400'>
            Please verify your email address to access all features
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          {error && (
            <Alert
              variant='destructive'
              className='bg-red-900/50 border-red-500'
            >
              <AlertDescription className='text-red-400'>
                {error}
              </AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className='bg-terminal-green/20 border-terminal-green'>
              <CheckCircle className='h-4 w-4' />
              <AlertDescription className='text-terminal-green'>
                Verification email sent! Please check your inbox.
              </AlertDescription>
            </Alert>
          )}

          <div className='bg-yellow-900/50 border border-yellow-500 rounded-lg p-4'>
            <p className='text-yellow-400 text-sm'>
              We've sent a verification email to <strong>{user?.email}</strong>.
              Please check your inbox and click the verification link.
            </p>
          </div>

          <Button
            onClick={handleResendVerification}
            className='w-full bg-terminal-green text-black hover:bg-terminal-green/90 font-semibold'
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Sending...
              </>
            ) : (
              <>
                <RefreshCw className='mr-2 h-4 w-4' />
                Resend Verification Email
              </>
            )}
          </Button>

          <Button
            onClick={handleLogout}
            variant='outline'
            className='w-full bg-gray-800 border-gray-600 text-white hover:bg-gray-700'
          >
            Sign Out
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

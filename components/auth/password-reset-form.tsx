"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAuth } from "@/lib/firebase-auth";
import { Loader2, Mail, ArrowLeft, CheckCircle } from "lucide-react";

interface PasswordResetFormProps {
  onSwitchToLogin: () => void;
}

export function PasswordResetForm({ onSwitchToLogin }: PasswordResetFormProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const { resetPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (!email.trim()) {
      setError("Email is required");
      setIsLoading(false);
      return;
    }

    try {
      const result = await resetPassword(email);

      if (result.success) {
        setSuccess(true);
      } else {
        setError(result.error || "Failed to send reset email");
      }
    } catch (error: any) {
      setError("An unexpected error occurred");
    }

    setIsLoading(false);
  };

  if (success) {
    return (
      <Card className='w-full max-w-md mx-auto bg-gray-900 border-gray-700'>
        <CardHeader className='space-y-1'>
          <div className='flex items-center justify-center mb-4'>
            <CheckCircle className='h-12 w-12 text-terminal-green animate-pulse' />
          </div>
          <CardTitle className='text-2xl font-bold text-center text-white'>
            Check Your Email
          </CardTitle>
          <CardDescription className='text-center text-gray-400'>
            We've sent a password reset link to {email}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            <Alert className='bg-terminal-green/20 border-terminal-green'>
              <AlertDescription className='text-terminal-green'>
                Please check your email and click the reset link to create a new
                password.
              </AlertDescription>
            </Alert>
            <Button
              onClick={onSwitchToLogin}
              className='w-full bg-terminal-green text-black hover:bg-terminal-green/90 font-semibold transition-colors'
            >
              <ArrowLeft className='mr-2 h-4 w-4' />
              Back to Sign In
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className='w-full max-w-md mx-auto bg-gray-900 border-gray-700'>
      <CardHeader className='space-y-1'>
        <div className='text-center mb-4'>
          <div className='text-terminal-green text-2xl font-bold mb-2'>
            <pre className='text-sm leading-tight'>{`╔═══════════╗
║ ASCII-WEB ║
╚═══════════╝`}</pre>
          </div>
        </div>
        <CardTitle className='text-2xl font-bold text-center text-white'>
          Reset Password
        </CardTitle>
        <CardDescription className='text-center text-gray-400'>
          Enter your email address and we'll send you a reset link
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        {error && (
          <Alert variant='destructive' className='bg-red-900/50 border-red-500'>
            <AlertDescription className='text-red-400'>
              {error}
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='space-y-2'>
            <Label htmlFor='email' className='text-white'>
              Email
            </Label>
            <div className='relative'>
              <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
              <Input
                id='email'
                type='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-terminal-green transition-colors'
                required
                disabled={isLoading}
              />
            </div>
          </div>

          <Button
            type='submit'
            className='w-full bg-terminal-green text-black hover:bg-terminal-green/90 font-semibold transition-colors'
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Sending reset link...
              </>
            ) : (
              "Send Reset Link"
            )}
          </Button>
        </form>

        <div className='text-center'>
          <Button
            type='button'
            variant='link'
            className='text-sm text-terminal-green hover:text-terminal-green/80 transition-colors'
            onClick={onSwitchToLogin}
            disabled={isLoading}
          >
            <ArrowLeft className='mr-1 h-3 w-3' />
            Back to Sign In
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

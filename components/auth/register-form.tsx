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
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/lib/firebase-auth";
import {
  Eye,
  EyeOff,
  Loader2,
  CheckCircle,
  Mail,
  Lock,
  User,
} from "lucide-react";

interface RegisterFormProps {
  onSwitchToLogin: () => void;
}

export function RegisterForm({ onSwitchToLogin }: RegisterFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const { register, registerWithGoogle } = useAuth();

  const validateForm = () => {
    if (!username.trim()) {
      setError("Username is required");
      return false;
    }

    if (username.length < 3) {
      setError("Username must be at least 3 characters long");
      return false;
    }

    if (!email.trim()) {
      setError("Email is required");
      return false;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return false;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess(false);

    if (!validateForm()) {
      setIsLoading(false);
      return;
    }

    try {
      const result = await register(email, password, username);

      if (result.success) {
        setSuccess(true);
        // Auto redirect to dashboard after showing success message
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 2000);
      } else {
        setError(result.error || "Registration failed");
      }
    } catch (error: any) {
      setError("An unexpected error occurred");
    }

    setIsLoading(false);
  };

  const handleGoogleSignUp = async () => {
    setIsGoogleLoading(true);
    setError("");

    try {
      const result = await registerWithGoogle();

      if (result.success) {
        // Show success message briefly before redirect
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 500);
      } else {
        setError(result.error || "Google sign-up failed");
      }
    } catch (error: any) {
      setError("An unexpected error occurred");
    }

    setIsGoogleLoading(false);
  };

  if (success) {
    return (
      <Card className='w-full max-w-md mx-auto bg-gray-900 border-gray-700'>
        <CardHeader className='space-y-1'>
          <div className='flex items-center justify-center mb-4'>
            <CheckCircle className='h-12 w-12 text-terminal-green animate-pulse' />
          </div>
          <CardTitle className='text-2xl font-bold text-center text-white'>
            Account Created!
          </CardTitle>
          <CardDescription className='text-center text-gray-400'>
            Welcome to ASCII-Web, {username}!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            <Alert className='bg-terminal-green/20 border-terminal-green'>
              <AlertDescription className='text-terminal-green'>
                Your account has been created successfully. A verification email
                has been sent to {email}.
              </AlertDescription>
            </Alert>
            <div className='text-center'>
              <div className='text-sm text-gray-400 mb-4'>
                Redirecting to dashboard in a moment...
              </div>
              <Button
                onClick={() => (window.location.href = "/dashboard")}
                className='w-full bg-terminal-green text-black hover:bg-terminal-green/90 font-semibold transition-colors'
              >
                Go to Dashboard
              </Button>
            </div>
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
          Create Account
        </CardTitle>
        <CardDescription className='text-center text-gray-400'>
          Join the ASCII-Web community
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

        {/* Google Sign Up Button */}
        <Button
          type='button'
          variant='outline'
          className='w-full bg-gray-800 border-gray-600 text-white hover:bg-gray-700 transition-colors'
          onClick={handleGoogleSignUp}
          disabled={isGoogleLoading || isLoading}
        >
          {isGoogleLoading ? (
            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
          ) : (
            <svg className='mr-2 h-4 w-4' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
              />
              <path
                fill='currentColor'
                d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
              />
              <path
                fill='currentColor'
                d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
              />
              <path
                fill='currentColor'
                d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
              />
            </svg>
          )}
          {isGoogleLoading ? "Creating account..." : "Continue with Google"}
        </Button>

        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <Separator className='w-full bg-gray-600' />
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-gray-900 px-2 text-gray-400'>
              Or continue with email
            </span>
          </div>
        </div>

        {/* Email/Password Form */}
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='space-y-2'>
            <Label htmlFor='username' className='text-white'>
              Username
            </Label>
            <div className='relative'>
              <User className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
              <Input
                id='username'
                type='text'
                placeholder='Enter your username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-terminal-green transition-colors'
                required
                disabled={isLoading || isGoogleLoading}
                minLength={3}
              />
            </div>
            {username && username.length < 3 && (
              <p className='text-xs text-red-400'>
                Username must be at least 3 characters
              </p>
            )}
          </div>

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
                disabled={isLoading || isGoogleLoading}
              />
            </div>
          </div>

          <div className='space-y-2'>
            <Label htmlFor='password' className='text-white'>
              Password
            </Label>
            <div className='relative'>
              <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
              <Input
                id='password'
                type={showPassword ? "text" : "password"}
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='pl-10 pr-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-terminal-green transition-colors'
                required
                disabled={isLoading || isGoogleLoading}
                minLength={6}
              />
              <Button
                type='button'
                variant='ghost'
                size='sm'
                className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-gray-400 hover:text-terminal-green transition-colors'
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading || isGoogleLoading}
              >
                {showPassword ? (
                  <EyeOff className='h-4 w-4' />
                ) : (
                  <Eye className='h-4 w-4' />
                )}
              </Button>
            </div>
            {password && password.length < 6 && (
              <p className='text-xs text-red-400'>
                Password must be at least 6 characters
              </p>
            )}
          </div>

          <div className='space-y-2'>
            <Label htmlFor='confirmPassword' className='text-white'>
              Confirm Password
            </Label>
            <div className='relative'>
              <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
              <Input
                id='confirmPassword'
                type={showConfirmPassword ? "text" : "password"}
                placeholder='Confirm your password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='pl-10 pr-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-terminal-green transition-colors'
                required
                disabled={isLoading || isGoogleLoading}
              />
              <Button
                type='button'
                variant='ghost'
                size='sm'
                className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-gray-400 hover:text-terminal-green transition-colors'
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                disabled={isLoading || isGoogleLoading}
              >
                {showConfirmPassword ? (
                  <EyeOff className='h-4 w-4' />
                ) : (
                  <Eye className='h-4 w-4' />
                )}
              </Button>
            </div>
            {confirmPassword && password !== confirmPassword && (
              <p className='text-xs text-red-400'>Passwords do not match</p>
            )}
          </div>

          <Button
            type='submit'
            className='w-full bg-magenta text-black hover:bg-magenta/90 font-semibold transition-colors'
            disabled={isLoading || isGoogleLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Creating account...
              </>
            ) : (
              "Create Account"
            )}
          </Button>
        </form>

        <div className='text-center'>
          <div className='text-sm text-gray-400'>
            Already have an account?{" "}
            <Button
              type='button'
              variant='link'
              className='p-0 h-auto font-normal text-terminal-green hover:text-terminal-green/80 transition-colors'
              onClick={onSwitchToLogin}
              disabled={isLoading || isGoogleLoading}
            >
              Sign in
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  type User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  sendEmailVerification,
  updateProfile as firebaseUpdateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./firebase";

interface UserStats {
  projectsCreated: number;
  modelsTrained: number;
  storageUsed: number;
  storageTotal: number;
}

interface ExtendedUser extends User {
  username?: string;
  displayName?: string | null;
  plan?: "free" | "pro" | "enterprise";
  bio?: string;
  avatar?: string;
  stats: UserStats;
}

interface AuthContextType {
  user: ExtendedUser | null;
  loading: boolean;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; error?: string }>;
  register: (
    email: string,
    password: string,
    username?: string
  ) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  resetPassword: (
    email: string
  ) => Promise<{ success: boolean; error?: string }>;
  verifyEmail: () => Promise<{ success: boolean; error?: string }>;
  updateProfile: (data: {
    displayName?: string;
    username?: string;
    bio?: string;
  }) => Promise<{ success: boolean; error?: string }>;
  loginWithGoogle: () => Promise<{ success: boolean; error?: string }>;
  registerWithGoogle: () => Promise<{ success: boolean; error?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<ExtendedUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Generate static user data based on user info
  const generateUserStats = (firebaseUser: User): UserStats => {
    // Use user ID to generate consistent stats
    const seed = firebaseUser.uid
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);

    return {
      projectsCreated: Math.floor((seed % 20) + 5), // 5-24 projects
      modelsTrained: Math.floor((seed % 5) + 1), // 1-5 models
      storageUsed: Math.round(((seed % 30) + 10) / 10), // 1.0-3.9 GB
      storageTotal: 10, // 10 GB total
    };
  };

  const generateUserPlan = (
    firebaseUser: User
  ): "free" | "pro" | "enterprise" => {
    const seed = firebaseUser.uid
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const planIndex = seed % 10;

    if (planIndex < 7) return "free";
    if (planIndex < 9) return "pro";
    return "enterprise";
  };

  const extendUser = (firebaseUser: User): ExtendedUser => {
    return {
      ...firebaseUser,
      username:
        firebaseUser.displayName || firebaseUser.email?.split("@")[0] || "user",
      plan: generateUserPlan(firebaseUser),
      bio: "",
      avatar: firebaseUser.photoURL || "",
      stats: generateUserStats(firebaseUser),
    };
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(extendUser(firebaseUser));
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (error: any) {
      let errorMessage = "Login failed";

      switch (error.code) {
        case "auth/user-not-found":
          errorMessage = "No account found with this email";
          break;
        case "auth/wrong-password":
          errorMessage = "Incorrect password";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email address";
          break;
        case "auth/user-disabled":
          errorMessage = "This account has been disabled";
          break;
        case "auth/too-many-requests":
          errorMessage = "Too many failed attempts. Please try again later";
          break;
        default:
          errorMessage = error.message;
      }

      return { success: false, error: errorMessage };
    }
  };

  const register = async (
    email: string,
    password: string,
    username?: string
  ) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update profile with username if provided
      if (username && result.user) {
        await firebaseUpdateProfile(result.user, {
          displayName: username,
        });
      }

      // Send verification email
      if (result.user) {
        await sendEmailVerification(result.user);
      }

      return { success: true };
    } catch (error: any) {
      let errorMessage = "Registration failed";

      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage = "An account with this email already exists";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email address";
          break;
        case "auth/weak-password":
          errorMessage = "Password should be at least 6 characters";
          break;
        case "auth/operation-not-allowed":
          errorMessage = "Email/password accounts are not enabled";
          break;
        default:
          errorMessage = error.message;
      }

      return { success: false, error: errorMessage };
    }
  };

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      provider.addScope("profile");
      provider.addScope("email");

      await signInWithPopup(auth, provider);
      return { success: true };
    } catch (error: any) {
      let errorMessage = "Google sign-in failed";

      switch (error.code) {
        case "auth/popup-closed-by-user":
          errorMessage = "Sign-in was cancelled";
          break;
        case "auth/popup-blocked":
          errorMessage =
            "Popup was blocked by browser. Please allow popups and try again.";
          break;
        case "auth/account-exists-with-different-credential":
          errorMessage =
            "An account already exists with the same email address";
          break;
        default:
          errorMessage = error.message;
      }

      return { success: false, error: errorMessage };
    }
  };

  const registerWithGoogle = async () => {
    // Same as loginWithGoogle for new users
    return await loginWithGoogle();
  };

  const logout = async () => {
    await signOut(auth);
  };

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return { success: true };
    } catch (error: any) {
      let errorMessage = "Failed to send reset email";

      switch (error.code) {
        case "auth/user-not-found":
          errorMessage = "No account found with this email";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email address";
          break;
        default:
          errorMessage = error.message;
      }

      return { success: false, error: errorMessage };
    }
  };

  const verifyEmail = async () => {
    try {
      if (auth.currentUser) {
        await sendEmailVerification(auth.currentUser);
        return { success: true };
      }
      return { success: false, error: "No user logged in" };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };

  const updateProfile = async (data: {
    displayName?: string;
    username?: string;
    bio?: string;
  }) => {
    try {
      if (auth.currentUser) {
        // Update Firebase profile
        await firebaseUpdateProfile(auth.currentUser, {
          displayName: data.displayName || data.username,
        });

        // Update local user state
        setUser((prev) =>
          prev
            ? {
                ...prev,
                displayName:
                  data.displayName || data.username || prev.displayName,
                username: data.username || prev.username,
                bio: data.bio || prev.bio,
              }
            : null
        );

        return { success: true };
      }
      return { success: false, error: "No user logged in" };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    resetPassword,
    verifyEmail,
    updateProfile,
    loginWithGoogle,
    registerWithGoogle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

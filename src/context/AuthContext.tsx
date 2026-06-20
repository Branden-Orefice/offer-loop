"use client";

import React, { createContext, useContext, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import type { AuthContextType } from "@/types/auth";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const {
    data: session,
    isPending: loading,
    error,
    refetch,
  } = authClient.useSession();

  useEffect(() => {
    if (error) {
      console.error("The session encountered an error.");
    }
  }, [error]);

  const signOut = async () => {
    try {
      await authClient.signOut();
    } catch (error) {
      console.error("There was an issue with signing out:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ session, loading, signOut, refetch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

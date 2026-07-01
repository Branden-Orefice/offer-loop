"use client";

import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "https://offer-loop.vercel.app",
  fetchOptions: {
    credentials: "include",
  },
});

export const { signUp, signIn, signOut } = authClient;

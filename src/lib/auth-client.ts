"use client";

import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
  fetchOptions: {
    credentials: "include",
  },
});

export const { signUp, signIn, signOut } = authClient;

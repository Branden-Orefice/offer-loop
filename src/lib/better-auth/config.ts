import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { env } from "@/env";
import { db } from "@/lib/db";
import { nextCookies } from "better-auth/next-js";

const getTrustedOrigins = (): string[] => {
  if (env.NODE_ENV === "production") {
    if (!env.APP_URL) {
      throw new Error("APP_URL is required in production");
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return [env.APP_URL];
  }

  return ["http://localhost:3000"];
};

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),

  trustedOrigins: getTrustedOrigins(),

  emailAndPassword: {
    enabled: true,
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 60,
    },
  },
  plugins: [nextCookies()],
  socialProviders: {
    google: {
      clientId: env.BETTER_AUTH_GOOGLE_CLIENT_ID,
      clientSecret: env.BETTER_AUTH_GOOGLE_CLIENT_SECRET,
      scope: [
        "openid",
        "profile",
        "email",
        "https://www.googleapis.com/auth/gmail.readonly",
      ],
    },
  },
  advanced: {
    database: {
      generateId: () => crypto.randomUUID(),
    },
  },
});

export type Session = typeof auth.$Infer.Session;

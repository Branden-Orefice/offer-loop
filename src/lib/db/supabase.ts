import { env } from "@/env";
import { createClient } from "@supabase/supabase-js";

if (!env.SUPABASE_KEY || !env.SUPABASE_URL) {
  throw new Error("Missing SUPABASE_KEY or SUPABASE_URL");
}

export const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_KEY);

import { auth } from "@/lib/better-auth";
import { supabase } from "@/lib/db/supabase";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import fetchGmailMessages from "@/lib/gmail/fetch-gmail-messages";

type GoogleAccountRow = {
  access_token: string | null;
};

export async function POST() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: googleAccount, error } = await supabase
    .from("account")
    .select("access_token")
    .eq("user_id", session.user.id)
    .eq("provider_id", "google")
    .single<GoogleAccountRow>();

  const accessToken = googleAccount?.access_token;

  if (error || !accessToken) {
    return NextResponse.json(
      { error: "Google account not connected" },
      { status: 400 },
    );
  }

  try {
    const messages = await fetchGmailMessages(accessToken);

    return NextResponse.json({
      count: messages.length,
      messages,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to sync Gmail" },
      { status: 500 },
    );
  }
}

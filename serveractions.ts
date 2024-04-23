"use server";

import { redirect } from "next/navigation";
import { createClient } from "./lib/supabase/server";

export default async function loginWithGitHub() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      scopes: 'repo gist notifications',
      redirectTo: "http://localhost:3000/auth/callback"
    }
  });

  if(!data.url) {
    throw new Error("No url returned");
  }

  redirect(data.url);
}
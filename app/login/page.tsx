"use client";

import { createBrowserClient } from "@supabase/ssr";

export default function Login() {
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    
    
    const gitHubSignIn = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: 'github',
          options: {
            scopes: 'repo gist notifications',
            // redirectTo: "http://localhost:3000/auth/callback"
          }    
        })
    };
    
    
  const getUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    console.log(user);
  }


  return (
    <>
        <button onClick={gitHubSignIn}>@supabase/ssrのgithubで登録する</button>
    </>
  )
}
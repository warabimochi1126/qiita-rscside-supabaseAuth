"use client";

import { createBrowserClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";

export default function Home() {
  // const supabase = createBrowserClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  // );

  // supabase.auth.onAuthStateChange((event, session) => {
  //   if (session && session.provider_token) {
  //     window.localStorage.setItem('oauth_provider_token', session.provider_token)
  //   }
  
  //   if (session && session.provider_refresh_token) {
  //     window.localStorage.setItem('oauth_provider_refresh_token', session.provider_refresh_token)
  //   }
  
  //   if (event === 'SIGNED_OUT') {
  //     window.localStorage.removeItem('oauth_provider_token')
  //     window.localStorage.removeItem('oauth_provider_refresh_token')
  //   }

  //   console.log("event:", event);
  //   console.log("session");
  //   console.log(session);
  // });

  // const gitHubSignIn = async () => {
  //   const { data, error } = await supabase.auth.signInWithOAuth({
  //     provider: 'github',
  //     options: {
  //       scopes: 'repo gist notifications'
  //     }    
  //   })
  // };

  // const getUser = async () => {
  //   const { data: { user } } = await supabase.auth.getUser();
  //   console.log(user);
  // }

  // const supabaseClientSide = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

  // supabaseClientSide.auth.onAuthStateChange((event, session) => {
  //   if (session && session.provider_token) {
  //     window.localStorage.setItem('oauth_provider_token', session.provider_token)
  //   }
  
  //   if (session && session.provider_refresh_token) {
  //     window.localStorage.setItem('oauth_provider_refresh_token', session.provider_refresh_token)
  //   }
  
  //   if (event === 'SIGNED_OUT') {
  //     window.localStorage.removeItem('oauth_provider_token')
  //     window.localStorage.removeItem('oauth_provider_refresh_token')
  //   }
  // });

  // const getUserClientSide = async () => {
  //   const { data: { user } } = await supabaseClientSide.auth.getUser();
  //   console.log(user);
  // }

  // const gitHubSignInClientSide = async () => {
  //   const { data, error } = await supabaseClientSide.auth.signInWithOAuth({
  //     provider: 'github',
  //     options: {
  //       scopes: 'repo gist notifications'
  //     }    
  //   });
  // }

  // return (
  //   <>
  //     <button onClick={gitHubSignIn}>@supabase/ssrのgithubで登録する</button>
  //     <button onClick={gitHubSignInClientSide} className="block">@supabase/supbase-jsのgithubで登録する</button>
  //     <button onClick={getUser} className='block'>@supabase/ssrのゆーざーしゅとく</button>
  //     <button onClick={getUserClientSide} className="block">@supabase/supabase-jsのゆーざーしゅとく</button>
  //   </>
  // );


  return (
    <div>aaaa</div>
  )

}


// http://localhost:3001/?code=e0c09579-fd42-4650-9c1b-cc35c46b7fb0
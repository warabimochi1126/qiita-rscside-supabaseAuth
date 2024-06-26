import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { type CookieOptions, createServerClient } from '@supabase/ssr'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get('next') ?? '/'

  if (code) {
    const cookieStore = cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options: CookieOptions) {
            cookieStore.set({ name, value, ...options })
          },
          remove(name: string, options: CookieOptions) {
            cookieStore.delete({ name, ...options })
          },
        },
      }
    )
      
    // dataにprovider_tokenが詰まってる
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
    let response = NextResponse.redirect(`${origin}${next}`);
    // set-cookieでブラウザ側にprovider_token渡すのもありだし、supabase.auth.exchanageCodeForSessionを実行した時点で貰えるアクセストークンからprovider_tokenを取得するのもあり
    response.cookies.set("test_provider_token", data.session?.provider_token!);

    // exchangeCodeForSessionの中身がcookieに登録されてて、getSessionでcookieから取ってこれるからこっち側で頑張らなくて良い
    console.log(data);

    return response;
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}
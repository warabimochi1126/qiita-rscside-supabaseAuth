import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers"

export default async function RSC() {
    const cookieStore = cookies();
    // RSC で provider_token取得 の例 -> これ本質的にgetSessionと同じだからgetSession使えばいいと思う
    const provider_token0 = cookieStore.get("sb-fpcybexmjjawwgfknwzv-auth-token.0")?.value;
    const provider_token1 = cookieStore.get("sb-fpcybexmjjawwgfknwzv-auth-token.1")?.value;
    const provider_token = provider_token0! + provider_token1;
    if(provider_token) {
      console.log(JSON.parse(provider_token));
    }

    const supabase = createClient();
    // getSessionでもprovider_token取ってこれる
    const a = await supabase.auth.getSession();
    console.log(a);
    console.log("---");

    return (
        <div>aaa</div>
    )
}
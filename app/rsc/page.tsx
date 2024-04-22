import { cookies } from "next/headers"

export default function RSC() {
    const cookieStore = cookies();
    // RSC で provider_token取得 の例
    const provider_token0 = cookieStore.get("sb-fpcybexmjjawwgfknwzv-auth-token.0")?.value;
    const provider_token1 = cookieStore.get("sb-fpcybexmjjawwgfknwzv-auth-token.1")?.value;
    const provider_token = provider_token0! + provider_token1;
    console.log(JSON.parse(provider_token).provider_token);

    return (
        <div>aaa</div>
    )
}
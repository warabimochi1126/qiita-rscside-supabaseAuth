import loginWithGitHub from "@/serveractions";

export default function Login() {  
  return (
    <form action={loginWithGitHub}>
        <button>@supabase/ssrのgithubで登録する</button>
    </form>
  )
}
"use client"; 
import { Button } from '@/components/cn/ui/button';
import { signIn } from "next-auth/react";

function LoginButton() {
  return (
    <div>
        <Button size="sm" onClick={() => signIn()}>Login</Button>
    </div>
  )
}

export default LoginButton
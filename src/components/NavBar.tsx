"use client";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

export function Navbar({}) {
  const router = useRouter();
  return (
    <nav className="flex mx-auto max-w-6xl items-center py-4 px-3 justify-between">
      <h3 className="text-xl text-white font-semibold">Emojify 👷</h3>
      <div className="flex gap-3 items-center">
        <Button onClick={() => router.push("/#")} variant="simple" className="px-2">home</Button>
        <Button onClick={() => router.push("/#")} variant="simple" className="px-2">about</Button>
      </div>
    </nav>
  )
}
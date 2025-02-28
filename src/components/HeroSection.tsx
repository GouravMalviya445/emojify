"use client";
import { useRouter } from "next/navigation";
import { Button } from "./Button";


export function HeroSection({ className }: { className?: string }) {
  const router = useRouter();
  return <div className={`flex items-center justify-center bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2]
 ${className}`}>
    <div className="flex flex-col items-center gap-10 py-24">
      <h1 className="font-bold text-white text-5xl sm:text-6xl md:text-7xl leading-none">Emojify 👷</h1>
      <p className="font-medium text-white text-center text-2xl">Add a perfect emoji to your Git commits 🚀</p>
      <div className="text-center space-x-3">
        <a href="https://github.com/GouravMalviya445" target="_blank">
        <Button
          className="text-lg hover:bg-pink-600 hover:shadow-2xl transition-all duration-200 ease-in"
          variant="secondary"
        >github</Button></a>
        <a href="https://twitter.com/gouravdotcom" target="_blank">
        <Button className="text-lg hover:bg-orange-600 hover:shadow-2xl transition-all duration-200 ease-in">twitter</Button>
        </a>
      </div>

      {/* add your fav emoji commit */}
      <Button
        onClick={() => router.push("/emoji/add")}
        variant="plane"
        className="text-green-500 font-semibold hover:underline transition-all duration-200 ease-in-out"
      >Add your emoji</Button>
    </div>
  </div>
}
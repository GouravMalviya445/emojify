"use client";
import { useRouter } from "next/navigation";
import { HeroSection } from "./HeroSection";
import { Navbar } from "./NavBar";


export function Header({ className }: { className?: string }) {
  const router = useRouter();
  return <header>
    <Navbar/>
    <HeroSection/>
  </header>
}
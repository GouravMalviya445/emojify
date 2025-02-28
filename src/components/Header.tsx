"use client";
import { HeroSection } from "./HeroSection";
import { Navbar } from "./NavBar";


export function Header({ className }: { className?: string }) {
  return <header className={className}>
    <Navbar/>
    <HeroSection/>
  </header>
}
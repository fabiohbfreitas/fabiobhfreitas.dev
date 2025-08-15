"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import { Bungee } from "next/font/google"

const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
})

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-12 w-full max-w-3xl items-center justify-between px-4">
        <Link href="#" className={`${bungee.className} text-lg tracking-tight`}>
          FF
        </Link>
        <nav className="flex items-center gap-1">
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex text-xs rounded-none">
            <a href="#projects">Projects</a>
          </Button>
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex text-xs rounded-none">
            <a href="#skills">Skills</a>
          </Button>
          <Button asChild variant="ghost" size="icon" className="ml-1 h-8 w-8 rounded-none">
            <a href="https://github.com/fabiohbfreitas" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-3.5 w-3.5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" className="h-8 w-8 rounded-none">
            <a
              href="https://www.linkedin.com/in/fabiohbfreitas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}

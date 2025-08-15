import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer({
  email = "mailto:you@example.com",
  github = "https://github.com/fabiohbfreitas",
  linkedin = "https://www.linkedin.com/in/fabiohbfreitas",
}: {
  email?: string
  github?: string
  linkedin?: string
}) {
  return (
    <div className="flex flex-col items-start justify-between gap-3 border border-foreground/20 p-3 sm:flex-row sm:items-center">
      <div>
        <div className="text-sm font-medium text-foreground">Ready to build your next iOS application</div>
        <p className="text-xs text-foreground/70">Email is the fastest way to reach me.</p>
      </div>
      <div className="flex flex-wrap gap-2">
        <Button
          asChild
          variant="outline"
          size="sm"
          className="h-7 text-xs bg-transparent border-foreground/25 text-foreground/90 hover:bg-foreground/10 rounded-none"
        >
          <a href={email}>
            <Mail className="mr-1.5 h-3 w-3" />
            Email
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="h-7 text-xs bg-transparent border-foreground/25 text-foreground/90 hover:bg-foreground/10 rounded-none"
        >
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-1.5 h-3 w-3" />
            GitHub
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="h-7 text-xs bg-transparent border-foreground/25 text-foreground/90 hover:bg-foreground/10 rounded-none"
        >
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin className="mr-1.5 h-3 w-3" />
            LinkedIn
          </a>
        </Button>
      </div>
    </div>
  )
}

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Apple, Github, Link2 } from "lucide-react"

type ProjectLink = {
  type: "app-store" | "github" | "case-study"
  href: string
  label?: string
}

export type Project = {
  slug: string
  title: string
  description: string
  imageAlt?: string
  image?: string
  highlights?: string[]
  stack?: string[]
  links?: ProjectLink[]
  year?: string
}

export default function ProjectCard({
  title = "Project",
  description = "Short description of the project.",
  image = "/minimal-app-dark-ui.png",
  imageAlt = "Project preview",
  stack = [],
  highlights = [],
  links = [],
  year = "",
}: Project) {
  return (
    <Card className="overflow-hidden border-foreground/20 bg-card/50 backdrop-blur-sm rounded-none">
      <CardHeader className="space-y-1 pb-2">
        <div className="flex flex-wrap items-center gap-2">
          <CardTitle className="text-base text-foreground">{title}</CardTitle>
          {year ? (
            <Badge variant="secondary" className="bg-foreground/10 text-foreground/90 rounded-none">
              {year}
            </Badge>
          ) : null}
        </div>
        <CardDescription className="text-[13px] leading-relaxed text-foreground/70">{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3">
        <div className="relative overflow-hidden border border-foreground/20">
          <Image
            src={image || "/placeholder.svg?height=540&width=1080&query=monochrome%20ios%20app%20screenshot"}
            alt={imageAlt}
            width={1080}
            height={540}
            priority={false}
            className="h-auto w-full object-cover grayscale"
          />
        </div>

        {highlights?.length ? (
          <ul className="grid list-disc gap-1 pl-4 text-sm text-foreground/80">
            {highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        ) : null}

        {stack?.length ? (
          <div className="flex flex-wrap gap-1.5">
            {stack.map((t) => (
              <Badge
                key={t}
                variant="outline"
                className="border-foreground/25 text-xs rounded-none font-normal text-foreground/90"
              >
                {t}
              </Badge>
            ))}
          </div>
        ) : null}

        {links?.length ? (
          <div className="flex flex-wrap gap-2">
            {links.map((l) => {
              const isStore = l.type === "app-store"
              const isGitHub = l.type === "github"
              return (
                <Button
                  key={l.href}
                  asChild
                  variant="outline"
                  size="sm"
                  className="h-7 text-xs bg-transparent border-foreground/25 text-foreground/90 hover:bg-foreground/10 rounded-none"
                >
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    {isStore ? (
                      <Apple className="mr-1.5 h-3 w-3" />
                    ) : isGitHub ? (
                      <Github className="mr-1.5 h-3 w-3" />
                    ) : (
                      <Link2 className="mr-1.5 h-3 w-3" />
                    )}
                    {l.label || (isStore ? "App Store" : isGitHub ? "GitHub" : "Case Study")}
                  </a>
                </Button>
              )
            })}
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}

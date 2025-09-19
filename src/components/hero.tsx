import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero({
  name = "Fábio Freitas",
  title = "iOS Developer",
  summary = "Building native iOS applications with SwiftUI and UIKit. Focused on clean architecture, comprehensive testing and delivering user-centered solutions.",
}: {
  name?: string;
  title?: string;
  summary?: string;
  email?: string;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            {name}
          </h1>
          <Badge
            variant="outline"
            className="border-foreground/25 text-foreground/90 rounded-none"
          >
            {title}
          </Badge>
          <Badge
            variant="secondary"
            className="bg-foreground/10 text-foreground/90 rounded-none flex-wrap"
          >
            Brasília, DF 🇧🇷
          </Badge>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-foreground/70">{summary}</p>

      <div className="flex flex-wrap items-center gap-2">
        <Button
          asChild
          variant="outline"
          className="rounded-none bg-transparent border-foreground/25 text-foreground/90 hover:bg-foreground/10"
        >
          <a href="#projects">View projects</a>
        </Button>
      </div>
    </div>
  );
}

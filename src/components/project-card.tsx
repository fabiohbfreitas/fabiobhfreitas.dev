import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type Project = {
  slug: string;
  title: string;
  description: string;
  imageAlt?: string;
  image?: string;
  highlights?: string[];
  year?: string;
};

export default function ProjectCard({
  title = "Project",
  description = "Short description of the project.",
  image,
  imageAlt = "Project preview",
  highlights = [],
  year = "",
}: Project) {
  return (
    <Card className="overflow-hidden border-foreground/20 bg-card/50 backdrop-blur-sm rounded-none">
      <CardHeader className="space-y-1 pb-2">
        <div className="flex flex-wrap items-center gap-2">
          <CardTitle className="text-base text-foreground">{title}</CardTitle>
          {year ? (
            <Badge
              variant="secondary"
              className="bg-foreground/10 text-foreground/90 rounded-none"
            >
              {year}
            </Badge>
          ) : null}
        </div>
        <CardDescription className="leading-relaxed text-foreground/70">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3">
        <div className="relative overflow-hidden border border-foreground/20">
          <img
            src={image ?? "https://placehold.co/1080x600"}
            alt={imageAlt}
            width={1080}
            height={540}
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
      </CardContent>
    </Card>
  );
}

import { Badge } from "@/components/ui/badge"

const skills = [
  "Swift",
  "SwiftUI",
  "UIKit",
  "Combine",
  "Core Data",
  "Swift Data",
  "MVC",
  "MVVM",
  "VIPER",
  "Coordinator",
  "SOLID",
  "XCode",
  "Instruments",
  "Git",
  "SPM",
  "Fastlane",
  "Unit Testing",
  "Integration Testing",
  "Snapshot Testing",
  "Acceptance Testing",
  "E2E Testing",
  "Sentry",
  "New Relic",
  "Firebase/Crashlytics",
  "Posthog",
  "REST Api",
  "Websockets",
  "Graphql",
  "gRPC"
]

export default function Skills() {
  return (
    <div className="flex flex-wrap gap-1.5">
      {skills.map((skill) => (
        <Badge
          key={skill}
          variant="outline"
          className="border-foreground/25 text-xs rounded-none font-normal text-foreground/90"
        >
          {skill}
        </Badge>
      ))}
    </div>
  )
}

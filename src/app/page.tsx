import { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import ProjectCard from "@/components/project-card";
import Footer from "@/components/footer";
import { projects } from "@/lib/data";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist-mono",
});

export default function Page() {
  return (
    <main
      className={`${geistMono.className} min-h-dvh bg-background text-foreground`}
    >
      <Navbar />
      <section className="mx-auto w-full max-w-3xl px-4 pt-20 md:pt-24">
        <Hero />
      </section>

      <section
        id="skills"
        className="mx-auto w-full max-w-3xl px-4 py-8 md:py-10"
      >
        <h2 className="text-lg font-semibold tracking-tight text-foreground">
          ⚡ skills
        </h2>
        <div className="mt-4">
          <Skills />
        </div>
      </section>

      <Separator className="opacity-30" />

      <section
        id="projects"
        className="mx-auto w-full max-w-3xl px-4 py-8 md:py-10"
      >
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-foreground">
              🚀 projects
            </h2>
          </div>
        </div>

        <div className="mt-4 grid gap-4">
          <Suspense
            fallback={
              <div className="text-sm text-foreground/70">
                Loading projects…
              </div>
            }
          >
            {projects.map((p) => (
              <ProjectCard key={p.slug} {...p} />
            ))}
          </Suspense>
        </div>
      </section>

      <Separator className="opacity-30" />

      <section
        id="contact"
        className="mx-auto w-full max-w-3xl px-4 py-10 md:py-12"
      >
        <h2 className="text-lg font-semibold tracking-tight text-foreground">
          💬 Let's work together
        </h2>
        <p className="mt-1 text-sm text-foreground/70">
          Available for iOS development roles.
        </p>
        <div className="mt-4">
          <Footer />
        </div>
      </section>
    </main>
  );
}

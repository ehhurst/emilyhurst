import Image from "next/image";
import {projects, Project}  from "@/lib/projects";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProjectCard from "@/components/projects/ProjectCard";
const featuredProjects: Project[] = projects.slice(0, 3);

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* <div>
              {projects.map((project: Project) => (
                <div key={project.name} className="max-w-md mb-6">
                   <ProjectCard
          key={project.name}
          title={project.title}
          description={project.description}
          tags={project.tags}
          image={project.image}
          projectLink={project.href || ""}
          repoLink={project.repo || ""}
        /> </div>
              ))}
      </div> */}

      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        /> */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <section className="relative mt-14 sm:mt-18">
                <div className="flex items-end justify-between gap-4">
        <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Featured projects
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              A mix of healthcare-adjacent software, product design, and
              end-to-end builds.
            </p>
          </div>

          <Button asChild variant="ghost" className="rounded-full">
            <Link href="/projects">See all →</Link>
          </Button>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.name} project={p}  />
          ))}
        </div>
        </section>
      </main>
    </div>
  );
}

import Image from "next/image";
import {projects}  from "@/lib/projects";

// Project types
import { Project } from "@/lib/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FeaturedProjectCard from "@/components/ui/featured-project-card";
import { Separator } from "@/components/ui/separator";
const featuredProjects: Project[] = projects.slice(0, 3);

export default function Home() {
  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">

      <main className="flex min-h-screen min-w-screen max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* Intro/Headshot section */}
        <div className="flex flex-row justify-between gap-6 text-center sm:items-start sm:text-left">
          <div>
            <h1 className="max-w-1/2 text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome to my portfolio! I'm Emily, a software developer passionate about creating impactful digital experiences.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Explore my projects below to see how I blend creativity and technology to solve real-world problems. From web applications to innovative designs, each project reflects my dedication to excellence and continuous learning in the ever-evolving tech landscape.
          </p>
          </div>
          <Image
            className="rounded-full border border-black/10 bg-zinc-100 object-cover justify-end"
            src="/images/headshot.jpg"
            alt="Emily Hurst headshot"
            width={250}
            height={250}
            priority
          />

        </div>
        <div className="mt-8 flex gap-4 flex-wrap">
          <Button asChild variant="default" className="rounded-full">
            <Link href="/about">Learn More About Me</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/projects">Projects</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/resume.pdf" target="_blank" rel="noreferrer">Resume</Link>
          </Button>          
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/contact">Contact me</Link>
          </Button>
        </div>
          <Separator className="my-8" />


        {/* Featured projects container */}
        <section className="relative mt-14 sm:mt-18">
          <Separator className="my-8" />
          <div className="gap-4">

              <h2 className="text-2xl font-semibold tracking-tight">
                Featured projects
              </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3 align-items-center">
          {featuredProjects.map((p) => (
            <FeaturedProjectCard key={p.name} project={p}  />
          ))}
        </div>          
        <Button asChild variant="ghost" className="rounded-full">
            <Link href="/projects">See all →</Link>
          </Button>
          </div>
        </section>
        <Separator className="my-8" />
      </main>
    </div>
  );
}

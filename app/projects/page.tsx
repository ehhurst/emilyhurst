import {projects} from "@/lib/projects";
import {Project} from "@/lib/types";
import ProjectCard from "@/components/projects/ProjectCard";
import Link from "next/link";

export default function ProjectsPage() {
    return (
        <div>
            {projects.map((project: Project) => (
                <div key={project.name} className="max-w-md mb-6">
                    <Link href={`/project/${project.name}`}>
                       <ProjectCard project={{
                            name: project.name,
                            title: project.title,
                            description: project.description,
                            image: project.image,
                            tags: project.tags,
                            languages: project.languages,
                            technologies: project.technologies,
                            featured: project.featured || false,
                            href: project.href || undefined,
                            repo: project.repo || undefined
                        }}/>
                    </Link>
                </div>
                  ))}
          </div>
        );
}

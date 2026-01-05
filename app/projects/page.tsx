import {Project, projects} from "@/lib/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import Link from "next/link";

export default function ProjectsPage() {
    return (
    <div>
                  {projects.map((project: Project) => (
                    <div key={project.name} className="max-w-md mb-6">
                        <Link href={`/project/${project.name}`}>
                       <ProjectCard
              key={project.name}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              projectLink={project.href || ""}
              repoLink={project.repo || ""}
            /> </Link></div>
                  ))}
          </div>
        );
}

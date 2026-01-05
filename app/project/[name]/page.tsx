import {projects}  from "@/lib/projects";
import {Project} from "@/lib/types";

export default function ProjectPage({params}: {params: {[key: string]: string}}) {
    const project = projects.find((project: Project) => project.name === params.name);
    return (
        <h1>
            {project?.name}
        </h1>
        );
}
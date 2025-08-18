import ProjectCard from "./ProjectCard";

export default function ProjectsPage() {
    return (
        <div className="bg-slate-800 min-h-screen w-full mt-10">
            <h1 className="text-white text-5xl font-bold p-6">My Projects</h1>
            <ProjectCard/>
        </div>

    );
}
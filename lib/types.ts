export type ProjectTag = "Healthcare" | "Full-Stack" | "Design" | "Data Analytics" | "Web Development";

export type TechnologiesTag = "React" | "TypeScript" | "Node.js" | "Python" | "Django" | "GraphQL" | "Docker" | "AWS" | "Flask" | "SQLite";

export type LanguagesTag = "JavaScript" | "TypeScript" | "Python" | "Java" | "C++" | "Ruby" | "Go" | "PHP" | "SQL"  | "HTML" | "CSS";

export type Project = {
    name: string;
    title: string;
    description: string;
    image: string
    tags: ProjectTag[];
    languages: LanguagesTag[];
    technologies: TechnologiesTag[];
    featured?: boolean;
    href?: string;
    repo?: string;
};
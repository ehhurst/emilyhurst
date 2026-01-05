export type ProjectTag = "Healthcare" | "Full-Stack" | "Design" | "Data Analytics" | "Web Development";

export type TechnologiesTag = "React" | "TypeScript" | "Node.js" | "Python" | "Django" | "GraphQL" | "Docker" | "AWS" | "Flask" | "SQLite";

export type Project = {
    name: string;
    title: string;
    description: string;
    tags: ProjectTag[];
    technologies: TechnologiesTag[];
    href?: string;
    repo?: string;
};

export const projects: Project[] = [
    {
        name: "mcat-app",
        title: "MCAT Preparation App",
        description: "A comprehensive app to help students prepare for the MCAT exam with practice questions and study resources.",
        tags: ["Healthcare", "Full-Stack"],
        technologies: ["React", "TypeScript", "Node.js", "AWS"],
        href: "https://mcatapp.example.com",
        repo: "https://github.com/ehhurst/mcat-app",
    },
    {
        name: "veterans-at-vt",
        title: "Veterans at VT Website",
        description: "A website dedicated to supporting veterans at Virginia Tech with resources, events, and community connections.",
        tags: ["Web Development", "Design"],
        technologies: ["React", "TypeScript", "GraphQL"],
        href: "https://veterans.vt.edu",
        repo: "https://github.com/ehhurst/vets-at-vt"
    },
    {
        name: "shelf-life",
        title: "ShelfLife: A Social Platform for Book Lovers",
        description: "A social platform for book lovers to share reviews, discover new books, and connect with others who share their passion.",
        tags: ["Full-Stack", "Design"],
        technologies: ["React", "TypeScript", "Python","Flask", "SQLite"],
        href: "34.238.53.95:5173/",
        repo: "https://github.com/ehhurst/social-books"
    }
];
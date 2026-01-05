import { Project } from "@/lib/types";

export const projects: Project[] = [
    {
        name: "mcat-app",
        title: "MCAT Preparation App",
        description: "A comprehensive app to help students prepare for the MCAT exam with practice questions and study resources.",
        image: "/images/mcat-app.png",
        tags: ["Healthcare", "Full-Stack"],
        languages: ["TypeScript"],
        technologies: ["React", "TypeScript", "Node.js", "AWS"],
        featured: true,
        href: "https://mcatapp.example.com",
        repo: "https://github.com/ehhurst/mcat-app",
    },
    {
        name: "veterans-at-vt",
        title: "Veterans at VT Website",
        description: "A website dedicated to supporting veterans at Virginia Tech with resources, events, and community connections.",
        image: "/images/veterans-at-vt.png",
        tags: ["Web Development", "Design"],
        languages: ["JavaScript", "TypeScript"],
        technologies: ["React", "TypeScript", "GraphQL"],
        featured: true,
        href: "https://veterans.vt.edu",
        repo: "https://github.com/ehhurst/vets-at-vt"
    },
    {
        name: "shelf-life",
        title: "ShelfLife: A Social Platform for Book Lovers",
        description: "A social platform for book lovers to share reviews, discover new books, and connect with others who share their passion.",
        image: "/images/shelf-life.png",
        tags: ["Full-Stack", "Design"],
        languages: ["TypeScript", "Python", "SQL"],
        technologies: ["React", "TypeScript", "Python","Flask", "SQLite"],
        featured: true,
        href: "34.238.53.95:5173/",
        repo: "https://github.com/ehhurst/social-books"
    }
];
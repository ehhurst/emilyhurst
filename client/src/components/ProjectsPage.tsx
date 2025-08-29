import ProjectCard from "./ProjectCard";

export default function ProjectsPage() {
    return (
        <div className="bg-slate-800 min-h-screen w-full mt-10">
            <h1 className="text-white text-4xl font-bold p-6">My Projects</h1>
            <div className="flex flex-wrap justify-center">
                <ProjectCard 
                title="ShelfLife" 
                description="Social-media platform for readers designed to foster connection and community." 
                thumbnail={"./assets/images/shelflife.jpeg"}
                projectUrl="http://34.238.53.95:5173/"
                techStackList={["React + TypeScript", "Flask", "SQLite", "OpenLibraryAPI"]} 
                listUrls={["https://react.dev/", "https://flask.palletsprojects.com/en/stable/", "https://sqlite.org/", "https://openlibrary.org/developers/api"]} 
                />
            
            <ProjectCard
                title="FishLyst"
                description="Connects fishermen with local pond owners for unique, private fishing experiences. Work in progress, landing page is "
                thumbnail={"./assets/images/fishlyst.jpeg"}
                projectUrl="https://www.fishlyst.com/"
                techStackList={["React + TypeScript", "Node.js + Express", "PostgreSQL", "Google Maps API"]}
                listUrls={["https://react.dev/", "https://nodejs.org/en/about/", "https://www.postgresql.org/", "https://developers.google.com/maps/documentation"]}
            />

            <ProjectCard
                title="NHANES Analysis Dashboard"
                description="Explores risk factors for cardiovascular disease using the National Health and Nutrition Examination Survey (NHANES) dataset."
                thumbnail={"./assets/images/fishlyst.jpeg"}
                projectUrl="https://www.fishlyst.com/"
                techStackList={["Python", "Dash", "Plotly", "Google Cloud"]}
                listUrls={["https://react.dev/", "https://nodejs.org/en/about/", "https://www.postgresql.org/", "https://developers.google.com/maps/documentation"]}
            />
            </div>
            
        </div>

    );
}
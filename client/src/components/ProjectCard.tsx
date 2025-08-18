import shelfLife from "../assets/images/shelflife.jpeg";
export default function ProjectCard() {
    return (
        <div className="max-w-lg m-10 rounded-lg overflow-hidden shadow-lg bg-indigo-400 border-3 border-indigo-400">
            <a href='http://34.238.53.95:5173/'>
                <img src={shelfLife}
                alt="Project Thumbnail"
                className="w-full"
                />
                <div className="p-3">
                    <h1 className="font-bold text-3xl">ShelfLife</h1>
                <p className="text-gray-100 text-xl">Social-media platform for readers designed to foster connection and community.</p>
                <div className="align-items-center mt-2">
                    <a href="https://react.dev/" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2">React + TypeScript</a>
                    <a href="https://flask.palletsprojects.com/en/stable/" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2">Flask</a>
                    <a href="https://sqlite.org/" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2">SQLite</a>
                    <a href="https://openlibrary.org/developers/api" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2">OpenLibraryAPI</a>
                </div>

                </div>
                
            </a>
        </div>
    );
}
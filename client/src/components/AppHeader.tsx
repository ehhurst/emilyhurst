

export default function AppHeader() {
    return (
        <header className="bg-teal-500 text-white text-xl font-semibold text-shadow-xs p-6 flex justify-between items-center shadow-lg">
            <div className="flex space-x-4 items-center">
                <div className="text-white text-2xl font-bold border-3 p-2 rounded-lg">
                    <h1>EH</h1>
                </div>
                <nav>
                <ul className="flex space-x-4 items-start">
                    <li><a href="/">Projects</a></li>
                    <li><a href="/cv">CV</a></li>
                    <li><a href="/experience">Experience</a></li>
                    <li><a href="/extras">Extras</a></li>
                </ul>
            </nav>
            </div>

            <button type="button" className="border-3 border-solid p-3 rounded-lg transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 cursor-pointer">Contact Me</button>
        </header>
    );
}
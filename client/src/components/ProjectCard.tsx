
export default function ProjectCard({title, description, thumbnail, projectUrl, techStackList, listUrls}: {title: string, description: string, thumbnail: string, projectUrl: string, techStackList: string[], listUrls: string[]}) {
    return (
        <div className="max-w-lg m-10 rounded-lg overflow-hidden shadow-lg bg-indigo-400 border-3 border-indigo-400">
            <a href={projectUrl}>
                <img 
                    src={thumbnail}
                    alt="Project Thumbnail"
                    className="w-full"
                />
            </a>
            <div className="p-3">

                <a href={projectUrl}>
                    <h1 className="font-bold text-3xl">{title}</h1>
                    <p className="text-gray-100 text-xl">{description}</p>
                </a>

                <div className="align-items-center mt-2">
                    {techStackList.map((item, index) => (
                        <a key={index} href={listUrls[index]} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2">{item}</a>
                    ))}
                </div>

            </div>
                
            
        </div>
    );
}
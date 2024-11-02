import "../index.css";

export default function Projects() {
    const projects = [
        {
            title: "Darshan University Landing Page",
            description: "A Landing Page to showcase my UI/UX skill.",
            image: "https://admission.darshan.ac.in/Default/ClientPanel/media/DU_Campus_AboutUs.jpg",
            previewLink: "https://symphonious-paprenjak-6085d7.netlify.app",
            codeLink: "https://github.com/yashpatoliya14/frontend-projects/tree/main/landing%20page/Darshan%20University",
        },
        {
            title: "URL Shortener",
            description: "A custom URL shortening tool for creating easy-to-share links.",
            image: "https://files.oaiusercontent.com/file-hgMpFic3T0yktNpRmvxaqPuI?se=2024-11-02T18%3A28%3A36Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D3ae906b9-73d1-4aea-86d7-9ad02da352af.webp&sig=LzFcWtRcFl94csumutkIi1fIjzWuK6wFJqFT69sHrS8%3D",
            previewLink: "https://url-shortner-554w.vercel.app/",
            codeLink: "https://github.com/yashpatoliya14/url-shortner",
        },
        {
            title: "Currency Convertor",
            description: "A **Currency Converter** instantly converts amounts between currencies using real-time exchange rates.",
            image: "https://files.oaiusercontent.com/file-WhlsaZpWEOiVQBAfQhe23BaL?se=2024-11-02T18%3A34%3A57Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Da22868e8-4137-42bb-9cae-ba034e7085e9.webp&sig=/2afDTrQee2tMT/YUS2uwxgVFRhxXNI3wyduVS9NjOc%3D",
            previewLink: "https://beamish-khapse-166a88.netlify.app/",
            codeLink: "https://github.com/yashpatoliya14/frontend-projects/tree/main/currency_convertor",
        },
    ];

    return (
        <div id="projects" className="py-16 px-6 lg:px-24 bg-gray-100">
            <h2 className="text-4xl font-bold text-center text-red-500 mb-12">Projects</h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="relative overflow-hidden rounded-lg shadow-lg bg-white transition transform hover:scale-105 hover:shadow-2xl group"
                    >
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-64 object-cover transition transform group-hover:scale-110"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-red-500">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 mt-2">{project.description}</p>
                        </div>
                        
                        {/* Hover overlay with Preview and Code buttons */}
                        <div className="absolute inset-0 bg-red-500 bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-80 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100">
                            <p className="text-lg font-medium mb-4">View Project</p>
                            <div className="flex space-x-4">
                                <a 
                                    href={project.previewLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="px-4 py-2 bg-white text-red-500 font-semibold rounded-full shadow-md hover:bg-gray-100 transition duration-300"
                                >
                                    Preview
                                </a>
                                <a 
                                    href={project.codeLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="px-4 py-2 bg-white text-red-500 font-semibold rounded-full shadow-md hover:bg-gray-100 transition duration-300"
                                >
                                    Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

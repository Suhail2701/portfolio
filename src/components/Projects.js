import { forwardRef } from "react";
import { Code } from "lucide-react";
import useScroll from "../hooks/useScroll";
import { Link } from "react-router-dom";
import useProjects from "../hooks/useProjects";

const Projects = forwardRef((props, ref) => {

    const { isVisible, elementRef } = useScroll();

    const projects = useProjects();

    return (
        <div ref={ref}  className="min-h-screen">
            <div ref={elementRef}  className="min-h-screen bg-dark-blue-gradient3 flex flex-col xl:gap-20 xl:pb-14 xl:pt-28 gap-10 justify-center items-center pb-10 pt-20">
                <div className={`flex justify-center items-end text-3xl font-bold opacity-0 ${isVisible ? "drop-down delay-1" : "opacity-0"}`}>
                    <Code size={35} color="white" />
                    <div className='px-3 text-white'>My</div>
                    <span className='text-yellow-500'> Projects</span>
                </div>
                <div className="flex flex-wrap gap-6 justify-center w-10/12">
                    {projects.slice(0, 5)?.map((project, index) => (
                        <div
                            key={index}
                            className={`relative w-[420px] h-72 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 opacity-0 ${isVisible ? `drop-down delay-${index + 2}` : "opacity-0"}`}
                        >
                            <h1 className="text-black absolute bg-yellow-400 w-full py-1 px-3 text-2xl font-bold ">{project.name}</h1>
                            <img
                                src={`/project_imgs/project${index + 1}.png`}
                                alt={project.name}
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-black bg-opacity-85 flex flex-col justify-center items-center text-center opacity-0 hover:opacity-100 transition-opacity duration-300 px-3 py-2">
                                <h3 className="text-xl text-white mb-4">{project.name}</h3>
                                <p className="text-sm text-white mb-6">{project.desc}</p>
                                <div className="flex gap-4">
                                    <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors">
                                        View
                                    </button>
                                    <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors">
                                        Code
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <button className={`bg-yellow-500 text-white   hover:bg-yellow-600 transition-colors h-12 py-2 px-4 xl:mt-20 xl:ml-20 m-0 text-xl font-semibold opacity-0  ${isVisible ? `drop-down delay-7` : "opacity-0"}`}>
                        <Link to="/allProjects">View All </Link>
                    </button>
                </div>
            </div>
        </div>
    );
});

export default Projects;

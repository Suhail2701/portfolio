import { useState, useEffect } from "react";
import { Code } from "lucide-react";
import useScroll from "../hooks/useScroll";
import { Link } from "react-router-dom";
import Footer from "./Footer";


const AllProjects = () => {

    const [projects, setProjects] = useState([]);
    const [filteredData, setFilteredData] = useState();
    const { isVisible, elementRef } = useScroll();

    const handleProjectData = async () => {
        const data = await fetch("/projects.json");
        const json = await data.json();
        if (json) {
            setProjects(json);
            setFilteredData(json);
        }
    };

    const handleAllProjects = () => {
        setFilteredData(projects);
    }

    const handleReactProjects = () => {
        let dataFilter = projects?.filter((project) => (project?.category === 'react'));
        setFilteredData(dataFilter);
    }

    const handleJSProjects = () => {
        let dataFilter = projects?.filter((project) => (project?.category !== 'react'));
        setFilteredData(dataFilter);
    }

    useEffect(() => {
        handleProjectData();
    }, []);


    return (
        <div ref={elementRef} className="min-h-screen bg-dark-blue-gradient3 py-8">
            <div className={`flex justify-center items-end text-3xl font-bold opacity-0 ${isVisible ? "drop-down delay-1" : "opacity-0"}`}>
                <Code size={35} color="white" />
                <div className='px-3 text-white'>My</div>
                <span className='text-yellow-500'> Projects</span>
            </div>
            <div className="flex flex-wrap justify-between items-center mx-auto pt-14 xs:justify-center xs:items-center xs:w-11/12 sm:w-11/12 lg:w-11/12 xl:w-6/12 xs:gap-2">
                <buttons className="border border-r-2 flex items-center cursor-pointer text-white   hover:text-blue-950 hover:bg-white transition-colors h-12 py-2 px-4   text-xl font-semibold xs:text-sm xs:h-8  "
                    onClick={() => handleAllProjects()}
                >All projects</buttons>
                <buttons className="border border-r-2 flex items-center cursor-pointer  text-white hover:text-blue-950 hover:bg-white transition-colors h-12 py-2 px-4  text-xl font-semibold xs:text-sm xs:h-8"
                    onClick={() => handleReactProjects()}
                >React</buttons>
                <buttons className="border border-r-2 flex items-center cursor-pointer  text-white hover:text-blue-950 hover:bg-white transition-colors h-12 py-2 px-4  text-xl font-semibold xs:text-sm xs:h-8"
                    onClick={() => handleJSProjects()}
                >JavaScript</buttons>
                <button className={`border border-r-2 flex items-center cursor-pointer  text-white hover:text-blue-950 hover:bg-white transition-colors h-12 py-2 px-4  text-xl font-semibold xs:text-sm xs:h-8 `}>
                    <Link to="/">Home</Link>
                </button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center w-10/12 mx-auto pt-14">
                {filteredData?.map((project, index) => (
                    <div
                        key={index}
                        className={`relative w-[420px] h-72 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 opacity-0 ${isVisible ? `drop-down delay-${index + 2}` : "opacity-0"}`}
                    >
                        <h1 className="text-black absolute bg-yellow-400 w-full py-1 px-3 text-2xl font-bold ">{project.name}</h1>
                        <img
                            src={`/project_imgs/${project?.image}.png`}
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
            <div className="flex justify-center pt-10">
                <button className={`border border-r-2 flex items-center cursor-pointer text-white   hover:text-blue-950 hover:bg-white transition-colors h-12 py-2 px-4   text-xl font-semibold xs:text-sm xs:h-8 `}>
                    <Link to="/">Back to Home </Link>
                </button>
            </div>
            <Footer />
        </div>
    );
}

export default AllProjects;
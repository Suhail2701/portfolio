import { useState, useEffect } from "react";

const useProjects = ()=>{

    const [projects, setProjects] = useState([]);

    const handleProjectData = async () => {
        const data = await fetch("/projects.json");
        const json = await data.json();
        if (json) {
            setProjects(json);
        }
    };

    useEffect(() => {
        handleProjectData();
    }, []);

    return projects;
}

export default useProjects;
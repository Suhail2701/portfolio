import { useEffect, useState } from "react";


const useSkill = () => {

    const [skillData, setSkillData] = useState();

    const fetchSkill = async () => {
        const data = await fetch('/skills.json');
        const json = await data.json();

        if (json) {
            setSkillData(json);
        }
    };

    useEffect(() => {
        fetchSkill();
    }, []);

    return skillData;
}


export default useSkill;
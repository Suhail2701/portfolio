import { Briefcase } from "lucide-react";
import React, { forwardRef } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import 'react-vertical-timeline-component/style.min.css';
import useScroll from "../hooks/useScroll";



const experiences = [
    {
        id: "1",
        company: "TCS",
        role: "React.js Developer",
        duration: "Jun 2023 - Present",
    },
    {
        id: "2",
        company: "Mitra Softwares",
        role: "Web Developer | Internship",
        duration: "June 2021 - Dec 2021",
    },
    // Add more experiences as needed
];

const ExperienceTimeline = forwardRef((props, ref) => {


    const { isVisible, elementRef } = useScroll();
    let workIconStyles = { backgroundColor: "#ffc40c", color: "#fff" };

    return (

        <div ref={ref}>
            <div ref={elementRef} className=" flex flex-col justify-center items-center bg-gray-300 gap-10 pt-12 ">

                <div  className={`flex justify-center items-end text-3xl font-bold ${isVisible ? "drop-down delay-1" : "opacity-0"} pt-10`}>
                    <Briefcase size={35} color="purple" />
                    <div className='px-3 text-Black'>My</div>
                    <span className='text-purple-700'> Experience</span>
                </div>
                <VerticalTimeline >
                    {
                        experiences.map((experience, index) => {

                            return (
                                <VerticalTimelineElement
                                    key={experience?.id}
                                    date={experience?.duration}
                                    iconStyle={workIconStyles}
                                    icon={<Briefcase size={20} color="black" />}
                                    className={`${isVisible ? `drop-down delay-${index + 1}` : "opacity-0"} opacity-0 `}
                                >
                                    <div className={`bg-teal-500 text-white p-4 rounded-lg shadow-lg`}>
                                        <h3 className="text-lg font-bold mb-2">{experience.role}</h3>
                                        <p>{experience.company}</p>
                                    </div>
                                </VerticalTimelineElement>
                            )
                        })
                    }
                </VerticalTimeline>
            </div>
        </div>

    );
});

export default ExperienceTimeline;

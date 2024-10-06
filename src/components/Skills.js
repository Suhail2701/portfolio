import { forwardRef } from 'react';
import { Code } from 'lucide-react';
import useScroll from '../hooks/useScroll';
import '../index.css';
import useSkill from '../hooks/useSkill';

const Skills = forwardRef((props, ref) => {

    const { isVisible, elementRef } = useScroll();

    const skillData = useSkill();

    return (
        <div ref={ref} className='min-h-screen bg-purple-gradient '>
            <div ref={elementRef} className='flex flex-col justify-center items-center gap-32 xs:gap-14 pb-9 pt-24'>
                {/* Heading with fadeInDown animation */}
                <div className={`flex items-center justify-center opacity-0 font-bold text-3xl ${isVisible ? "drop-down delay-1" : "opacity-0"}`}>
                    <Code size={35} color="white" />
                    <div className='px-3'>Skills &</div>
                    <span className='text-yellow-500'> Abilities</span>
                </div>

                {/* Skill icons with dropDown animation, delayed after heading */}
                <div className={`flex flex-wrap w-[1500px] mx-auto gap-3 justify-center items-center p-3 xs:p-1 xs:py-2  rounded-lg bg-dark-blue-gradient shadow-2xl xs:w-11/12 sm:w-[344px] md:w-11/12 xl:w-[1500px] `}>
                    {
                        skillData?.map((skill, index) => {
                            const delayValue = (index + 1) % 20; // Dynamic delay calculation
                            // const delayValue = (index + 1); // Dynamic delay calculation
                            // const delayValue = (index % 15) + 1; // To ensure we don't go beyond the 15 defined delays
                            // console.log(`Applying class: drop-down delay-${delayValue} to skill: ${skill?.name}`);

                            return (
                                <div key={skill?.name} className={`border border-solid border-black w-[200px] h-[130px] xs:w-[150px] xs:h-[120px]  flex flex-col items-center justify-center rounded-lg bg-dark-blue-gradient2 text-white text-xl font-semibold shadow-lg cursor-pointer pt-4 hover:shadow-2xl opacity-0
                                ${isVisible ? `drop-down delay-${delayValue}` : "opacity-0"}
                            `}>
                                    <img src={skill?.icon} className='w-[50px] h-[50px]' />
                                    <p className='py-4 xs:text-sm xl:text-xl'>{skill?.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
});

export default Skills;


import { GraduationCap } from "lucide-react";
import JNNCE from "../images/jnnce.jpg";
import PES from "../images/pes_puc_cl.jpg";
import SKN from "../images/skn.jpg";
import useScroll from "../hooks/useScroll";
import { forwardRef } from "react";

const Education = forwardRef((props, ref) => {

    const { isVisible, elementRef } = useScroll();

    return (
        <div ref={ref} className="min-h-screen">
            <div ref={elementRef} className=" bg-blue-100 flex flex-col items-center justify-center  gap-10 xs:pb-6 xs:pt-20 min-h-screen pt-20 pb-14">
                <div className={`text-3xl font-bold flex justify-center items-center py-3 opacity-0 ${isVisible ? "drop-down delay-1" : "opacity-0"}`}>
                    <GraduationCap size={40} color="black" />
                    <span className="pl-2">My</span>
                    <span className="text-purple-800 px-2">Education</span>
                </div>
                <div className="xl:w-7/12 w-11/12 mx-auto   rounded-lg  flex flex-col gap-4">
                    <div className={`flex xs:flex-col  gap-10 xs:gap-0 bg-white rounded-lg shadow-2xl opacity-0 ${isVisible ? "drop-down delay-2" : "opacity-0"}`}>
                        <div className="xl:w-5/12 w-full flex flex-col  justify-center items-stretch    ">
                            <img src={JNNCE} alt="JNNCE" className="h-[200px] rounded-lg w-full " />
                        </div>
                        <div className=" w-full p-3 flex flex-col gap-3 xs:text-center xl:text-left ">
                            <p className="xl:text-3xl text-xl font-bold text-blue-900">BE in Electronics and Communication Engineering</p>
                            <p className="xl:text-xl text-lg">Jawaharlal Nehru New College of Engineering</p>
                            <p className="xl:text-xl text-sm">CGPA: 8.5</p>
                            <p className="xl:text-lg text-sm">2019-2023</p>
                        </div>
                    </div>
                    <div className={`flex xs:flex-col gap-10 xs:gap-0 bg-white rounded-lg shadow-2xl opacity-0 ${isVisible ? "drop-down delay-3" : "opacity-0"} `}>
                        <div className="xl:w-5/12 w-full">
                            <img src={PES} alt="JNNCE" className="h-[200px] rounded-lg w-full " />
                        </div>
                        <div className=" w-full p-3 flex flex-col gap-3  xs:text-center xl:text-left justify-center">
                            <p className="xl:text-3xl text-xl font-bold text-blue-900">PCMCs in Science</p>
                            <p className="xl:text-xl text-lg">PES Pre-University College</p>
                            <p className="xl:text-xl  text-sm">Percentage: 85%</p>
                            <p className="xl:text-lg text-sm">2017-2019</p>
                        </div>
                    </div>
                    <div className={`flex xs:flex-col gap-10 xs:gap-0 bg-white rounded-lg shadow-2xl opacity-0 ${isVisible ? "drop-down delay-4" : "opacity-0"}`}>
                        <div className="xl:w-5/12 w-full ">
                            <img src={SKN} alt="JNNCE" className="h-[200px] rounded-lg w-full" />
                        </div>
                        <div className=" w-full p-3 flex flex-col gap-3 xs:text-center">
                            <p className="xl:text-3xl text-xl font-bold text-blue-900">SSLC (Secondary School Leaving Certificate)</p>
                            <p className="xl:text-xl text-lg">SKN English High School</p>
                            <p className="xl:text-xl text-sm">Percentage: 93%</p>
                            <p className="xl:text-lg text-sm">2014-2017</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
});


export default Education;
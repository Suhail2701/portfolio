import React from 'react';

const MovingBlocks = () => {
  const technologiesRow1 = [
    "ReactJS", "Redux", "Firebase", "TailwindCSS", "Bootstrap", "HTML5",
    "CSS3", "JavaScript", "Java", "C++", "MySQL", "Git VCS", "GitHub", "Linux", "Vercel", "Parcel",
    "WebPack", "ReactJS", "Redux", "Firebase", "TailwindCSS", "Bootstrap", "HTML5"
  ];

  const technologiesRow2 = [
    "ReactJS", "Redux", "Firebase", "TailwindCSS", "Bootstrap", "HTML5",
    "CSS3", "JavaScript", "Java", "C++", "MySQL", "Git VCS", "GitHub", "Linux", "Vercel", "Parcel",
    "WebPack", "ReactJS", "Redux", "Firebase", "TailwindCSS", "Bootstrap", "HTML5"
  ];

  const technologiesRow3 = [
    "C++", "MySQL", "Git VCS", "GitHub", "Linux", "Vercel", "Parcel",
    "WebPack", "ReactJS", "Redux", "Firebase", "TailwindCSS", "Bootstrap", "HTML5", "ReactJS", "Redux", "Firebase", "TailwindCSS", "Bootstrap", "HTML5",
    "CSS3", "JavaScript", "Java",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gray-100 p-4">

      {/* Container to hold rows */}
      <div className="relative flex flex-col space-y-4">
        {/* First Row (Right to Left) */}
        <div className="relative overflow-hidden">
          <div className="whitespace-nowrap flex  animate-scrollRightToLeft">
            <div className="flex">
              {technologiesRow1.concat(technologiesRow1).map((tech, index) => (
                <div key={index} className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md mx-4">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row (Left to Right) */}
        <div className="relative overflow-hidden">
          <div className="whitespace-nowrap flex animate-scrollLeftToRight mt-2">
            <div className="flex">
              {technologiesRow2.concat(technologiesRow2).map((tech, index) => (
                <div key={index} className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md mx-4">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Third Row (Right to Left) */}
        <div className="relative overflow-hidden">
          <div className="whitespace-nowrap flex animate-scrollRightToLeft mt-2">
            <div className="flex">
              {technologiesRow3.concat(technologiesRow3).map((tech, index) => (
                <div key={index} className="bg-gray-800 text-gray-200 px-4 py-2 rounded-lg shadow-md mx-4">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blurry Vanishing Effect */}
      <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-r  via-transparent to-gray-100 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-r from-gray-100 via-transparent to-gray-100 pointer-events-none" />
    </div>
  );
};

export default MovingBlocks;

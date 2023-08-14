import React from "react";

const skillsContent = [
  { skillClass: "p100", skillPercent: "90", skillName: "HTML" },
  { skillClass: "p100", skillPercent: "90", skillName: "JS" },
  { skillClass: "p100", skillPercent: "90", skillName: "CSS" },
  { skillClass: "p100", skillPercent: "100", skillName: "PHP" },
  { skillClass: "p100", skillPercent: "100", skillName: "WP" },
  { skillClass: "p100", skillPercent: "90", skillName: "JQUERY" },
  { skillClass: "p100", skillPercent: "90", skillName: "VUE" },
  { skillClass: "p100", skillPercent: "70", skillName: "REACT" },
  { skillClass: "p100", skillPercent: "70", skillName: "GO" },
  { skillClass: "p100", skillPercent: "70", skillName: "Python" },
  { skillClass: "p100", skillPercent: "70", skillName: "MySql" },
  { skillClass: "p100", skillPercent: "70", skillName: "Flutter" },

  { skillClass: "p100", skillPercent: "70", skillName: "Kotlin" },
  { skillClass: "p100", skillPercent: "70", skillName: "Java" },
  { skillClass: "p100", skillPercent: "70", skillName: "Swift" },
  { skillClass: "p100", skillPercent: "70", skillName: "Git" },
  { skillClass: "p100", skillPercent: "70", skillName: "Docker" },
  { skillClass: "p100", skillPercent: "70", skillName: "Linux" },
  { skillClass: "p100", skillPercent: "70", skillName: "Bash" },

  { skillClass: "p100", skillPercent: "70", skillName: "Scrum" },






  // { skillClass: "p45", skillPercent: "70", skillName: "REACT" },

];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            {/* <span>{val.skillPercent}%</span> */}
            <span className="font-size-sm">{val.skillName}</span>

            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          {/* <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6> */}
        </div>
      ))}
    </>
  );
};

export default Skills;

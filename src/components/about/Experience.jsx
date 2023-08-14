import React from "react";

const experienceContent = [
  {
    year: "   2022 - Actualidad",
    position: " Teach Lead",
    compnayName: "Talentpitch",
    details: `  Lidero el equipo de desarrollo de software, empoderamiento tecnologico de tecnologias y producto.
    Ademas de del desarrollo de funciones a bajo nivel y arquitectura de software.`,
  },
  {
    year: "2022 - Actualidad",
    position: " Senior Developer Fullstack",
    compnayName: "Talentpitch",
    details: `
    Desarrollo y mantenimiento de funiones a bajo nivel y arquitectura de software. Lenguajes, tecnologías y frameworks utilizados: Laravel, Vue, react, Golang, Mysql, Docker, kubernetes, Flutter, kotlin, swift, nodejs, redis, aws, firebase, etc.
    `,
  },
  {
    year: "2021 - 2022",
    position: "Fullstack Developer",
    compnayName: "Pitsy Taxi",
    details: `
    Desarrollo integral de applicacion para servicios de transporte. Lenguajes, tecnologías y frameworks utilizados: Laravel, Vue, react, Mysql, Flutter, nodejs, redis, aws, firebase, etc.
    
    `,
  },
  
  
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;

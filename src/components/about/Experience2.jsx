import React from "react";

const experienceContent = [

  {
    year: "2021 - 2022",
    position: "Fullstack Developer",
    compnayName: "Sistema de administracion de competencias de baile",
    details: `
    Desarrollo integral de aplicacion para administracion de competencias de baile. 
    Lenguajes, tecnologías y frameworks utilizados: Django, jQuery, Mysql, socket io, aws, firebase, etc.
    
    `,
  },
  {
    year: "2020 - 2022",
    position: "Consultor y Desarrollador de Software",
    compnayName: "Inclup SAS",
    details: `
    Desarrollo vertical de aplicaciones web y moviles asi como Plugins y paginas webs wordpress.
    Lenguajes, tecnologías y frameworks utilizados: Laravel, Vue, react, Mysql, Flutter, nodejs, redis, aws, firebase, php, python, javascript, Kotlin, swift, etc.
    `,
  },
   {
    year: "2019 - 2020",
    position: "Developer Fullstack",
    compnayName: "VECTOR 3, ADN TECHNOLOGY, MUDATODO",
    details: `
    Desarrollo integral de aplicaciones web y moviles.
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

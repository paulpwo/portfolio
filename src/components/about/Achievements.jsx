import React from "react";

const achievementsContent = [
  { title: "10", subTitle1: "años de", subTitle2: "experiencia" },
  { title: "50", subTitle1: "proyectos", subTitle2: "trabajados" },
  { title: "50", subTitle1: "Clientes", subTitle2: "satisfechos" },
  { title: "20", subTitle1: "cursos", subTitle2: "realizados" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;

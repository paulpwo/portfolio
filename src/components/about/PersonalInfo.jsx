import React from "react";

const personalInfoContent = [
  { meta: "Nombre", metaInfo: "Paul" },
  { meta: "Apellido", metaInfo: "Osinga" },
  { meta: "Edad", metaInfo: "46 años" },
  { meta: "Nacionalidad", metaInfo: "Venezolano" },
  { meta: "Trabajo", metaInfo: "Disponible" },
  { meta: "Dirección", metaInfo: "Colombia" },
  { meta: "Teléfono", metaInfo: "3193552985" },
  { meta: "Email", metaInfo: "paul@devpwo.com" },
  // { meta: "Skype", metaInfo: " " },
  { meta: "Idioma", metaInfo: "Español" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;

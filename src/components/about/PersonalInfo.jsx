import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Paul" },
  { meta: "last name", metaInfo: "Osinga" },
  { meta: "Age", metaInfo: "42 años" },
  { meta: "Nationality", metaInfo: "Venezolano" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Colombia" },
  { meta: "phone", metaInfo: "3193552985" },
  { meta: "Email", metaInfo: "paul@devpwo.com" },
  // { meta: "Skype", metaInfo: " " },
  { meta: "langages", metaInfo: "Español" },
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

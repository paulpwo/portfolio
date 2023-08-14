import Image1 from "../../assets/img/portfolio/talentpitch.png";
import Image2 from "../../assets/img/portfolio/talentpitch.co.png";
import Image3 from "../../assets/img/portfolio/baile.png";
import Image4 from "../../assets/img/portfolio/controlgas.jpg";
import Image42 from "../../assets/img/portfolio/controlgas2.png";
import Image43 from "../../assets/img/portfolio/controlgas3.jpeg";
import Image44 from "../../assets/img/portfolio/controlgas4.jpeg";
import Image45 from "../../assets/img/portfolio/controlgas5.jpeg";
import Image46 from "../../assets/img/portfolio/controlgas6.jpeg";
import Image5 from "../../assets/img/portfolio/videoeditor.png";
import Image52 from "../../assets/img/portfolio/videoeditor2.png";
import Image53 from "../../assets/img/portfolio/videoeditor3.png";
import Image6 from "../../assets/img/portfolio/behance.png";



const PortfolioData = [
  {
    id: 1,
    type: "apps",
    image: Image1,
    youtube: '',
    tag: ["apps"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "App TalentPitch",
        client: "TalentPitch",
        language: "Flutter, Dart, Swift, Kotlin, Firebase, Laravel, Go",
        preview: "www.talentpitch.co",
        link: "https://www.talentpitch.co",
      },
    ],
  },
  {
    id: 2,
    type: "web, apps",
    image: Image2,
    youtube: '',
    tag: ["webs"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Plataform TalentPitch",
        client: "TalentPitch",
        language: " Laravel, VueJS, Bootstrap, MySQL, Firebase, Go",
        preview: "www.talentpitch.co",
        link: "https://www.talentpitch.co",
      },
    ],
  },
  {
    id: 3,
    type: "Administracion de competencias",
    image: Image3,
    youtube: `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/p2kvbnlV8Ho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `,
    tag: ["webs", "apps"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Bogota en su Salsa",
        client: "Bogges",
        language: " HTML, CSS, Javascript, socket.io, NodeJS",
        preview: "bogotaensusalsa.com",
        link: "http://bogotaensusalsa.com/",
      },
    ],
  },
  {
    id: 4,
    type: "App Control Gas",
    image: Image4,
    gallery: [Image4, Image42,Image43, Image44, Image45, Image46],
    youtube: '',
    tag: ["logo", "video"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "video",
        client: "Videohive",
        language: " Adobe After Effects",
        preview: "www.videohive.net",
        link: "https://www.videohive.net",
      },
    ],
  },
  {
    id: 5,
    type: "Video Editor Flutter",
    image: Image5,
    gallery: [Image5, Image52, Image53],
    youtube: '',
    tag: ["apps"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Video Editor Flutter",
        client: "TalentPitch",
        language: "Flutter, Dart, Swift, Kotlin",
        preview: "www.talentpitch.co",
        link: "https://www.talentpitch.co",
      },
    ],
  },
    {
    id: 6,
    type: "General",
    image: Image6,
    youtube: '',
    tag: ["general"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Portaforlio Behance",
        client: "Frelance",
        language: "Go, React, NodeJS, MongoDB, Firebase, Flutter, Dart, Swift, Kotlin, Laravel, VueJS, Bootstrap, MySQL, HTML, CSS, Javascript, socket.io, PHP, Django",
        preview: "www.behance.net/paulpwo",
        link: "https://www.behance.net/paulpwo",
      },
    ],
  },

];

export default PortfolioData;

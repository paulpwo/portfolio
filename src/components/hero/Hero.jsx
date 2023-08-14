import React, { useState } from "react";
import Modal from "react-modal";
import heroImg from "../../assets/img/hero/paulBig.jpg";
import heroImgMobile from "../../assets/img/hero/paulBig.jpg";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../../components/about/index";

const heroContent = {
  heroImage: heroImg,
  heroMobileImage: heroImgMobile,
  heroTitleName: "Paul Osinga",
  heroDesignation: "Developer",
  heroDescriptions: `
  
<p>Como desarrollador FullStack con una trayectoria de más de 10 años, mi pasión por la tecnología y su influencia en la evolución de la humanidad me impulsa constantemente. Mi enfoque se caracteriza por la creatividad y la precisión, lo que se refleja en la solidez de mis soluciones. Mi devoción por las buenas prácticas y metodologías se combina con una habilidad destacada para resolver intrincados desafíos lógicos en el código.</p>

<p>Además de mis habilidades técnicas, tengo un sólido historial en el liderazgo de equipos de desarrollo. Mi experiencia abarca la administración eficiente utilizando metodologías ágiles como Scrum. Esta combinación de habilidades técnicas y capacidades de gestión me permite no solo crear soluciones innovadoras, sino también guiar y empoderar a equipos hacia el éxito.</p>

<p>Mi habilidad para aprender y adaptarme a nuevas tecnologías es inquebrantable. Disfruto explorando constantemente nuevas herramientas y enfoques, lo que enriquece mi repertorio y contribuye a la excelencia en mis proyectos. En resumen, soy un apasionado de la tecnología, un resuelto solucionador de problemas y un líder experimentado, todo en uno.</p>

  `,
  heroBtn: "mas sobre mi",
};
const theObj = {__html:heroContent.heroDescriptions};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + heroContent.heroImage
            })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img class="object-fit-contain border- rounded shadow-4-strong d-sm-block d-lg-none main-img-mobile_mobile" src={heroContent.heroMobileImage} 
            alt="Paul Osinga"
            />

            <h1 className="text-uppercase poppins-font">
              Soy: {heroContent.heroTitleName}.
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font" dangerouslySetInnerHTML={theObj}></p>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src={cancelImg} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="150">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;

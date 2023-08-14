import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Hero from "../../components/hero/Hero";
import Index from "../../components/about/index";
import Address from "../../components/Address";
import Portfolio from "../../components/portfolio/Portfolio";
// import Blog from "../../components/blog/Blog";
import Contact from "../../components/Contact";
import Social from "../../components/Social";
import SwitchDark from "../../components/switch/SwitchDark";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import image from '../../assets/img/hero/paulBig.jpg';

const menuItem = [
  { icon: "fa-home", menuName: "Inicio" },
  { icon: "fa-user", menuName: "Paul" },
  { icon: "fa-briefcase", menuName: "Portafolio" },
  { icon: "fa-envelope-open", menuName: "Contacto" },
  // { icon: "fa-comments", menuName: "Blog" },
];

const HomeDark = () => {
  document.querySelector("body").classList.remove("rtl");

  return (
    <HelmetProvider>
      <div className="yellow">
       <Helmet>
            <title>Paul Osinga | Portafolio</title>
            <meta name="description" content="Paul Osinga - FullStack developer" />
            <meta property="og:title" content="Portafolio" />
            <meta property="og:image" content={image} />
          </Helmet>

      <SwitchDark />
      {/* End Switcher */}
      <Tabs>
        <div className="header">
          <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
            {menuItem.map((item, i) => (
              <Tab className="icon-box" key={i}>
                <i className={`fa ${item.icon}`}></i>
                <h2>{item.menuName}</h2>
              </Tab>
            ))}
          </TabList>
        </div>
        {/* End Menu Content */}

        <div className="tab-panel_list">
          {/* Hero Content Starts */}
          <TabPanel className="home ">
            <div
              className="container-fluid main-container container-home p-0 "
              data-aos="fade-up"
              data-aos-duration="150"
            >
              <div className="color-block d-none d-lg-block"></div>
              <Hero />
            </div>
          </TabPanel>
          {/* Hero Content Ends */}

          {/* About Content Starts */}
          <TabPanel className="about">
            <div data-aos="fade-up" data-aos-duration="150">
              <div className="title-section text-left text-sm-center">
                <h1>
                  SOBRE <span>MI</span>
                </h1>
                <span className="title-bg">Resumen</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </TabPanel>
          {/* About Content Ends */}

          {/* Portfolio Content Starts */}
          <TabPanel className="portfolio professional">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="150"
            >
              <h1>
                Algunos <span>proyectos</span>
              </h1>
              <span className="title-bg">portafolio</span>
            </div>
            {/* End title */}
            <Portfolio />
          </TabPanel>
          {/* Portfolio Content Ends */}

          {/* Contact Content Starts */}
          <TabPanel className="contact">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="150"
            >
              <h1>
                fomas de<span>contacto</span>
              </h1>
              <span className="title-bg">contacta me</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="150"
            >
              <div className="row">
                {/*  Left Side Starts */}
                <div className="col-12 col-lg-4">
                  <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                    General
                  </h3>
                  <p className="open-sans-font mb-4">
                    No dude en ponerse en contacto conmigo. Siempre estoy abierto a discutir nuevos 
                    proyectos, ideas creativas u oportunidades para ser parte de sus visiones.
                  </p>
                  <Address />
                  {/* End Address */}

                  <Social />
                  {/* End Social */}
                </div>
                {/* Left Side Ends */}

                {/*  Contact Form Starts  */}
                <div className="col-12 col-lg-8">
                  <Contact />
                </div>
                {/*  Contact Form Ends */}
              </div>
            </div>
            {/* End .container */}
          </TabPanel>
          {/* Contact Content Ends */}

          {/* Blog Content Starts */}
          {/* <TabPanel className="blog">
            <div
              className="title-section text-left text-sm-center "
              data-aos="fade-up"
              data-aos-duration="150"
            >
              <h1>
                Mi <span>blog</span>
              </h1>
              <span className="title-bg">articulos</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="150"
            >
              <div className="row pb-50">
                <Blog />
              </div>
            </div>
          </TabPanel> */}
          {/* Blog Content Ends */}
        </div>
      </Tabs>
    </div>
    </HelmetProvider>
    
  );
};

export default HomeDark;

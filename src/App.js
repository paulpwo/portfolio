import React, { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import AllRoutes from "./router/AllRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedCursor from "react-animated-cursor";
import { ToastContainer } from "react-toastify";

const App = () => {

  // this for animation
  useEffect(() => {
    AOS.init({
      duration: 150,
    });
  }, []);

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={20}
        color="180, 1, 22"
        outerAlpha={0.1}
        innerScale={0.1}
        outerScale={1.1}
        trailingSpeed={2}
      />
      <ScrollToTop />
      <AllRoutes />
      {/* End contact */}
      <ToastContainer />
      {/* Same as */}
    </>
  );
};

export default App;

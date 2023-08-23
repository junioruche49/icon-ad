import { useLayoutEffect } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Message from "./components/Message";
import OurCompany from "./components/OurCompany";
import TheTeam from "./components/TheTeam";
import Vision from "./components/Vision";
import WhyRMS from "./components/WhyRMS";
import gsap from "gsap-trial";

function App() {
  useLayoutEffect(() => {
    const fadeUpElements = document.querySelectorAll(".fade-up");

    fadeUpElements.forEach((element) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          scrub: true,
        },
      });

      tl.fromTo(
        element,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    });
  }, []);
  return (
    <div className="relative sm:mt-40 mt-10">
      <About />
      <Vision />
      <WhyRMS />
      <OurCompany />
      <TheTeam />
      <Message />
      <Footer />
    </div>
  );
}

export default App;

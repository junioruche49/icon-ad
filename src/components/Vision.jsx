import { useLayoutEffect, useRef } from "react";
import VisionMan from "../assets/visionMan.png";
import VisionWoman from "../assets/visionWoman.png";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import ScrollSmoother from "gsap-trial/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function Vision() {
  const main = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // create the smooth scroller FIRST!

      gsap.fromTo(
        ".vision-man",
        {
          opacity: 1,
          y: 100,
        },
        {
          y: 0,
          duration: 2,
          scrollTrigger: {
            trigger: ".vision-man",
            start: "top bottom-=50%",
            end: "bottom center",
            scrub: 3,
          },
        }
      );
      gsap.fromTo(
        ".vision-woman",
        {
          opacity: 1,
          y: 100,
        },
        {
          y: 0,
          duration: 0.7,
          delay: 0.5,
          scrollTrigger: {
            trigger: ".vision-woman",
            start: "top bottom-=50%",
            end: "bottom center",
            scrub: 0.5,
          },
        }
      );
      gsap.fromTo(
        ".section",
        {
          opacity: 1,
          y: 100,
        },
        {
          y: 0,
          duration: 4,
          animation: 50,
          scrollTrigger: {
            trigger: ".section",
            start: "top bottom-=50%",
            end: "bottom center",
            scrub: 5,
          },
        }
      );
      gsap.from(".vision", {
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".heading",
          start: "top end",
          scrub: true,
          pin: ".pin",
          pinSpacing: false,
          markers: false,
        },
      });
    }, main);
    return () => ctx.revert();
  }, []);
  return (
    <div
      className="w-full m-auto relative sm:mb-72 mb-50 mt-40 "
      id="smooth-content"
      ref={main}
    >
      <div className="w-full heading">
        <div className="w-full pin z-10">
          <h2 className=" sm:text-[12rem] tracking-tighter text-[5rem] text-center font-bold opacity-50 z-10 bg-transparent vision">
            Our Vision
          </h2>
        </div>
        <div className="w-full flex justify-center z-20 ">
          <div className=" flex sm:w-11/12 sm:justify-between flex-col sm:flex-row">
            <div className="vision-man flex-1">
              <img src={VisionMan} className=" sm:w-[26rem]" />
            </div>
            <div
              className="flex flex-col-reverse sm:-mb-60 flex-1 relative section my-8 sm:my-0 z-20"
              data-speed="2"
            >
              <p className="sm:text-[2rem] text-center sm:text-left text-[1rem] leading-none sm:w-[380px] leading-tigh bg-black  font-semibold border-[0.2px] border-secondary rounded-3xl py-5 px-4 sm:py-20 sm:px-10 ">
                To help brands maximize and optimize their MENA reach,
                especially in key markets like Saudi Arabia and Egypt
              </p>
            </div>
            <div className="flex flex-col-reverse vision-woman" data-lag="0.5">
              <img src={VisionWoman} className="sm:w-[18rem] w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;

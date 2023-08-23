import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
console.log("width", window.innerWidth);
function OurCompany() {
  const companyDiv = useRef();
  const company = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollContainer = companyDiv.current;
      const scrollText = company.current;
      const textWidth = scrollText.clientWidth;
      const containerWidth = scrollContainer.parentElement.clientWidth;
      const scrollWidth = scrollText.offsetWidth - scrollContainer.offsetWidth;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollContainer,
          start: "-=500",
          end: "+=900",
          scrub: true,
          markers: false,
        },
      });
      tl.to(scrollText, {
        x: scrollWidth - 900,
        ease: "none",
        duration: 4,
        animationDuration: 0.2,
        repeat: 1,
        onComplete: () => {
          const distance = textWidth - containerWidth;
          scrollContainer.style.transform = `translateX(-${distance}px)`;
        },
        onReverseComplete: () => {
          console.log("comple");
          const distance = textWidth - containerWidth;
          scrollContainer.style.transform = `translateX(-${distance}px)`;
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div
      className="sm:w-full flex sm:flex-row-reverse sm:pt-40 py-10 justify-center overflow-x-hidden"
      ref={companyDiv}
    >
      <h2
        className="sm:text-[7rem] text-[2rem] font-extrabold company sm:-mr-[120rem]"
        ref={company}
      >
        Our company is suited to
      </h2>
    </div>
  );
}

export default OurCompany;

import AboutUs from "../assets/aboutUs.jpg";

function About() {
  return (
    <div className="w-full m-auto">
      <h1 className="sm:ml-40 tracking-tighter  sm:text-[6rem] text-3xl sm:mb-14 mb-10 font-medium ">
        About Us
      </h1>
      <div className="w-full flex justify-center">
        <img src={AboutUs} className="sm:w-[95%] text-center fade-up" />
      </div>
      <div className="w-full flex justify-center sm:mt-40 mt-20 ">
        <div className="w-3/5 lg:w-2/5">
          <p className="sm:text-[3.5rem] tracking-tighter  text-[1.5rem] leading-[1] font-semibold fade-up ">
            RMS is a
            <span className="text-secondary">&nbsp; media conglomerate </span>
            that specializes in
            <span className="text-secondary">
              &nbsp; sales and marketing solutions
            </span>
            &nbsp; within the advertising industry.
          </p>
        </div>
      </div>
      <div className="w-full flex sm:flex-row-reverse mt-10">
        <div className=" flex sm:mr-60 sm:w-2/6 lg:w-1/4 sm:px-0 px-4">
          <p className="text-sm fade-up">
            We provide cutting-edge advertising opportunities across a variety
            of platforms throughout the MENA region, leveraging our expertise to
            offer the latest innovative solutions. Our areas of focus
            encompasses advertising sales representation for prominent satellite
            TV channels, digital media sales, and social media partnerships,
            content creation and integration, influencer marketing, and
            out-of-home media. We have a dedicated team of 58 professionals, and
            the company services its clients through a network of offices and
            representatives across the MENA region.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

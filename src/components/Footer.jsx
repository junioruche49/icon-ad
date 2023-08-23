import FooterImg1 from "../assets/FooterImg1.jpg";
import FooterImg2 from "../assets/FooterImg2.png";
import FooterImg3 from "../assets/FooterImg3.png";
import FooterImg4 from "../assets/FooterImg4.png";
import FooterImg5 from "../assets/FooterImg5.png";
import FooterLogo from "../assets/Footer-Logo.png";
import Contactform from "./Contactform";

const footerImg = [FooterImg1, FooterImg2, FooterImg3, FooterImg4, FooterImg5];

const quickLinks = [
  "About Us",
  "Partners",
  "Clients",
  "Careers",
  "Media Centre",
  "Contact Us",
];

const ourSolutions = [
  "Traditional Media",
  "Digital Media",
  "Influencer Media",
  "Outdoor Media",
  "OTT Advertising",
  "Partnership",
];

const connectUs = ["Facebook", "Instagram", "Youtube", "Linkedin"];

function Footer() {
  return (
    <footer className="w-full mt-40">
      <div className="flex flex-row sm:gap-1 pt-1 ">
        {footerImg.map((img, index) => (
          <img src={img} key={index} className="w-[19.75%]" />
        ))}
      </div>
      <div className="w-full pt-10 ">
        <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
          <div className="flex sm:flex-row flex-col gap-32">
            <img src={FooterLogo} className="w-[180px]" />
            <Contactform />
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col sm:gap-[20rem] gap-5 text-black sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 ">
        <div className="flex flex-col">
          <h3 className="font-semibold text-black mb-5">Quick Links</h3>
          <div className="flex flex-row gap-8">
            <ul className="text-sm leading-7 cursor-pointer">
              {quickLinks.slice(0, 4).map((data) => (
                <>
                  <li>{data}</li>
                </>
              ))}
            </ul>
            <ul className="text-sm leading-7">
              {quickLinks.slice(-2).map((data) => (
                <>
                  <li>{data}</li>
                </>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-row flex-1 justify-between">
          <div className="flex flex-col flex-1">
            <h3 className="font-semibold text-black mb-5">Our Solutions</h3>
            <div className="flex flex-row gap-16">
              <ul className="text-sm leading-7 cursor-pointer">
                {ourSolutions.slice(0, 4).map((data) => (
                  <>
                    <li>{data}</li>
                  </>
                ))}
              </ul>
              <ul className="text-sm leading-7">
                {ourSolutions.slice(-2).map((data) => (
                  <>
                    <li>{data}</li>
                  </>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-black mb-5">Connect with Us</h3>
            <div className="flex flex-col">
              <ul className="text-sm leading-7 cursor-pointer">
                {connectUs.map((data) => (
                  <>
                    <li>{data}</li>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr className="text-gray" />
      <div className="w-full pt-5 text-black">
        <div className="flex flex-row sm:gap-[16.5rem] sm:px-16 px-6 sm:pb-16 pb-10 max-w-7xl mx-auto relative z-0">
          <p className="text-[12px]">
            All right Reserverd. Rotana Media Services
          </p>
          <ul className="text-sm flex flex-row gap-8 cursor-pointer">
            <li className="text-[12px]">Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

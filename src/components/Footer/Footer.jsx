import footerLogo from "../../assets/logo.png";
import footerImg1 from "../../assets/footer-image_1.jpg";
import footerImg2 from "../../assets/footer-image_2.jpg";
import footerImg3 from "../../assets/footer-image_3.jpg";
import footerImg4 from "../../assets/footer-image_4.jpg";

import Container from "../../components/ui/Container";
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";

const Footer = () => {
  return (
    <div className="mt-10 py-8 md:py-16 bg-[#202126]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 text-white">
          <div className="">
            <h2 className="text-lg md:text-xl font-medium mb-5">About Us</h2>
            <div className="space-y-3">
              <p className="text-[#888]">
                Find your perfect family home in our serene suburban community.
                Enjoy spacious layouts, friendly neighbors, and a tranquil
                atmosphere.
              </p>
              <p className="flex items-center gap-3">
                <FaPhone />
                +2 333 4456 231
              </p>
              <p className="flex items-center gap-3">
                <SiMinutemailer />
                info@yourdomain.com
              </p>
              <div className="">
                <input
                  type="email"
                  placeholder="Enter your E-mail"
                  className="px-4 py-2 rounded-full w-full md:w-2/3 placeholder:text-xs bg-[#292b31]"
                />
                <button className="bg-primary rounded-full py-[6px] px-6 -ml-[85px]">
                  Send
                </button>
              </div>
            </div>
          </div>
          <div className="md:ml-28">
            <h2 className="text-lg md:text-xl font-medium mb-5">Latest Home</h2>
            <div className="flex gap-3">
              <p className="mt-1">
                <FaHome />
              </p>
              <p className="text-[#888] italic">
                Live in the heart of the city in our cozy downtown apartments.
                Experience urban convenience and vibrant city life right outside
                your door.
              </p>
            </div>
            <div className="flex gap-3 py-3">
              <p className="mt-1">
                <FaHome />
              </p>
              <p className="text-[#888] italic">
                Experience breathtaking views and luxurious living in our
                exclusive condo community. Enjoy top-notch amenities and a prime
                location.
              </p>
            </div>
          </div>
          <div className=" lg:ml-[138px]">
            <h2 className="text-lg md:text-xl font-medium mb-5">Instagram</h2>
            <div className="flex flex-wrap gap-5">
              <img src={footerImg1} alt="footer image" />
              <img src={footerImg2} alt="footer image" />
              <img src={footerImg3} alt="footer image" />
              <img src={footerImg4} alt="footer image" />
            </div>
          </div>
        </div>
        <p className="w-full h-[1px] bg-[#888] my-10"></p>
        <div className="sm:flex items-center justify-between text-white">
          <ul className="flex gap-4 justify-center sm:justify-start mb-3 sm:mb-0">
            <li>Home</li>
            <li>About</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Compliances</li>
          </ul>
          <img
            src={footerLogo}
            alt="footer logo"
            className="w-24 flex mx-auto sm:mx-0"
          />
        </div>
      </Container>
    </div>
  );
};

export default Footer;

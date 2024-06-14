import Container from "../../components/ui/Container";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";

const Footer = () => {
  return (
    <div className="mt-10 py-20 md:py-32 bg-red-500">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 text-white">
          <div>
            <h2 className="text-xl md:text-2xl font-light">Recipe Calories</h2>
            <p className="h-1 w-10 bg-green-400 mt-1"></p>
            <p className="my-3 leading-6">
              Recipes often lack calorie info. Estimate based on ingredients or
              use online calculators for a healthier choice.
            </p>
            <div className="flex gap-5 mt-4">
              <p className="bg-green-400 p-3 rounded-full">
                <FaXTwitter className="text-white text-xl" />
              </p>
              <p className="bg-green-400 p-3 rounded-full">
                <FaFacebookF className="text-white text-xl" />
              </p>
              <p className="bg-green-400 p-3 rounded-full">
                <FaInstagram className="text-white text-xl" />
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-light">Latest Recipe</h2>
            <p className="h-1 w-10 bg-green-400 mt-1"></p>
            <div className="flex gap-5 mt-4">
              {/* <img
                src={footerImg1}
                alt="Spicy Thai Stir-Fry"
                className="h-20 w-24 bg-green-400 rounded mt-2"
              /> */}
              <div>
                <h4 className="text-lg font-medium mb-2">
                  Spicy Thai Stir-Fry
                </h4>
                <p> This light dish packs a punch with protein and heat </p>
              </div>
            </div>
            <div className="flex gap-5 mt-4">
              {/* <img
                src={footerImg2}
                alt="Spicy Thai Stir-Fry"
                className="h-20 w-24 bg-green-400 rounded mt-2"
              /> */}
              <div>
                <h4 className="text-lg font-medium mb-2">
                  Spicy Thai Stir-Fry
                </h4>
                <p> This light dish packs a punch with protein and heat </p>
              </div>
            </div>
          </div>
          <div className="lg:pl-16">
            <h2 className="text-xl md:text-2xl font-light">Quick Links</h2>
            <p className="h-1 w-10 bg-green-400 mt-1"></p>
            <div className="mt-4 leading-10 list-none">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#">Recipes</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Search</a>
              </li>
            </div>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-light">
              Have a Questions?
            </h2>
            <p className="h-1 w-10 bg-green-400 mt-1"></p>
            <div className="mt-4">
              <p className="flex gap-3 leading-6">
                <FaLocationDot className="mt-2" />
                1720 Fake St. Tierra del Fuego, <br />
                Uluru, Northern Territory, Australia
              </p>
              <p className="flex items-center gap-3 py-4">
                <FaPhone />
                +2 333 4456 231
              </p>
              <p className="flex items-center gap-3 py-4">
                <SiMinutemailer />
                info@yourdomain.com
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

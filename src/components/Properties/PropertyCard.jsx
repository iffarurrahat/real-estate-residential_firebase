import PropTypes from "prop-types";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { PiLineSegments } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { TbStatusChange } from "react-icons/tb";
import "./PropertyCard.css";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  const {
    id,
    image,
    price,
    estate_title,
    area,
    segment_name,
    location,
    status,
  } = property || {};

  return (
    <div
      className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl"
      data-aos="zoom-in-up"
    >
      <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 custom-hover">
        <img src={image} alt={estate_title} className="h-full w-full" />
        <p className="absolute left-0 bottom-0 px-2 rounded bg-primary block text-white ">
          {price}
        </p>
      </div>
      <h5 className="font-sans text-xl font-semibold leading-snug text-primary p-5">
        {estate_title}
      </h5>
      <hr className="w-[90%] mx-auto bg-primary mb-5" />
      <div className="flex justify-between px-5">
        <p className="flex items-center gap-2">
          <LiaVectorSquareSolid className="text-[#abb4c0] text-xl" /> {area}
        </p>
        <p className="flex items-center gap-2">
          <PiLineSegments className="text-[#abb4c0] text-xl" />
          {segment_name}
        </p>
        <p className="flex items-center gap-2">
          <TbStatusChange className="text-[#abb4c0] text-xl" /> {status}
        </p>
      </div>
      <p className="flex-wrap md:flex items-center gap-2 px-5 mt-3 mb-5">
        <CiLocationOn className="text-[#abb4c0] text-xl" />
        {location}
      </p>
      <div className="p-6 pt-0">
        <Link to={`/property/${id}`}>
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
          >
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.object.isRequired,
};
export default PropertyCard;

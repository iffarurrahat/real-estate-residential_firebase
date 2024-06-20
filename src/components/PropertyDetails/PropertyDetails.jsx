import { FaChartArea, FaDollarSign } from "react-icons/fa";
import { CiLocationOn, CiSquareMinus } from "react-icons/ci";
import { PiLineSegments } from "react-icons/pi";

import { Link, useLoaderData, useParams } from "react-router-dom";
import Container from "../ui/Container";
import ShortSection from "../ShortSection/ShortSection";
import shortImg from "./../../assets/short-img.jpg";

const PropertyDetails = () => {
  const { id } = useParams();

  const properties = useLoaderData();
  const property = properties.find((property) => property.id === id);
  const {
    image,
    estate_title,
    location,
    view,
    segment_name,
    status,
    area,
    price,
    facilities,
    description,
  } = property || {};
  console.log(property);

  return (
    <div className="mt-20 ">
      <ShortSection title={"Property Details"} image={shortImg} />
      <div className="bg-[#F7F7F7] py-5">
        <Container>
          <div className="flex gap-5 text-[#6C757D]">
            <Link to="/">Home</Link>
            <p>Apartment</p>
            <p>
              10% Downpayment | {view || "unknown"} |{" "}
              {segment_name || "unknown"}
            </p>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl my-2">
            {estate_title}
          </h2>
          <button className="bg-[#565656] text-white py-1 px-2 rounded text-sm uppercase font-medium">
            {status}
          </button>
          <p className="flex items-center gap-2 my-2 text-[#6C757D]">
            <CiLocationOn /> {location}
          </p>
          <img
            src={image}
            alt={estate_title}
            className="w-full h-full md:h-96 lg:h-[500px] mt-5 object-cover"
          />
          <div className="bg-white rounded p-1 sm:p-2 md:p-3 lg:p-5 mt-3 md:mt-5 w-full md:w-3/4">
            <p className="flex justify-between text-lg">
              <span>Overview</span>
              <span>Property ID: {id}</span>
            </p>
            <hr className="my-5" />
            <div className="flex flex-wrap justify-around p-5">
              <p className="mb-2 md:mb-0">
                <strong>Apartment</strong> <br /> Property Type
              </p>
              <p className="flex items-center gap-2">
                <FaChartArea /> {area}
              </p>
              <p className="flex items-center gap-2">
                <PiLineSegments /> {segment_name}
              </p>
              <p className="flex items-center gap-2">
                <FaDollarSign /> {price}
              </p>
            </div>
          </div>
          <div className="bg-white rounded p-2 md:p-3 lg:p-5 mt-3 md:mt-5 w-full md:w-3/4">
            <p className="flex justify-between text-lg">Description</p>
            <hr className="my-5" />

            <strong>Facilities:</strong>
            <ul>
              {facilities.map((facility, idx) => (
                <li key={idx} className="capitalize flex items-center gap-1">
                  <CiSquareMinus /> {facility}
                </li>
              ))}
            </ul>
            <p className="mt-3 leading-8">{description}</p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PropertyDetails;

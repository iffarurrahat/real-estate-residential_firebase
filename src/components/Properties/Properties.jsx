import { useState } from "react";
import Container from "../ui/Container";
import "./Properties.css";
import { useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Spinner from "../Spinner/Spinner";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  const { loading: authLoading } = useAuth();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // Set loading to true when fetching starts
    const fetchData = async () => {
      try {
        const res = await axios.get("properties.json");
        setProperties(res.data);
        setLoading(false); // Set loading to false when fetching ends
      } catch (error) {
        setLoading(false); // Ensure loading is set to false even if there's an error
      }
    };
    fetchData();
  }, [authLoading]);

  return (
    <Container>
      <div className="flex justify-between items-center my-20 font-roboto">
        <h2
          className="heading-decoration ml-4 sm:ml-8 md:ml-16 lg:ml-36"
          data-aos="fade-right"
        >
          <span className="heading-inner text-xl sm:text-2xl md:text-3xl lg:text-4xl ">
            Featured Properties
          </span>
        </h2>
        <p
          className="flex align-middle gap-3 text-xs font-semibold text-[#9a9a9a]"
          data-aos="fade-left"
        >
          <span className="border-r-2 pr-3">FOR RENT</span>
          <span>FOR SALE</span>
        </p>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Properties;

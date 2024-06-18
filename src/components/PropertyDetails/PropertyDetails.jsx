import { useLoaderData, useParams } from "react-router-dom";
import Container from "../ui/Container";

const PropertyDetails = () => {
  const { id } = useParams();
  console.log(id);

  const properties = useLoaderData();
  const property = properties.find((property) => property.id === id);

  return (
    <div className="mt-20">
      <Container>
        <h2>Data: {properties.length}</h2>
        <p>Id: {property.id}</p>
        <h2>{property.estate_title}</h2>
        <img src={property.image} alt="" />
      </Container>
    </div>
  );
};

export default PropertyDetails;

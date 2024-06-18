import Container from "../ui/Container";
import "./Properties.css";

const Properties = () => {
  return (
    <Container>
      <div className="flex justify-between items-center mt-16 border">
        <h2 className="heading-decoration ml-36">
          <span className="heading-inner text-4xl ">Featured Properties</span>
        </h2>
        <p className="flex gap-3 text-sm">
          <span>FOR RENT</span>
          <span>FOR SALE</span>
        </p>
      </div>
    </Container>
  );
};

export default Properties;

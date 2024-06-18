import Banner from "../../components/Banner/Banner";
import Properties from "../../components/Properties/Properties";

const Home = () => {
  return (
    <div>
      <Banner />
      <Properties />
      <p
        className="my-[500px] text-2xl font-bold ml-10 data"
        data-aos="fade-left"
      >
        Margin Left: Lorem ipsum dolor sit amet.
      </p>
      <p
        className="my-[500px] text-2xl font-bold ml-10 data mt-32"
        data-aos="fade-right"
      >
        Margin Right: Lorem ipsum dolor sit amet.
      </p>
    </div>
  );
};

export default Home;

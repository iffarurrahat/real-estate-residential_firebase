import PropTypes from "prop-types";

const ShortSection = ({ title, image }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="relative bg-cover bg-no-repeat h-40 w-full flex items-center justify-center -mt-2 font-roboto"
    >
      <div className="absolute inset-0 bg-black opacity-70 pointer-events-none"></div>
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white z-50">
        {title}
      </h2>
    </div>
  );
};

ShortSection.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ShortSection;

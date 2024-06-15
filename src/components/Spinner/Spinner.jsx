import { Oval } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-[60vh] mt-20">
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#bc986b"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Spinner;

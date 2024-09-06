import { Link } from "react-router-dom";

const Slide = ({ image, heading, description }) => {
  return (
    <div
      className="w-full bg-center bg-cover h-screen rounded mb-5"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/70 p-5">
        <div className="text-center">
          <h1 className="text-2xl md:w-[80%] mx-auto font-semibold text-white lg:text-3xl">
            {heading}
          </h1>
          <p className="font-medium text-white py-3 md:w-[70%] mx-auto">
            {description}
          </p>
          <Link to={"/products"}>
            <button className="py-2 px-3 font-medium border rounded bg-blue-400 text-white">
              All Product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;

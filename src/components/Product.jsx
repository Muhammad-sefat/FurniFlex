import React, { useContext, useState } from "react";
import { UserContext } from "../provider/userProvider";
import SingleCart from "../pages/SingleCart";

const Product = () => {
  const { products } = useContext(UserContext);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  // Pagination calculations
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="md:flex gap-5">
        <div className="w-[15%] border-r-2 text-left  space-y-2 mt-5">
          <p
            className={`cursor-pointer ${
              activeCategory === "All"
                ? "font-medium bg-gray-700 p-2 rounded-md text-white mx-2"
                : "font-medium bg-gray-200 p-2 rounded-md  mx-2"
            }`}
            onClick={() => setActiveCategory("All")}
          >
            All Chairs
          </p>
          <p
            className={`cursor-pointer ${
              activeCategory === "Rocking Chair"
                ? "font-medium bg-gray-700 p-2 rounded-md text-white mx-2"
                : "font-medium bg-gray-200 p-2 rounded-md  mx-2"
            }`}
            onClick={() => setActiveCategory("Rocking Chair")}
          >
            Rocking Chair
          </p>
          <p
            className={`cursor-pointer ${
              activeCategory === "Side Chair"
                ? "font-medium bg-gray-700 p-2 rounded-md text-white mx-2"
                : "font-medium bg-gray-200 p-2 rounded-md  mx-2"
            }`}
            onClick={() => setActiveCategory("Side Chair")}
          >
            Side Chair
          </p>
          <p
            className={`cursor-pointer ${
              activeCategory === "Lounge Chair"
                ? "font-medium bg-gray-700 p-2 rounded-md text-white mx-2"
                : "font-medium bg-gray-200 p-2 rounded-md  mx-2"
            }`}
            onClick={() => setActiveCategory("Lounge Chair")}
          >
            Lounge Chair
          </p>
        </div>
        <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentProducts.map((product, index) => (
            <SingleCart key={index} product={product} />
          ))}
        </div>
      </div>
      <div className="my-6 flex justify-center items-center gap-2">
        <button
          onClick={handlePrevious}
          className={`p-2 ${
            currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"
          } rounded-md`}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => goToPage(pageIndex + 1)}
            className={`p-2 ${
              currentPage === pageIndex + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            } rounded-md`}
          >
            {pageIndex + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          className={`p-2 ${
            currentPage === totalPages
              ? "bg-gray-300"
              : "bg-blue-500 text-white"
          } rounded-md`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Product;

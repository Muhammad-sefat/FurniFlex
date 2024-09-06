import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import img1 from "../assets/closeup-comfortable-loft-style-chair-with-armrests.jpg";
import img2 from "../assets/grant-durr-Wy52nxBf_7Q-unsplash.jpg";
import img3 from "../assets/john-schaidler-zDx5TxqfLoQ-unsplash.jpg";
import img4 from "../assets/kunj-parekh-9wGKENQ-qTI-unsplash.jpg";
import img5 from "../assets/marie-michele-bouchard-uxtwBo9lS50-unsplash.jpg";

import Slide from "../pages/Slide";

const Home = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={img1}
            heading={"Rocking Chair Smooth Design"}
            description={
              "A classic wooden rocking chair perfect for relaxation and reading. The smooth, curved design ensures a gentle rocking motion, ideal for both indoor and outdoor use."
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={img2}
            heading={"Loauge Chair With Smooth Design"}
            description={
              "A modern, upholstered lounge chair with ergonomic support, offering ultimate comfort. Great for living rooms, home offices, or reading nooks."
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={img3}
            heading={"Coffee Chair Smooth Design"}
            description={
              "A sleek, six-seater dining table set made of oak wood. The set includes a rectangular table with durable wood finish and matching cushioned chairs for a stylish dining experience."
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={img4}
            heading={"Worddrove Chair Smooth Design"}
            description={
              "A minimalist, round coffee table with a tempered glass top and sturdy metal legs. Perfect for modern living rooms, providing both functionality and elegance."
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={img5}
            heading={"Beautiful Chair With Smooth Design"}
            description={
              "A spacious, three-door wardrobe made from premium MDF with sliding doors. Includes adjustable shelves and hanging space, ideal for storing clothes and accessories in a neat and organized manner."
            }
          ></Slide>
        </SwiperSlide>
      </Swiper>
      <h1 className="text-center my-5 text-3xl font-semibold">
        Frequently Asked Question
      </h1>
      <div className="my-8 text-left space-y-2">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What is the best material for furniture?
          </div>
          <div className="collapse-content">
            <p>
              The best material depends on the type of furniture and its use.
              Solid wood (like oak, walnut, or teak) is durable and classic for
              most furniture types. MDF is a budget-friendly alternative for
              certain pieces. Metal is ideal for modern, industrial designs,
              while leather or fabric are popular for upholstery in sofas and
              chairs.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How do I choose the right size furniture for my space?
          </div>
          <div className="collapse-content">
            <p>
              Start by measuring the available space, and account for room to
              move around the furniture comfortably. Use floor plans or tape to
              visualize the furniture's footprint. For small spaces, choose
              multi-functional or modular furniture. Larger rooms can
              accommodate more substantial pieces like sectional sofas or
              oversized tables.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How do I maintain and clean wooden furniture?
          </div>
          <div className="collapse-content">
            <p>
              To maintain wooden furniture, regularly dust with a soft cloth.
              For deeper cleaning, use a damp cloth followed by a dry one,
              avoiding harsh chemicals. Apply furniture polish or wax
              periodically to protect the wood and restore shine. Keep wood away
              from direct sunlight and moisture to prevent damage.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What should I look for when buying a sofa?
          </div>
          <div className="collapse-content">
            <p>
              When buying a sofa, consider the frame, cushions, fabric, and
              size. Look for a sturdy frame made of hardwood, comfortable
              cushions with foam or down filling, and durable, easy-to-clean
              fabric. Measure your space to ensure the sofa fits and suits your
              room’s style.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Is assembly required for most furniture?
          </div>
          <div className="collapse-content">
            <p>
              {" "}
              Many furniture pieces, especially flat-packed ones, require
              assembly. However, some stores or online sellers offer assembly
              services for an additional fee. If assembling yourself, ensure you
              have the necessary tools and follow the instructions carefully to
              avoid damaging the furniture.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

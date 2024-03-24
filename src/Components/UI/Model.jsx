import React from "react";
import portfolios from "../../assets/data/portfolioData";

const Model = ({ activeId, setShowModal }) => {
  const portfolioData = portfolios.find(
    (portfolio) => portfolio.id === activeId
  );
  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40">
      <div className="w-10/12 p-5 md:max-w-[600px] md:w-full absolute top-1/2 md:left-1/3 sm:left-12 mt-[150px] left-6 z-20 bg-white rounded-[8px] transform -translate-x-1 -translate-y-1/2">
        <div>
          <figure>
            <img className="rounded-[8px]" src={portfolioData.imgUrl} alt="" />
          </figure>
        </div>
        <div>
          {" "}
          <h2 className="text-2xl text-headingColor font-[700] my-5">
            {portfolioData.title}
          </h2>
          <p className="text-[15px] leading-5 text-smallTextColor">
            {portfolioData.description}
          </p>
          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <h4 className=" text-headingColor text-[18px] font-[700]">
              Technologies:
            </h4>
            {portfolioData.technologies.map((item, index) => (
              <span
                key={index}
                className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px]"
              >
                {" "}
                {item}{" "}
              </span>
            ))}
          </div>
          <a href="">
            {" "}
            <button className=" bg-primaryColor text-white py-2 px-4 my-2 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300">
              {" "}
              Live Site
            </button>
          </a>
        </div>

        <button
          onClick={() => setShowModal(false)}
          className="w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-3xl leading-0 cursor-pointer"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Model;

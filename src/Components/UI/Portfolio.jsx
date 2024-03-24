import React, { useEffect, useState } from "react";
import data from "../../assets/data/portfolioData";
import Model from "./Model";

const Portfolio = () => {
  const [activedata, setActiveData] = useState(data);
  const [count, setCount] = useState(4);
  const [selectTab, setSelectTab] = useState("");

  const [showmodal, setShowModal] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const loadMore = () => {
    setCount((prev) => prev + 3);
    // count <= activedata.length
    //   ? setCount((prev) => prev + 2)
    //   : alert("No More Data");
  };
  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveId(id);
  };

  useEffect(() => {
    if (selectTab === "all") {
      setCount(4);
      setActiveData(data);
    } else if (selectTab === "web-Design") {
      setCount(4);
      const filterdData = data.filter((val) => val.category == "Web Design");
      setActiveData(filterdData);
    } else if (selectTab === "ux-Design") {
      setCount(4);
      const filterdData = data.filter((val) => val.category == "Ux");
      setActiveData(filterdData);
    }
  }, [selectTab]);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between  flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className=" text-headingColor text-[2rem] font-[700]">
              My recent Projects
            </h3>
          </div>
          <div className="flex gap-3 ">
            <button
              onClick={() => {
                setSelectTab("all");
              }}
              className=" text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              All
            </button>
            <button
              onClick={() => {
                setSelectTab("web-Design");
              }}
              className=" text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              Web Design
            </button>
            <button
              onClick={() => {
                setSelectTab("ux-Design");
              }}
              className=" text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              UX Design
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap mt-12">
          {activedata?.slice(0, count)?.map((portfolio, index) => (
            <div
              key={index}
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
            >
              <figure>
                <img className="rounded-[8px]" src={portfolio.imgUrl} alt="" />
              </figure>
              <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block ">
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => showModalHandler(portfolio.id)}
                    className=" text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          {count < activedata.length && data.length > 6 && (
            <button
              onClick={loadMore}
              className=" text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
            >
              Load More
            </button>
          )}
        </div>
      </div>

      {showmodal && <Model activeId={activeId} setShowModal={setShowModal} />}
    </section>
  );
};

export default Portfolio;

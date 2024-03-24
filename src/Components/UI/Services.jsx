import React from "react";
import frontendImg from "../../assets/images/front-end.png";
import backend from "../../assets/images/backend.png";
import apps from "../../assets/images/apps.png";
import design from "../../assets/images/design.png";
const Services = () => {
  return (
    <section id="services">
      <div className="container md:pt-5">
        <div className="text-center">
          <h2 className=" text-headingColor font-[800] text-[2.8rem] mb-5">
            {" "}
            Where i do Help
          </h2>
          <p className="max-w-[600px] mx-auto text-headingColor font-[500] text-[16px] leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            aspernatur rem necessitatibus culpa? Exercitationem commodi atque
            numquam accusantium mollitia ratione maxime, quasi fuga deleniti
            expedita aspernatur placeat eos, sed natus!
          </p>
        </div>
        <div className="flec flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* ======================vertical line runnin through the middle ===================================*/}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>
              {/* ==============================left card start ================================= */}

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className=" text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font[600] text-1xl">
                          Frontend Development
                        </h3>
                        <p className=" text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-5">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Adipisci modi accusantium in exercitationem esse
                          quam.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center">
                    <figure>
                      <img src={frontendImg} alt="" className="pl-1" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* ==============================left card end ================================= */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className=" text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font[600] text-1xl">
                          Backend Development
                        </h3>
                        <p className=" text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-5">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Adipisci modi accusantium in exercitationem esse
                          quam.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center">
                    <figure>
                      <img src={backend} alt="" className="pl-1" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* ==============================right card start ================================= */}
              {/* ==============================left card start ================================= */}

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className=" text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font[600] text-1xl">
                          Apps Development
                        </h3>
                        <p className=" text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-5">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Adipisci modi accusantium in exercitationem esse
                          quam.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center">
                    <figure>
                      <img src={apps} alt="" className="pl-1" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* ==============================left card end ================================= */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className=" text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font[600] text-1xl">
                          UI/UX Design
                        </h3>
                        <p className=" text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-5">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Adipisci modi accusantium in exercitationem esse
                          quam.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center">
                    <figure>
                      <img src={design} alt="" className="pl-1" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* ==============================right card start ================================= */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#12141e] pt-12">
      {/* Footer TOP */}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Do you want me to make beautiful products for you ?
            </h2>
            <a href="#contact">
              <button className="px-4 rounded-[8px] bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300">
                {" "}
                <i class="ri-mail-line"></i>Hire Me
              </button>
            </a>
          </div>
          <div className="w-full sm:w-1/2">
            <p className=" text-gray-300 leading-7 mt-4 sm:mt-0">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
              commodi ipsum veritatis nostrum, eos dolorum dolor soluta, ut ad,
              ab porro? Ex veritatis voluptas animi voluptates iure laboriosam a
              itaque.
            </p>
            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className=" text-gray-300 font-[600] text-[15px] ">
                Follow Me:
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a href="#" className=" text-gray-300 font-[500] text-[18px]">
                  <i class="ri-github-line"></i>{" "}
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a href="#" className=" text-gray-300 font-[500] text-[18px]">
                  <i class="ri-facebook-line"></i>{" "}
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a href="#" className=" text-gray-300 font-[500] text-[18px]">
                  <i class="ri-youtube-line"></i>{" "}
                </a>
              </span>
            </div>
          </div>
        </div>

        <div>
          <ul className="flex items-center justify-center gap-10 mt-10">
            <li>
              <a className="text-gray-300 font-[600]" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="text-gray-300 font-[600]" href="#services">
                {" "}
                Services
              </a>
            </li>

            <li>
              <a className="text-gray-300 font-[600]" href="#portfolio">
                {" "}
                Portfolio
              </a>
            </li>
            <li>
              <a className="text-gray-300 font-[600]" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Top Footer End */}
      {/* Footer Bottom Start */}
      <div className="bg-[#1b1e29] py-3 mt-14">
        <div className="container">
          <div className="flex itemx-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <span className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center">
                  A
                </span>
                <div className="leading-[20px]">
                  <h2 className="text-gray-200 font-[500] text-[18px]">
                    Ahsan
                  </h2>
                  <p className=" text-gray-400 text-[14px] font-[500]"></p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-[14px]">
                {" "}
                Copyright {year} by Ahsan - All right recerved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

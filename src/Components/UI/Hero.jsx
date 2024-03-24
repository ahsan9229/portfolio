import React from "react";
import heroImg from "../../assets/images/Ahsan.png";
import CountUp from "react-countup";
const Hero = () => {
  return (
    <section className="pt-0 " id="about">
      <div className="container">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* =================Hero Left content ====================== */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Hello Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Ahsan Sajid <br /> Software Developer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className="px-4 rounded-[8px] bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300">
                  {" "}
                  <i class="ri-mail-line"></i>Hire Me
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid "
              >
                See Portfolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 mt-14 text-headingColor font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i class="ri-apps-2-line"></i>
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              similique, consequuntur sit sed quasi eligendi deserunt! Eum,
              quisquam laborum? Culpa commodi error porro ipsam expedita
              consectetur quo maxime ratione accusamus.
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[18px] font-[600] ">
                Follow Me:
              </span>
              <span>
                {" "}
                <a
                  href="#youtube"
                  className=" text-smallTextColor text-[18px] font-[600]"
                >
                  <i className="ri-youtube-line"></i>{" "}
                </a>
              </span>
              <span>
                {" "}
                <a
                  href="#gitHub"
                  className=" text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-github-fill"></i>{" "}
                </a>
              </span>{" "}
              <span>
                {" "}
                <a
                  href="#facebook"
                  className=" text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-facebook-fill"></i>{" "}
                </a>
              </span>{" "}
              <span>
                {" "}
                <a
                  href="#twitter"
                  className=" text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-twitter-x-line"></i>{" "}
                </a>
              </span>
            </div>
          </div>
          {/* =================Hero Left content end ====================== */}
          {/* =================Hero images Start ====================== */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img src={heroImg} alt="" />
            </figure>
          </div>
          {/* =================Hero images End ====================== */}
          {/* =================Hero content right start ====================== */}{" "}
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className=" text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={7} duration={3} suffix="+"></CountUp>
              </h2>
              <h4 className=" text-headingColor font-[500] text-[22px]">
                {" "}
                Years of Experiance
              </h4>
            </div>
            <div className="mb-10">
              <h2 className=" text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={3} suffix="%"></CountUp>
              </h2>
              <h4 className=" text-headingColor font-[500] text-[22px]">
                {" "}
                Success Rate
              </h4>
            </div>
            <div className="mb-10">
              <h2 className=" text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={150} duration={3} suffix="+"></CountUp>
              </h2>
              <h4 className=" text-headingColor font-[500] text-[22px]">
                {" "}
                Happy Clients
              </h4>
            </div>
            <div className="mb-10">
              <h2 className=" text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={249} duration={3} suffix="+"></CountUp>
              </h2>
              <h4 className=" text-headingColor font-[500] text-[22px]">
                {" "}
                Projects Completed
              </h4>
            </div>
          </div>
          {/* =================Hero content right end ====================== */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

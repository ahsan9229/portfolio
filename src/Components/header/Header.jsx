import React, { useEffect, useRef } from "react";

const Header = () => {
  const headerref = useRef(null);
  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerref.current.classList.add("sticky__header");
      } else {
        headerref.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const handClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;
    window.scrollTo({
      top: location - 80,
      left: 0,
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  return (
    <header ref={headerref} className="h-[80px] leading-[80px] flex ">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ====================LOGO======================================= */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              A
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">Ahsan</h2>
              <p className="text-smallTextColor text-[14px] font-[500]">
                Personal
              </p>
            </div>
          </div>

          {/* =====================LOGO END =============================== */}
          {/* ========================Menu Start============================ */}
          <div onClick={toggleMenu} ref={menuRef} className="menu">
            <ul className="flex items-center gap-[20px] ">
              <li>
                <a
                  onClick={handClick}
                  className="text-smallTextColor font-[600]"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handClick}
                  className="text-smallTextColor font-[600]"
                  href="#services"
                >
                  {" "}
                  Services
                </a>
              </li>

              <li>
                <a
                  onClick={handClick}
                  className="text-smallTextColor font-[600]"
                  href="#portfolio"
                >
                  {" "}
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  onClick={handClick}
                  className="text-smallTextColor font-[600]"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* ========================Menu End============================ */}
          {/* ========================Menu Right Start==================== */}
          <div className="flex items-center gap-4">
            <button
              onClick={handClick}
              href="#contact"
              className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[30px] hover:bg-smallTextColor hover:text-white ease-in duration-300 hover:font-[600]"
            >
              <i class="ri-send-plane-line"></i> Let's talk
            </button>
            <span
              onClick={toggleMenu}
              className="text-2xl text-smallTextColor md:hidden"
            >
              <i class="ri-menu-line"></i>
            </span>
          </div>
          {/* ========================Menu Right End====================== */}
        </div>
      </div>
    </header>
  );
};

export default Header;

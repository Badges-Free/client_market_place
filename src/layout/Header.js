import React from "react";
import logo from "../image/logo192.png";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="bg-gradient-to-r from-cyan-700 to-blue-600 sticky top-0 z-50">
      <div className="w-full 2xl:w-[1440px] m-auto h-[80px] 2xl:px-0 px-3 py-3  flex flex-row justify-between items-center">
        <div className="w-[25%] ">
          <Link to="/">
            <img src={logo} alt="" width="50px" />
          </Link>
        </div>
        {!isMobile ? (
          <div className="w-[50%] flex items-center justify-center ">
            <input
              type="text"
              placeholder="search..."
              className="md:w-[65%] bg-transparent border-[2px] py-1.5 px-2 outline-none rounded-md text-white placeholder:text-white"
            />
          </div>
        ) : (
          ""
        )}

        <div className="w-[25%] flex justify-end text-white uppercase font-[500] text-[12px] md:text-[16px]">
          signin | sigup
        </div>
      </div>
    </header>
  );
}

export default Header;

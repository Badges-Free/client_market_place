import React from "react";
import logo from "../image/logo192.png";
import { isMobile } from "react-device-detect";
function Header() {
  return (
    <div className="w-full px-5 py-3 bg-red-400 flex flex-row justify-between items-center">
      <div className="w-[25%]">
        <img src={logo} alt="" width="50px" />
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
  );
}

export default Header;

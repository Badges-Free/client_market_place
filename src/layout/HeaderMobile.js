import React from "react";
import logo from "../image/logo192.png";
import { Link } from "react-router-dom";

function HeaderMobile() {
  return (
    <div className=" sticky top-0 z-50 bg-[blue] rounded-b-lg shadow-xl">
      <div className="w-full 2xl:w-[1440px] m-auto px-5 py-3 pb-5  text-white flex flex-col gap-5 ">
        <div className=" flex justify-between items-center">
          <Link to="/">
          <img src={logo} alt="" width="50px" />

          </Link>
          <div className="w-[25%] flex justify-end text-white uppercase font-[500] text-[12px] md:text-[16px]">
            signin | sigups
          </div>
        </div>

        <div className="flex flex-row gap-5 w-full">
          <input
            type="text"
            className=" w-full bg-transparent border-[2px] py-1.5 px-2 outline-none rounded-md text-white placeholder:text-white "
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderMobile;

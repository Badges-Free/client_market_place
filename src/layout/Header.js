import React from "react";
import logo from "../image/logo192.png";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import Profile from "../component/profile/Profile";
function Header() {
  const { user } = useAuth();

  return (
    <div className="bg-[#6c6cf0]  sticky top-0 z-50 px-5 xl:px-0">
      <div className="w-full xl:w-[1400px] m-auto h-[80px] 2xl:px-0 flex flex-row justify-between items-center">
        <div className="w-[25%] flex justify-start">
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
         
          {user !== null && user !== undefined  ? (
           <Profile/>
          ) : (
            <div className="flex gap-3">
              <Link to={"/signin"}> signin</Link> |{" "}
              <Link to={"signup"}>signup </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;

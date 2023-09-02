import React from "react";
import isLoading from "../../image/loading.gif";
function Loading() {
  return (
    <div className=" fixed left-0 top-0 flex justify-center items-center w-screen h-[100vh] bg-[#ffffff36] ">
      <img src={isLoading} alt="" className="w-[50px] md:w-[200px]"/>
    </div>
  );
}

export default Loading;

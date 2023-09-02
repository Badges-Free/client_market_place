import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  OutlineHeart,
  FillHeart,
  CgSmartphoneRam,
  Memory,
  ScreenPhone,
  Map,
  ThreeDots,
  Eye,
} from "../icons/index";
function ProductItem({
  id,
  title,
  thumbnail,
  price,
  ram,
  memory,
  screen,
  condition,
  location,
  discount,
  category,
  view,
}) {
  const [like, setLike] = useState(true);
  const toggleLike = () => {
    setLike((like) => !like);
  };
  return (
    <>
      <div
        className={
          "h-auto bg-white flex flex-col gap-1 relative  overflow-hidden rounded-[10px] hover:shadow-xl "
        }
      >
        <span className="absolute right-[15px] top-[15px] text-white">
          <ThreeDots />
        </span>
        <div className={"h-[200px] relative"}>
          {discount > 0 ? (
            <div className="absolute bg-red text-white left-0 px-[10px] py-[5px] rounded-tl-[10px] rounded-br-[10px]">
              {discount}% off
            </div>
          ) : (
            ""
          )}
          <Link to={`/computers/${id}`}>
            <img
              className="w-full h-[100%] object-cover"
              src={thumbnail}
              alt=""
            />
          </Link>
          <div
            className="flex justify-center items-center absolute bottom-[-12px] right-[10px] bg-white shadow-md w-[30px] h-[30px] rounded-full"
            onClick={toggleLike}
          >
            {like ? (
              <OutlineHeart props={"text-red-600 text-[18px]"} />
            ) : (
              <FillHeart props={"text-red-600 text-[18px]"} />
            )}
          </div>
        </div>
        <div className="h-[30%] flex flex-col gap-2 px-[10px] pt-0 pb-[10px] ">
          <div className="flex flex-col gap-2">
            <span className="text-default text-[16px] font-[400]">
              <Link to={`/computers/${id}`}>{title}</Link>
            </span>
            {category === 4 ? (
              <div className="flex flex-row items-center gap-10">
                <span className="flex flex-row items-center gap-2  text-default text-[12px] ">
                  <CgSmartphoneRam /> {ram}GB
                </span>
                <span className="flex flex-row items-center gap-2 text-default text-[12px]">
                  <Memory /> {memory}GB
                </span>
                <span className="flex flex-row items-center gap-2 text-default text-[12px]">
                  <ScreenPhone /> {screen}Inch
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
          <span className="w-[50%] text-default font-[500] text-[18px]">
            {price}$
          </span>
          <div className="flex flex-row justify-between items-center">
            <span className="w-[50%] flex flex-row justify-start items-center gap-1 text-default  text-[12px]">
              <span> {view}k</span>
              <Eye />
            </span>
            <span className="w-[50%] flex flex-row items-center justify-end gap-1 text-default text-[12px] capitalize">
              <Map /> {location}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;

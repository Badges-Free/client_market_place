import React from "react";
import Category from "../function/Category";
import { Link } from "react-router-dom";
import Loading from"../component/loading/Loading"
function CategoryProducts() {
  const { data, loading, error } = Category({
    url: "https://seyhashop.onrender.com/categories",
  });
  if (loading) {
    return <Loading/>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <div className="flex flex-col gap-2 w-full mt-3 pb-2.5 ">
        <h4 className="text-gray-700 capitalize font-[500]">
          categories product
        </h4>
        <div className=" grid grid-cols-4 gap-3 ">
          {data.map((category) => (
            <Link
              to={category.name}
              key={category.id}
              className="h-fit flex flex-col justify-center items-center gap-1  bg-white shadow-lg capitalize text-[10px] md:text-[16px] px-2 py-2 rounded-[8px] text-gray-700 font-[500]"
            >
              <img
                src={`https://seyhashop.onrender.com/` + category.image}
                alt=""
                width="28px"
              />
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoryProducts;

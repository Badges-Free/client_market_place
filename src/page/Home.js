import React from "react";
import Category from "../function/Category";

function Home() {
  const { data, loading, error } = Category({
    url: "https://seyhashop.onrender.com/categories",
  });
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <div className="flex flex-row justify-between gap-2 min-w-full overflow-x-scroll no-scrollbar mt-5 px-5 pb-2.5 ">
        
        {data.map((category) => (
          <div key={category.id} className=" w-[200vh]  h-fit bg-blue-400 capitalize text-[14px] md:text-[16px] px-4 py-2 rounded-[25px] text-white font-[400]">{category.name}</div>
        ))}
      </div>
    </div>
  );
}

export default Home;

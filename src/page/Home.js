import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import CategoryProducts from "./CategoryProducts";
import ItemsList from "../component/menu/ItemsList";
import axios from "axios";

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`https://seyhashop.onrender.com/categories`)
      .then((result) => {
        setCategories(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-full 2xl:w-[1440px] 2xl:px-0 px-5 py-5 m-auto max-h-[calc(100vh-80px)]  ">
      {isMobile ? <CategoryProducts /> : ""}

      <div className="w-full flex flex-row gap-5 ">
        {!isMobile ? <ItemsList data={categories} /> : ""}
        <div className={isMobile ? "w-full bg-slate-400" : "w-[80%] bg-slate-400"}> heo</div>
      </div>
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import CategoryProducts from "./CategoryProducts";
import ItemsList from "../component/menu/ItemsList";
import axios from "axios";
import ProductItem from "../component/Item/ProductItem";
import InfiniteScroll from "react-infinite-scroll-component";
function Home() {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

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

  const getProduct = async () => {
  await  axios
      .get(`https://seyhashop.onrender.com/products?_page=${page}&_limit=10`)
      .then((result) => {
       
        setProduct([...product, ...result.data]);
        setPage(page + 1);
        setHasMore(() => (result.data.length === 0 ? false : true));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="w-full 2xl:w-[1440px] 2xl:px-0 px-5 py-5 m-auto  ">
      {isMobile ? <CategoryProducts /> : ""}

      <div className="w-full flex flex-row gap-5 ">
        {!isMobile ? <ItemsList data={categories} /> : ""}
        <div
          className={
            isMobile
              ? "w-full "
              : "w-[80%] "
          }
        >
          <InfiniteScroll
            dataLength={product.length}
            next={getProduct}
            hasMore={hasMore}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {product.map((item) => (
                <ProductItem key={item.id} {...item} />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}

export default Home;

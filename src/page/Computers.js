// import axios from "axios";
import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductItem from "../component/Item/ProductItem";
import Loading from "../component/loading/Loading";
import { ApiRequest } from "../ApiRequest";
import axios from "axios";

function Computers() {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Define the URL to your server endpoint for fetching users
    const apiUrl = 'http://localhost:8080/api/v1/products'; // Replace with the correct URL

    // Make a GET request to fetch users
    axios
      .get(apiUrl,{
        withCredentials: true,
      })
      .then((response) => {
       console.log(response.data)// Assuming the response data is an array of users
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);

// const fetch = async () => {
//   try{
//     const response = await ApiRequest("GET","/users");
//     console.log(response.success)
//   }catch(error){
//     console.log(error)
//   }
// }


  const fetchProduct = async () => {
    try {
      const responseData = await ApiRequest(
        "GET",
        `products?categoryId=4&_page=${page}&_limit=10`
      );
      console.log(responseData);
      setProduct([...product, ...responseData]);
      setPage(page + 1);
      setHasMore(() => (responseData.length === 0 ? false : true));
    } catch (error) {}
  };

  useEffect(() => {
    // fetch()
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // delay loading
  function handleLoadMore() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      fetchProduct();
    }, 1000);
  }
  return (
    <div className="w-full 2xl:w-[1440px] 2xl:px-0 px-5 py-5 m-auto  ">
      <div className={isMobile ? "w-full " : "w-[80%] "}>
        <InfiniteScroll
          dataLength={product.length}
          next={handleLoadMore}
          hasMore={hasMore}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {product.map((item) => (
              <ProductItem key={item.id} {...item} />
            ))}
          </div>
        </InfiniteScroll>

        {isLoading && <Loading />}
      </div>
    </div>
  );
}

export default Computers;

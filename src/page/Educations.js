import axios from "axios";
import React,{useState, useEffect} from "react";
import { isMobile } from "react-device-detect";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductItem from "../component/Item/ProductItem";
import Loading from "../component/loading/Loading";

function Educations
() {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);


    // fetch product
    const fetchProduct = () => {
        return axios
          .get(`https://seyhashop.onrender.com/products?categoryId=10&_page=${page}&_limit=10`)
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
        fetchProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    
      // delay loading
      const handleLoadMore = () => {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          fetchProduct();
        }, 1000);
      };
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

export default Educations
;

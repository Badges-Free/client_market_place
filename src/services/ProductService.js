import { useState } from "react";
import axios from "axios";

function ProductService() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  axios.get(`https://seyhashop.onrender.com/products?_page=${page}&_limit=10`)
    .then((result) => {
      setProducts([...products, ...result.data]);
      setPage(page + 1);
      setHasMore(() => (result.data.length === 0 ? false : true));
    })
    .catch((err) => {
      console.log(err);
    });

  return { hasMore, products };
}

export default ProductService;

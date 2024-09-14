import "./Sort.scss";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { sortProducts } from "@/store/products/productsSlice";

const Sort = () => {
  const [activeSort, setActiveSort] = useState("name");

  const dispatch = useDispatch();

  return (
    <div className="sort">
      <button
        onClick={() => {
          setActiveSort("title");

          dispatch(sortProducts("title"));
        }}
        className={`sort__button button-ghost ${
          activeSort === "title" ? "active" : ""
        }`}
      >
        Name
      </button>
      <button
        onClick={() => {
          setActiveSort("price");

          dispatch(sortProducts("price"));
        }}
        className={`sort__button button-ghost ${
          activeSort === "price" ? "active" : ""
        }`}
      >
        Price
      </button>
      <button
        onClick={() => {
          setActiveSort("stock");

          dispatch(sortProducts("stock"));
        }}
        className={`sort__button button-ghost ${
          activeSort === "stock" ? "active" : ""
        }`}
      >
        Stock
      </button>
    </div>
  );
};

export default Sort;

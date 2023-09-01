import React from "react";
import Item from "./Item";

const ItemsList = ({ data }) => {
  return (
    <div className="w-[20%] p-4 bg-white rounded-xl">
      <ul className="nav flex flex-col overflow-hidden">
        {data.map((item) => (
          <li className="nav" key={item.id}>
            <Item {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;

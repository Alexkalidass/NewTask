import React, { useState } from "react";
import "./Fiftyproducts.css";
import { assets, food_list } from "../../assets/assets";

const Fiftyproducts = () => {
  const [itemCounts, setItemCounts] = useState({});

  const incrementItemCount = (index) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [index]: (prevCounts[index] || 0) + 1,
    }));
  };

  const decrementItemCount = (index) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [index]: Math.max((prevCounts[index] || 0) - 1, 0),
    }));
  };

  return (
    <div className="product-display">
      <h1>Products Detail</h1>
      <div className="menu-list">
        {food_list.map((item, index) => {
          const itemCount = itemCounts[index] || 0;
          return (
            <div className="product-list" key={index}>
              <div>
                <img className="product-img" src={item.image} alt={item.name} />

                {!itemCount ? (
                  <img
                    className="add"
                    onClick={() => incrementItemCount(index)}
                    src={assets.add_icon_white}
                    alt="Add"
                  />
                ) : (
                  <div className="product-item-count">
                    <img
                      onClick={() => decrementItemCount(index)}
                      src={assets.remove_icon_red}
                      alt="Remove"
                    />
                    <p>{itemCount}</p>
                    <img
                      onClick={() => incrementItemCount(index)}
                      src={assets.add_icon_green}
                      alt="Add"
                    />
                  </div>
                )}
              </div>
              <div className="product-info">
                <div className="name-rating">
                  <p>{item.name}</p>
                  <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className="product-desc">{item.description}</p>
                <p className="product-price">₹{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fiftyproducts;

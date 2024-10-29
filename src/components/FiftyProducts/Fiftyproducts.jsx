import React, { useState, useEffect } from "react";
import "./Fiftyproducts.css";
import { assets, food_list } from "../../assets/assets";
import { DownloadOutlined } from "@ant-design/icons";

const Fiftyproducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [loading, setLoading] = useState(false);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight &&
      !loading
    ) {
      setLoading(true);

      setTimeout(() => {
        setVisibleProducts((prevVisible) =>
          Math.min(prevVisible + 4, food_list.length)
        );
        setLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="product-display">
      <h1>Products Detail</h1>
      <div className="menu-list">
        {food_list.slice(0, visibleProducts).map((item, index) => (
          <div className="product-list" key={index}>
            <div>
              <img className="product-img" src={item.image} alt={item.name} />
            </div>
            <div className="product-info">
              <div className="name-rating">
                <p>{item.name}</p>
                <img src={assets.rating_starts} alt="Rating" />
              </div>
              <div className="price-order">
                <p className="product-price">${item.price}</p>
                <p className="original-price">${item.original_price}</p>
                <button className="add">
                  <DownloadOutlined />
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show loading indicator */}
      {loading && <p>Loading more products...</p>}
    </div>
  );
};

export default Fiftyproducts;

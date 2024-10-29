import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dailysell.css";
import { Progress } from "antd";
import { assets, best_sell } from "../../assets/assets";

const Dailysell = () => {
  const navigate = useNavigate();

  const handleClaimItem = () => {
    navigate("/cart");
  };

  return (
    <div className="dailysell-container">
      <div className="dailysell-items">
        {best_sell.map((item) => (
          <div className="dailysell-item" key={item._id}>
            <div className="save-box">Save {item.save}%</div>{" "}
            <img src={item.image} alt={item.name} className="dailysell-image" />
            <p>{item.name}</p>
            <div className="rating-container">
              <img
                src={assets.rating_starts}
                alt="Rating Stars"
                className="rating-stars"
              />
              <span className="rating-number">[4]</span>
            </div>
            <div className="price-container">
              <span className="item-price">${item.price}</span>
              <span className="item-original-price">
                ${item.original_price}
              </span>
            </div>
            <Progress percent={item.progress} strokeColor="#FF5C00" />
            <p>
              Sold: {item.sold}/{item.total}
            </p>
            <button onClick={handleClaimItem}>Claim Item</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dailysell;

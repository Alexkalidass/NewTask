import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dailysell.css";
import { best_sell } from "../../assets/assets";

const Dailysell = () => {
  const navigate = useNavigate();

  const handleClaimItem = () => {
    navigate("/cart");
  };

  return (
    <div className="dailysell-container">
      <h3>Daily Best Sells</h3>
      <div className="dailysell-items">
        {best_sell.map((item) => (
          <div className="dailysell-item" key={item._id}>
            <img src={item.image} alt={item.name} className="dailysell-image" />
            <p>{item.name}</p>
            {item.offer && <p className="offer">Offer: {item.offer}% off</p>}
            <button onClick={handleClaimItem}>Claim Item</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dailysell;

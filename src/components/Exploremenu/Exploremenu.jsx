import React, { useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Exploremenu.css";
import { menu_list } from "../../assets/assets";
import { assets } from "../../assets/assets";

const Exploremenu = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  const handleShopNowClick = () => {
    navigate("/");
  };

  return (
    <div className="explore-menu">
      <button className="scroll-btn left-btn" onClick={scrollLeft}>
        <img src={assets.profile_icon} alt="Previous" />
      </button>
      <div className="explore-menu-list" ref={scrollRef}>
        {menu_list.map((item, index) => {
          return (
            <div className="explore-menu-list-item" key={index}>
              <img className="images" src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
              <img src={assets.rating_starts} alt="" />
              <div className="price-order">
                <p>₹ {item.menu_price}</p>
                <button onClick={handleShopNowClick}>Shop Now</button>{" "}
              </div>
            </div>
          );
        })}
      </div>
      <button className="scroll-btn right-btn" onClick={scrollRight}>
        <img src={assets.parcel_icon} alt="Next" />
      </button>
    </div>
  );
};

export default Exploremenu;

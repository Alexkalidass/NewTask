import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Exploremenu.css";
import { menu_list } from "../../assets/assets";
import { assets } from "../../assets/assets";
import { DownloadOutlined } from "@ant-design/icons";

const Exploremenu = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 5;

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (currentIndex < menu_list.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1);
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const handleShopNowClick = () => {
    navigate("/");
  };

  return (
    <div className="explore-menu">
      <button
        className="scroll-btn left-btn"
        onClick={scrollLeft}
        disabled={currentIndex === 0}
      >
        <img src={assets.profile_icon} alt="Previous" />
      </button>
      <div className="explore-menu-list" ref={scrollRef}>
        {menu_list
          .slice(currentIndex, currentIndex + itemsToShow)
          .map((item, index) => (
            <div className="explore-menu-list-item" key={index}>
              <img className="images" src={item.menu_image} alt="" />
              <h4>{item.menu_name}</h4>
              <img src={assets.rating_starts} alt="" />
              <div className="price-order">
                <p className="menu-price">$ {item.menu_price}</p>{" "}
                {/* Menu price */}
                <p className="original-price">${item.original_price}</p>{" "}
                {/* Original price */}
                <button onClick={handleShopNowClick}>
                  <DownloadOutlined />
                  Add
                </button>
              </div>
            </div>
          ))}
      </div>
      <button
        className="scroll-btn right-btn"
        onClick={scrollRight}
        disabled={currentIndex >= menu_list.length - itemsToShow}
      >
        <img src={assets.parcel_icon} alt="Next" />
      </button>
    </div>
  );
};

export default Exploremenu;

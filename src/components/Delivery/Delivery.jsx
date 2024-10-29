import React from "react";
import "./Delivery.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";

const Delivery = () => {
  const navigate = useNavigate();

  return (
    <div className="delivery-container">
      <div className="delivery-images">
        <div className="image-container">
          <img
            src={assets.header_img}
            alt="Delivery Image 1"
            className="image"
          />
          <div className="content-overlay">
            <h2>FREE DELIVERY FOR $50</h2>
            <p>
              Enjoy fast and free delivery
              <br /> when you shop over $50.
            </p>
            <button onClick={() => navigate("/")}>
              Shop Now <ArrowRightOutlined />
            </button>
          </div>
        </div>

        {/* Second Image with content */}
        <div className="image-container">
          <img
            src={assets.header_img3}
            alt="Delivery Image 2"
            className="image"
          />
          <div className="content-overlay">
            <h2>Organic Food</h2>
            <p>
              Discover fresh and organic ingredients <br /> delivered to your
              door.
            </p>
            <button onClick={() => navigate("/")}>
              Order Now <ArrowRightOutlined />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;

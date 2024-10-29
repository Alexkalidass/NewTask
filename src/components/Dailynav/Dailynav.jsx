import React from "react";
import "./Dailynav.css";
import { assets } from "../../assets/assets";
import { Space, TimePicker } from "antd";
import dayjs from "dayjs";

const Dailynav = () => {
  return (
    <div className="dailynav-container">
      <div className="dailynav-content">
        <h1>Daily Best Sells</h1>
        <p className="first-color">Featured</p>
        <p className="add-color">Popular</p>
        <p className="add-color">New</p>
        <button>
          Expires in:{" "}
          <span className="time-picker">
            <TimePicker
              defaultValue={dayjs("12:08:23", "HH:mm:ss")}
              size="large"
              style={{
                backgroundColor: "#FF5C00",
                color: "white",
                border: "none",
              }}
            />
          </span>
        </button>
      </div>
      <div className="dailynav-icons">
        <img src={assets.profile_icon} alt="Profile" />
        <img src={assets.parcel_icon} alt="Parcel" />
      </div>
    </div>
  );
};

export default Dailynav;

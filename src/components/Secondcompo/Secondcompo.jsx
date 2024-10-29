import React from "react";
import "./Secondcompo.css";
import {
  DiffOutlined,
  EllipsisOutlined,
  SignatureOutlined,
} from "@ant-design/icons"; // Import icons

const Secondcompo = () => {
  return (
    <div className="container">
      <h2>Expenses Goals by Category</h2>
      <div className="grid-container">
        {/* Top Boxes */}
        <div className="box">
          <EllipsisOutlined className="ellipsis-icon" />
          <div className="content">
            <div className="icon-container">
              <DiffOutlined className="float-btn" />
            </div>
            <p>Housing</p>
          </div>
          <h4>$101.00</h4>
          <button className="adjust-btn">
            Adjust
            <SignatureOutlined style={{ marginLeft: "4px" }} />
          </button>
        </div>

        <div className="box">
          <EllipsisOutlined className="ellipsis-icon" />
          <div className="content">
            <div className="icon-container">
              <DiffOutlined className="float-btn" />
            </div>
            <p>Food</p>
          </div>
          <h4>$101.00</h4>
          <button className="adjust-btn">
            Adjust
            <SignatureOutlined style={{ marginLeft: "4px" }} />
          </button>
        </div>

        <div className="box">
          <EllipsisOutlined className="ellipsis-icon" />
          <div className="content">
            <div className="icon-container">
              <DiffOutlined className="float-btn" />
            </div>
            <p>Transportation</p>
          </div>
          <h4>$101.00</h4>
          <button className="adjust-btn">
            Adjust
            <SignatureOutlined style={{ marginLeft: "4px" }} />
          </button>
        </div>
      </div>

      <div className="grid-container">
        <div className="box">
          <EllipsisOutlined className="ellipsis-icon" />
          <div className="content">
            <div className="icon-container">
              <DiffOutlined className="float-btn" />
            </div>
            <p>Entertainment</p>
          </div>
          <h4>$101.00</h4>
          <button className="adjust-btn">
            Adjust
            <SignatureOutlined style={{ marginLeft: "4px" }} />
          </button>
        </div>

        <div className="box">
          <EllipsisOutlined className="ellipsis-icon" />
          <div className="content">
            <div className="icon-container">
              <DiffOutlined className="float-btn" />
            </div>
            <p>Shopping</p>
          </div>
          <h4>$101.00</h4>
          <button className="adjust-btn">
            Adjust
            <SignatureOutlined style={{ marginLeft: "4px" }} />
          </button>
        </div>

        <div className="box">
          <EllipsisOutlined className="ellipsis-icon" />
          <div className="content">
            <div className="icon-container">
              <DiffOutlined className="float-btn" />
            </div>
            <p>others</p>
          </div>
          <h4>$101.00</h4>
          <button className="adjust-btn">
            Adjust
            <SignatureOutlined style={{ marginLeft: "4px" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Secondcompo;

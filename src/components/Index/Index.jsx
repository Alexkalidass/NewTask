import React from "react";
import "./Index.css";
import Exploremenu from "../Exploremenu/Exploremenu";
import Delivery from "../Delivery/Delivery";
import Dailysell from "../Dailysell/Dailysell";
import Ratingitems from "../Ratingitems/Ratingitems";
import Dailynav from "../Dailynav/Dailynav";
const Index = () => {
  return (
    <div className="index-baground">
      <Exploremenu />
      <Delivery />
      <Dailynav />
      <Dailysell />
      <Ratingitems />
    </div>
  );
};

export default Index;

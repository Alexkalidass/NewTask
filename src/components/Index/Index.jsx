import React from "react";
import "./Index.css";
import Exploremenu from "../Exploremenu/Exploremenu";
import Delivery from "../Delivery/Delivery";
import Dailysell from "../Dailysell/Dailysell";
import Ratingitems from "../Ratingitems/Ratingitems";
const Index = () => {
  return (
    <div>
      <Exploremenu />
      <Delivery />
      <Dailysell />
      <Ratingitems />
    </div>
  );
};

export default Index;

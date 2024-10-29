// import React from "react";
// import "./Ratingitems.css";

// const Ratingitems = () => {
//   return (
//     <div className="rating-items-container">
//       <h3>Topsels</h3>
//       <h3>Top rated</h3>
//       <h3>Trending Items</h3>
//       <h3>Recently added</h3>
//     </div>
//   );
// };

// export default Ratingitems;

import React from "react";
import {
  top_sells,
  top_rated,
  trending_items,
  recently_added,
  assets,
} from "../../assets/assets";
import "./Ratingitems.css";

const Ratingitems = () => {
  return (
    <div>
      <div className="rating-items-container">
        <h3>Topsells</h3>
        <h3 className="First">Top rated</h3>
        <h3 className="Second">Trending Items</h3>
        <h3 className="Third">Recently added</h3>
      </div>

      <div className="items-section">
        {/* Top Sells */}
        <div className="items-list">
          {top_sells.map((item) => (
            <div className="item-card" key={item._id}>
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-details">
                <p className="item-name">{item.name}</p>
                <div className="item-rating">
                  <img
                    src={assets.rating_starts}
                    alt="Rating Stars"
                    className="rating-stars"
                  />
                  <p className="total-ratings">{item.rating} ratings</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Top Rated */}
        <div className="items-list">
          {top_rated.map((item) => (
            <div className="item-card" key={item._id}>
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-details">
                <p className="item-name">{item.name}</p>
                <div className="item-rating">
                  <img
                    src={assets.rating_starts}
                    alt="Rating Stars"
                    className="rating-stars"
                  />
                  <p className="total-ratings">{item.rating} ratings</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trending Items */}
        <div className="items-list">
          {trending_items.map((item) => (
            <div className="item-card" key={item._id}>
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-details">
                <p className="item-name">{item.name}</p>
                <div className="item-rating">
                  <img
                    src={assets.rating_starts}
                    alt="Rating Stars"
                    className="rating-stars"
                  />
                  <p className="total-ratings">{item.rating} ratings</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recently Added */}
        <div className="items-list">
          {recently_added.map((item) => (
            <div className="item-card" key={item._id}>
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-details">
                <p className="item-name">{item.name}</p>
                <div className="item-rating">
                  <img
                    src={assets.rating_starts}
                    alt="Rating Stars"
                    className="rating-stars"
                  />
                  <p className="total-ratings">{item.rating} ratings</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ratingitems;

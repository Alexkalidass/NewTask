import React, { useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [itemName, setItemName] = useState("");
  const [totalItems, setTotalItems] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const [isCheckout, setIsCheckout] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phoneNumber: "",
  });

  const handleCheckout = (e) => {
    e.preventDefault();
    setIsCheckout(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmitDetails = (e) => {
    e.preventDefault();
    alert(
      `Your order has been placed!\n\nDetails:\nName: ${userDetails.name}\nEmail: ${userDetails.email}\nAddress: ${userDetails.street}, ${userDetails.city}, ${userDetails.state}, ${userDetails.zipCode}, ${userDetails.country}\nPhone: ${userDetails.phoneNumber}`
    );

    setUserDetails({
      name: "",
      email: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      phoneNumber: "",
    });
    setIsCheckout(false);
  };

  const handlePromoSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="cart">
      <div className="cart-details">
        <h2>Cart</h2>
        <form onSubmit={handleCheckout} className="cart-items-title">
          <div>
            <label>Item Name:</label>
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
              className="cart-items-item"
            />
          </div>
          <div>
            <label>Total Items:</label>
            <input
              type="number"
              value={totalItems}
              onChange={(e) => setTotalItems(e.target.value)}
              required
              className="cart-items-item"
            />
          </div>
          <button type="submit">Proceed to Checkout</button>
        </form>

        {isCheckout && (
          <form onSubmit={handleSubmitDetails} className="checkout-form">
            <h3>Enter Your Details</h3>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Street:</label>
              <input
                type="text"
                name="street"
                value={userDetails.street}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>City:</label>
              <input
                type="text"
                name="city"
                value={userDetails.city}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>State:</label>
              <input
                type="text"
                name="state"
                value={userDetails.state}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Zip Code:</label>
              <input
                type="text"
                name="zipCode"
                value={userDetails.zipCode}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Country:</label>
              <input
                type="text"
                name="country"
                value={userDetails.country}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Phone Number:</label>
              <input
                type="text"
                name="phoneNumber"
                value={userDetails.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Place Order</button>
          </form>
        )}
      </div>
      <div className="cart-promocode">
        <p>Have a Promo Code?</p>
        <form onSubmit={handlePromoSubmit} className="cart-promocode-input">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter Promo Code"
            required
          />
          <button type="submit">Proceed To Apply</button>
        </form>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h4>Success!</h4>
            <p>Successfully, your order has been placed.</p>
            <button onClick={handleModalClose}>OK</button>
            <button onClick={handleModalClose}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

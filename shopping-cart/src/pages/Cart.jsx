import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";

const Cart = () => {
  //jo state pdi h usi ko lelo
  const { cart } = useSelector((state) => state);
  const [totalamount, settotalamount] = useState(0);

  //reduce use to total all
  //when ever cart array is changes every time it happens
  useEffect(
    () =>
      settotalamount(
        cart.reduce((accumulator, curr) => accumulator + curr.price, 0)
      ),
    [cart]
  );

  return (
    <div>
      <div className="cart-whole-page">
        {cart.length > 0 ? (
          <div className="cart-both">
            <div className="cart-left">
              {cart.map((item) => {
                return (
                  <div key={item.id} className="cart-left-card">
                    <CartItem item={item} />
                  </div>
                );
              })}
            </div>
            <div className="cart-right">
              <div className="cart-right-1">
                <div className="cart-right-1-1">Your Cart</div>
                <div className="cart-right-1-2">Summary</div>
                <p className="cart-right-1-3">Total items : {cart.length}</p>
              </div>
              <div className="cart-right-2">
                <p>Total Amount - {totalamount}</p>
                <button>Checkout Now</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="cart-both-empty">
            <h1 className="em-cart">Your Cart Is Empty!</h1>
            <NavLink to={"/"}>
              <button className="em-cart-btn">Shop now</button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

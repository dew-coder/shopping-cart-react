import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slice/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  function removefromcart() {
    dispatch(remove(item.id));
    toast.success("Item removed");
  }
  return (
    <div className="cart-item">
      <div className="item-img">
        <img src={item.image} alt="" />
      </div>
      <div className="cart-sec">
        <p className="item-title">{item.title}</p>
        <p className="item-desc">
          {item.description.split(" ").slice(0, 8).join(" ") + "..."}
        </p>
        <div>
          <p className="item-price">${item.price}</p>
          <div className="delete-btn">
            <div onClick={removefromcart}>
              <AiFillDelete />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

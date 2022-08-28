import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";

const Item = ({ item }) => {
  const dispatch = useDispatch();
  function addTocart() {
    dispatch({ type: "addToCart", payload: { ...item, quantity: 1 } });
  }
  return (
    <div className="item">
      <img src={item.image} alt="" />
      <h4 className="name">{item.name}</h4>
      <h4 className="price">
        <b>Price : </b>₹{item.price}
      </h4>
      <div className="d-flex justify-content-end">
        <Button onClick={() => addTocart()}>ADD TO CART</Button>
      </div>
    </div>
  );
};

export default Item;

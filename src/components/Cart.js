import React from "react";
import Total from "./Total";

const Cart = props => {
  return (
    <div>
      {props.addedProduct.map(item => (
        <li className="list">
          <h3 className="product">{item.title}</h3>
          <span className="price">{item.price} $</span>
        </li>
      ))}
      <hr />
      <Total data= {props.addedProduct.price} />
    </div>
  );
};

export default Cart;

import React from "react";

const Product = props => {
  return (
    <li className="list">
      <h3 className="product">{props.title}</h3>
      <span className="price">{props.price} $</span>
      <button
        className="btn"
        onClick={() => props.addToCart(props)}
      >
        Add to cart
      </button>
    </li>
  );
};

export default Product;

import React from "react";

const Header = (props) => {
  return (
    <header className="header">
      <span onClick = {()=> props.checkCart('product')}>CART</span>
      <div>
        <span onClick={()=> props.checkCart('cart')}>cart</span> {""}
      <span className="cart">{props.data.length}</span>
      </div>
  
    </header>
  );
};

export default Header;

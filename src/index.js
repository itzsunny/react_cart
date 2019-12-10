import React from "react";
import { render } from "react-dom";

import data from "./data.json";
import Product from "./components/product";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Total from './components/Total';
import "./stylesheets/style.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      active: "product"
    };
  }

  handleAddToCart = data => {
    this.setState({ cart: this.state.cart.concat(data) });
  };

  handleCart = comp => {
    this.setState({ active: comp });
  };

  render() {
    return (
      <div>
        <Header data={this.state.cart} checkCart={this.handleCart} />
        {this.state.active === "product" ? (
          <>
            {data.products.map(item => (
              <Product {...item} addToCart={this.handleAddToCart} />
            ))}
          </>
        ) : (
          <>
            <Cart addedProduct={this.state.cart} />
          </>
        )}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

import React from "react";

const Total = (props) => {
  return (
    <div className = "list">
      {props.reduce((accum,item)=> {
          return accum+item
      },0)}
      <p>total</p>
      <span>total value</span>
    </div>
  );
};

export default Total;
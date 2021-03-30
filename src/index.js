import React from "react";
import ReactDOM from "react-dom";

const name = "Angelaa";
const num = 7;

// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));

//  becarful we can have only one HTML, div is the best to hold them to gether
// ReactDOM.render(<h1>Hello {name}!</h1>, document.getElementById("root"));

// this how you inject javaScript into HTML code
ReactDOM.render(
  <div>
    <h1>Hello {name}</h1>
    <p>your number is {num}</p>
  </div>,
  document.getElementById("root")
);

import React, { Component } from "react";
import MainNav from "./components/MainNav";
import Image from "./components/Image";
import data from "./data.js/imgData";

import "./App.css";

let randomImage = data[Math.floor(Math.random() * data.length)];
console.log(randomImage.url);

const imageComponent = data.map(pic => {
  return (
    <div className="col-md-3 mb-3" key={pic.id}>
      <Image url={randomImage.url} />
    </div>
  );
});

class App extends Component {
  render() {
    return (
      <div>
        <MainNav />
        <div className="conatiner text-center">
          <div className="row mt-3">{imageComponent}</div>
        </div>
      </div>
    );
  }
}

export default App;

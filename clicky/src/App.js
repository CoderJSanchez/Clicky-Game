import React, { Component } from "react";
import MainNav from "./components/MainNav";
import Image from "./components/Image";
import data from "./data.js/imgData";

import "./App.css";

for (let i = 0; i < data.length; i++) {}
let randomImage = data[Math.floor(Math.random() * data.length)];
console.log(randomImage.url);

const imageComponent = data.map(pic => {
  return (
    <div className="col-md-3 mb-3" key={pic.id}>
      <Image url={pic.url} />
    </div>
  );
});

class App extends Component {
  state = {
    score: 0
  };
  render() {
    return (
      <div>
        <MainNav score={{ score: this.state }} />
        <div className="conatiner text-center">
          <div className="row mt-3">{imageComponent}</div>
        </div>
      </div>
    );
  }
}

export default App;

// psudo code
//Currently I can generate my images from my data  my using map() but I needed a way to randomize it.
//I felt that somehow I needed to loop my data and create a random url for each item mapped.
//For the score I think I needed to add to add an onClick() to the pictures that somehow adds 1 each time the image is clicked
//and then randomizes the images again.

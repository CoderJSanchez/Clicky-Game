import React, { Component } from "react";

class Image extends Component {
  state = {};
  render() {
    return <img src={this.props.url} alt="square" />;
  }
}

export default Image;

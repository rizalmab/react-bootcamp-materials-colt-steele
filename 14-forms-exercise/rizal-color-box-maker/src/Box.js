import React, { Component } from "react";

class Box extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            height: `${this.props.box.height}px`,
            width: `${this.props.box.width}px`,
            backgroundColor: this.props.box.color,
            display: "inline-block",
          }}
        ></div>
        <button>X</button>
      </div>
    );
  }
}

export default Box;

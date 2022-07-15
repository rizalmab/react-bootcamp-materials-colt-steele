import React, { Component } from "react";
import ChildBox from "./ChildBox";

class ParentBox extends Component {
  static defaultProps = {
    numBoxes: 18,
  };

  render() {
    return (
      <div className="ParentBox">
        {Array.from({ length: this.props.numBoxes }).map(() => {
          return <ChildBox />;
        })}
      </div>
    );
  }
}

export default ParentBox;

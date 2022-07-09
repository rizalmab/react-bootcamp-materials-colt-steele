import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
    };
    this.addBox = this.addBox.bind(this);
  }
  addBox(boxObj) {
    this.setState((st) => ({ boxes: [...st.boxes, boxObj] }));
  }
  render() {
    let boxes = this.state.boxes.map((box) => <Box box={box}></Box>);
    return (
      <div>
        <h1>Color Box Maker Thingy - Rizal</h1>
        <NewBoxForm addBox={this.addBox} />
        {boxes}
      </div>
    );
  }
}

export default BoxList;

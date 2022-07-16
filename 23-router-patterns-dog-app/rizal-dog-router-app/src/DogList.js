import React, { Component } from "react";
import Dog from "./Dog";

class DogList extends Component {
  render() {
    const { dogs } = this.props;
    return (
      <div className="DogList">
        <h1 className="display-1 text-center">Dog List!</h1>
        <div className="container">
          <div className="row">
            {dogs.map((dog, idx) => {
              return <Dog dog={dog} key={idx} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default DogList;

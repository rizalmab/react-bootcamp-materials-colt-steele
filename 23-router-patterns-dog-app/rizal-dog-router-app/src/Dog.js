import React, { Component } from "react";
import "./Dog.css";
import { Link } from "react-router-dom";

class Dog extends Component {
  render() {
    const { dog } = this.props;
    return (
      <div className="Dog col-lg-4 text-center">
        <img src={dog.src} alt={dog.name} />
        <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
      </div>
    );
  }
}

export default Dog;

import React, { Component } from "react";
import DogList from "./DogList";
import "./App.css";
import MyNavbar from "./Navbar";
import Dog from "./Dog";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import whiskey from "./imgs/whiskey.jpg";
import hazel from "./imgs/hazel.jpg";
import tubby from "./imgs/tubby.jpg";
import DogDetails from "./DogDetails";

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!",
        ],
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs.",
        ],
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food.",
        ],
      },
    ],
  };
  render() {
    return (
      <div className="App">
        <MyNavbar />
        <Switch>
          <Route
            exact
            path="/dogs"
            render={() => <DogList dogs={this.props.dogs} />}
          />
          {/* <Route
            exact
            path="/dogs/whiskey"
            render={(routeProps) => <DogDetails dogs={this.props.dogs} />}
          /> */}
          <Route
            exact
            path="/dogs/:name"
            render={(routeProps) => (
              <DogDetails {...routeProps} dogs={this.props.dogs} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

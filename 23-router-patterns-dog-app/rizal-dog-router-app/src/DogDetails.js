import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class DogDetails extends Component {
  render() {
    const { dogs, match } = this.props;
    const name = match.params.name;
    const [dog] = dogs.filter((dog) => dog.name === name);
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={dog.src} />
          <Card.Body>
            <Card.Title>{dog.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default DogDetails;

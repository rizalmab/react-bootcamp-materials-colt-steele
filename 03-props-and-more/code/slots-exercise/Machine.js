class Machine extends React.Component {
  render() {
    const { p1, p2, p3 } = this.props;

    const isMatch = p1 === p2 && p2 === p3;

    return (
      <div>
        <p>
          {p1}
          {p2}
          {p3}
        </p>
        {isMatch ? "You win!" : "You lose..."}
      </div>
    );
  }
}

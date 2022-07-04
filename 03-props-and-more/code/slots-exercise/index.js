class App extends React.Component {
  render() {
    return (
      <div>
        <Machine p1="🍎" p2="🍎" p3="🍎" />
        <Machine p1="🍌" p2="🍌" p3="🍎" />
        <Machine p1="🍎" p2="🍇" p3="🍌" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

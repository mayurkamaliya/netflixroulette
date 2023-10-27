import React from "react";
import "./counter.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.initialValue || 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  };

  getValue() {
    return this.state.counter;
  }

  render() {
    const counterContainer = React.createElement(
      "div",
      { className: "counter-container" },
      React.createElement("p", null, "Counter Value: " + this.state.counter),
      React.createElement(
        "button",
        { className: "counter-button-dec", onClick: this.decrement },
        "Decrement"
      ),
      React.createElement(
        "button",
        { className: "counter-button-inc", onClick: this.increment },
        "Increment"
      )
    );
    return counterContainer;
  }
}

export default Counter;

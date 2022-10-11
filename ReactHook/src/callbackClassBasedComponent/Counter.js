import React from "react";
import Increment from "./Increment";
import Decrement from "./Decrement";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        {this.state.count}
        <Increment
          count={this.state.count}
          handleIncrement={this.handleIncrement}
        />
        <Decrement
          count={this.state.count}
          handleDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;

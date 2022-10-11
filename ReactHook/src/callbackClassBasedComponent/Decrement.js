import React from "react";

class Decrement extends React.Component {
  //callback function - used for updating state value from child to parent
  handleClick = () => {
    this.props.handleDecrement();
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Decrement </button>
      </div>
    );
  }
}
export default Decrement;

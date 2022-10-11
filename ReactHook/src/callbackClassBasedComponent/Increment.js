import React from "react";

class Increment extends React.Component {
  //callback function - used for updating state value from child to parent
  handleClick = () => {
    this.props.handleIncrement();
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
export default Increment;

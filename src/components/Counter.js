import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    imageUrl: "https://picsum.photos/200"
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <img src={this.state.imageUrl} alt="" />
        </div>
        <h2>{this.formatCount()}</h2>
        <button>Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;

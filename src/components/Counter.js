import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3", "tag4"]
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1})
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>No tags</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <img src={this.state.imageUrl} alt="" />
        </div>
        <div className={this.getBadgeClasses()}>{this.formatCount()}</div>
        <button onClick={this.handleIncrement} className="btn btn-secondary">Increment</button>
        {this.renderTags()}
      </React.Fragment>
    );
  }
}

export default Counter;

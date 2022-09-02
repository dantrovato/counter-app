import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: (this.state.count += 1) });
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn brn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count ? "primary" : "warning";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count ? count : "zero";
  }
}

export default Counter;

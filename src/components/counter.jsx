import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

class Counter extends Component {
  componentDidUpdate(previousProps, previousState) {
    console.log("prev", previousProps.counter.value);
    console.log("current", this.props.counter.value);
    // if new version is different from new version we can make ajax call
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter  - Rendered");

    return (
      <div className="container">
        <div className="row">
          <div className="col-1">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn brn-secondary btn-sm"
            >
              +
            </button>
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn brn-secondary btn-sm m-2"
              disabled={this.props.counter.value < 1}
            >
              -
            </button>
            <i
              data-heart-oId={this.props.counter.id}
              className="fa fa-heart-o m-2"
              aria-hidden="true"
              onClick={() => this.props.onHeart(this.props.counter.id)}
            ></i>
            <i
              style={{ display: "none" }}
              data-heartId={this.props.counter.id}
              className="fa fa-heart m-2"
              aria-hidden="true"
              onClick={() => this.props.onHeart(this.props.counter.id)}
            ></i>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm"
            >
              x
            </button>
          </div>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value ? "primary" : "warning";
    return classes;
  }

  formatCount() {
    const value = this.props.counter.value;
    // const { value } = this.props.counter;
    return value ? value : "zero";
  }
}

export default Counter;

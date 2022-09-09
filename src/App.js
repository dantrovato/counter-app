import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 7 },
      { id: 2, value: 9 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    // Ajax call
    // this.setState({});
    console.log("App - Mounted");
  }

  handleReset = () => {
    console.log("reset");
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value > 0) {
      counters[index].value--;
      this.setState({ counters });
    }
  };

  handleHeart = (counterId) => {
    const heart = document.querySelector(`i[data-heartId="${counterId}"]`);
    const heart_o = document.querySelector(`i[data-heart-oId="${counterId}"]`);
    if (heart.style.display === "none") {
      heart.style.display = "inline-block";
      heart_o.style.display = "none";
    } else {
      heart_o.style.display = "inline-block";
      heart.style.display = "none";
    }
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onHeart={this.handleHeart}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

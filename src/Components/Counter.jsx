import React, { Component, useState } from "react";

class Counter extends Component {
  state = {
    value: 10,
  };

  render() {
    let doIncrement = () => {
      this.setState({ value: this.state.value - 1 });
    };

    let dodecrement = () => {
      this.setState({ value: this.state.value + 1 });
    };

    return (
      <>
        <div className="mainDesign">
          <h3>Simple React Counter App</h3>
          <div>
            <button className="btnDesign" onClick={doIncrement}>
              -
            </button>
            <button className="btnDesign" onClick={dodecrement}>
              +
            </button>
          </div>
          <div>
            <p>
              <span>Result : </span>
              <span>{this.state.value}</span>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Counter;

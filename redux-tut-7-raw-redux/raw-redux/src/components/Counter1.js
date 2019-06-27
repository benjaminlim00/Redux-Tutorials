import React from "react";
import store from "../redux";

console.log("store", store);

class Counter1 extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  handleClick = () => {
    const action = { type: "INCREMENT" };
    store.dispatch(action);
  };

  componentDidMount() {
    this.unsub = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsub();
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>increment</button>
      </div>
    );
  }
}

export default Counter1;

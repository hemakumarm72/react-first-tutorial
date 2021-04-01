import React from 'react';
import './state.css';

class Counter extends React.Component {
  state = { count: 0 }

  increment = () => this.setState((prevState) => ({ count: prevState.count + 1 }));

  decrement = () => this.setState((prevState) => ({ count: prevState.count - 1 }));

  // increment = () => this.setState(({ count }) => ({ count: count + 1}))

  render() {
    const { count } = this.state;

    return (

      <div className="counter">
        <h3>counting</h3>
        <button type="button" onClick={this.increment}>click +</button>

        <p>{count}</p>
        <button type="button" onClick={this.decrement}>click -</button>
      </div>
    );
  }
}

function State() {
  return (
    <div className="state_contain">

      <Counter />
    </div>
  );
}

export default State;

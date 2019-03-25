import React from "react";
import { connect } from "react-redux";

import incrementAction from "../store/actions/increment";
import decrementAction from "../store/actions/decrement";

const Counter = ({ counter, onIncrement, onDecrement }) => {
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

const mapStateToProps = state => ({ counter: state.counter });

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(incrementAction()),
  onDecrement: () => dispatch(decrementAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

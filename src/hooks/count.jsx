import React, { useReducer } from "react";
const initSate = {
  count: 0
};

const constants = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT"
};

const reducer = (state, action) => {
  switch (action.type) {
    case constants.INCREMENT:
      return { ...state, count: state.count + 1 };
    case constants.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return { state };
  }
};

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initSate);

  const handleAdd = () => {
    dispatch({ type: constants.INCREMENT });
  };

  const handleRduce = () => {
    dispatch({ type: constants.DECREMENT });
  };

  return (
    <>
      <h1>Counter</h1>
      <h1>{state.count}</h1>
      <button onClick={() => handleRduce()}>Reduce</button>
      <button onClick={() => handleAdd()}>Add</button>
    </>
  );
};

import React, { useReducer, useState } from "react";

// useReducer = 상황에 따라 다양한 상태를 다른 값으로 업데이트할 때 사용

function reducer(state, action) {
  //action.type 에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}
const Counter = () => {
  // const [value, setValue] = useState(0);
  // 첫 파라미터에 reducer 두 번째 파라미터에 기본값
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>
      </p>
      {/* <button onClick={() => setValue(value + 1)}>add</button>
      <button onClick={() => setValue(value - 1)}>minus</button> */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;

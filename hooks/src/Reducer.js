import React, { useReducer, useState } from "react";

// useReducer = 상황에 따라 다양한 상태를 다른 값으로 업데이트할 때 사용

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}
const Reducer = () => {
  // const [value, setValue] = useState(0);
  // 첫 파라미터에 reducer 두 번째 파라미터에 기본값
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickName: "",
  });
  const { name, nickName } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };
  return (
    <div>
      <div>
        <input name='name' value={name} onChange={onChange} />
        <input name='nickName' value={nickName} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickName}
        </div>
      </div>
    </div>
  );
};

export default Reducer;

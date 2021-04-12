import React, { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  //useEffect = 리액트 컴포넌트가 렌더링될 대마다 특정 작업을 수행하도록 설정
  //            componentDidmount, --update를 합친 형태랑 비슷
  //            [] 넣으면 처음 렌더링될때만 실행됨
  //            [name] > name값이 변경될때만 실행
  useEffect(() => {
    console.log("렌더링 완료");
    console.log({
      name,
      nickname,
    });
    return () => {
      console.log("clean up");
      console.log(name);
    };
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickname(e.target.value);
  };
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickName} />
      </div>
      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;

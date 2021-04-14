import React from 'react';
import styled, { css } from 'styled-components';

// styled-component와 css/sass 비교 했을 때, styled-component는 props 값으로
// 전달해 주는 값을 쉽게 스타일 적용 가능

const Box = styled.div`
  /*props 로 넣어준 값을 직접 전달해 줄 수 있다*/
  background: ${(props) => props.color || 'blue'};
  padding: 1rem;
  display: flex;
`;
const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  /*inverted 값이 true 일때 특정 스타일을 부여*/
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  return (
    <Box color='black'>
      <Button>안녕하세요</Button>
      <Button inverted={true}>테두리만</Button>
    </Box>
  );
};

export default StyledComponent;

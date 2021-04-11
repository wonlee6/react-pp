import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, children, number }) => {
  // 비구조화 할당 문법 = 객체에서 값을 추출하는 문법

  return (
    <div>
      hello {name} 입니다. <br />
      children 값은 {children} <br />
      number 값은 {number}dasd
    </div>
    // children은 태그사이의 내용을 보여줄 때
  );
};
MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

MyComponent.defaultProps = {
  name: '기본 이름',
};
export default MyComponent;

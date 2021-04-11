import React from 'react';
import Counter from './Counter';
import EventPractice from './EventPractice';
import EventPractice2 from './EventPractice2';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <>
      <>
        <MyComponent name='react' number={3}>
          리액트
        </MyComponent>
      </>
      <>
        <Counter />
      </>
      <>
        <EventPractice />
        <EventPractice2 />
      </>
    </>
  );
};

export default App;

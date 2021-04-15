import React, { useCallback, useReducer, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
// icon site = react-icons.netlify.com

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLe':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}
const App = () => {
  // 맨 처음 렌더링 될 때만 createBulkTodos 함수가 호출
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: 'react의 기초 알아보기',
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: '컴포넌트 스타일 해보기',
  //     checked: true,
  //   },
  //   {
  //     id: 3,
  //     text: '일정 관리 앱 만들어 보기',
  //     checked: false,
  //   },
  // ]);

  // 고유값으로 사용될 id
  // ref를 사용하여 변수 담기
  // useRef 사용한 이유 id값은 렌더링되는 정보가 아니기 대문
  const nextId = useRef(2501);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);
  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  });
  // const onToggle = useCallback((id) => {
  //   setTodos((todos) =>
  //     todos.map((todo) =>
  //       // id 값이 같을 때는 정해진 규칙대로 객체를 생성하지만 다를경우 그대로 반환
  //       todo.id === id ? { ...todo, checked: !todo.checked } : todo,
  //     ),
  //   );
  // });
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      {/* todolist에 props로 전달 */}
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};
export default App;

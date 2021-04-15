import React, { useCallback, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
// icon site = react-icons.netlify.com
const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'react의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  // 고유값으로 사용될 id
  // ref를 사용하여 변수 담기
  // useRef 사용한 이유 id값은 렌더링되는 정보가 아니기 대문
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        // id 값이 같을 때는 정해진 규칙대로 객체를 생성하지만 다를경우 그대로 반환
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  });
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      {/* todolist에 props로 전달 */}
    </TodoTemplate>
  );
};
export default App;

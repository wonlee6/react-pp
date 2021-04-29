import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect 에 첫번째 파라미터로 등록하는 함수에는 async 를 사용 할 수 없기 때문에
  // 함수 내부에서 async 를 사용하는 새로운 함수를 선언해주어야 합니다.

  const fetchUsers = async () => {
    try {
      // 요청이 시작되면 user와 error를 초기화
      setError(null);
      setUsers(null);
      // loading 상태를 true
      setLoading(true);
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      console.log(response.data);
      setUsers(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중</div>;
  if (error) return <div>error</div>;
  if (!users) return null;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username}({user.name})
          </li>
        ))}
      </ul>

      <button onClick={fetchUsers}>다시 불러오기</button>
    </>
  );
};

export default Users;

import { useState } from 'react'
import type { User } from './types'
import UserList from './UserList';
import UserForm from './UserForm';

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (name: string) => {
    const newUser = { id: Date.now(), name }
    setUsers([...users, newUser]);
};

  const deleteUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id));

  };

  return (
    <div>
      <h1>ユーザー一覧</h1>
      <UserForm onAddUser={addUser} />
      <UserList users={users} onDeleteUser={deleteUser} />
    </div>
  )
}

export default App;
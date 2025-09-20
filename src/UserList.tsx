import type { User } from "./types";

type Props = {
  users: User[];
  onDeleteUser: (id: number) => void;
};

function UserList({ users, onDeleteUser }: Props) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name}
          <button onClick={() => onDeleteUser(user.id)}>削除</button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
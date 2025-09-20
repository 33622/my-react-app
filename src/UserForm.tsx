import { useState } from "react";

type Props = {
  onAddUser: (name: string) => void;
};

function UserForm({ onAddUser}: Props) {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAddUser(name);
      setName("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="名前を入力"
      />
      <button type="submit">追加</button>
    </form>
  );
}

export default UserForm;
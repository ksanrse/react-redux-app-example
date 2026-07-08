import { useCallback, useEffect, useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import useInput from "../../hooks/useInput";

type User = {
  id: string;
  name: string;
};

export default function EffectSection() {
  const input = useInput();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  function openModal() {
    setIsModalOpen(true);
  }

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <section>
      <h3>Effect</h3>
      <Button onClick={openModal}>Открыть информацию</Button>

      <Modal open={isModalOpen}>
        <h3>Hello modal</h3>{" "}
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nam
          aliquam ut, architecto fugiat consequatur quidem explicabo quibusdam
          quis assumenda veniam harum magni, accusantium aut! Debitis libero
          praesentium officia est?
        </p>
        <Button onClick={() => setIsModalOpen(false)}>Закрыть модалку</Button>
      </Modal>

      {loading && <p>loading...</p>}

      {!loading && (
        <>
          <input type="text" {...input} />
          <ul>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(input.value.toLowerCase()),
              )
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
}

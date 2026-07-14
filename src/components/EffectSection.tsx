import { useCallback, useEffect, useMemo, useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import useInput from "../../hooks/useInput";
import type { User } from "../types";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../state/store";
import { addFriend, removeFriend } from "../state/friends/friendsSlice";
import classes from "./EffectSection.module.css";

export default function EffectSection() {
  const friends = useSelector((state: RootState) => state.friends.friends);
  const dispatch = useDispatch<AppDispatch>();
  const input = useInput();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const filteredUsers = useMemo(
    () =>
      users.filter((user) =>
        user.name.toLowerCase().includes(input.value.toLowerCase()),
      ),
    [users, input.value],
  );

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
      <h3>Новые друзья</h3>
      <Button onClick={openModal}>Открыть информацию</Button>

      <Modal open={isModalOpen}>
        <h3>Добавь друзей</h3>
        <p>Перед тобой список людей, которых ты можешь добавить в друзья.</p>
        <Button onClick={() => setIsModalOpen(false)}>Закрыть модалку</Button>
      </Modal>

      {loading && <p>loading...</p>}

      {!loading && (
        <>
          <input type="text" {...input} />
          <ul className={classes.users}>
            {filteredUsers.map((user) => {
              const isFriend = friends.some((friend) => friend.id === user.id);
              return (
                <li key={user.id} className={isFriend ? classes.friend : ""}>
                  {user.name}
                  {isFriend ? (
                    <Button
                      onClick={() => {
                        dispatch(removeFriend(user.id));
                      }}
                    >
                      Удалить из друзей
                    </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        dispatch(addFriend(user));
                      }}
                    >
                      Добавить в друзья
                    </Button>
                  )}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </section>
  );
}

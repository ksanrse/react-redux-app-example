import { useDispatch, useSelector } from "react-redux";
import { type RootState, type AppDispatch } from "../../state/store";
import { removeFriend } from "../../state/friends/friendsSlice";
import Button from "../Button/Button";
import classes from "./FriendsList.module.css";

export default function FriendsList() {
  const friends = useSelector((state: RootState) => state.friends.friends);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <section className={classes.friends}>
        <h3>Мои друзья</h3>
        {!friends.length ? (
          <p>Добавь друзей, потом проверь еще раз</p>
        ) : (
          <ul>
            {friends.map((friend) => (
              <li key={friend.id}>
                {friend.name}
                <Button onClick={() => dispatch(removeFriend(friend.id))}>
                  Удалить
                </Button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

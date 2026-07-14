import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Friend, FriendsState } from "../../types";

const initialState: FriendsState = {
  friends: [],
};

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    addFriend: (state, action: PayloadAction<Friend>) => {
      const exists = state.friends.some((fr) => fr.id === action.payload.id);
      if (!exists) {
        state.friends.push(action.payload);
      }
    },
    removeFriend: (state, action: PayloadAction<number>) => {
      state.friends = state.friends.filter((fr) => fr.id !== action.payload);
    },
  },
});

export const { addFriend, removeFriend } = friendsSlice.actions;

export default friendsSlice.reducer;

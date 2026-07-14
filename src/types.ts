export type Tab = "main" | "feedback" | "effect" | "friends";

export interface User {
  id: number;
  name: string;
}
export type Friend = User;

export interface FriendsState {
  friends: Friend[];
}

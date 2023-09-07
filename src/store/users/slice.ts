import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;

export interface User {
  name: string;
  email: string;
  github: string;
}

export interface UserWithId extends User {
  id: UserId;
}
const DEFAULT_STATE = [
  {
    name: "Miguel David",
    id: "1",
    email: "peterDoe@mail.com",
    github: "midudev",
  },
  {
    name: "Lena Whitehouse",
    id: "2",
    email: "lenaWhitehouse@mail.com",
    github: "lenaWhitehouse",
  },
  {
    name: "Phil Less",
    id: "3",
    email: "philLess@mail.com",
    github: "philLess",
  },
  {
    name: "John Camper",
    id: "4",
    email: "johnCamper@mail.com",
    github: "johnCamper",
  },
  {
    name: "Max Balmoore",
    id: "5",
    email: "maxBalmoore@mail.com",
    github: "maxBalmoore",
  },
  {
    name: "Peter Moore",
    id: "6",
    email: "peterMoore@mail.com",
    github: "peterMoore",
  },
  {
    name: "Joe Sachs",
    id: "7",
    email: "joeSachs@mail.com",
    github: "joeSachs",
  },
];
const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem("__redux_state__");
  return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})();

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID();
      return [...state, { id, ...action.payload }];
    },
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id);
    },
  },
});

export default usersSlice.reducer;
export const { deleteUserById, addNewUser } = usersSlice.actions;

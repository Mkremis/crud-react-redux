import { configureStore, type Middleware } from "@reduxjs/toolkit";
import userReducer from "./users/slice";

const persistLocalStorage: Middleware = (store) => (next) => (action) => {
  console.log(action);
  next(action);
  localStorage.setItem("__redux_state__", JSON.stringify(store.getState()));
};

const syncWithDataBase: Middleware = (store) => (next) => (action) => {};

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
  middleware: [persistLocalStorage],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

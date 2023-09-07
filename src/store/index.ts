import { configureStore, type Middleware } from "@reduxjs/toolkit";
import userReducer from "./users/slice";

const persistLocalStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    console.log(action);
    next(action);
    localStorage.setItem("__redux_state__", JSON.stringify(store.getState()));
  };

const syncWithDataBaseMiddleware: Middleware =
  (store) => (next) => (action) => {
    // fase 1
    const { type, payload } = action;
    console.log(
      "fase 1:",
      "type",
      type,
      "payload",
      payload,
      "state",
      store.getState()
    );
    next(action);
    // fase 2
    console.log(
      "fase 2:",
      "type",
      type,
      "payload",
      payload,
      "state",
      store.getState()
    );
  };

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
  middleware: [persistLocalStorageMiddleware, syncWithDataBaseMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

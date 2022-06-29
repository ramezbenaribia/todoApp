import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./taskSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
// import storageSession from "reduxjs-toolkit-persist/lib/storage/session";

const persistConfig = {
  key: "root",
  storage,
};
// const persistConfig = {
//   key: "root",
//   storageSession,
// };
const persistedReducer = persistReducer(persistConfig, tasksReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
